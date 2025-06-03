import fs from 'fs-extra';
import path from 'path';
import type { LearningModule, Section } from '../src/types/learning';
import type { SearchIndexItem } from '../src/types';

// Dynamic import of modules
const { bitcoinModules, lightningModules, liquidModules } = await import('../src/config/learning-modules');

type ContentType = 'page' | 'content' | 'section-content';
type LearningPath = 'bitcoin' | 'lightning' | 'liquid';



interface ContentFile {
  path: string;
  type: ContentType;
  content: string;
}

// Constants for file paths and snippet length
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'search-index.json');
const SNIPPET_LENGTH = 200; // Maximum length of content snippets in search results

async function findContentFiles(basePath: string, moduleId: string, sectionId: string): Promise<ContentFile[]> {
  const contentFiles: ContentFile[] = [];
  


  // For learning modules, use the full path with sectionId
  const sectionPath = path.join(basePath, moduleId, sectionId);
  try {
    if (!fs.existsSync(sectionPath)) {
      return [];
    }

    const files = await fs.readdir(sectionPath);
    for (const file of files) {
      if (file.endsWith('.tsx') || file.endsWith('.mdx')) {
        const filePath = path.join(sectionPath, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const type = getContentType(file);
        contentFiles.push({ path: filePath, type, content });
      }
    }
  } catch (error) {
    console.warn(`Error reading directory ${sectionPath}:`, error);
  }

  return contentFiles;
}

function getContentType(filename: string): ContentType {
  if (filename.includes('section-content')) return 'section-content';
  if (filename.includes('content')) return 'content';
  return 'page';
}

function extractContent(content: string, type: ContentType): string {
  // For tool pages, extract educational content
  if (content.includes('educationalContent')) {
    const match = content.match(/const\s+educationalContent\s*=\s*(\[\s*{[\s\S]*?}\s*\])/m);
    if (match) {
      try {
        // Convert the matched array string to a safe format for eval
        const safeArrayString = match[1]
          .replace(/([{,])\s*([a-zA-Z0-9_]+)\s*:/g, '$1"$2":') // Add quotes to property names
          .replace(/'/g, '"'); // Replace single quotes with double quotes
        
        // Parse the educational content array
        const educationalContent = JSON.parse(safeArrayString);
        
        // Combine all content into a single string
        const extracted = educationalContent
          .map((item: any) => `${item.title}\n${item.content}`)
          .join('\n\n');
        
        if (extracted) return extracted;
      } catch (e) {
        console.warn('Failed to parse educational content:', e);
      }
    }
  }

  // For regular content
  const contentMatches = {
    'page': content.match(/<ModuleContent[^>]*>([\s\S]*?)<\/ModuleContent>/i),
    'content': content.match(/<ContentSection[^>]*>([\s\S]*?)<\/ContentSection>/i),
    'section-content': content.match(/<SectionContent[^>]*>([\s\S]*?)<\/SectionContent>/i)
  };

  let extractedContent = contentMatches[type]?.[1] || content;

  // Clean up the content
  return extractedContent
    .replace(/\{[^}]*\}/g, '') // Remove JSX expressions
    .replace(/<[^>]+>/g, ' ') // Remove HTML/JSX tags
    .replace(/&[^;]+;/g, ' ') // Remove HTML entities
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

async function generateSearchIndex() {
  console.log('Starting search index generation...');
  const searchIndex: SearchIndexItem[] = [];

  const modulesByPath: Partial<Record<LearningPath, LearningModule[]>> = {
    bitcoin: bitcoinModules,
    lightning: lightningModules,
    liquid: liquidModules
  };



  const processSection = async (module: LearningModule, section: Section, pathName: LearningPath, moduleOrder: number, sectionOrder: number) => {
    // Tools are at /verify instead of /learn
    const basePath = path.join(
      process.cwd(),
      'src',
      'app',
      'learn',
      pathName
    );
    const contentFiles = await findContentFiles(basePath, module.id, section.id);

    if (contentFiles.length === 0) {
      console.warn(`No content files found for ${pathName}/${module.id}/${section.id}`);
      return;
    }

    let fullText = '';
    try {
      fullText = contentFiles
        .map(file => extractContent(file.content, file.type))
        .filter(Boolean)
        .join('\n\n');
    } catch (error) {
      console.warn(`Error extracting content from files:`, error);
    }

    const title = section.title;
    const description = section.description || module.description;
    const itemPath = `/learn/${pathName}/${module.id}/${section.id}`;

    if (!fullText && !description) {
      console.warn(`No content or description found for ${itemPath}`);
      return;
    }

    const snippetText = description || fullText;
    const snippet = snippetText.substring(0, SNIPPET_LENGTH).trim() + 
      (snippetText.length > SNIPPET_LENGTH ? '...' : '');

    searchIndex.push({
      id: `${pathName}-${module.id}-${section.id}`,
      topic: pathName,
      moduleId: module.id,
      sectionId: section.id,
      title,
      description: description || '',
      path: itemPath,
      fullText: fullText.trim() || '',
      snippet,
      moduleOrder,
      sectionOrder,
    });
  };

  try {
    for (const [pathName, modules] of Object.entries(modulesByPath)) {
      console.log(`Processing ${pathName} modules...`);
      for (let moduleIndex = 0; moduleIndex < modules.length; moduleIndex++) {
        const module = modules[moduleIndex];
        const moduleOrder = moduleIndex + 1;

        for (let sectionIndex = 0; sectionIndex < module.sections.length; sectionIndex++) {
          const section = module.sections[sectionIndex];
          const sectionOrder = sectionIndex + 1;

          await processSection(module, section, pathName as LearningPath, moduleOrder, sectionOrder)
            .catch(error => {
              console.error(
                `Error processing section ${pathName}/${module.id}/${section.id}:`,
                error
              );
            });
        }
      }
    }

    // Sort by topic, then moduleOrder, then sectionOrder
    searchIndex.sort((a, b) => {
      if (a.topic !== b.topic) return a.topic.localeCompare(b.topic);
      if (a.moduleOrder !== b.moduleOrder) return a.moduleOrder - b.moduleOrder;
      return a.sectionOrder - b.sectionOrder;
    });

    await fs.ensureDir(path.dirname(OUTPUT_PATH));
    await fs.writeJson(OUTPUT_PATH, searchIndex, { spaces: 2 });
    
    console.log(`Search index generated with ${searchIndex.length} items:`);
    console.log(`- Bitcoin: ${searchIndex.filter(i => i.topic === 'bitcoin').length} items`);
    console.log(`- Lightning: ${searchIndex.filter(i => i.topic === 'lightning').length} items`);
    console.log(`- Liquid: ${searchIndex.filter(i => i.topic === 'liquid').length} items`);

    if (searchIndex.length === 0) {
      console.warn('Search index is empty. Please check content paths and extraction logic.');
    }
  } catch (error) {
    console.error('Fatal error generating search index:', error);
    await fs.ensureDir(path.dirname(OUTPUT_PATH));
    await fs.writeJson(OUTPUT_PATH, [], { spaces: 2 });
    process.exit(1);
  }
}

generateSearchIndex().catch(error => {
  // This catch is mostly for unhandled promise rejections from generateSearchIndex itself
  console.error("Unhandled error during search index generation execution:", error);
  process.exit(1);
});

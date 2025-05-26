import fs from 'fs-extra';
import path from 'path';
// import { remark } from 'remark'; // Keep for potential future use with better JSX stripping
// import stripMarkdown from 'strip-markdown'; // Keep for potential future use
import { bitcoinModules, lightningModules } from '../src/config/learning-modules';
import type { LearningModule } from '../src/types/learning'; // Assuming Section type is part of LearningModule or defined in types
import type { SearchIndexItem } from '../src/types'; // Assuming SearchIndexItem is defined in types

const OUTPUT_PATH = path.join(process.cwd(), 'public', 'search-index.json');
const SNIPPET_LENGTH = 200;

// Regex to find content specifically within <ModuleContent ...> ... </ModuleContent>
// It captures the content between the opening and closing tags.
const moduleContentRegex = /<ModuleContent[^>]*>([\s\S]*?)<\/ModuleContent>/i;

// Regex to strip HTML/JSX tags. This is a basic approach.
const stripTagsRegex = /<[^>]+>/g;
// Regex to find common JSX expressions like {variable}, {function()}, etc.
const jsxExpressionRegex = /\{[^}]*\}/g;

function extractTextFromJsx(pageContent: string): string {
  let relevantContent = pageContent;

  // Try to isolate content within <ModuleContent> first
  const moduleContentMatch = pageContent.match(moduleContentRegex);
  if (moduleContentMatch && moduleContentMatch[1]) {
    relevantContent = moduleContentMatch[1];
  }

  // Remove JSX expressions like {variableName} or {props.value}
  relevantContent = relevantContent.replace(jsxExpressionRegex, '');
  
  // Strip HTML/JSX tags
  relevantContent = relevantContent.replace(stripTagsRegex, ' ');
  
  // Clean up whitespace, newlines, and decode HTML entities (basic)
  relevantContent = relevantContent
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    // Add more entities as needed
    .replace(/\s*\n\s*/g, '\n') // Normalize newlines
    .replace(/(\n)+/g, ' ')      // Replace multiple newlines with a single space
    .replace(/\s\s+/g, ' ')       // Replace multiple spaces with a single space
    .trim();

  return relevantContent;
}

async function generateSearchIndex() {
  console.log('Starting search index generation using learning-modules.ts...');
  const searchIndex: SearchIndexItem[] = [];

  const processModules = async (modules: LearningModule[], topic: 'bitcoin' | 'lightning') => {
    for (let moduleIndex = 0; moduleIndex < modules.length; moduleIndex++) {
      const module = modules[moduleIndex];
      const moduleOrder = moduleIndex + 1; // Order within the topic

      for (let sectionIndex = 0; sectionIndex < module.sections.length; sectionIndex++) {
        const section = module.sections[sectionIndex];
        const sectionOrder = sectionIndex + 1; // Order within the module

        const itemPath = `/learn/${topic}/${module.id}/${section.id}`;
        const pageFilePath = path.join(
          process.cwd(),
          'src',
          'app',
          itemPath,
          'page.tsx',
        );

        try {
          if (!fs.existsSync(pageFilePath)) {
            console.warn(`Skipping ${itemPath}: page.tsx not found at ${pageFilePath}`);
            continue;
          }

          const pageFileContent = await fs.readFile(pageFilePath, 'utf-8');
          
          const title = section.title;
          // Use section description if available, otherwise module description as fallback
          const description = section.description || module.description;

          const fullText = extractTextFromJsx(pageFileContent);
          
          if (!fullText && !description) {
            // Only warn if both fullText and description are empty, as description might be enough
            console.warn(`Skipping ${itemPath}: No text content or description extracted from ${pageFilePath}`);
            // continue; // Decide if we want to index pages with no extractable text or description
          }

          const snippetText = description || fullText; // Prefer description for snippet
          const snippet = snippetText.substring(0, SNIPPET_LENGTH).trim() + (snippetText.length > SNIPPET_LENGTH ? '...' : '');

          const searchItem: SearchIndexItem = {
            id: `${topic}-${module.id}-${section.id}`,
            topic,
            moduleId: module.id,
            sectionId: section.id,
            title,
            description: description || '', // Ensure description is always a string
            path: itemPath,
            fullText: fullText || '', // Ensure fullText is always a string
            snippet,
            moduleOrder,
            sectionOrder,
          };
          searchIndex.push(searchItem);
        } catch (e: any) {
          console.error(`Error processing ${itemPath} (file: ${pageFilePath}): ${e.message}`, e.stack);
        }
      }
    }
  };

  try {
    await processModules(bitcoinModules, 'bitcoin');
    await processModules(lightningModules, 'lightning');

    // Sort by topic, then moduleOrder, then sectionOrder for consistency
    searchIndex.sort((a, b) => {
      if (a.topic !== b.topic) return a.topic.localeCompare(b.topic);
      if (a.moduleOrder !== b.moduleOrder) return a.moduleOrder - b.moduleOrder;
      return a.sectionOrder - b.sectionOrder;
    });

    await fs.ensureDir(path.dirname(OUTPUT_PATH)); // Ensure public directory exists
    await fs.writeJson(OUTPUT_PATH, searchIndex, { spaces: 2 });
    console.log(`Search index generated successfully at ${OUTPUT_PATH} with ${searchIndex.length} items.`);
    if (searchIndex.length === 0) {
      console.warn(
        'The search index is empty. Check content paths, learning-modules.ts, and extraction logic if this is unexpected.',
      );
    }
  } catch (error: any) {
    console.error('Fatal error generating search index:', error.message, error.stack);
    await fs.ensureDir(path.dirname(OUTPUT_PATH));
    await fs.writeJson(OUTPUT_PATH, [], { spaces: 2 }); // Create an empty index on fatal error
    console.log(`Created an empty search index at ${OUTPUT_PATH} due to fatal error.`);
  }
}

generateSearchIndex().catch(error => {
  // This catch is mostly for unhandled promise rejections from generateSearchIndex itself
  console.error("Unhandled error during search index generation execution:", error);
  process.exit(1);
});

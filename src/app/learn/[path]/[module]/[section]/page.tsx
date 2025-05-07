import { bitcoinModules, lightningModules } from '@/config/learning-modules';
import SectionContent from './section-content';

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  // Generate all combinations of path, module, and section
  const params = [];
  
  // Add Bitcoin module sections
  for (const module of bitcoinModules) {
    for (const section of module.sections) {
      params.push({ 
        path: 'bitcoin', 
        module: module.id,
        section: section.id 
      });
    }
  }
  
  // Add Lightning module sections
  for (const module of lightningModules) {
    for (const section of module.sections) {
      params.push({ 
        path: 'lightning', 
        module: module.id,
        section: section.id 
      });
    }
  }
  
  return params;
}

export default function SectionPage({ params }: { params: { path: string, module: string, section: string } }) {
  // Server component that renders the client component
  // This approach allows us to use generateStaticParams at build time
  // while still using client-side functionality in the UI
  return <SectionContent />;
}

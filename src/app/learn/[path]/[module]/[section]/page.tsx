import { bitcoinModules, lightningModules } from '@/config/learning-modules';
import SectionContent from './section-content';
import ContentRedirect from './content-redirect';

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  const params = [];
  
  // Add Bitcoin module sections
  for (const module of bitcoinModules) {
    const moduleId = module.id.replace('bitcoin-', '');
    for (const section of module.sections) {
      params.push({ 
        path: 'bitcoin', 
        module: moduleId,
        section: section.id 
      });
    }
  }
  
  // Add Lightning module sections
  for (const module of lightningModules) {
    const moduleId = module.id.replace('lightning-', '');
    for (const section of module.sections) {
      params.push({ 
        path: 'lightning', 
        module: moduleId,
        section: section.id 
      });
    }
  }
  
  return params;
}

// Main page component - server component that renders the client components
export default function SectionPage({ params }: { params: { path: string, module: string, section: string } }) {
  return (
    <>
      <ContentRedirect params={params} />
      <SectionContent />
    </>
  );
}

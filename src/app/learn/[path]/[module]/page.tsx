import { bitcoinModules, lightningModules } from '@/config/learning-modules';
import ModuleContent from './module-content';

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  // Generate all combinations of path and module
  const params = [];
  
  // Add Bitcoin modules
  for (const module of bitcoinModules) {
    // Handle both prefixed and unprefixed module IDs
    const moduleId = module.id.replace('bitcoin-', '');
    params.push({ path: 'bitcoin', module: moduleId });
  }
  
  // Add Lightning modules
  for (const module of lightningModules) {
    // Handle both prefixed and unprefixed module IDs
    const moduleId = module.id.replace('lightning-', '');
    params.push({ path: 'lightning', module: moduleId });
  }
  
  return params;
}

export default function ModulePage({ params }: { params: { path: string, module: string } }) {
  // Server component that renders the client component
  // This approach allows us to use generateStaticParams at build time
  // while still using client-side functionality in the UI
  return <ModuleContent />;
}

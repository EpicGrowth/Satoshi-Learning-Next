import { bitcoinModules, lightningModules } from '@/config/learning-modules';
import ModuleContent from './module-content';

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  // Generate all combinations of path and module
  const params = [];
  
  // Add Bitcoin modules
  for (const module of bitcoinModules) {
    params.push({ path: 'bitcoin', module: module.id });
  }
  
  // Add Lightning modules
  for (const module of lightningModules) {
    params.push({ path: 'lightning', module: module.id });
  }
  
  return params;
}

export default function ModulePage({ params }: { params: { path: string, module: string } }) {
  // Server component that renders the client component
  // This approach allows us to use generateStaticParams at build time
  // while still using client-side functionality in the UI
  return <ModuleContent />;
}

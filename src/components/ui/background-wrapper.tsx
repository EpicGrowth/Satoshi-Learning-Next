import { StaticBackground } from './static-background';
import { ClientBackground } from './client-background';

export function BackgroundWrapper() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <StaticBackground />
      <ClientBackground />
    </div>
  );
}
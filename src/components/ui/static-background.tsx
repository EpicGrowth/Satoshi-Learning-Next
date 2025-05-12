// Static background component that doesn't require client-side code
export function StaticBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background overflow-hidden">
      {/* Basic grid for better educational content backdrop */}
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)]"></div>
      
      {/* Main branded glow */}
      <div className="absolute top-0 left-[10%] w-[800px] h-[600px] rounded-full bg-primary-light/5 blur-[120px] opacity-70"></div>
      
      {/* Secondary glow for contrast */}
      <div className="absolute bottom-[-5%] right-[5%] w-[600px] h-[600px] rounded-full bg-primary-dark/4 blur-[100px] opacity-60"></div>
      
      {/* Tertiary glow for depth */}
      <div className="absolute top-[30%] right-[25%] w-[400px] h-[400px] rounded-full bg-primary-light/3 blur-[80px] opacity-50"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-[15%] left-[45%] w-32 h-32 rounded-full bg-primary-light/5 blur-xl animate-float"></div>
      <div className="absolute bottom-[25%] right-[30%] w-40 h-40 rounded-full bg-primary-dark/4 blur-xl animate-float"></div>
      
      {/* Subtle hexagon pattern overlay - Bitcoin themed */}
      <div className="absolute inset-0 bg-[url('/images/hex-pattern.svg')] bg-[length:300px_300px] opacity-[0.03]"></div>
    </div>
  );
}
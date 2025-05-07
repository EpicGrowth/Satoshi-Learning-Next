import React from 'react';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#f0f0f080_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f080_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      
      {/* Bitcoin-themed elements */}
      <div className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full bg-bitcoin-orange/5 blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[5%] w-96 h-96 rounded-full bg-bitcoin-orange/3 blur-3xl"></div>
      
      {/* Animated elements */}
      <div className="absolute top-[40%] left-[30%] w-24 h-24 rounded-full bg-bitcoin-yellow/5 blur-2xl animate-float"></div>
      <div className="absolute bottom-[30%] right-[20%] w-32 h-32 rounded-full bg-bitcoin-orange/4 blur-2xl animate-float" style={{ animationDelay: '-3s' }}></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
    </div>
  );
}

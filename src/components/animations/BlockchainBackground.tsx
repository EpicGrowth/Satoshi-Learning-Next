'use client';

import React, { useEffect, useRef } from 'react';

interface BlockchainBackgroundProps {
  fullHeight?: boolean;
  density?: 'low' | 'medium' | 'high';
  animated?: boolean;
  opacity?: number;
}

export function BlockchainBackground({ 
  fullHeight = false, 
  density = 'medium',
  animated = true,
  opacity = 1
}: BlockchainBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !animated) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to fill container
    const resizeCanvas = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes (representing blockchain blocks)
    const nodeDensityMap = {
      low: 30,
      medium: 50,
      high: 80
    };

    const nodeCount = nodeDensityMap[density];
    
    const nodes: { x: number; y: number; size: number; speed: number; connections: number[] }[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        connections: []
      });
    }

    // Connect nodes that are close to each other
    const calculateConnections = () => {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].connections = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i !== j) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) { // Connection threshold
              nodes[i].connections.push(j);
            }
          }
        }
      }
    };

    calculateConnections();

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = `rgba(228, 76, 65, ${opacity * 0.1})`; // Using e44c41 color from original site
      
      for (let i = 0; i < nodes.length; i++) {
        for (const j of nodes[i].connections) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
      
      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(228, 76, 65, ${opacity * 0.3})`; // Using e44c41 color from original site
        ctx.fill();
        
        // Move nodes
        nodes[i].x += Math.sin(Date.now() * 0.001 + i) * nodes[i].speed;
        nodes[i].y += Math.cos(Date.now() * 0.001 + i) * nodes[i].speed;
        
        // Wrap around edges
        if (nodes[i].x < 0) nodes[i].x = canvas.width;
        if (nodes[i].x > canvas.width) nodes[i].x = 0;
        if (nodes[i].y < 0) nodes[i].y = canvas.height;
        if (nodes[i].y > canvas.height) nodes[i].y = 0;
      }
      
      // Recalculate connections periodically
      if (Math.random() < 0.05) {
        calculateConnections();
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [animated, density, opacity]);

  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 -z-10 ${fullHeight ? 'h-full' : 'h-screen'} w-full overflow-hidden`}
    >
      {/* Hex grid pattern from original site */}
      <div className="absolute inset-0 hex-grid"></div>
      
      {/* Floating orbs */}
      <div className="floating-element w-24 h-24 top-[30%] right-[20%] rounded-full bg-primary/40 blur-xl animate-float-bg"></div>
      <div className="floating-element w-32 h-32 bottom-[20%] left-[15%] rounded-full bg-primary/20 blur-xl animate-float-bg" style={{ animationDelay: '-5s' }}></div>
      <div className="floating-element w-16 h-16 top-[60%] left-[30%] rounded-full bg-primary/30 blur-xl animate-float-bg" style={{ animationDelay: '-10s' }}></div>
      
      {/* Canvas for animated connections */}
      {animated && (
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full opacity-20"
        />
      )}
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px]"></div>
    </div>
  );
}

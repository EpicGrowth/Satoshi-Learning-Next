'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

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
  opacity = 0.8  // Reduced default opacity for better theme integration
}: BlockchainBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Wait for component to be mounted to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !animated || !mounted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Determine current theme
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDarkMode = currentTheme === 'dark';

    // Set transparency levels
    const orbOpacity = isDarkMode ? 0.5 : 0.4; // More visible in both modes
    const lineOpacity = isDarkMode ? 0.2 : 0.15; // More visible in both modes

    // Theme-aware colors using the official Bitcoin orange
    // Using the bright Bitcoin orange with white as secondary color
    const primaryColor = { r: 247, g: 147, b: 26 };  // Official Bitcoin orange (F7931A) for both modes
    
    const secondaryColor = { r: 255, g: 255, b: 255 };  // Pure white for both modes

    // Resize canvas to fill container
    const resizeCanvas = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        const dpr = window.devicePixelRatio || 1;
        
        // Set display size
        canvas.style.width = `${offsetWidth}px`;
        canvas.style.height = `${offsetHeight}px`;
        
        // Set actual size in memory (scaled for DPR)
        canvas.width = offsetWidth * dpr;
        canvas.height = offsetHeight * dpr;
        
        // Scale context to match DPR
        ctx.scale(dpr, dpr);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes (representing blockchain blocks)
    const nodeDensityMap = {
      low: 20,      // Reduced slightly
      medium: 35,   // Reduced slightly
      high: 60      // Reduced slightly
    };

    const nodeCount = nodeDensityMap[density];
    
    const nodes: { 
      x: number; 
      y: number; 
      size: number; 
      speed: number; 
      connections: number[];
      color: 'primary' | 'secondary';  // Node can be primary or secondary color
    }[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 1,  // Slightly smaller nodes
        speed: Math.random() * 0.3 + 0.05,  // Slower movement for more elegance
        connections: [],
        color: Math.random() > 0.4 ? 'primary' : 'secondary'  // Mix of colors, 60% primary
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
            
            // Adjust connection threshold based on screen size
            const threshold = Math.min(
              180, 
              Math.max(100, (canvas.width + canvas.height) / 20)
            );
            
            if (distance < threshold) {
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
      for (let i = 0; i < nodes.length; i++) {
        for (const j of nodes[i].connections) {
          // Gradient connections between different colored nodes
          const nodeColor = nodes[i].color === 'primary' ? primaryColor : secondaryColor;
          const connectedNodeColor = nodes[j].color === 'primary' ? primaryColor : secondaryColor;
          
          // Calculate distance for opacity
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 180;
          const connectionOpacity = (1 - distance / maxDistance) * 0.15 * opacity;
          
          // Create gradient for connection
          const gradient = ctx.createLinearGradient(
            nodes[i].x, nodes[i].y, 
            nodes[j].x, nodes[j].y
          );
          
          gradient.addColorStop(0, `rgba(${nodeColor.r}, ${nodeColor.g}, ${nodeColor.b}, ${connectionOpacity})`);
          gradient.addColorStop(1, `rgba(${connectedNodeColor.r}, ${connectedNodeColor.g}, ${connectedNodeColor.b}, ${connectionOpacity})`);
          
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.3;
          ctx.stroke();
        }
      }
      
      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const nodeColor = nodes[i].color === 'primary' ? primaryColor : secondaryColor;
        
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].size, 0, Math.PI * 2);
        
        // Add a subtle glow effect using shadows
        ctx.shadowColor = `rgba(${nodeColor.r}, ${nodeColor.g}, ${nodeColor.b}, ${0.4 * opacity})`;
        ctx.shadowBlur = 6;
        
        ctx.fillStyle = `rgba(${nodeColor.r}, ${nodeColor.g}, ${nodeColor.b}, ${0.4 * opacity})`;
        ctx.fill();
        
        // Reset shadow for performance
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        
        // Move nodes with gentle floating effect
        const time = Date.now() * 0.0005;
        nodes[i].x += Math.sin(time + i * 0.5) * nodes[i].speed;
        nodes[i].y += Math.cos(time + i * 0.5) * nodes[i].speed;
        
        // Wrap around edges with a buffer
        const buffer = 50;
        if (nodes[i].x < -buffer) nodes[i].x = canvas.width + buffer;
        if (nodes[i].x > canvas.width + buffer) nodes[i].x = -buffer;
        if (nodes[i].y < -buffer) nodes[i].y = canvas.height + buffer;
        if (nodes[i].y > canvas.height + buffer) nodes[i].y = -buffer;
      }
      
      // Recalculate connections periodically
      if (Math.random() < 0.01) { // Less frequent recalculation
        calculateConnections();
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [animated, density, opacity, theme, systemTheme, mounted]);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) return null;

  // Get current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = currentTheme === 'dark';

  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 -z-10 ${fullHeight ? 'h-full' : 'h-screen'} w-full overflow-hidden`}
    >
      {/* Subtle grid pattern */}
      <div className={`absolute inset-0 ${isDarkMode ? 'opacity-15' : 'opacity-10'}`} 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${isDarkMode ? 'F7931A' : 'E87D18'}' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Floating gradient orbs - using our Bitcoin orange */}
      <div className="floating-element w-56 h-56 top-[25%] right-[15%] rounded-full bg-bitcoin-orange/20 blur-3xl animate-float-slow"></div>
      
      <div className="floating-element w-72 h-72 bottom-[15%] left-[10%] rounded-full bg-bitcoin-orange/15 blur-3xl animate-float-slow" 
        style={{ animationDelay: '-5s' }}></div>
      
      <div className="floating-element w-48 h-48 top-[60%] left-[25%] rounded-full bg-bitcoin-orange/25 blur-3xl animate-float-slow" 
        style={{ animationDelay: '-10s' }}></div>
      
      {/* Canvas for animated connections - increased opacity */}
      {animated && (
        <canvas 
          ref={canvasRef} 
          className={`absolute inset-0 w-full h-full ${isDarkMode ? 'opacity-90' : 'opacity-80'}`}
        />
      )}
      
      {/* Very subtle overlay for improved contrast with content */}
      <div className={`absolute inset-0 ${
        isDarkMode ? 'bg-background/5' : 'bg-background/0'
      } backdrop-blur-[0.5px]`}></div>
    </div>
  );
}

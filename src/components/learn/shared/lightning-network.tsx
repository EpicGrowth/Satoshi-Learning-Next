'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Zap } from 'lucide-react';

interface Node {
  id: string;
  x: number;
  y: number;
  connections: string[];
}

interface Channel {
  source: string;
  target: string;
  active: boolean;
}

export function LightningNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [channels, setChannels] = useState<Channel[]>([]);
  const animationRef = useRef<number>(0);

  // Generate a simple Lightning Network topology
  useEffect(() => {
    // Create nodes
    const newNodes: Node[] = [
      { id: 'node1', x: 50, y: 100, connections: ['node2', 'node3'] },
      { id: 'node2', x: 200, y: 50, connections: ['node1', 'node4'] },
      { id: 'node3', x: 200, y: 150, connections: ['node1', 'node4', 'node5'] },
      { id: 'node4', x: 350, y: 100, connections: ['node2', 'node3', 'node6'] },
      { id: 'node5', x: 350, y: 200, connections: ['node3', 'node6'] },
      { id: 'node6', x: 500, y: 150, connections: ['node4', 'node5'] },
    ];

    // Create channels
    const newChannels: Channel[] = [];
    newNodes.forEach(node => {
      node.connections.forEach(target => {
        // Only add channel if source id is less than target id to avoid duplicates
        if (node.id < target) {
          newChannels.push({
            source: node.id,
            target,
            active: false
          });
        }
      });
    });

    setNodes(newNodes);
    setChannels(newChannels);
  }, []);

  // Draw the network
  useEffect(() => {
    if (canvasRef.current && nodes.length > 0) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections (channels)
        channels.forEach(channel => {
          const source = nodes.find(n => n.id === channel.source);
          const target = nodes.find(n => n.id === channel.target);
          
          if (source && target) {
            ctx.beginPath();
            ctx.moveTo(source.x, source.y);
            ctx.lineTo(target.x, target.y);
            
            if (channel.active) {
              ctx.strokeStyle = '#E74C3C'; // Red active channel
              ctx.lineWidth = 3;
            } else {
              ctx.strokeStyle = '#2C3E50'; // Dark inactive channel
              ctx.lineWidth = 1;
            }
            
            ctx.stroke();
          }
        });
        
        // Draw nodes
        nodes.forEach(node => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 10, 0, Math.PI * 2);
          ctx.fillStyle = '#8E44AD'; // Purple nodes
          ctx.fill();
          
          ctx.font = '12px Arial';
          ctx.fillStyle = '#FFF';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.id.replace('node', ''), node.x, node.y);
        });
      }
    }
  }, [nodes, channels]);

  // Simulate a payment route
  const simulatePayment = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Reset channels
    setChannels(channels.map(c => ({ ...c, active: false })));
    
    // Define a payment path (node1 to node6)
    const path = ['node1', 'node3', 'node5', 'node6'];
    
    let step = 0;
    
    const animate = () => {
      if (step < path.length - 1) {
        // Activate the next channel in the path
        const sourceId = path[step];
        const targetId = path[step + 1];
        
        setChannels(prev => 
          prev.map(c => 
            (c.source === sourceId && c.target === targetId) || 
            (c.source === targetId && c.target === sourceId)
              ? { ...c, active: true }
              : c
          )
        );
        
        step++;
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Animation completed
        setTimeout(() => {
          setChannels(channels.map(c => ({ ...c, active: false })));
          setIsAnimating(false);
        }, 1000);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <canvas 
        ref={canvasRef} 
        width={550} 
        height={250}
        className="w-full h-auto bg-gray-900 rounded-md"
      />
      <button
        onClick={simulatePayment}
        disabled={isAnimating}
        className="absolute top-4 right-4 bg-lightning-purple hover:bg-lightning-purple/90 text-white px-4 py-2 rounded-md flex items-center disabled:opacity-50"
      >
        <Zap className="mr-2 h-4 w-4" />
        {isAnimating ? 'Sending...' : 'Send Payment'}
      </button>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Bitcoin, 
  Zap, 
  BookOpen, 
  TrendingUp, 
  Cpu, 
  Server, 
  Network, 
  Shield, 
  ArrowRight,
  Link as LinkIcon,
  Lightbulb,
  Droplet 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { bitcoinModules, lightningModules, liquidModules } from '@/config/learning-modules';

export default function LearnPage() {
  return (
    <div className="container py-10">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">
          <BookOpen className="mr-1 h-3 w-3" />
          Educational Content
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Learning Paths</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose your learning path and start your journey into Bitcoin and Lightning Network technology.
        </p>
      </div>

      {/* Bitcoin Learning Path */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-lg bg-bitcoin-orange/10">
            <Bitcoin className="h-7 w-7 text-bitcoin-orange" />
          </div>
          <h2 className="text-2xl font-bold">Bitcoin Learning Path</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bitcoinModules.map((module) => (
            <Card key={module.id} className="p-6 hover:shadow-lg transition-shadow flex flex-col h-full border-border/70">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-bitcoin-orange/10">
                  <module.icon className="h-5 w-5 text-bitcoin-orange" />
                </div>
                <h3 className="text-lg font-semibold">{module.title}</h3>
                <Badge 
                  variant="outline" 
                  className={`ml-auto ${
                    module.difficulty === 'Beginner' 
                      ? 'bg-emerald-500/10 text-emerald-500' 
                      : module.difficulty === 'Intermediate'
                        ? 'bg-amber-500/10 text-amber-500'
                        : 'bg-red-500/10 text-red-500'
                  }`}
                >
                  {module.difficulty}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-6">{module.description}</p>
              <div className="space-y-1 mt-auto">
                <h4 className="font-medium mb-2 text-sm">Topics covered:</h4>
                <ul className="space-y-1">
                  {module.sections.slice(0, 3).map((section) => (
                    <li key={section.id} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-bitcoin-orange/70 mr-2" />
                      {section.title}
                    </li>
                  ))}
                  {module.sections.length > 3 && (
                    <li className="text-xs text-muted-foreground italic mt-1">
                      +{module.sections.length - 3} more topics
                    </li>
                  )}
                </ul>
                <div className="mt-4 pt-3 border-t border-border/30">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-bitcoin-orange hover:text-bitcoin-orange/90 hover:bg-bitcoin-orange/10 flex items-center justify-center"
                    asChild
                  >
                    <Link href={`/learn/bitcoin/${module.id}`}>
                      Start Learning
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightning Learning Path */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-lg bg-purple-600/10">
            <Zap className="h-7 w-7 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold">Lightning Network Learning Path</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lightningModules.slice(0, 6).map((module) => (
            <Card key={module.id} className="p-6 hover:shadow-lg transition-shadow flex flex-col h-full border-border/70">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-purple-600/10">
                  <module.icon className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold">{module.title}</h3>
                <Badge 
                  variant="outline" 
                  className={`ml-auto ${
                    module.difficulty === 'Beginner' 
                      ? 'bg-emerald-500/10 text-emerald-500' 
                      : module.difficulty === 'Intermediate'
                        ? 'bg-amber-500/10 text-amber-500'
                        : 'bg-red-500/10 text-red-500'
                  }`}
                >
                  {module.difficulty}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-6">{module.description}</p>
              <div className="space-y-1 mt-auto">
                <h4 className="font-medium mb-2 text-sm">Topics covered:</h4>
                <ul className="space-y-1">
                  {module.sections.slice(0, 3).map((section) => (
                    <li key={section.id} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600/70 mr-2" />
                      {section.title}
                    </li>
                  ))}
                  {module.sections.length > 3 && (
                    <li className="text-xs text-muted-foreground italic mt-1">
                      +{module.sections.length - 3} more topics
                    </li>
                  )}
                </ul>
                <div className="mt-4 pt-3 border-t border-border/30">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-purple-600 hover:text-purple-600/90 hover:bg-purple-600/10 flex items-center justify-center"
                    asChild
                  >
                    <Link href={`/learn/lightning/${module.id}`}>
                      Start Learning
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Liquid Learning Path */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-lg bg-cyan-600/10">
            <Droplet className="h-7 w-7 text-cyan-600" />
          </div>
          <h2 className="text-2xl font-bold">Liquid Network Learning Path</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liquidModules.map((module) => (
            <Card key={module.id} className="p-6 hover:shadow-lg transition-shadow flex flex-col h-full border-border/70">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-cyan-600/10">
                  <module.icon className="h-5 w-5 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold">{module.title}</h3>
                <Badge 
                  variant="outline" 
                  className={`ml-auto ${
                    module.difficulty === 'Beginner' 
                      ? 'bg-emerald-500/10 text-emerald-500' 
                      : module.difficulty === 'Intermediate'
                        ? 'bg-amber-500/10 text-amber-500'
                        : 'bg-red-500/10 text-red-500'
                  }`}
                >
                  {module.difficulty}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-6">{module.description}</p>
              <div className="space-y-1 mt-auto">
                <h4 className="font-medium mb-2 text-sm">Topics covered:</h4>
                <ul className="space-y-1">
                  {module.sections.slice(0, 3).map((section) => (
                    <li key={section.id} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600/70 mr-2" />
                      {section.title}
                    </li>
                  ))}
                  {module.sections.length > 3 && (
                    <li className="text-xs text-muted-foreground italic mt-1">
                      +{module.sections.length - 3} more topics
                    </li>
                  )}
                </ul>
                <div className="mt-4 pt-3 border-t border-border/30">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-cyan-600 hover:text-cyan-600/90 hover:bg-cyan-600/10 flex items-center justify-center"
                    asChild
                  >
                    <Link href={`/learn/liquid/${module.id}`}>
                      Start Learning
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { bitcoinModules, lightningModules } from '@/config/learning-modules';
import Link from 'next/link';

export default function PathContent() {
  const params = useParams();
  const path = params.path as string;

  const modules = path === 'bitcoin' ? bitcoinModules : lightningModules;
  const pathTitle = path === 'bitcoin' ? 'Bitcoin' : 'Lightning Network';

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">{pathTitle} Learning Path</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Choose a module to begin your {pathTitle} learning journey
      </p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Link
            key={module.id}
            href={`/learn/${path}/${module.id}`}
            className="group rounded-lg border p-6 hover:border-primary transition-colors"
          >
            <div className="mb-4">
              <div className="h-8 w-8 text-primary">
                {React.createElement(module.icon)}
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
              {module.title}
            </h3>
            <p className="text-muted-foreground">{module.description}</p>
            <div className="mt-4">
              <span className={`px-3 py-1 rounded-full text-sm ${
                module.difficulty === 'Beginner' ? 'bg-emerald-500/20 text-emerald-500' :
                module.difficulty === 'Intermediate' ? 'bg-amber-500/20 text-amber-500' :
                'bg-red-500/20 text-red-500'
              }`}>
                {module.difficulty}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

'use client';

import { useParams } from 'next/navigation';
import { bitcoinModules, lightningModules } from '@/config/learning-modules';
import Link from 'next/link';

export default function ModuleContent() {
  const params = useParams();
  const path = params.path as string;
  const moduleId = params.module as string;

  const modules = path === 'bitcoin' ? bitcoinModules : lightningModules;
  const currentModule = modules.find((m) => m.id === moduleId);

  if (!currentModule) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-lg text-muted-foreground">Module not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">{currentModule.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{currentModule.description}</p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentModule.sections.map((section) => (
          <Link
            key={section.id}
            href={`/learn/${path}/${moduleId}/${section.id}`}
            className="group rounded-lg border p-6 hover:border-primary transition-colors"
          >
            <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
              {section.title}
            </h3>
            <p className="text-muted-foreground">{section.description}</p>
            <div className="mt-4">
              <span className={`px-3 py-1 rounded-full text-sm ${
                section.difficulty === 'Beginner' ? 'bg-emerald-500/20 text-emerald-500' :
                section.difficulty === 'Intermediate' ? 'bg-amber-500/20 text-amber-500' :
                'bg-red-500/20 text-red-500'
              }`}>
                {section.difficulty}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

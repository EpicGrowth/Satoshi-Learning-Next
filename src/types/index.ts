export interface SearchIndexItem {
  id: string;
  topic: 'bitcoin' | 'lightning' | 'liquid';
  moduleId: string;
  sectionId: string;
  title: string;
  description: string;
  path: string;
  fullText: string;
  snippet: string;
  moduleOrder: number;
  sectionOrder: number;
}

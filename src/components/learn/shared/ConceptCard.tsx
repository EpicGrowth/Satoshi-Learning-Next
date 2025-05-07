import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ConceptCardProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  children: React.ReactNode;
}

export function ConceptCard({ 
  title, 
  description, 
  difficulty, 
  tags, 
  children 
}: ConceptCardProps) {
  const difficultyColor = {
    Beginner: 'bg-green-500',
    Intermediate: 'bg-yellow-500',
    Advanced: 'bg-red-500'
  }[difficulty];

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <Badge variant="secondary" className={difficultyColor}>
            {difficulty}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map(tag => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = 'javascript',
  filename,
  showLineNumbers = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg overflow-hidden my-4", className)}>
      {filename && (
        <div className="bg-code-bg text-code-text/70 text-xs font-mono px-4 py-2 flex items-center justify-between border-b border-white/10">
          <span>{filename}</span>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
        </div>
      )}

      <div className="relative">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            borderRadius: filename ? '0' : '0.5rem',
            fontSize: '0.9rem',
          }}
        >
          {code}
        </SyntaxHighlighter>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-code-bg/50 backdrop-blur-sm hover:bg-code-text/20 text-code-text/70 hover:text-code-text"
          onClick={handleCopy}
        >
          <Copy className={cn("h-4 w-4", copied ? "opacity-50" : "")} />
        </Button>
      </div>
    </div>
  );
}

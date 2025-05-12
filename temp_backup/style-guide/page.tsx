import { Metadata } from 'next';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Bitcoin, Lightning, Info, Check, AlertTriangle, Terminal, Github, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Style Guide - Satoshi Station',
  description: 'Official style guide and design system for Satoshi Station',
};

export default function StyleGuidePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Satoshi Station Style Guide
          </h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive guide to the visual language and component library of Satoshi Station.
          </p>
        </div>

        {/* Color Palette */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Color Palette</h2>
          <p className="text-muted-foreground">
            Satoshi Station uses a consistent color palette across both light and dark modes
            through CSS variables to maintain a cohesive visual identity.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <ColorSwatch
              name="Primary Light"
              variable="--primary-light"
              description="Main accent color for Bitcoin elements"
            />
            <ColorSwatch
              name="Primary Dark"
              variable="--primary-dark"
              description="Darker variant for hover states"
            />
            <ColorSwatch
              name="Lightning Purple"
              variable="--lightning-purple"
              description="Accent color for Lightning Network elements"
            />
            <ColorSwatch
              name="Background"
              variable="--background"
              description="Page background color"
            />
            <ColorSwatch
              name="Foreground"
              variable="--foreground"
              description="Primary text color"
            />
            <ColorSwatch
              name="Muted"
              variable="--muted"
              description="Subtle background for UI elements"
            />
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Typography</h2>
          <p className="text-muted-foreground">
            Consistent typography helps maintain readability and hierarchy across the platform.
          </p>
          
          <div className="space-y-8 mt-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight">Heading 1</h1>
              <p className="text-sm text-muted-foreground">4xl / Extrabold / Tight tracking</p>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Heading 2</h2>
              <p className="text-sm text-muted-foreground">3xl / Bold / Tight tracking</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight">Heading 3</h3>
              <p className="text-sm text-muted-foreground">2xl / Semibold / Tight tracking</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-xl font-semibold tracking-tight">Heading 4</h4>
              <p className="text-sm text-muted-foreground">xl / Semibold / Tight tracking</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-base">Body text (base)</p>
              <p className="text-sm text-muted-foreground">Base / Regular</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm">Small text</p>
              <p className="text-sm text-muted-foreground">sm / Regular</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Buttons</h2>
          <p className="text-muted-foreground">
            Buttons follow a consistent style with variants for different purposes.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="space-y-2 text-center">
              <Button>Default Button</Button>
              <p className="text-xs text-muted-foreground">Default</p>
            </div>
            
            <div className="space-y-2 text-center">
              <Button variant="outline">Outline</Button>
              <p className="text-xs text-muted-foreground">Outline</p>
            </div>
            
            <div className="space-y-2 text-center">
              <Button variant="secondary">Secondary</Button>
              <p className="text-xs text-muted-foreground">Secondary</p>
            </div>
            
            <div className="space-y-2 text-center">
              <Button variant="ghost">Ghost</Button>
              <p className="text-xs text-muted-foreground">Ghost</p>
            </div>
            
            <div className="space-y-2 text-center">
              <Button variant="destructive">Destructive</Button>
              <p className="text-xs text-muted-foreground">Destructive</p>
            </div>
            
            <div className="space-y-2 text-center">
              <Button variant="link">Link Button</Button>
              <p className="text-xs text-muted-foreground">Link</p>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Badges</h2>
          <p className="text-muted-foreground">
            Badges are used to highlight status, categories, or important information.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="space-y-2 text-center">
              <Badge>Default</Badge>
              <p className="text-xs text-muted-foreground">Default</p>
            </div>
            
            <div className="space-y-2 text-center">
              <Badge variant="secondary">Secondary</Badge>
              <p className="text-xs text-muted-foreground">Secondary</p>
            </div>
            
            <div className="space-y-2 text-center">
              <Badge variant="outline">Outline</Badge>
              <p className="text-xs text-muted-foreground">Outline</p>
            </div>
            
            <div className="space-y-2 text-center">
              <Badge variant="destructive">Destructive</Badge>
              <p className="text-xs text-muted-foreground">Destructive</p>
            </div>
            
            <div className="space-y-2 text-center">
              <Badge variant="brand">Brand</Badge>
              <p className="text-xs text-muted-foreground">Brand</p>
            </div>
            
            <div className="space-y-2 text-center">
              <Badge variant="bitcoin">Bitcoin</Badge>
              <p className="text-xs text-muted-foreground">Bitcoin</p>
            </div>
            
            <div className="space-y-2 text-center">
              <Badge variant="lightning">Lightning</Badge>
              <p className="text-xs text-muted-foreground">Lightning</p>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Cards</h2>
          <p className="text-muted-foreground">
            Cards are used to group related content and actions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Card with default styling</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is a standard card component with default styling.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Action</Button>
              </CardFooter>
            </Card>
            
            <Card variant="brand">
              <CardHeader>
                <CardTitle>Brand Card</CardTitle>
                <CardDescription>Card with brand styling</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card uses our brand styling with the primary color.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Alerts */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Alerts</h2>
          <p className="text-muted-foreground">
            Alerts provide contextual feedback messages for user actions or important information.
          </p>
          
          <div className="space-y-4 mt-6">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is a standard alert with default styling.
              </AlertDescription>
            </Alert>
            
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Destructive Alert</AlertTitle>
              <AlertDescription>
                This alert indicates a potentially destructive action or warning.
              </AlertDescription>
            </Alert>
            
            <Alert variant="brand">
              <Check className="h-4 w-4" />
              <AlertTitle>Brand Alert</AlertTitle>
              <AlertDescription>
                This alert uses our brand styling with the primary color.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Icons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Icons</h2>
          <p className="text-muted-foreground">
            Consistent icon usage enhances visual communication and branding.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 border rounded-md">
                <Bitcoin className="h-8 w-8 text-[var(--primary-light)]" />
              </div>
              <p className="text-sm">Bitcoin</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 border rounded-md">
                <Lightning className="h-8 w-8 text-lightning-purple" />
              </div>
              <p className="text-sm">Lightning</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 border rounded-md">
                <Terminal className="h-8 w-8" />
              </div>
              <p className="text-sm">Terminal</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 border rounded-md">
                <Github className="h-8 w-8" />
              </div>
              <p className="text-sm">Github</p>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Usage Guidelines</h2>
          
          <Alert variant="brand">
            <Info className="h-4 w-4" />
            <AlertTitle>Consistent Branding</AlertTitle>
            <AlertDescription>
              Always use CSS variables for colors and follow the styling patterns shown in this guide.
              This ensures a consistent experience across the entire application.
            </AlertDescription>
          </Alert>
          
          <div className="mt-6 p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Principles</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Use CSS variables instead of hardcoded color values</li>
              <li>Maintain consistent spacing and layout across all pages</li>
              <li>Use the appropriate variants for different contexts</li>
              <li>Ensure a unified experience between light and dark modes</li>
              <li>Follow accessibility best practices for all components</li>
              <li>Create a professional, elegant design appropriate for a Bitcoin education platform</li>
            </ul>
          </div>
        </section>

        <div className="mt-8 p-6 border border-dashed rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <ExternalLink className="h-5 w-5 text-[var(--primary-light)]" />
            <h3 className="text-lg font-semibold">Additional Resources</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            For developers, refer to the component source code for implementation details.
            All components are built with accessibility and responsive design in mind.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                Tailwind Documentation
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                shadcn/ui Components
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Color swatch component to display color variables
function ColorSwatch({ name, variable, description }: { name: string; variable: string; description: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border">
      <div 
        className="h-24" 
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div className="p-4 space-y-1.5">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="font-mono text-xs">{variable}</p>
      </div>
    </div>
  );
}
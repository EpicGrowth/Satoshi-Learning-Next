import { Award, Bitcoin, Droplet, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const CertificationPromotion = () => {
  const certifications = [
    {
      title: 'Bitcoin Certified',
      icon: Bitcoin,
      description: 'Master Bitcoin fundamentals, economics, and technical concepts',
      color: 'bg-orange-500'
    },
    {
      title: 'Liquid Certified',
      icon: Droplet,
      description: 'Become an expert in Liquid Network and confidential transactions',
      color: 'bg-blue-500'
    },
    {
      title: 'Lightning Certified',
      icon: Zap,
      description: 'Learn Lightning Network, channel management, and node operations',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-background/10 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4">
            <Award className="w-4 h-4 mr-2" />
            Professional Certification
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Earn Your Bitcoin Technology Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete our comprehensive learning paths and earn professional certifications
            in Bitcoin, Liquid, and Lightning technologies. Stand out in the industry
            with verified expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.title} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-10 ${cert.color}`} />
              <CardHeader>
                <cert.icon className={`w-8 h-8 mb-2 ${cert.color} text-white rounded-lg p-1`} />
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription>{cert.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Verifiable digital certificate
                  </li>
                  <li className="flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Industry-recognized qualification
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

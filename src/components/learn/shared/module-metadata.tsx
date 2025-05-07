'use client';

import Head from 'next/head';

export interface ModuleMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  lastUpdated: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeToComplete: string;
  prerequisites: string[];
}

interface ModuleMetadataProps {
  metadata: ModuleMetadata;
  children?: React.ReactNode;
}

export function ModuleMetadata({ metadata, children }: ModuleMetadataProps) {
  const {
    title,
    description,
    keywords,
    canonical,
    ogImage,
    lastUpdated,
    difficulty,
    timeToComplete,
    prerequisites
  } = metadata;

  return (
    <>
      <Head>
        <title>{title} | Satoshi Learning Path</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional Metadata */}
        <meta name="article:published_time" content={lastUpdated} />
        <meta name="difficulty" content={difficulty} />
        <meta name="timeToComplete" content={timeToComplete} />
        <meta name="prerequisites" content={prerequisites.join(', ')} />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: description,
            image: ogImage,
            dateModified: lastUpdated,
            author: {
              '@type': 'Organization',
              name: 'Satoshi Learning Path'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Satoshi Learning Path',
              logo: {
                '@type': 'ImageObject',
                url: '/images/logo.png'
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonical
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'difficulty',
                value: difficulty
              },
              {
                '@type': 'PropertyValue',
                name: 'timeToComplete',
                value: timeToComplete
              },
              {
                '@type': 'PropertyValue',
                name: 'prerequisites',
                value: prerequisites
              }
            ]
          })}
        </script>
      </Head>
      {children}
    </>
  );
}

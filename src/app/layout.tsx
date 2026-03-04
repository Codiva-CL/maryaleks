import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import './globals.css';

const siteUrl = 'https://maryaleks.dev';
const title = 'Marina Alekseeva — Front-End Developer | React, Next.js, Angular, Vue';
const description =
  'Front-End Developer with 4+ years of experience in React, Next.js, Angular, Vue, and TypeScript. Based in Santiago, Chile. Open to work.';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Front-End Developer',
    'React Developer',
    'Next.js Developer',
    'Angular Developer',
    'Vue Developer',
    'TypeScript',
    'JavaScript',
    'Santiago Chile',
    'Hire Developer',
    'Web Developer',
    'Marina Alekseeva',
  ],
  authors: [{ name: 'Marina Alekseeva', url: siteUrl }],
  creator: 'Marina Alekseeva',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Marina Alekseeva — Portfolio',
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Marina Alekseeva — Front-End Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Marina Alekseeva',
      jobTitle: 'Front-End Developer',
      url: siteUrl,
      email: 'marinaaleksdev@gmail.com',
      telephone: '+56957776767',
      image: `${siteUrl}/profile.jpg`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Santiago',
        addressCountry: 'CL',
      },
      knowsLanguage: [
        { '@type': 'Language', name: 'Russian', alternateName: 'ru' },
        { '@type': 'Language', name: 'English', alternateName: 'en' },
        { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
      ],
      knowsAbout: [
        'React', 'Next.js', 'Angular', 'Vue', 'Svelte', 'Astro',
        'JavaScript', 'TypeScript', 'Go', 'HTML', 'CSS', 'Dart',
        'Redux', 'Express', 'Docker', 'AWS Lambda', 'Supabase',
        'Jest', 'Playwright', 'Git', 'Linux',
      ],
      sameAs: [
        'https://github.com/KorryKo',
        'https://www.linkedin.com/in/marina-alekseeva-a190591b5/',
        'https://t.me/KorryKo',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'ZooMinder',
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Syne, Cormorant_Garamond } from 'next/font/google';
import ScrollReveal from '@/components/ScrollReveal';
import { SITE_URL, PERSON, SOCIAL } from '@/constants/site';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const title = 'Marina Alekseeva — Front-End Developer | React, Next.js, Angular, Vue';
const description =
  'Front-End Developer with 4+ years of experience in React, Next.js, Angular, Vue, and TypeScript. Based in Santiago, Chile. Open to work.';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(SITE_URL),
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
  authors: [{ name: 'Marina Alekseeva', url: SITE_URL }],
  creator: 'Marina Alekseeva',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
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
      name: PERSON.name,
      jobTitle: PERSON.jobTitle,
      url: SITE_URL,
      email: PERSON.email,
      telephone: PERSON.phone,
      image: `${SITE_URL}${PERSON.image}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: PERSON.location.city,
        addressCountry: PERSON.location.country,
      },
      knowsLanguage: PERSON.languages.map(l => ({
        '@type': 'Language' as const,
        name: l.name,
        alternateName: l.code,
      })),
      knowsAbout: [
        'React', 'Next.js', 'Angular', 'Vue', 'Svelte', 'Astro',
        'JavaScript', 'TypeScript', 'Go', 'HTML', 'CSS', 'Dart',
        'Redux', 'Express', 'Docker', 'AWS Lambda', 'Supabase',
        'Jest', 'Playwright', 'Git', 'Linux',
      ],
      sameAs: [SOCIAL.github, SOCIAL.linkedin, SOCIAL.telegram],
      worksFor: {
        '@type': 'Organization',
        name: 'ZooMinder',
      },
    },
  };

  return (
    <html lang="en" className={`${syne.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
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

import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from 'next/font/google';
import "../index.css";
import ClientLayout from "./ClientLayout";

const kalam = Kalam({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kalam',
});

const patrickHand = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-patrick-hand',
});

export const metadata: Metadata = {
  title: 'Soumya Chakraborty | Full Stack Developer & Software Engineer',
  description: 'Soumya Chakraborty is a CS undergrad and Full Stack Developer with 2 years of experience building modern web apps using React, Next.js, Node.js, and Python.',
  keywords: ['Soumya Chakraborty', 'Full Stack Developer', 'React Developer', 'Node.js Developer', 'Next.js Developer', 'Python', 'Portfolio', 'Software Engineer India', 'AWS Certified', 'HackerRank Certified', 'Technical Certifications'],
  authors: [{ name: 'Soumya Chakraborty' }],
  creator: 'Soumya Chakraborty',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chksoumya.in/',
    title: 'Soumya Chakraborty | Full Stack Developer',
    description: 'Soumya Chakraborty is a CS undergrad and Full Stack Developer with 2 years of experience building modern web apps using React, Next.js, Node.js, and Python.',
    siteName: 'Soumya Chakraborty Portfolio',
    images: [
      {
        url: 'https://chksoumya.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Soumya Chakraborty - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumya Chakraborty | Full Stack Developer',
    description: 'Soumya Chakraborty is a CS undergrad and Full Stack Developer with 2 years of experience building modern web apps using React, Next.js, Node.js, and Python.',
    images: ['https://chksoumya.in/og-image.png'],
    site: '@soumya_chk',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://chksoumya.in/',
  },
  icons: {
    icon: '/images/Profile%20Photo.jpg',
    apple: '/images/Profile%20Photo.jpg',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Soumya Chakraborty",
  "url": "https://chksoumya.in/",
  "image": "https://chksoumya.in/images/Profile%20Photo.jpg",
  "description": "CS undergrad and Full Stack Developer with 2 years of experience building modern web apps using React, Next.js, Node.js, and Python.",
  "jobTitle": "Full Stack Developer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
    "addressCountry": "IN"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "B.Tech Computer Science & Engineering"
  },
  "knowsAbout": [
    "React", "Next.js", "Node.js", "Python", "TypeScript",
    "JavaScript", "Tailwind CSS", "FastAPI", "MongoDB",
    "PostgreSQL", "AWS", "Docker", "Git"
  ],
  "sameAs": [
    "https://github.com/soumyachk101",
    "https://wa.me/qr/PAVVG4QPZUJXF1",
    "https://www.instagram.com/soumya_chk"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${kalam.variable} ${patrickHand.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e85d04" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "../index.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: 'Soumya Chakraborty | Full Stack Developer & Software Engineer',
  description: 'Soumya Chakraborty is a CS undergrad and Full Stack Developer with 2 years of experience building modern web apps using React, Next.js, Node.js, and Python.',
  keywords: ['Soumya Chakraborty', 'Full Stack Developer', 'React Developer', 'Node.js Developer', 'Next.js Developer', 'Python', 'Portfolio', 'Software Engineer India'],
  authors: [{ name: 'Soumya Chakraborty' }],
  creator: 'Soumya Chakraborty',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chksoumya.in/',
    title: 'Soumya Chakraborty | Full Stack Developer',
    description: 'Soumya Chakraborty is a CS undergrad and Full Stack Developer with 2 years of experience building modern web apps using React, Next.js, Node.js, and Python.',
    siteName: 'Soumya Chakraborty Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumya Chakraborty | Full Stack Developer',
    description: 'Soumya Chakraborty is a CS undergrad and Full Stack Developer with 2 years of experience building modern web apps using React, Next.js, Node.js, and Python.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://chksoumya.in/',
  },
  icons: {
    icon: "/images/Profile%20Photo.jpg",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Soumya Chakraborty",
  "url": "https://chksoumya.in/",
  "jobTitle": "Full Stack Developer",
  "sameAs": [
    "https://github.com/soumyachk101",
    "https://www.linkedin.com/in/soumya-chakraborty-102b24399",
    "https://www.instagram.com/soumya_chk"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Patrick+Hand&display=swap" rel="stylesheet" />
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

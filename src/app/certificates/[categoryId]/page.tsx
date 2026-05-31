import type { Metadata } from 'next';
import { categories, certificates } from '../../../data/certificates';
import CertificateDetailsClient from './CertificateDetailsClient';

type Props = {
  params: Promise<{ categoryId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params;
  const category = categories.find(c => c.id === categoryId);

  if (!category) {
    return {
      title: 'Category Not Found | Soumya Chakraborty',
      description: 'The requested certificate category could not be found.',
      robots: { index: false, follow: true },
    };
  }

  const count = certificates.filter(c => c.category === categoryId).length;
  const title = `${category.label} Certificates | Soumya Chakraborty`;
  const description = `Browse ${count} professional certificates in ${category.label} earned by Soumya Chakraborty. Includes certifications from IBM, Google, Microsoft, Meta, NVIDIA, and more.`;
  const url = `https://chksoumya.in/certificates/${categoryId}`;

  return {
    title,
    description,
    keywords: [category.label, 'certificates', 'Soumya Chakraborty', 'professional development', 'online courses'],
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'Soumya Chakraborty Portfolio',
      images: [
        {
          url: 'https://chksoumya.in/images/Profile%20Photo.jpg',
          width: 1200,
          height: 630,
          alt: `${category.label} Certificates - Soumya Chakraborty`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://chksoumya.in/images/Profile%20Photo.jpg'],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CertificatePage() {
  return <CertificateDetailsClient />;
}

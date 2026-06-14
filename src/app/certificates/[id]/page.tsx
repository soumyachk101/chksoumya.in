import type { Metadata } from 'next';
import { categories, certificates } from '../../../data/certificates';
import CertificatePageClient from './CertificatePageClient';
import CertificateDetailsClient from './CertificateDetailsClient';

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    const certParams = certificates.map((c) => ({ id: c.id }));
    const categoryParams = categories.map((cat) => ({ id: cat.id }));
    return [...certParams, ...categoryParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;

    // Check if it's a category first
    const category = categories.find((c) => c.id === id);
    if (category) {
        const count = certificates.filter((c) => c.category === id).length;
        const title = `${category.label} Certificates | Soumya Chakraborty`;
        const description = `Browse ${count} professional certificates in ${category.label} earned by Soumya Chakraborty. Includes certifications from IBM, Google, Microsoft, Meta, NVIDIA, HackerRank, AWS, and more.`;
        const url = `https://chksoumya.in/certificates/${id}`;

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
                        url: 'https://chksoumya.in/og-image.png',
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
                images: ['https://chksoumya.in/og-image.png'],
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

    // Otherwise, check if it's an individual certificate
    const cert = certificates.find((c) => c.id === id);

    if (!cert) {
        return {
            title: 'Certificate Not Found | Soumya Chakraborty',
            description: 'The requested certificate could not be found.',
            robots: { index: false, follow: true },
        };
    }

    const title = `${cert.title} — ${cert.issuer} Certificate | Soumya Chakraborty`;
    const description = `Soumya Chakraborty's "${cert.title}" certificate issued by ${cert.issuer} in ${cert.date}. View the verified PDF and explore other professional certifications.`;
    const url = `https://chksoumya.in/certificates/${cert.id}`;

    return {
        title,
        description,
        keywords: [
            cert.title,
            cert.issuer,
            'Certificate',
            'Soumya Chakraborty',
            'Professional Development',
            'Online Course',
            `${cert.issuer} Certified`,
        ],
        openGraph: {
            title,
            description,
            url,
            type: 'article',
            siteName: 'Soumya Chakraborty Portfolio',
            images: [
                {
                    url: 'https://chksoumya.in/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: `${cert.title} — ${cert.issuer} Certificate`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['https://chksoumya.in/og-image.png'],
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

export default async function CertificatePage({ params }: Props) {
    const { id } = await params;
    const isCategory = categories.some((c) => c.id === id);

    if (isCategory) {
        return <CertificateDetailsClient />;
    }

    return <CertificatePageClient paramsPromise={params} />;
}


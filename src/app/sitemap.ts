import { MetadataRoute } from 'next';
import { categories, publicCertificates } from '../data/certificates';

export default function sitemap(): MetadataRoute.Sitemap {
    const SITE = 'https://chksoumya.in';
    // Static build-time date — avoid "lastModified: new Date()" on every render
    const lastModified = new Date('2026-06-14');

    const home: MetadataRoute.Sitemap[number] = {
        url: `${SITE}/`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 1.0,
    };

    const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
        url: `${SITE}/certificates/${cat.id}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // 41 individual certificate pages for long-tail SEO
    const certRoutes: MetadataRoute.Sitemap = publicCertificates.map((cert) => ({
        url: `${SITE}/certificates/${cert.id}`,
        lastModified,
        changeFrequency: 'yearly',
        priority: 0.6,
    }));

    return [home, ...categoryRoutes, ...certRoutes];
}

import { MetadataRoute } from 'next';
import { categories } from '../data/certificates';

export default function sitemap(): MetadataRoute.Sitemap {
  const certificateRoutes = categories.map(cat => ({
    url: `https://chksoumya.in/certificates/${cat.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://chksoumya.in',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...certificateRoutes,
  ];
}

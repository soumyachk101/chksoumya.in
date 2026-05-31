import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/certificates/*.pdf',
      },
    ],
    sitemap: 'https://chksoumya.in/sitemap.xml',
  };
}

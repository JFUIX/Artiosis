import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/artiosis-final.html'] }],
    sitemap: 'https://artiosis.com/sitemap.xml',
    host: 'https://artiosis.com',
  };
}

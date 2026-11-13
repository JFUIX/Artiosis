import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://artiosis.com';
  return ['/', '/small-business-website-cost.html',
    '/web-experiences.html', '/ai-automation.html', '/creative-solutions.html'].map((path) => ({
    url: base + path,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));
}

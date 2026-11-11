import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://artiosis.com';
  return ['/', '/web-experiences.html', '/ai-automation.html', '/creative-solutions.html'].map((path) => ({
    url: base + path,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));
}

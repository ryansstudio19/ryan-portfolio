import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/work', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/articles', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/qorvayn', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/eskypixx', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/ryneka', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/goalwear', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/coming-soon', priority: 0.3, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...routes.map((r) => ({ url: `${SITE_URL}${r.path}`, lastModified, changeFrequency: r.changeFrequency, priority: r.priority })),
    ...articles.map((a) => ({ url: `${SITE_URL}/articles/${a.slug}`, lastModified: new Date(a.date), changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}

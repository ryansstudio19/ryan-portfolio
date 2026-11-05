import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import Link from 'next/link';
import Redirect from '@/components/Redirect';

// SkyPics was renamed to eSkypixx. Vercel redirects /skypics permanently; this page covers any other host.
export const metadata: Metadata = pageMeta({
  title: 'SkyPics is now eSkypixx',
  path: '/eskypixx',
  og: 'eskypixx',
  noindex: true,
  description: 'SkyPics has been renamed to eSkypixx.',
});

export default function SkyPics() {
  return (
    <section className="not-found">
      <Redirect to="/eskypixx" />
      <div>
        <p className="kicker">// renamed</p>
        <h1 className="h2" style={{ margin: '0.8rem 0 1.2rem' }}>SkyPics is now eSkypixx</h1>
        <Link href="/eskypixx" className="btn btn-primary">Go to eSkypixx</Link>
      </div>
    </section>
  );
}

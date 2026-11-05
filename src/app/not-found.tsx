import Link from 'next/link';
import { Arrow } from '@/components/Icons';

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <p className="code grad-text">404</p>
        <h1 className="h2" style={{ margin: '1rem 0' }}>This page doesn&apos;t exist</h1>
        <p className="lead" style={{ margin: '0 auto 2rem' }}>The link may be old or mistyped. Head back home to find what you need.</p>
        <Link href="/" className="btn btn-primary">Back to home <Arrow /></Link>
      </div>
    </section>
  );
}

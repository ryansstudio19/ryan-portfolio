import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow } from '@/components/Icons';
import { Reveal } from '@/components/motion';
import PageHero from '@/components/PageHero';
import { Breadcrumbs } from '@/components/StructuredData';
import { articles } from '@/data/articles';
import { fmtDate } from '@/lib/date';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Articles on Web Development, Design & SEO | Ryan Zannah',
  absoluteTitle: true,
  path: '/articles',
  og: 'articles',
  description:
    'Articles and case studies by Ryan Zannah on building websites, web design, performance and SEO, written from real projects.',
});

export default function Articles() {
  const list = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <Breadcrumbs items={[{ name: 'Articles', path: '/articles' }]} />
      <PageHero title="Articles" gradientWords={['Articles']}>
        <p className="lead">Notes and case studies on building websites, design and SEO, written from real projects.</p>
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ul className="article-list" style={{ listStyle: 'none' }}>
            {list.map((a, i) => (
              <li key={a.slug}>
                <Reveal delay={i * 0.06}>
                  <Link href={`/articles/${a.slug}`} className="article-card panel" data-cursor="READ">
                    <div className="article-meta">
                      <time dateTime={a.date}>{fmtDate(a.date)}</time>
                      <span>{a.minutes} min read</span>
                    </div>
                    <h2 className="h3 article-card-title">{a.title}</h2>
                    <p className="muted">{a.description}</p>
                    <div className="article-card-foot">
                      <ul className="chips" style={{ listStyle: 'none' }}>
                        {a.tags.map((t) => <li key={t} className="chip">{t}</li>)}
                      </ul>
                      <span className="work-link">READ <Arrow /></span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

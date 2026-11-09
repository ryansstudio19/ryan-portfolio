import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Arrow } from '@/components/Icons';
import { Magnetic, Reveal, WordReveal } from '@/components/motion';
import { ArticleSchema } from '@/components/StructuredData';
import { articleBySlug, articles, type Block } from '@/data/articles';
import { SITE_URL } from '@/lib/seo';
import { fmtDate } from '@/lib/date';

export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) return {};
  const url = `${SITE_URL}/articles/${a.slug}`;
  const image = { url: `/og/articles/${a.slug}.png`, width: 1200, height: 630, alt: a.title };
  const title = a.seoTitle ?? a.title;
  const description = a.seoDescription ?? a.description;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    authors: [{ name: 'Ryan Zannah', url: SITE_URL }],
    openGraph: {
      type: 'article',
      url,
      siteName: 'Ryan Zannah',
      title,
      description,
      publishedTime: a.date,
      authors: ['Ryan Zannah'],
      tags: a.tags,
      locale: 'en_US',
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, creator: '@ryan_zannah', images: [image.url] },
  };
}

function render(b: Block, i: number) {
  switch (b.type) {
    case 'p':
      return <p key={i}>{b.text}</p>;
    case 'h2':
      return <h2 key={i} className="h3 article-h2">{b.text}</h2>;
    case 'ul':
      return <ul key={i}>{b.items.map((t) => <li key={t}>{t}</li>)}</ul>;
    case 'ol':
      return <ol key={i}>{b.items.map((t) => <li key={t}>{t}</li>)}</ol>;
    case 'stats':
      return (
        <dl key={i} className="article-stats">
          {b.items.map((s) => (
            <div key={s.label}>
              <dd>{s.value}</dd>
              <dt>{s.label}</dt>
            </div>
          ))}
        </dl>
      );
    case 'note':
      return <p key={i} className="notice">{b.text}</p>;
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) notFound();
  return (
    <>
      <ArticleSchema a={a} />
      <article>
        <header className="page-hero article-hero">
          <div className="container article-container">
            <Reveal>
              <Link href="/articles" className="back"><Arrow /> All articles</Link>
            </Reveal>
            <WordReveal text={a.title} as="h1" className="h2 article-title" immediate delay={0.1} />
            <Reveal delay={0.2}>
              <div className="article-meta">
                <span>By <Link href="/about">Ryan Zannah</Link></span>
                <time dateTime={a.date}>{fmtDate(a.date)}</time>
                <span>{a.minutes} min read</span>
              </div>
              <p className="lead" style={{ marginTop: '1.2rem' }}>{a.description}</p>
            </Reveal>
          </div>
        </header>
        <div className="container article-container">
          <Reveal amount={0.05}>
            <div className="article-body">{a.body.map(render)}</div>
          </Reveal>
          <div className="hero-actions" style={{ marginBottom: 'clamp(4rem, 9vw, 6rem)' }}>
            <Magnetic><Link href="/services" className="btn btn-primary">See my services <Arrow /></Link></Magnetic>
            <Magnetic><Link href="/contact" className="btn btn-ghost">Get in touch</Link></Magnetic>
          </div>
        </div>
      </article>
    </>
  );
}

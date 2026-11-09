import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow, Camera, Check, Code, Globe, Plus, Sparkle } from '@/components/Icons';
import { Magnetic, Reveal, Stagger, StaggerItem, TiltCard, WordReveal } from '@/components/motion';
import PageHero from '@/components/PageHero';
import { ServicesSchema } from '@/components/StructuredData';
import { faqs, process, reasons, services } from '@/data/services';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Web Design & SEO Services in Dhaka | Ryan Zannah',
  absoluteTitle: true,
  path: '/services',
  og: 'services',
  description:
    'Websites, web apps, SEO, logos and content by Ryan Zannah, a Dhaka-based developer and designer with 5+ years of experience. Working with clients worldwide.',
});

const icons = { 'web-development': Code, seo: Globe, 'branding-design': Sparkle, 'content-marketing': Camera } as const;

export default function Services() {
  return (
    <>
      <ServicesSchema items={services} faqs={faqs} />
      <PageHero
        title="Services"
        gradientWords={['Services']}
        aside={
          <nav className="svc-index panel" aria-label="Services on this page">
            <p className="kicker">// on this page</p>
            <ul style={{ listStyle: 'none' }}>
              {services.map((s) => {
                const Icon = icons[s.id as keyof typeof icons];
                return (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>
                      <span className="feature-ico"><Icon /></span>
                      <span>{s.name}</span>
                      <Arrow className="svc-index-arrow" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        }
      >
        <p className="lead">
          Web design, development and SEO from Dhaka, Bangladesh, for clients anywhere. Design, code and search in one place,
          so your website looks good, works well and gets found.
        </p>
        <div className="hero-actions">
          <Magnetic><Link href="/contact" className="btn btn-primary">Start a project <Arrow /></Link></Magnetic>
          <Magnetic><Link href="/work" className="btn btn-ghost">See my work</Link></Magnetic>
        </div>
      </PageHero>

      {services.map((s, i) => {
        const Icon = icons[s.id as keyof typeof icons];
        return (
          <section className="section svc" id={s.id} key={s.id}>
            <div className="container split">
              <div className="sticky-head">
                <Reveal from={i % 2 === 0 ? 'left' : 'right'}>
                  <span className="feature-ico svc-ico"><Icon /></span>
                  <h2 className="h2" style={{ marginTop: '1.2rem' }}>{s.name}</h2>
                  <p className="svc-headline">{s.headline}</p>
                </Reveal>
              </div>
              <div>
                <Reveal delay={0.08}>
                  <p className="lead">{s.intro}</p>
                </Reveal>
                <Stagger className="svc-list" amount={0.2}>
                  {s.items.map((item) => (
                    <StaggerItem key={item} className="svc-item">
                      <Check /> <span>{item}</span>
                    </StaggerItem>
                  ))}
                </Stagger>
                {s.tools && (
                  <Reveal delay={0.1}>
                    <ul className="chips" style={{ listStyle: 'none', marginTop: '1.5rem' }} aria-label="Tools">
                      {s.tools.map((t) => <li key={t} className="chip">{t}</li>)}
                    </ul>
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// how it works</p></Reveal>
            <WordReveal text="From first message to launch" className="h2" gradientWords={['launch']} />
          </div>
          <Stagger className="steps steps-4">
            {process.map((p, i) => (
              <StaggerItem key={p.name} className="step panel">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <p>{p.name}</p>
                <p className="step-text">{p.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// why work with me</p></Reveal>
            <WordReveal text="What you get" className="h2" gradientWords={['get']} />
          </div>
          <Stagger className="feature-grid feature-grid-2">
            {reasons.map((r) => (
              <StaggerItem key={r.name}>
                <TiltCard className="feature panel" max={6} style={{ height: '100%' }}>
                  <h3 className="h3" style={{ marginTop: 0 }}>{r.name}</h3>
                  <p>{r.text}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container split">
          <div className="sticky-head">
            <Reveal><p className="kicker">// questions</p></Reveal>
            <WordReveal text="Frequently asked questions" className="h2" gradientWords={['questions']} />
          </div>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04} amount={0.4}>
                <details className="faq-item" open={i === 0}>
                  <summary>
                    <span>{f.q}</span>
                    <Plus className="faq-icon" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <WordReveal text="Have a project in mind?" className="h2" gradientWords={['project']} />
          <Reveal delay={0.1}><p className="lead">Tell me what you&apos;re building and I&apos;ll reply with the next steps.</p></Reveal>
          <Reveal delay={0.15} className="actions">
            <Magnetic><Link href="/contact" className="btn btn-primary">Start a project <Arrow /></Link></Magnetic>
            <Magnetic><Link href="/about" className="btn btn-ghost">About me</Link></Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}

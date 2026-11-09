import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs } from '@/components/StructuredData';
import Link from 'next/link';
import { Arrow, Code, Layers, Sparkle, Bag, Globe, Camera } from '@/components/Icons';
import { Magnetic, Reveal, Stagger, StaggerItem, TiltCard, WordReveal } from '@/components/motion';
import PageHero from '@/components/PageHero';
import WorkGrid from '@/components/WorkGrid';

export const metadata: Metadata = pageMeta({
  title: 'Work & Projects',
  path: '/work',
  og: 'work',
  description: 'Products and services by Ryan Zannah: eSkypixx, RYNEKA and GoalWear, plus web development, UI design, branding, SEO and content work for clients.',
});

const services = [
  { icon: Code, name: 'Web development', text: 'Full-stack websites and web apps, built fast, responsive and easy to maintain.' },
  { icon: Layers, name: 'Web & UI design', text: 'Interfaces that look sharp and make the next step obvious.' },
  { icon: Sparkle, name: 'Branding & logos', text: 'Logos, banners and visual identities that hold together across every touchpoint.' },
  { icon: Globe, name: 'SEO', text: 'Audits, on-page and off-page SEO, and copy written to rank and to convert.' },
  { icon: Bag, name: 'E-commerce', text: 'Storefronts and e-commerce SEO that help products get found and bought.' },
  { icon: Camera, name: 'Content & video', text: 'Social content, image editing and video editing for brands and launches.' },
];

export default function Work() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Work', path: '/work' }]} />
      <PageHero title="Work" gradientWords={['Work']}>
        <p className="lead">
          The products I&apos;m building inside QORVAYN, and the kind of work I take on for clients.
        </p>
      </PageHero>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// products</p></Reveal>
            <WordReveal text="Products in the QORVAYN ecosystem" className="h2" gradientWords={['ecosystem']} />
          </div>
          <WorkGrid />
          <Reveal from="up" amount={0.4}>
            <Link href="/articles/rebuilding-my-portfolio-nextjs-seo" className="future-card panel case-link" data-cursor="READ">
              <div>
                <p className="kicker">// case study</p>
                <h3 className="h3" style={{ marginTop: '0.4rem' }}>How I rebuilt this portfolio with Next.js, Framer Motion and SEO in mind</h3>
                <p className="muted" style={{ marginTop: '0.35rem' }}>Mobile performance from 60&ndash;77 to 89&ndash;94, and 100 for SEO and accessibility on every page.</p>
              </div>
              <span className="btn btn-ghost btn-small">Read the case study <Arrow /></span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// services</p></Reveal>
            <WordReveal text="What I can do for you" className="h2" gradientWords={['you']} />
            <Reveal delay={0.1}>
              <p className="lead">Five years of freelance and agency work across design, development and growth.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <Magnetic><Link href="/services" className="btn btn-ghost btn-small">All services in detail <Arrow /></Link></Magnetic>
            </Reveal>
          </div>
          <Stagger className="feature-grid">
            {services.map((f) => (
              <StaggerItem key={f.name}>
                <TiltCard className="feature panel" max={8} style={{ height: '100%' }}>
                  <span className="feature-ico"><f.icon /></span>
                  <h3 className="h3">{f.name}</h3>
                  <p>{f.text}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <WordReveal text="Have a project in mind?" className="h2" gradientWords={['project']} />
          <Reveal delay={0.1}><p className="lead">Tell me what you&apos;re building and where I can help.</p></Reveal>
          <Reveal delay={0.15} className="actions">
            <Magnetic><Link href="/contact" className="btn btn-primary">Get in touch <Arrow /></Link></Magnetic>
            <Magnetic><Link href="/about" className="btn btn-ghost">About me</Link></Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}

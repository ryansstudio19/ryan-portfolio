import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { HomeSchema } from '@/components/StructuredData';
import Link from 'next/link';
import Age from '@/components/Age';
import HomeHero from '@/components/home/HomeHero';
import ProductRows from '@/components/home/ProductRows';
import QorvaynOrb from '@/components/home/QorvaynOrb';
import { Arrow } from '@/components/Icons';
import { Magnetic, Marquee, Reveal, WordReveal } from '@/components/motion';
import { marqueeSkills, qorvayn } from '@/data/site';

export const metadata: Metadata = pageMeta({
  title: 'Ryan Zannah | Web Developer, Designer & SEO in Dhaka',
  absoluteTitle: true,
  path: '/',
  og: 'home',
  description: 'Ryan Zannah is a web developer, designer and SEO specialist in Dhaka, Bangladesh with 5+ years of experience. Founder of QORVAYN. See my work and get in touch.',
});

export default function Home() {
  return (
    <>
      <HomeSchema />
      <HomeHero />
      <Marquee items={marqueeSkills} tilted />

      {/* Intro */}
      <section className="section">
        <div className="container split center">
          <div>
            <Reveal><p className="kicker">// about me</p></Reveal>
            <WordReveal text="I turn ideas into products people can actually use." className="h2" gradientWords={['products']} />
          </div>
          <div>
            <Reveal delay={0.1}>
              <p className="lead">
                I started freelancing more than five years ago, and at 13 I was a graphic designer at an agency in Kushtia.
                Today I design, build and grow digital products, from the code to the SEO that helps people find them.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <dl className="facts">
                <div className="fact"><dt>Experience</dt><dd>5+ years</dd></div>
                <div className="fact"><dt>Age</dt><dd><Age /></dd></div>
                <div className="fact"><dt>Based in</dt><dd>Dhaka, Bangladesh</dd></div>
                <div className="fact"><dt>Focus</dt><dd>Web, design, SEO</dd></div>
              </dl>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ marginTop: '2rem' }}>
                <div className="hero-actions" style={{ marginTop: 0 }}>
                  <Magnetic>
                    <Link href="/about" className="btn btn-ghost">Read my story <Arrow /></Link>
                  </Magnetic>
                  <Magnetic>
                    <Link href="/services" className="btn btn-ghost">What I offer</Link>
                  </Magnetic>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ maxWidth: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <Reveal><p className="kicker">// what I&apos;m building</p></Reveal>
              <WordReveal text="Selected work" className="h2" gradientWords={['work']} />
            </div>
            <Reveal delay={0.1}>
              <Magnetic><Link href="/work" className="btn btn-ghost btn-small">All work <Arrow /></Link></Magnetic>
            </Reveal>
          </div>
          <ProductRows />
        </div>
      </section>

      {/* QORVAYN teaser */}
      <section className="section">
        <div className="container q-teaser">
          <Reveal from="scale">
            <QorvaynOrb />
          </Reveal>
          <div>
            <Reveal><p className="kicker">// the company</p></Reveal>
            <WordReveal text="Everything I build lives under QORVAYN" className="h2" gradientWords={['QORVAYN']} />
            <Reveal delay={0.1}>
              <p className="lead" style={{ marginTop: '1.2rem' }}>{qorvayn.summary}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ marginTop: '2rem' }}>
                <Magnetic><Link href="/qorvayn" className="btn btn-ghost">About QORVAYN <Arrow /></Link></Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee items={['Think', 'Design', 'Build', 'Ship', 'Grow', 'Repeat']} baseVelocity={1.8} />

      {/* Contact prompt */}
      <section className="cta-band" style={{ borderTop: 0 }}>
        <div className="container">
          <WordReveal text="Let's work together" className="h2" gradientWords={['together']} />
          <Reveal delay={0.1}><p className="lead">Projects, collaborations or a quick question. I&apos;d like to hear about it.</p></Reveal>
          <Reveal delay={0.15} className="actions">
            <Magnetic><Link href="/contact" className="btn btn-primary">Get in touch <Arrow /></Link></Magnetic>
            <Magnetic><Link href="/about" className="btn btn-ghost">About me</Link></Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow, Brand } from '@/components/Icons';
import { Magnetic, Reveal } from '@/components/motion';
import PageHero from '@/components/PageHero';
import QorvaynOrb from '@/components/home/QorvaynOrb';
import { qorvayn } from '@/data/site';

export const metadata: Metadata = {
  title: 'Coming soon',
  description: 'More QORVAYN products are in development. Follow Ryan Zannah and QORVAYN for what comes next.',
};

export default function ComingSoon() {
  return (
    <>
      <PageHero
        title="Something new is in the works"
        gradientWords={['new']}
        badge={<span className="status">In development</span>}
        aside={<QorvaynOrb />}
      >
        <p className="lead">
          More QORVAYN products are being planned and built. The fastest way to hear about them is to follow QORVAYN on
          the channels below.
        </p>
        <div className="chips" style={{ marginTop: '1.6rem' }}>
          {qorvayn.socials.map((s) => (
            <a key={s.label} className="chip" href={s.href} target="_blank" rel="noopener noreferrer">
              <Brand name={s.icon} width={15} height={15} /> {s.label}
            </a>
          ))}
        </div>
        <div className="hero-actions">
          <Magnetic><Link href="/work" className="btn btn-primary">See current products <Arrow /></Link></Magnetic>
          <Magnetic><Link href="/contact" className="btn btn-ghost">Get in touch</Link></Magnetic>
        </div>
      </PageHero>
      <Reveal>
        <div className="container" style={{ paddingBottom: '5rem' }}>
          <p className="notice">Have an idea QORVAYN should build? Tell me about it through the contact form.</p>
        </div>
      </Reveal>
    </>
  );
}

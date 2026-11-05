import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs } from '@/components/StructuredData';
import ContactForm from '@/components/ContactForm';
import { ContactDetails } from '@/components/ContactSection';
import Img from '@/components/Img';
import { Reveal, TiltCard } from '@/components/motion';
import PageHero from '@/components/PageHero';
import { photos } from '@/data/site';

export const metadata: Metadata = pageMeta({
  title: 'Contact Ryan Zannah | Web Development, Design & SEO',
  absoluteTitle: true,
  path: '/contact',
  og: 'contact',
  description: 'Get in touch with Ryan Zannah about web development, design, SEO or QORVAYN. Email, phone and social links, or send a message directly.',
});

export default function Contact() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />
      <PageHero
        title="Let's build something good."
        gradientWords={['good.']}
        aside={
          <TiltCard className="photo" max={6} style={{ aspectRatio: '4 / 4.6', maxWidth: 400, marginInline: 'auto' }}>
            <Img src={photos.office.src} alt={photos.office.alt} sizes="(max-width: 900px) 90vw, 36vw" priority style={{ objectPosition: '50% 30%' }} />
            <span className="hud" aria-hidden="true"><i /><i /><i /><i /></span>
          </TiltCard>
        }
      >
        <p className="lead">
          Projects, collaborations, questions about QORVAYN, or just a hello. Send a message and I&apos;ll reply as soon as I can.
        </p>
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <Reveal from="left">
            <ContactDetails />
          </Reveal>
          <Reveal from="right" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { ContactDetails } from '@/components/ContactSection';
import { Reveal } from '@/components/motion';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Ryan Zannah about projects, collaborations or QORVAYN. Email, phone and social links.',
};

export default function Contact() {
  return (
    <>
      <PageHero title="Let's build something good." gradientWords={['good.']}>
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

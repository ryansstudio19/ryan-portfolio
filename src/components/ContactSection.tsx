import { person, qorvayn, socials } from '@/data/site';
import ContactForm from './ContactForm';
import { Brand, Mail, Phone, Pin } from './Icons';
import { Reveal, WordReveal } from './motion';

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <Reveal from="left">
          <p className="kicker">// contact</p>
          <WordReveal text="Let's build something good." className="h2" gradientWords={['good.']} />
          <p className="lead" style={{ marginTop: '1.2rem' }}>
            Projects, collaborations, questions about QORVAYN, or just a hello. Send a message and I&apos;ll reply as soon as I can.
          </p>
          <div className="links">
            <a className="link-row" href={`mailto:${person.email}`}>
              <span className="ico"><Mail /></span><span><b>Email</b>{person.email}</span>
            </a>
            <a className="link-row" href={`mailto:${qorvayn.email}`}>
              <span className="ico"><Mail /></span><span><b>QORVAYN</b>{qorvayn.email}</span>
            </a>
            <a className="link-row" href={person.phoneHref}>
              <span className="ico"><Phone /></span><span><b>Phone</b>{person.phone}</span>
            </a>
            <div className="link-row" style={{ transform: 'none' }}>
              <span className="ico"><Pin /></span><span><b>Based in</b>{person.location}</span>
            </div>
          </div>
          <div className="social-row">
            {socials.map((s) => (
              <a key={s.label} className="link-row" href={s.href} target="_blank" rel="noopener noreferrer">
                <span className="ico"><Brand name={s.icon} /></span>{s.label}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal from="right" delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

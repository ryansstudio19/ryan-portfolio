import { person, qorvayn, socials } from '@/data/site';
import { Brand, Mail, Phone, Pin } from './Icons';

// Email, phone, location and social links shown on the contact page.
export function ContactDetails() {
  return (
    <>
      <div className="links" style={{ marginTop: 0 }}>
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
    </>
  );
}

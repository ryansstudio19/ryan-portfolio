import Link from 'next/link';
import { person, socials } from '@/data/site';
import { Brand } from './Icons';
import Year from './Year';
import { Reveal } from './motion';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="h3" style={{ marginBottom: '0.4rem' }}>Have something worth building?</p>
            <a className="muted footer-email" href={`mailto:${person.email}`} style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>
              {person.email}
            </a>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/qorvayn">QORVAYN</Link>
            <Link href="/eskypixx">eSkypixx</Link>
            <Link href="/ryneka">RYNEKA</Link>
            <Link href="/goalwear">GoalWear</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <Reveal from="up" amount={0.4}>
          <p className="footer-word" aria-hidden="true">RYAN ZANNAH</p>
        </Reveal>
        <div className="footer-bottom">
          <span>© <Year /> Ryan Zannah. All rights reserved.</span>
          <span className="footer-social">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <Brand name={s.icon} width={18} height={18} />
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, person } from '@/data/site';
import { Magnetic } from './motion';
import { useLenis } from './Providers';

export default function Nav() {
  const pathname = usePathname();
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useMotionValueEvent(scrollY, 'change', (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(v > 30);
    setHidden(v > 400 && v > prev + 2 && !open);
    if (v < prev - 2) setHidden(false);
  });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (open) { lenis?.stop(); document.body.style.overflow = 'hidden'; }
    else { lenis?.start(); document.body.style.overflow = ''; }
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open, lenis]);

  const isActive = (href: string) => pathname === href;
  const pill = hovered ?? nav.find((n) => isActive(n.href))?.href ?? null;

  return (
    <>
      <motion.header
        className={`nav${scrolled ? ' is-scrolled' : ''}`}
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-bar">
          <Magnetic strength={0.25}>
            <Link href="/" className="nav-logo" aria-label="Ryan Zannah, home">
              RZ<span>.</span>
            </Link>
          </Magnetic>
          <nav aria-label="Main">
            <ul className="nav-links" onPointerLeave={() => setHovered(null)}>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="nav-link"
                    aria-current={isActive(n.href) ? 'page' : undefined}
                    onPointerEnter={() => setHovered(n.href)}
                    style={{ position: 'relative', zIndex: 1 }}
                  >
                    {pill === n.href && (
                      <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                    )}
                    {n.label}
                  </Link>
                </li>
              ))}
              <li style={{ marginLeft: '0.4rem' }}>
                <Magnetic>
                  <Link href="/contact" className="btn btn-primary btn-small">Contact</Link>
                </Magnetic>
              </li>
            </ul>
          </nav>
          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at 92% 4%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 92% 4%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 92% 4%)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile">
              {[{ label: 'Home', href: '/' }, ...nav, { label: 'Contact', href: '/contact' }].map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={n.href} onClick={() => setOpen(false)} className={isActive(n.href) ? 'grad-text' : undefined}>
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div className="mobile-menu-foot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <a href={`mailto:${person.email}`}>{person.email}</a>
              <span>{person.location}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

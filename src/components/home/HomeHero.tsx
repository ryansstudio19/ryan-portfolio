'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { Arrow } from '../Icons';
import InteractiveName from '../InteractiveName';
import { Magnetic } from '../motion';

const EASE = [0.22, 1, 0.36, 1] as const;
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } },
  transition: { duration: 0.9, delay, ease: EASE },
});

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // the hero drifts up, shrinks and dissolves as you scroll past it
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-26%']);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 0.8], ['blur(0px)', 'blur(12px)']);
  const spin = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const spinBack = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} className="hero hero-center" id="top">
      <div className="hero-orbits" aria-hidden="true">
        <motion.svg viewBox="0 0 1000 1000" style={{ rotate: spin }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.4 }}>
          <ellipse cx="500" cy="500" rx="470" ry="150" fill="none" stroke="url(#orbitA)" strokeWidth="1.2" strokeDasharray="3 14" />
          <defs>
            <linearGradient id="orbitA" x1="0" x2="1">
              <stop offset="0" stopColor="#00d4ff" stopOpacity="0" />
              <stop offset="0.5" stopColor="#00d4ff" stopOpacity="0.55" />
              <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>
        <motion.svg viewBox="0 0 1000 1000" style={{ rotate: spinBack }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.7 }}>
          <ellipse cx="500" cy="500" rx="420" ry="230" fill="none" stroke="rgba(124,58,237,0.28)" strokeWidth="1" transform="rotate(-18 500 500)" />
        </motion.svg>
      </div>

      <motion.div className="container hero-inner" style={{ y, opacity, scale, filter: blur }}>
        <motion.p className="hero-hello" {...fade(0.05)}>Hi, I&apos;m</motion.p>
        <InteractiveName />
        <motion.p className="hero-role" {...fade(0.75)}>
          SOFTWARE ENGINEER &amp; DIGITAL BUILDER
        </motion.p>
        <motion.p className="hero-sub" {...fade(0.9)}>
          I design and build digital products, from the first sketch to launch, and lead <strong>QORVAYN</strong>, the
          technology company behind <strong>eSkypixx</strong>, <strong>RYNEKA</strong> and <strong>GoalWear</strong>.
        </motion.p>
        <motion.div className="hero-actions" {...fade(1.05)}>
          <Magnetic>
            <Link href="/work" className="btn btn-primary">
              See my work <Arrow />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/contact" className="btn btn-ghost">Get in touch</Link>
          </Magnetic>
        </motion.div>
      </motion.div>
      <motion.div className="scroll-cue" style={{ opacity }} aria-hidden="true">SCROLL</motion.div>
    </section>
  );
}

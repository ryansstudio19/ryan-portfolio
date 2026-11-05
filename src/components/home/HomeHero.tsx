'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { photos } from '@/data/site';
import { Arrow } from '../Icons';
import Img from '../Img';
import InteractiveName from '../InteractiveName';
import { Magnetic, TiltCard } from '../motion';

const EASE = [0.22, 1, 0.36, 1] as const;
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.9, delay, ease: EASE },
});

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // the hero drifts up, shrinks and dissolves as you scroll past it
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 0.8], ['blur(0px)', 'blur(12px)']);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);

  return (
    <section ref={ref} className="hero" id="top">
      <div className="container" style={{ width: '100%' }}>
        <div className="hero-grid">
          <motion.div style={{ y: textY, opacity, scale, filter: blur, transformOrigin: '0% 50%' }}>
            <motion.div className="hero-badge" {...fade(0.05)}>
              <img src="/images/brand/qorvayn-240.webp" alt="" width={22} height={22} />
              Founder & CEO of QORVAYN
            </motion.div>
            <InteractiveName />
            <motion.p className="hero-role" {...fade(0.75)}>
              SOFTWARE ENGINEER &amp; DIGITAL BUILDER
            </motion.p>
            <motion.p className="hero-sub" {...fade(0.9)}>
              I build products people use, and lead <strong>QORVAYN</strong>, the technology company behind{' '}
              <strong>eSkypixx</strong>, <strong>RYNEKA</strong> and <strong>GoalWear</strong>. Based in Dhaka, Bangladesh.
            </motion.p>
            <motion.div className="hero-actions" {...fade(1.05)}>
              <Magnetic>
                <Link href="/#work" className="btn btn-primary">
                  See my work <Arrow />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/about" className="btn btn-ghost">More about me</Link>
              </Magnetic>
            </motion.div>
          </motion.div>

          <motion.div className="hero-photo" style={{ y: photoY, opacity, rotate: photoRotate }}>
            <motion.div
              style={{ position: 'absolute', inset: 0 }}
              initial={{ opacity: 0, scale: 0.92, filter: 'blur(16px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
              transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
            >
              <TiltCard className="photo" max={7} style={{ position: 'absolute', inset: 0 }}>
                <Img src={photos.office.src} alt={photos.office.alt} sizes="(max-width: 900px) 90vw, 36vw" priority />
                <span className="hud" aria-hidden="true"><i /><i /><i /><i /></span>
              </TiltCard>
            </motion.div>
            <motion.div className="hero-tag t1" {...fade(1.2)}>
              Founded QORVAYN
              <small>10 March 2026</small>
            </motion.div>
            <motion.div className="hero-tag t2" {...fade(1.35)}>
              5+ years of experience
              <small>Freelance, agency &amp; founder</small>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div className="scroll-cue" style={{ opacity }} aria-hidden="true">SCROLL</motion.div>
    </section>
  );
}

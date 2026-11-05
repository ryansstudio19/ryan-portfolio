'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, type ReactNode } from 'react';
import { Arrow } from './Icons';
import { WordReveal } from './motion';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageHero({
  title,
  gradientWords = [],
  badge,
  children,
  aside,
}: {
  title: string;
  gradientWords?: string[];
  badge?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.9], ['blur(0px)', 'blur(10px)']);

  return (
    <section ref={ref} className="page-hero">
      <motion.div className="container" style={{ y, opacity, filter: blur }}>
        <div className={aside ? 'split center' : undefined}>
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: EASE }}>
              <Link href="/" className="back"><Arrow /> Back to home</Link>
            </motion.div>
            {badge && (
              <motion.div style={{ marginTop: '1.5rem' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6, ease: EASE }}>
                {badge}
              </motion.div>
            )}
            <WordReveal text={title} as="h1" className="h1" gradientWords={gradientWords} immediate delay={0.15} />
            <motion.div
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
              transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
            >
              {children}
            </motion.div>
          </div>
          {aside && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, filter: 'blur(14px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
              transition={{ delay: 0.35, duration: 1.1, ease: EASE }}
            >
              {aside}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

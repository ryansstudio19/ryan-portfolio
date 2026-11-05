'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { photos } from '@/data/site';
import Img from '../Img';
import { TiltCard } from '../motion';

const items = [
  { ...photos.rooftop, caption: 'Rooftop, Dhaka', land: false },
  { ...photos.sky, caption: 'Under open sky', land: true },
  { ...photos.portrait, caption: 'Off the clock', land: false },
  { ...photos.mono, caption: 'Thinking it through', land: false },
  { ...photos.office, caption: 'At the desk', land: false },
];

// A row of photos that slides sideways as the page scrolls down (and back).
export default function PhotoStrip() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['8%', '-48%']);

  return (
    <section ref={ref} className="hgallery" aria-label="Photos of Ryan">
      <motion.div className="hgallery-track" style={{ x }}>
        {items.map((p) => (
          <TiltCard key={p.src} className={`photo${p.land ? ' land' : ''}`} max={6}>
            <Img src={p.src} alt={p.alt} sizes="(max-width: 760px) 70vw, 40vw" />
            <span className="photo-caption">{p.caption}</span>
          </TiltCard>
        ))}
      </motion.div>
    </section>
  );
}

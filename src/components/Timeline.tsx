'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { timeline } from '@/data/site';

// The rail fills as you scroll through the story; each step slides in from the side.
export default function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <ol ref={ref} className="timeline" style={{ listStyle: 'none' }}>
      <span className="timeline-rail" aria-hidden="true">
        <motion.span className="timeline-fill" style={{ scaleY: fill }} />
      </span>
      {timeline.map((t) => (
        <motion.li
          key={t.year + t.title}
          className="t-item"
          initial={{ opacity: 0, x: 60, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="t-year">{t.year}</p>
          <h3 className="h3">{t.title}</h3>
          <p>{t.text}</p>
        </motion.li>
      ))}
    </ol>
  );
}

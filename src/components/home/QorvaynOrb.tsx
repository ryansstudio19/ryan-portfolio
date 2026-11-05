'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const nodes = [
  { label: 'eSkypixx', angle: -60 },
  { label: 'RYNEKA', angle: 40 },
  { label: 'GoalWear', angle: 150 },
  { label: 'Next…', angle: 235 },
];

// The QORVAYN mark at the centre of its ecosystem; rings turn as the page scrolls.
export default function QorvaynOrb() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const spin = useTransform(scrollYProgress, [0, 1], [-50, 70]);
  const spinBack = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.04, 0.92]);

  return (
    <div ref={ref} className="orb" aria-hidden="true">
      <div className="orb-glow" />
      <motion.div className="orb-ring r1" style={{ rotate: spin }} />
      <motion.div className="orb-ring r2" style={{ rotate: spinBack }} />
      <motion.img src="/images/brand/qorvayn-640.webp" alt="" style={{ scale: logoScale }} width={640} height={640} />
      {nodes.map((n, i) => (
        <motion.span
          key={n.label}
          className="orb-node"
          style={{
            transform: `translate(-50%, -50%) rotate(${n.angle}deg) translate(44cqw) rotate(${-n.angle}deg)`,
            color: n.label === 'Next…' ? 'var(--muted)' : undefined,
            borderStyle: n.label === 'Next…' ? 'dashed' : undefined,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
        >
          {n.label}
        </motion.span>
      ))}
    </div>
  );
}

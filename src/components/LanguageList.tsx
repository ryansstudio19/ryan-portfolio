'use client';

import { motion } from 'framer-motion';
import { languages } from '@/data/site';

const LEVEL = { 'Professional working': 4, Elementary: 2 } as const;

export default function LanguageList() {
  return (
    <div className="lang-grid">
      {languages.map((l, i) => (
        <motion.div
          key={l.name}
          className="lang"
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="lang-name">{l.name}</span>
          <span className="lang-level">{l.level} proficiency</span>
          <span className="meter" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, b) => (
              <motion.i
                key={b}
                className={b < LEVEL[l.level] ? 'on' : undefined}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.15 + b * 0.08, duration: 0.5 }}
              />
            ))}
          </span>
          {l.note && <span className="lang-note">{l.note}</span>}
        </motion.div>
      ))}
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { products } from '@/data/site';
import { Arrow } from '../Icons';

// A compact list of products for the home page; each row links to its own page.
export default function ProductRows() {
  return (
    <ul className="rows" style={{ listStyle: 'none' }}>
      {products.map((p, i) => (
        <motion.li
          key={p.slug}
          initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.85, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href={p.href} className={`row row-${p.accent}`} data-cursor="VIEW">
            <span className="row-name">{p.name}</span>
            <span className="row-meta">
              <span>{p.kind}</span>
              <span className="status">{p.status}</span>
            </span>
            <span className="row-arrow" aria-hidden="true"><Arrow /></span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

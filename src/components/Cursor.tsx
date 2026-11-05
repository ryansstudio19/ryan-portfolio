'use client';

import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

type Mode = 'default' | 'hover' | 'text';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<Mode>('default');
  const [label, setLabel] = useState<string | null>(null);
  const [down, setDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 420, damping: 34, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 420, damping: 34, mass: 0.6 });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => {
      setEnabled(mq.matches);
      document.body.classList.toggle('has-cursor', mq.matches);
    };
    update();
    mq.addEventListener('change', update);
    return () => {
      mq.removeEventListener('change', update);
      document.body.classList.remove('has-cursor');
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as Element | null;
      const labelled = t?.closest<HTMLElement>('[data-cursor]');
      if (labelled) {
        setMode('hover');
        setLabel(labelled.dataset.cursor || null);
        return;
      }
      setLabel(null);
      if (t?.closest('input, textarea, select')) setMode('text');
      else if (t?.closest('a, button, [role="button"], label, .letter')) setMode('hover');
      else setMode('default');
    };
    const leave = () => setVisible(false);
    const pd = () => setDown(true);
    const pu = () => setDown(false);
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', pd);
    window.addEventListener('pointerup', pu);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', pd);
      window.removeEventListener('pointerup', pu);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const ringScale = label ? 2.3 : mode === 'hover' ? 1.6 : mode === 'text' ? 0.6 : 1;

  return (
    <>
      <motion.div
        className="cursor-dot"
        aria-hidden="true"
        style={{ x, y }}
        animate={{ opacity: visible && !label ? 1 : 0, scale: down ? 0.6 : mode === 'hover' ? 0.5 : 1 }}
        transition={{ duration: 0.18 }}
      />
      <motion.div
        className={`cursor-ring${mode === 'hover' ? ' is-hover' : ''}${mode === 'text' ? ' is-text' : ''}`}
        aria-hidden="true"
        style={{ x: rx, y: ry }}
        animate={{ opacity: visible ? 1 : 0, scale: down ? ringScale * 0.85 : ringScale }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              className="cursor-label"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 / 2.3 }}
              exit={{ opacity: 0, scale: 0.6 }}
              style={{ fontSize: '0.78rem' }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

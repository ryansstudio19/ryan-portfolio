'use client';

import { animate, motion, type Variants } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

const LINES = ['RYAN', 'ZANNAH'];

const intro: Variants = {
  hidden: { y: '110%', opacity: 0, filter: 'blur(12px)', rotate: 8 },
  show: (i: number) => ({
    y: '0%',
    opacity: 1,
    filter: 'blur(0px)',
    rotate: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.055, ease: [0.22, 1, 0.36, 1] },
  }),
};

/**
 * "RYAN ZANNAH" where every letter jumps and wobbles when the cursor touches it,
 * or when a finger taps or slides across it on touch screens. Page scroll is never blocked.
 */
export default function InteractiveName({ className = 'hero-name' }: { className?: string }) {
  const letters = useRef<(HTMLSpanElement | null)[]>([]);
  const busyUntil = useRef<number[]>([]);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const bounce = useCallback((i: number, strength = 1) => {
    const el = letters.current[i];
    if (!el || reduce.current) return;
    const now = performance.now();
    if ((busyUntil.current[i] ?? 0) > now) return;
    busyUntil.current[i] = now + (strength === 1 ? 420 : 300);
    const s = strength;
    const tilt = (i % 2 === 0 ? -1 : 1) * 13 * s;
    animate(
      el,
      {
        y: ['0%', `${-34 * s}%`, '0%', `${-9 * s}%`, '0%'],
        rotate: [0, tilt, -tilt * 0.7, tilt * 0.3, 0],
        scaleX: [1, 1 - 0.1 * s, 1 + 0.13 * s, 1 - 0.03 * s, 1],
        scaleY: [1, 1 + 0.12 * s, 1 - 0.14 * s, 1 + 0.04 * s, 1],
        filter: [
          'drop-shadow(0 0 0px rgba(0,212,255,0))',
          `drop-shadow(0 0 ${18 * s}px rgba(0,212,255,0.9))`,
          'drop-shadow(0 0 6px rgba(255,0,110,0.6))',
          'drop-shadow(0 0 0px rgba(0,212,255,0))',
          'drop-shadow(0 0 0px rgba(0,212,255,0))',
        ],
      },
      { duration: 0.85, ease: 'easeOut', times: [0, 0.28, 0.58, 0.8, 1] },
    );
  }, []);

  const hit = useCallback(
    (i: number) => {
      bounce(i, 1);
      // a small ripple into the neighbours
      window.setTimeout(() => { bounce(i - 1, 0.45); bounce(i + 1, 0.45); }, 70);
    },
    [bounce],
  );

  // Touch: find the letter under the finger on every move.
  const fromTouch = useCallback(
    (e: React.TouchEvent) => {
      for (const t of Array.from(e.touches)) {
        const el = document.elementFromPoint(t.clientX, t.clientY) as HTMLElement | null;
        const idx = el?.closest<HTMLElement>('[data-letter]')?.dataset.letter;
        if (idx !== undefined) hit(Number(idx));
      }
    },
    [hit],
  );

  // One wave across the name after it lands, as a hint that the letters are alive.
  useEffect(() => {
    const total = LINES.join('').length;
    const timers: number[] = [];
    timers.push(
      window.setTimeout(() => {
        for (let i = 0; i < total; i++) timers.push(window.setTimeout(() => bounce(i, 0.7), i * 70));
      }, 1500),
    );
    return () => timers.forEach(clearTimeout);
  }, [bounce]);

  let n = 0;
  return (
    <h1 className={className} onTouchStart={fromTouch} onTouchMove={fromTouch}>
      <span className="sr-only">Ryan Zannah</span>
      {LINES.map((line, li) => {
        const chars = line.split('');
        return (
          <span className="name-line" key={line} aria-hidden="true">
            {chars.map((c, ci) => {
              const i = n++;
              const grad = li === 1;
              return (
                <motion.span
                  key={`${line}-${ci}`}
                  style={{ display: 'inline-block' }}
                  variants={intro}
                  initial="hidden"
                  animate="show"
                  custom={i}
                >
                  <span
                    ref={(el) => { letters.current[i] = el; }}
                    data-letter={i}
                    className={`letter${grad ? ' letter-grad' : ''}`}
                    style={
                      grad
                        ? ({ '--bs': `${chars.length * 100}%`, '--bp': `${(ci / (chars.length - 1)) * 100}%` } as React.CSSProperties)
                        : undefined
                    }
                    onPointerEnter={(e) => { if (e.pointerType !== 'touch') hit(i); }}
                    onPointerDown={() => hit(i)}
                  >
                    {c}
                  </span>
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}

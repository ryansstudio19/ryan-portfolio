'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  type Variants,
} from 'framer-motion';
import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

/* ---------- helpers ---------- */
function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setFine(mq.matches);
    const on = () => setFine(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return fine;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- Scroll progress bar ---------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

/* ---------- Reveal: slides in out of a blur, replays when scrolled back ---------- */
type From = 'up' | 'left' | 'right' | 'scale';
const offsets: Record<From, { x?: number; y?: number; scale?: number }> = {
  up: { y: 60 },
  left: { x: -90 },
  right: { x: 90 },
  scale: { scale: 0.9, y: 30 },
};

export function Reveal({
  children,
  from = 'up',
  delay = 0,
  className,
  as = 'div',
  amount = 0.2,
  ...rest
}: {
  children: ReactNode;
  from?: From;
  delay?: number;
  className?: string;
  as?: ElementType;
  amount?: number;
  [key: string]: unknown;
}) {
  const Comp = (motion as unknown as Record<string, ElementType>)[as as string] ?? motion.div;
  const o = offsets[from];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, filter: 'blur(14px)', ...o }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0, scale: 1, transitionEnd: { filter: 'none' } }}
      viewport={{ once: false, amount, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.95, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/* Stagger container + item for lists/grids */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE }, transitionEnd: { filter: 'none' } },
};

export function Stagger({ children, className, amount = 0.15 }: { children: ReactNode; className?: string; amount?: number }) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount }}
    >
      {children}
    </motion.div>
  );
}
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

/* ---------- Word-by-word heading ---------- */
export function WordReveal({
  text,
  as = 'h2',
  className,
  delay = 0,
  gradientWords = [],
  immediate = false,
}: {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
  gradientWords?: string[];
  immediate?: boolean;
}) {
  const Tag = as;
  const words = text.split(' ');
  const parent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: delay } } };
  const child: Variants = {
    hidden: { y: '110%', opacity: 0, filter: 'blur(8px)', rotate: 4 },
    show: { y: '0%', opacity: 1, filter: 'blur(0px)', rotate: 0, transition: { duration: 0.85, ease: EASE } },
  };
  const viewportProps = immediate
    ? { animate: 'show' }
    : { whileInView: 'show', viewport: { once: false, amount: 0.6 } };
  return (
    <Tag className={className} aria-label={text}>
      <motion.span className="words" variants={parent} initial="hidden" {...viewportProps} aria-hidden="true">
        {words.map((w, i) => (
          <span className="word-mask" key={`${w}-${i}`}>
            <motion.span className={`word${gradientWords.includes(w) ? ' grad-text' : ''}`} variants={child}>
              {w}
            </motion.span>
            {i < words.length - 1 ? ' ' : null}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* ---------- Magnetic: pulls toward the pointer, springs back ---------- */
export function Magnetic({ children, strength = 0.35, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const fine = useFinePointer();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 15, mass: 0.4 });

  const onMove = (e: React.PointerEvent) => {
    if (!fine || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.span
      ref={ref}
      className={`magnetic${className ? ` ${className}` : ''}`}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.span>
  );
}

/* ---------- Tilt card: leans toward the cursor with a moving glare ---------- */
export function TiltCard({
  children,
  className,
  max = 9,
  as = 'div',
  style,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  as?: ElementType;
  style?: Record<string, unknown>;
  [key: string]: unknown;
}) {
  const fine = useFinePointer();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 180, damping: 18 });
  const rotY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 180, damping: 18 });
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.2), transparent 55%)`;
  const Comp = (motion as unknown as Record<string, ElementType>)[as as string] ?? motion.div;

  return (
    <Comp
      className={`tilt ${className ?? ''}`}
      style={fine ? { ...style, rotateX: rotX, rotateY: rotY, transformPerspective: 1000 } : style}
      onPointerMove={(e: React.PointerEvent<HTMLElement>) => {
        if (!fine) return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => { px.set(0.5); py.set(0.5); }}
      {...rest}
    >
      {children}
      {fine && <motion.span className="tilt-glare" style={{ background: glare }} aria-hidden="true" />}
    </Comp>
  );
}

/* ---------- Marquee: infinite strip that speeds up and flips with scroll ---------- */
function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export function Marquee({ items, baseVelocity = -2.2, tilted = false }: { items: string[]; baseVelocity?: number; tilted?: boolean }) {
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(base, (v) => `${wrap(-50, 0, v)}%`);
  const dir = useRef(1);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = dir.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * move * Math.abs(f);
    base.set(base.get() + move);
  });

  const row = (key: string) => (
    <div className="marquee-item-group" key={key} style={{ display: 'flex' }}>
      {items.map((t, i) => (
        <span className="marquee-item" key={`${key}-${i}`}>
          {t}
          <svg className="marquee-star" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee${tilted ? ' tilted' : ''}`}>
      <p className="sr-only">{items.join(', ')}</p>
      <motion.div className="marquee-track" style={{ x }} aria-hidden="true">
        {row('a')}
        {row('b')}
      </motion.div>
    </div>
  );
}

/* ---------- Parallax: element drifts at a different speed than the page ---------- */
export function Parallax({ children, offset = 80, className }: { children: ReactNode; offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

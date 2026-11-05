'use client';

import { MotionConfig } from 'framer-motion';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

const LenisContext = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisContext);

export default function Providers({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touchOnly = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    // Smooth scrolling only helps mouse wheels; phones keep their own native scrolling.
    if (reduce || touchOnly) return;
    // Smooth wheel scrolling on desktop; touch keeps native momentum scrolling.
    const instance = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: { offset: -80 } });
    setLenis(instance);
    const raf = (time: number) => {
      instance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafRef.current);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  // Back/forward should restore the previous position, so remember when one happens.
  const lenisRef = useRef<Lenis | null>(null);
  lenisRef.current = lenis;
  const fromHistory = useRef(false);
  const firstPath = useRef(true);
  useEffect(() => {
    const onPop = () => { fromHistory.current = true; };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // A link to a new page starts at the top (or at the section its URL names).
  // The first load and back/forward keep the browser's own scroll position.
  useEffect(() => {
    if (firstPath.current) { firstPath.current = false; return; }
    if (fromHistory.current) { fromHistory.current = false; return; }
    const l = lenisRef.current;
    const hash = window.location.hash;
    const el = hash ? document.querySelector<HTMLElement>(hash) : null;
    if (el) {
      const t = window.setTimeout(() => {
        if (l) l.scrollTo(el, { offset: -80, immediate: true });
        else el.scrollIntoView();
      }, 60);
      return () => window.clearTimeout(t);
    }
    if (l) l.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LenisContext.Provider value={lenis}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LenisContext.Provider>
  );
}

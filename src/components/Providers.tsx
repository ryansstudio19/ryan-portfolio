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
    if (reduce) return;
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

  // New page: start at the top, unless the URL targets a section.
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const t = window.setTimeout(() => {
          if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -80, immediate: true });
          else (el as HTMLElement).scrollIntoView();
        }, 60);
        return () => window.clearTimeout(t);
      }
    }
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return (
    <LenisContext.Provider value={lenis}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LenisContext.Provider>
  );
}

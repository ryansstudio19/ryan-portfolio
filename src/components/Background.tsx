'use client';

import { useEffect, useRef } from 'react';

// The original site's particle field: drifting cyan/indigo particles, faint grid,
// slow dashed orbit rings, and particles that part around the pointer.
export default function Background() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 760px)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    const mouse = { x: -9999, y: -9999 };
    const COUNT = small ? 45 : 90;
    const LINK = small ? 100 : 120;

    type P = { x: number; y: number; z: number; vx: number; vy: number; r: number; a: number; c: string };
    const particles: P[] = [];
    const spawn = (init: boolean): P => {
      const z = Math.random() * 2 + 0.5;
      return {
        x: Math.random() * W,
        y: init ? Math.random() * H : H + 10,
        z,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.35 + 0.08) * z,
        r: Math.random() * 1.4 + 0.5,
        a: Math.random() * 0.55 + 0.2,
        c: Math.random() > 0.5 ? '0,212,255' : '124,58,237',
      };
    };

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    for (let i = 0; i < COUNT; i++) particles.push(spawn(true));

    let ring = 0;
    let raf = 0;
    let running = true;

    const frame = () => {
      ctx.clearRect(0, 0, W, H);

      // grid
      ctx.strokeStyle = 'rgba(0,212,255,0.022)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < W; x += 60) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, H); }
      for (let y = 0; y < H; y += 60) { ctx.moveTo(0, y + 0.5); ctx.lineTo(W, y + 0.5); }
      ctx.stroke();

      // orbit rings
      ctx.save();
      ctx.translate(W / 2, H / 2);
      ctx.setLineDash([4, 20]);
      for (let r = 0; r < 3; r++) {
        ctx.save();
        ctx.rotate(ring * (r % 2 === 0 ? 1 : -1) + r * 0.5);
        ctx.scale(1, 0.3 + r * 0.15);
        ctx.beginPath();
        ctx.arc(0, 0, Math.min(W, 1400) * 0.2 + r * 110, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,212,255,${0.045 - r * 0.01})`;
        ctx.stroke();
        ctx.restore();
      }
      ctx.restore();
      ctx.setLineDash([]);
      if (!reduce) ring += 0.0018;

      // particles
      for (const p of particles) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < 120 && d > 0) { p.x += (dx / d) * 1.4; p.y += (dy / d) * 1.4; }
          if (p.y < -10) Object.assign(p, spawn(false));
        }
        const rr = p.r * p.z;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rr * 3);
        g.addColorStop(0, `rgba(${p.c},0.16)`);
        g.addColorStop(1, `rgba(${p.c},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rr * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${p.c},${p.a})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rr, 0, Math.PI * 2);
        ctx.fill();
      }

      // links
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (Math.abs(dx) > LINK || Math.abs(dy) > LINK) continue;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(0,212,255,${(1 - d / LINK) * 0.14})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (running && !reduce) raf = requestAnimationFrame(frame);
    };
    frame();

    const onMove = (e: PointerEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onVis = () => {
      running = !document.hidden;
      cancelAnimationFrame(raf);
      if (running && !reduce) raf = requestAnimationFrame(frame);
    };
    const onResize = () => { resize(); if (reduce) frame(); };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <>
      <div className="bg-aura" aria-hidden="true" />
      <canvas ref={ref} className="bg-canvas" aria-hidden="true" />
    </>
  );
}

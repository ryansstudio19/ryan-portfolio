// Orbyn's signature idea drawn as a picture: two local times on one 24-hour dial, noon at the top.
// Purely decorative; the hands sit at fixed example times so the static export stays identical everywhere.
export default function OrbynDial({ className }: { className?: string }) {
  const cx = 200;
  const cy = 200;
  const ticks = Array.from({ length: 24 }, (_, h) => {
    const a = ((h - 12) / 24) * Math.PI * 2; // noon at the top
    const major = h % 6 === 0;
    const r1 = major ? 150 : 158;
    return {
      x1: cx + Math.sin(a) * r1, y1: cy - Math.cos(a) * r1,
      x2: cx + Math.sin(a) * 168, y2: cy - Math.cos(a) * 168, major,
    };
  });
  const at = (hour: number, r: number) => {
    const a = ((hour - 12) / 24) * Math.PI * 2;
    return { x: cx + Math.sin(a) * r, y: cy - Math.cos(a) * r };
  };
  const me = at(21.5, 168); // evening in one city
  const you = at(15.5, 168); // afternoon in the other
  const arcStart = at(15.5, 186);
  const arcEnd = at(21.5, 186);

  return (
    <svg className={className} viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        <radialGradient id="orbyn-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0" stopColor="#ff5c8a" stopOpacity="0.28" />
          <stop offset="1" stopColor="#ff5c8a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r="196" fill="url(#orbyn-glow)" />
      <circle cx={cx} cy={cy} r="168" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r="120" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="3 9" />
      {ticks.map((t, i) => (
        <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="currentColor" strokeOpacity={t.major ? 0.8 : 0.35} strokeWidth={t.major ? 2 : 1} />
      ))}
      <path d={`M ${arcStart.x} ${arcStart.y} A 186 186 0 0 1 ${arcEnd.x} ${arcEnd.y}`} fill="none" stroke="#ff5c8a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={me.x} y2={me.y} stroke="#ff5c8a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={you.x} y2={you.y} stroke="#ffd3df" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={me.x} cy={me.y} r="8" fill="#ff5c8a" />
      <circle cx={you.x} cy={you.y} r="8" fill="#ffd3df" />
      <circle cx={cx} cy={cy} r="5" fill="#ffd3df" />
      <path d="M200 236c-9-6-16-11-16-18a8 8 0 0 1 16-3 8 8 0 0 1 16 3c0 7-7 12-16 18Z" fill="#ff5c8a" opacity="0.9" />
    </svg>
  );
}

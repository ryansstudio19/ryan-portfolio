import Link from 'next/link';
import { products } from '@/data/site';
import { Arrow } from './Icons';
import { Reveal, TiltCard } from './motion';

function PitchPattern() {
  return (
    <svg className="pattern" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2">
        <rect x="20" y="15" width="360" height="195" />
        <line x1="200" y1="15" x2="200" y2="210" />
        <circle cx="200" cy="112" r="34" />
        <rect x="20" y="62" width="52" height="100" />
        <rect x="328" y="62" width="52" height="100" />
        <rect x="20" y="88" width="20" height="48" />
        <rect x="360" y="88" width="20" height="48" />
      </g>
    </svg>
  );
}

function NeuralPattern() {
  const pts = [
    [60, 50], [130, 30], [210, 70], [300, 40], [350, 110], [280, 150], [190, 175], [100, 160], [40, 120], [160, 110], [240, 115],
  ];
  const links = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 0], [9, 0], [9, 2], [9, 7], [9, 10], [10, 3], [10, 5], [10, 6], [1, 9]];
  return (
    <svg className="pattern" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="1">
        {links.map(([a, b], i) => <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} />)}
      </g>
      <g fill="currentColor">
        {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i === 9 || i === 10 ? 5 : 3} fillOpacity={0.8} />)}
      </g>
    </svg>
  );
}

export default function WorkGrid() {
  const [sky, ryneka, goalwear] = products;
  return (
    <div className="work-grid">
      <Reveal from="left" className="work-cell full" amount={0.25}>
        <TiltCard className="work-card featured panel" max={5} data-cursor="VIEW">
          <div className="work-visual">
            <div className="visual-mosaic">
              <img src="/images/sky/mountain-900.webp" alt="" loading="lazy" />
              <img src="/images/sky/sunset-900.webp" alt="" loading="lazy" />
              <img src="/images/sky/night-900.webp" alt="" loading="lazy" />
            </div>
          </div>
          <div className="work-body">
            <div className="work-top">
              <span className="work-kind">{sky.kind}</span>
              <span className="status">{sky.status}</span>
            </div>
            <h3 className="work-name">{sky.name}</h3>
            <p className="work-line">{sky.line}</p>
            <span className="work-link">EXPLORE eSKYPIXX <Arrow /></span>
          </div>
          <Link href={sky.href} className="card-link" aria-label={`Open ${sky.name}`} />
        </TiltCard>
      </Reveal>

      <Reveal from="left" className="work-cell" delay={0.05} amount={0.25}>
        <TiltCard className="work-card panel" data-cursor="VIEW">
          <div className="work-visual">
            <div className="visual-type visual-indigo">
              <NeuralPattern />
              <span className="big">RY</span>
            </div>
          </div>
          <div className="work-body">
            <div className="work-top">
              <span className="work-kind">{ryneka.kind}</span>
              <span className="status">{ryneka.status}</span>
            </div>
            <h3 className="work-name">{ryneka.name}</h3>
            <p className="work-line">{ryneka.line}</p>
            <span className="work-link">EXPLORE RYNEKA <Arrow /></span>
          </div>
          <Link href={ryneka.href} className="card-link" aria-label={`Open ${ryneka.name}`} />
        </TiltCard>
      </Reveal>

      <Reveal from="right" className="work-cell" delay={0.12} amount={0.25}>
        <TiltCard className="work-card panel" data-cursor="VIEW">
          <div className="work-visual">
            <div className="visual-type visual-pink">
              <PitchPattern />
              <span className="big">GW</span>
            </div>
          </div>
          <div className="work-body">
            <div className="work-top">
              <span className="work-kind">{goalwear.kind}</span>
              <span className="status">{goalwear.status}</span>
            </div>
            <h3 className="work-name">{goalwear.name}</h3>
            <p className="work-line">{goalwear.line}</p>
            <span className="work-link">EXPLORE GOALWEAR <Arrow /></span>
          </div>
          <Link href={goalwear.href} className="card-link" aria-label={`Open ${goalwear.name}`} />
        </TiltCard>
      </Reveal>

      <Reveal from="up" className="work-cell full" amount={0.4}>
        <div className="future-card panel">
          <div>
            <h3 className="h3">More QORVAYN products are in development.</h3>
            <p className="muted" style={{ marginTop: '0.35rem' }}>New tools are being planned and built. Follow along for what comes next.</p>
          </div>
          <Link href="/coming-soon" className="btn btn-ghost btn-small">What&apos;s next <Arrow /></Link>
        </div>
      </Reveal>
    </div>
  );
}

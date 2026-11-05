import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs } from '@/components/StructuredData';
import Link from 'next/link';
import { Arrow, Brain, Gem, Heart, Layers, Lock, Code } from '@/components/Icons';
import { Magnetic, Reveal, Stagger, StaggerItem, TiltCard, WordReveal } from '@/components/motion';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = pageMeta({
  title: 'RYNEKA',
  path: '/ryneka',
  og: 'ryneka',
  description: 'RYNEKA is an AI operating system concept from QORVAYN, designed to help people think, create, automate and manage their digital lives.',
});

const principles = [
  { icon: Code, name: 'Open by default', text: 'Built on open technologies, to earn trust through transparency.' },
  { icon: Lock, name: 'Privacy first', text: 'People keep control of their data and their decisions.' },
  { icon: Heart, name: 'Free before paid', text: 'The core experience should be available to as many people as possible.' },
  { icon: Layers, name: 'Modular', text: 'Pieces that adapt to different workflows instead of one rigid app.' },
  { icon: Brain, name: 'Works with you', text: 'Assists your thinking and work. You stay the final authority.' },
  { icon: Gem, name: 'Calm craft', text: 'Fast, light and polished. Futuristic without visual noise.' },
];

const flow = ['You bring context', 'RYNEKA understands it', 'It helps you think', 'It creates and automates', 'You stay in control'];

const audience = ['Students', 'Developers', 'Designers', 'Freelancers', 'Content creators', 'Small businesses', 'Researchers'];

export default function Ryneka() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Work', path: '/work' }, { name: 'RYNEKA', path: '/ryneka' }]} />
      <PageHero
        title="RYNEKA"
        gradientWords={['RYNEKA']}
        badge={<span className="status">Concept & planning at QORVAYN</span>}
        aside={
          <TiltCard className="panel visual-type visual-indigo" max={7} style={{ position: 'relative', aspectRatio: '4 / 3.4', borderRadius: 22, overflow: 'hidden' }}>
            <svg className="pattern" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <g stroke="currentColor" strokeOpacity="0.4" strokeWidth="1">
                <line x1="60" y1="70" x2="150" y2="40" /><line x1="150" y1="40" x2="250" y2="90" /><line x1="250" y1="90" x2="340" y2="60" />
                <line x1="340" y1="60" x2="360" y2="170" /><line x1="360" y1="170" x2="270" y2="230" /><line x1="270" y1="230" x2="160" y2="250" />
                <line x1="160" y1="250" x2="70" y2="200" /><line x1="70" y1="200" x2="60" y2="70" /><line x1="200" y1="150" x2="60" y2="70" />
                <line x1="200" y1="150" x2="250" y2="90" /><line x1="200" y1="150" x2="270" y2="230" /><line x1="200" y1="150" x2="70" y2="200" />
                <line x1="200" y1="150" x2="360" y2="170" />
              </g>
              <g fill="currentColor">
                {[[60, 70], [150, 40], [250, 90], [340, 60], [360, 170], [270, 230], [160, 250], [70, 200]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4" />)}
                <circle cx="200" cy="150" r="8" />
              </g>
            </svg>
            <span className="big">RY</span>
            <span className="hud" aria-hidden="true"><i /><i /><i /><i /></span>
          </TiltCard>
        }
      >
        <p className="lead">The future thinks with you.</p>
        <p className="muted" style={{ marginTop: '0.8rem', maxWidth: '56ch' }}>
          An AI operating system designed to help people think, create, automate and manage their digital lives, while
          keeping them in control.
        </p>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <Reveal><p className="kicker">// the direction</p></Reveal>
            <WordReveal text="An intelligent layer, not another chatbot" className="h2" gradientWords={['layer,']} />
          </div>
          <Reveal delay={0.1} className="prose">
            <p>
              Most AI waits for a question. RYNEKA is imagined as a contextual layer across your digital work: it
              understands what you&apos;re doing, helps you think it through, and takes care of repetitive steps.
            </p>
            <p>
              It&apos;s a <strong>concept-stage</strong> product inside <strong>QORVAYN</strong>. Everything on this page
              describes where it&apos;s headed, not a finished product.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// how it should work</p></Reveal>
            <WordReveal text="From context to control" className="h2" gradientWords={['control']} />
          </div>
          <Stagger className="steps">
            {flow.map((s, i) => (
              <StaggerItem key={s} className="step panel">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <p>{s}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// principles</p></Reveal>
            <WordReveal text="What it's built on" className="h2" />
          </div>
          <Stagger className="feature-grid">
            {principles.map((f) => (
              <StaggerItem key={f.name}>
                <TiltCard className="feature panel" max={8} style={{ height: '100%' }}>
                  <span className="feature-ico" style={{ color: '#a78bfa', background: 'rgba(124,58,237,0.12)' }}><f.icon /></span>
                  <h3 className="h3">{f.name}</h3>
                  <p>{f.text}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// who it&apos;s for</p></Reveal>
            <WordReveal text="People who live on their computers" className="h2" gradientWords={['computers']} />
          </div>
          <Reveal className="chips">
            {audience.map((a) => <span key={a} className="chip">{a}</span>)}
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <WordReveal text="Planning before building" className="h2" gradientWords={['building']} />
          <Reveal delay={0.1}><p className="lead">RYNEKA is in the concept and planning phase. Follow along as it takes shape.</p></Reveal>
          <Reveal delay={0.15} className="actions">
            <Magnetic><Link href="/contact" className="btn btn-primary">Follow the build <Arrow /></Link></Magnetic>
            <Magnetic><Link href="/qorvayn" className="btn btn-ghost">About QORVAYN</Link></Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}

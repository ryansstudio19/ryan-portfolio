import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { QorvaynSchema } from '@/components/StructuredData';
import Link from 'next/link';
import QorvaynOrb from '@/components/home/QorvaynOrb';
import { Arrow, Brand, Mail } from '@/components/Icons';
import { Magnetic, Reveal, Stagger, StaggerItem, TiltCard, WordReveal } from '@/components/motion';
import PageHero from '@/components/PageHero';
import WorkGrid from '@/components/WorkGrid';
import { photos, qorvayn } from '@/data/site';

export const metadata: Metadata = pageMeta({
  title: 'QORVAYN',
  path: '/qorvayn',
  og: 'qorvayn',
  description: 'QORVAYN is a technology company from Bangladesh, founded in March 2026, building intelligent, human-centered products: eSkypixx, RYNEKA and GoalWear.',
});

export default function Qorvayn() {
  return (
    <>
      <QorvaynSchema />
      <PageHero
        title="QORVAYN"
        gradientWords={['QORVAYN']}
        badge={<span className="status">Technology company, founded {qorvayn.founded}</span>}
        aside={<QorvaynOrb />}
      >
        <p className="lead">{qorvayn.summary}</p>
        <div className="q-meta">
          <span className="chip">{qorvayn.country}</span>
          <span className="chip">Remote-first</span>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="mv" style={{ gap: '1.25rem' }}>
            <Reveal from="left" className="panel" style={{ padding: 'clamp(1.5rem, 3.5vw, 2.75rem)' }}>
              <p className="kicker">// mission</p>
              <p className="statement" style={{ marginTop: '0.8rem' }}>{qorvayn.mission}</p>
            </Reveal>
            <Reveal from="right" delay={0.1} className="panel" style={{ padding: 'clamp(1.5rem, 3.5vw, 2.75rem)' }}>
              <p className="kicker">// vision</p>
              <p className="statement" style={{ marginTop: '0.8rem' }}>{qorvayn.vision}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// ecosystem</p></Reveal>
            <WordReveal text="One company, several directions" className="h2" gradientWords={['directions']} />
            <Reveal delay={0.1}>
              <p className="lead">Different products connected by the same focus: useful, accessible, human-centered technology.</p>
            </Reveal>
          </div>
          <WorkGrid />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <Reveal><p className="kicker">// story</p></Reveal>
            <WordReveal text="How it started" className="h2" />
            <Reveal delay={0.1} className="prose" style={{ marginTop: '1.4rem' }}>
              {qorvayn.story.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
          </div>
          <div>
            <Reveal><p className="kicker">// founders</p></Reveal>
            <Stagger className="people stack" amount={0.3}>
              {qorvayn.founders.map((f, i) => (
                <StaggerItem key={f.name}>
                  <TiltCard className="person panel" max={6} style={{ height: '100%' }}>
                    <span className="avatar">
                      {i === 0 ? (
                        <img src={`${photos.office.src}-600.webp`} alt="" style={{ objectPosition: '50% 20%' }} />
                      ) : (
                        f.name.split(' ').map((w) => w[0]).slice(0, 2).join('')
                      )}
                    </span>
                    <div>
                      <h3 className="h3">{f.name}</h3>
                      <p>{f.role}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <WordReveal text="Follow what QORVAYN builds next" className="h2" gradientWords={['next']} />
          <Reveal delay={0.1}>
            <p className="lead">Reach the company directly, or follow along on the official channels.</p>
          </Reveal>
          <Reveal delay={0.15} className="actions">
            <Magnetic>
              <a href={`mailto:${qorvayn.email}`} className="btn btn-primary"><Mail /> {qorvayn.email}</a>
            </Magnetic>
            <Magnetic><Link href="/contact" className="btn btn-ghost">Get in touch <Arrow /></Link></Magnetic>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="chips" style={{ justifyContent: 'center', marginTop: '2rem' }}>
              {qorvayn.socials.map((s) => (
                <a key={s.label} className="chip" href={s.href} target="_blank" rel="noopener noreferrer">
                  <Brand name={s.icon} width={15} height={15} /> {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

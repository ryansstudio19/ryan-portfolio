import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs } from '@/components/StructuredData';
import Link from 'next/link';
import { ArrowUpRight, Bag, Ball, Bolt, Gem, Layers, Shirt } from '@/components/Icons';
import { Magnetic, Marquee, Reveal, Stagger, StaggerItem, TiltCard, WordReveal } from '@/components/motion';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = pageMeta({
  title: 'GoalWear',
  path: '/goalwear',
  og: 'goalwear',
  description: 'GoalWear is a football jersey and streetwear brand: matchday player-edition drops, classic club kits and street culture. Built for matchday. Worn everywhere.',
});

const range = [
  { icon: Shirt, name: 'Player-edition drops', text: 'Matchday jerseys cut the way players wear them.' },
  { icon: Ball, name: 'Classic club kits', text: 'Iconic shirts from the clubs and eras people still talk about.' },
  { icon: Layers, name: 'Football streetwear', text: 'Pieces that take the game off the pitch and into the street.' },
];

const experience = [
  { icon: Bolt, name: 'Fast, mobile-first', text: 'Quick to browse on a phone, from the first tap to checkout.' },
  { icon: Bag, name: 'Clear shopping flow', text: 'Collections, search, size selection, wishlist and cart that make sense.' },
  { icon: Gem, name: 'Premium feel', text: 'Bold type, strong product photography and smooth transitions.' },
];

export default function GoalWear() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Work', path: '/work' }, { name: 'GoalWear', path: '/goalwear' }]} />
      <PageHero
        title="GoalWear"
        gradientWords={['GoalWear']}
        badge={<span className="status">QORVAYN e-commerce brand</span>}
        aside={
          <TiltCard className="panel visual-type visual-pink" max={7} style={{ position: 'relative', aspectRatio: '4 / 3.4', borderRadius: 22, overflow: 'hidden' }}>
            <svg className="pattern" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <g fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.3">
                <rect x="20" y="20" width="360" height="260" />
                <line x1="200" y1="20" x2="200" y2="280" />
                <circle cx="200" cy="150" r="44" />
                <rect x="20" y="85" width="62" height="130" />
                <rect x="318" y="85" width="62" height="130" />
              </g>
            </svg>
            <span className="big">GW</span>
            <span className="hud" aria-hidden="true"><i /><i /><i /><i /></span>
          </TiltCard>
        }
      >
        <p className="lead">Built for matchday. Worn everywhere.</p>
        <p className="muted" style={{ marginTop: '0.8rem', maxWidth: '56ch' }}>
          A football jersey and streetwear e-commerce brand: matchday player-edition drops, classic club kits and street culture.
        </p>
        <div className="hero-actions">
          <Magnetic>
            <a href="https://goalwear.online" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit goalwear.online <ArrowUpRight />
            </a>
          </Magnetic>
        </div>
      </PageHero>

      <Marquee items={['Built for matchday', 'Worn everywhere']} tilted baseVelocity={-2.6} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// the range</p></Reveal>
            <WordReveal text="Football culture, worn every day" className="h2" gradientWords={['culture,']} />
          </div>
          <Stagger className="feature-grid">
            {range.map((f) => (
              <StaggerItem key={f.name}>
                <TiltCard className="feature panel" max={8} style={{ height: '100%' }}>
                  <span className="feature-ico" style={{ color: 'var(--pink)', background: 'rgba(255,0,110,0.08)' }}><f.icon /></span>
                  <h3 className="h3">{f.name}</h3>
                  <p>{f.text}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <Reveal><p className="kicker">// the store</p></Reveal>
            <WordReveal text="A shop that moves like the game" className="h2" gradientWords={['game']} />
            <Reveal delay={0.1} className="prose" style={{ marginTop: '1.4rem' }}>
              <p>
                GoalWear is part of the <strong>QORVAYN</strong> ecosystem. The storefront is designed to feel as bold as
                the shirts: dark and cinematic, with strong typography and a quick path from discovery to checkout.
              </p>
            </Reveal>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {experience.map((f, i) => (
              <Reveal key={f.name} from="right" delay={i * 0.08}>
                <div className="feature panel" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="feature-ico" style={{ flex: 'none' }}><f.icon /></span>
                  <div>
                    <h3 className="h3" style={{ margin: '0 0 0.35rem' }}>{f.name}</h3>
                    <p>{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <WordReveal text="See GoalWear for yourself" className="h2" gradientWords={['GoalWear']} />
          <Reveal delay={0.1}><p className="lead">The store lives at its own home online.</p></Reveal>
          <Reveal delay={0.15} className="actions">
            <Magnetic>
              <a href="https://goalwear.online" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit goalwear.online <ArrowUpRight />
              </a>
            </Magnetic>
            <Magnetic><Link href="/qorvayn" className="btn btn-ghost">About QORVAYN</Link></Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}

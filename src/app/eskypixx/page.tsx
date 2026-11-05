import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow, Camera, Cube, Lock, Sparkle, Trophy, Users } from '@/components/Icons';
import { Magnetic, Marquee, Reveal, Stagger, StaggerItem, TiltCard, WordReveal } from '@/components/motion';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'eSkypixx',
  description:
    'eSkypixx is an AI-powered visual and social platform for nature, sky and photography, in development at QORVAYN by Ryan Zannah.',
};

const features = [
  { icon: Sparkle, name: 'AI curation', text: 'AI that helps moderate, organise and surface the best uploads.' },
  { icon: Cube, name: 'Immersive viewing', text: 'An exploratory, 3D-inspired way to move through photos.' },
  { icon: Camera, name: 'Sky & nature focus', text: 'One clear subject: skies, clouds, light and landscapes.' },
  { icon: Users, name: 'Social by design', text: 'Follow photographers, react, comment and share.' },
  { icon: Trophy, name: 'Highlights', text: 'Standout captures get the spotlight they deserve.' },
  { icon: Lock, name: 'Privacy first', text: 'People stay in control of their data and their work.' },
];

const gallery = [
  { src: '/images/sky/mountain-900.webp', alt: 'Mountain ridge under drifting cloud', tall: true },
  { src: '/images/sky/sunset-900.webp', alt: 'Photographer silhouetted against a sunset over the sea' },
  { src: '/images/sky/night-900.webp', alt: 'Starry night sky over a dark horizon' },
  { src: '/images/sky/rainbow-900.webp', alt: 'Rainbow across a bright sky' },
  { src: '/images/sky/ocean-900.webp', alt: 'Open ocean beneath a sunlit blue sky' },
];

export default function ESkypixx() {
  return (
    <>
      <PageHero
        title="eSkypixx"
        gradientWords={['eSkypixx']}
        badge={<span className="status">In development at QORVAYN</span>}
        aside={
          <TiltCard className="photo" max={6} style={{ aspectRatio: '4 / 5', maxWidth: 420, marginInline: 'auto' }}>
            <img src="/images/sky/mountain-900.webp" alt="Mountain ridge under drifting cloud" />
            <span className="hud" aria-hidden="true"><i /><i /><i /><i /></span>
            <span className="photo-caption">Nature, sky, photography</span>
          </TiltCard>
        }
      >
        <p className="lead">
          An AI-powered visual and social platform for nature, sky and photography: a home for people who stop to look up.
        </p>
      </PageHero>

      <Marquee items={['Sunsets', 'Clouds', 'Night skies', 'Horizons', 'Storms', 'Golden hour', 'Mountains', 'Oceans']} tilted />

      <section className="section">
        <div className="container split">
          <div>
            <Reveal><p className="kicker">// the idea</p></Reveal>
            <WordReveal text="Social media with one clear subject" className="h2" gradientWords={['subject']} />
          </div>
          <Reveal delay={0.1} className="prose">
            <p>
              eSkypixx is my flagship project inside <strong>QORVAYN</strong>. It&apos;s built for people who love capturing
              the sky and the natural world: clouds, sunsets, storms, stars and everything in between.
            </p>
            <p>
              Instead of a feed that tries to be everything, eSkypixx stays focused. AI helps keep quality high and
              organise what gets shared, so great photography gets the attention it deserves.
            </p>
            <p>The idea started in 2024. The platform is now in active development.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// planned features</p></Reveal>
            <WordReveal text="What it's designed to do" className="h2" />
            <Reveal delay={0.1}><p className="lead">These describe the product direction. Details may change as it&apos;s built.</p></Reveal>
          </div>
          <Stagger className="feature-grid">
            {features.map((f) => (
              <StaggerItem key={f.name}>
                <TiltCard className="feature panel" max={8} style={{ height: '100%' }}>
                  <span className="feature-ico"><f.icon /></span>
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
            <Reveal><p className="kicker">// mood</p></Reveal>
            <WordReveal text="The kind of moments it's for" className="h2" gradientWords={['moments']} />
          </div>
          <div className="gallery-grid">
            {gallery.map((g, i) => (
              <Reveal key={g.src} from={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'} delay={i * 0.05} className={`photo${g.tall ? ' tall' : ''}`}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <WordReveal text="Interested in eSkypixx?" className="h2" gradientWords={['eSkypixx?']} />
          <Reveal delay={0.1}><p className="lead">Follow the build, or get in touch to collaborate.</p></Reveal>
          <Reveal delay={0.15} className="actions">
            <Magnetic><Link href="/#contact" className="btn btn-primary">Get in touch <Arrow /></Link></Magnetic>
            <Magnetic><Link href="/qorvayn" className="btn btn-ghost">About QORVAYN</Link></Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}

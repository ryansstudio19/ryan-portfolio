import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs } from '@/components/StructuredData';
import { ArrowUpRight, Calendar, Camera, Clock, Cloud, Heart, Lock, Mic, Note, Sparkle, Users } from '@/components/Icons';
import { Magnetic, Marquee, Reveal, Stagger, StaggerItem, TiltCard, WordReveal } from '@/components/motion';
import PageHero from '@/components/PageHero';
import OrbynDial from '@/components/OrbynDial';

const ORBYN_URL = 'https://orbyn-drab.vercel.app';

export const metadata: Metadata = pageMeta({
  title: 'Orbyn: a private space for long-distance couples',
  path: '/orbyn',
  og: 'orbyn',
  description:
    'Orbyn is a private, calm home for two people in two places: two clocks on one dial, two skies, a reunion countdown and a live photobooth. Built by Ryan Zannah at QORVAYN.',
});

const features = [
  { icon: Clock, name: 'Two clocks, one dial', text: 'A 24-hour ring with both local times, so you can see who is awake and when you can talk.' },
  { icon: Cloud, name: 'Two skies', text: 'Each side follows its own real sky and local weather.' },
  { icon: Heart, name: 'Thinking of you', text: 'One tap sends a small light that arrives as a handwritten slip.' },
  { icon: Calendar, name: 'The day you meet again', text: 'A reunion countdown, shown in each person’s own time zone.' },
  { icon: Mic, name: 'Whispers', text: 'Voice notes recorded before sleep, heard on waking.' },
  { icon: Note, name: 'Memories and love notes', text: 'A polaroid vault, a sticky-note corkboard and letters sealed until a date you choose.' },
  { icon: Sparkle, name: 'Date lounge', text: 'An AI date planner that knows both time zones, with conversation cards, games and a shared playlist.' },
  { icon: Users, name: 'Daily check-in', text: 'Mood, energy and sleep in about ten seconds, plus a note for the other person.' },
];

const steps = [
  { name: 'Create your space', text: 'Sign up with Google, a magic link or a password.' },
  { name: 'Invite your person', text: 'Send a private link that works once.' },
  { name: 'Stay in sync', text: 'Everything updates live on both phones.' },
];

const privacy = [
  'Exactly two people per space. No profiles, followers or feeds.',
  'Photos, videos and voice notes are kept in private storage.',
  'Photobooth cut-outs are made on your own phone.',
  'No ads, and your moments are never used to sell anything.',
  'You can reset or delete your whole space at any time.',
];

export default function Orbyn() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Work', path: '/work' }, { name: 'Orbyn', path: '/orbyn' }]} />
      <PageHero
        title="Orbyn"
        gradientWords={['Orbyn']}
        badge={<span className="status">Beta now, public launch in the coming months</span>}
        aside={
          <TiltCard className="panel visual-rose" max={7} style={{ position: 'relative', aspectRatio: '1 / 1', maxWidth: 440, marginInline: 'auto', borderRadius: 22, overflow: 'hidden' }}>
            <OrbynDial className="dial" />
            <span className="hud hud-rose" aria-hidden="true"><i /><i /><i /><i /></span>
          </TiltCard>
        }
      >
        <p className="lead">Two places. One home.</p>
        <p className="muted" style={{ marginTop: '0.8rem', maxWidth: '56ch' }}>
          A private, calm space for two people who live apart: your two clocks, your two skies, the countdown to
          your next hello and small “thinking of you” moments, all in one place that only the two of you can open.
        </p>
        <div className="hero-actions">
          <Magnetic>
            <a href={ORBYN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Try the Orbyn beta <ArrowUpRight />
            </a>
          </Magnetic>
          <Magnetic>
            <Link href="/articles/building-orbyn-private-space-long-distance-couples" className="btn btn-ghost">Read the story</Link>
          </Magnetic>
        </div>
      </PageHero>

      <Marquee items={['Two places', 'One home', 'Two clocks', 'Two skies', 'One countdown']} tilted baseVelocity={-2.4} />

      <section className="section">
        <div className="container split">
          <div>
            <Reveal><p className="kicker">// why it exists</p></Reveal>
            <WordReveal text="Distance is hard. The apps for it shouldn't be." className="h2" gradientWords={['shouldn’t', "shouldn't"]} />
          </div>
          <Reveal delay={0.1} className="prose">
            <p>
              Couples who live apart hold their relationship together across chat apps, video calls, photo albums and
              notes. None of those feels like a place the two of you share, and time zones make it harder: one of you
              is asleep while the other wants to talk.
            </p>
            <p>
              <strong>Orbyn</strong> gives two people one shared home online. It is built by <strong>QORVAYN</strong>,
              the technology company I founded, and every feature has one job: to make two people far apart feel like
              they share the same place.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// inside orbyn</p></Reveal>
            <WordReveal text="Small moments, kept together" className="h2" gradientWords={['together']} />
          </div>
          <Stagger className="feature-grid feature-grid-4">
            {features.map((f) => (
              <StaggerItem key={f.name}>
                <TiltCard className="feature panel" max={8} style={{ height: '100%' }}>
                  <span className="feature-ico" style={{ color: 'var(--rose)', background: 'rgba(255,92,138,0.1)' }}><f.icon /></span>
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
            <Reveal><p className="kicker">// the signature feature</p></Reveal>
            <WordReveal text="A photobooth for two cities" className="h2" gradientWords={['two', 'cities']} />
            <Reveal delay={0.1} className="prose" style={{ marginTop: '1.4rem' }}>
              <p>
                Both cameras go live side by side with a synced countdown. Pick a scene and each phone cuts both of
                you out of your rooms and places you in the same picture, then you keep the strip.
              </p>
              <p>The cut-out runs on the phone itself, so your camera feed is not sent anywhere to make it.</p>
            </Reveal>
          </div>
          <Reveal from="right" delay={0.1}>
            <TiltCard className="panel" max={6} style={{ padding: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
              <span className="feature-ico" style={{ color: 'var(--rose)', background: 'rgba(255,92,138,0.1)' }}><Camera /></span>
              <h3 className="h3" style={{ marginTop: '1rem' }}>How a strip comes together</h3>
              <ul className="check-list" style={{ marginTop: '1rem' }}>
                <li>Both of you open the booth</li>
                <li>Choose a scene, filters and effects</li>
                <li>Count down together and pose</li>
                <li>Design the strip, then download or share it</li>
              </ul>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// how it works</p></Reveal>
            <WordReveal text="Three steps to your space" className="h2" gradientWords={['space']} />
          </div>
          <Stagger className="steps steps-3">
            {steps.map((s, i) => (
              <StaggerItem key={s.name} className="step panel">
                <span style={{ color: 'var(--rose)' }}>{String(i + 1).padStart(2, '0')}</span>
                <p>{s.name}</p>
                <p className="step-text">{s.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <Reveal><p className="kicker">// privacy</p></Reveal>
            <WordReveal text="Private by design, not by setting" className="h2" gradientWords={['design,']} />
            <Reveal delay={0.1}>
              <p className="lead" style={{ marginTop: '1rem' }}>Orbyn is for two people. Nobody else is meant to see inside.</p>
            </Reveal>
          </div>
          <Reveal from="right" delay={0.1} className="panel" style={{ padding: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
            <span className="feature-ico" style={{ color: 'var(--rose)', background: 'rgba(255,92,138,0.1)' }}><Lock /></span>
            <ul className="check-list" style={{ marginTop: '1rem' }}>
              {privacy.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <WordReveal text="Make a home for two" className="h2" gradientWords={['two']} />
          <Reveal delay={0.1}>
            <p className="lead">Orbyn is in beta now. The public launch is planned for the coming months.</p>
          </Reveal>
          <Reveal delay={0.15} className="actions">
            <Magnetic>
              <a href={ORBYN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Try the Orbyn beta <ArrowUpRight />
              </a>
            </Magnetic>
            <Magnetic><Link href="/qorvayn" className="btn btn-ghost">About QORVAYN</Link></Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}

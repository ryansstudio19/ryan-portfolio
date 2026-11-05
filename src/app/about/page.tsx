import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow, Ball, Brain, Camera, Code, Globe, Telescope } from '@/components/Icons';
import Age from '@/components/Age';
import Img from '@/components/Img';
import LanguageList from '@/components/LanguageList';
import { Magnetic, Parallax, Reveal, Stagger, StaggerItem, TiltCard, WordReveal } from '@/components/motion';
import PageHero from '@/components/PageHero';
import SkillGroups from '@/components/SkillGroups';
import Timeline from '@/components/Timeline';
import { experience, interests, photos } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'The story of Ryan Zannah: software engineer from Dhaka, founder and CEO of QORVAYN, and builder of eSkypixx, RYNEKA and GoalWear.',
};

const interestIcons = [Camera, Code, Brain, Globe, Ball, Telescope];

export default function About() {
  return (
    <>
      <PageHero
        title="The person behind the work"
        gradientWords={['work']}
        aside={
          <TiltCard className="photo" max={6} style={{ aspectRatio: '4 / 5', maxWidth: 420, marginInline: 'auto' }}>
            <Img src={photos.portrait.src} alt={photos.portrait.alt} sizes="(max-width: 900px) 90vw, 40vw" priority />
            <span className="hud" aria-hidden="true"><i /><i /><i /><i /></span>
            <span className="photo-caption">Ryan Zannah</span>
          </TiltCard>
        }
      >
        <p className="lead">
          I&apos;m Ryan, <Age /> years old, a software engineer and digital builder from Dhaka, Bangladesh, and the founder
          and CEO of QORVAYN. I have more than five years of experience in design and digital work, and I care about one
          thing above the rest: technology that solves real problems for real people.
        </p>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div className="collage" style={{ aspectRatio: '1 / 1.1' }}>
            <Parallax offset={50} className="photo c1">
              <Reveal from="left" style={{ position: 'absolute', inset: 0 }}>
                <Img src={photos.mono.src} alt={photos.mono.alt} sizes="(max-width: 900px) 60vw, 28vw" />
              </Reveal>
            </Parallax>
            <Parallax offset={-40} className="photo c2">
              <Reveal from="right" delay={0.1} style={{ position: 'absolute', inset: 0 }}>
                <Img src={photos.rooftop.src} alt={photos.rooftop.alt} sizes="(max-width: 900px) 55vw, 24vw" />
              </Reveal>
            </Parallax>
          </div>
          <div>
            <Reveal><p className="kicker">// who I am</p></Reveal>
            <WordReveal text="Building from Dhaka for anywhere" className="h2" gradientWords={['anywhere']} />
            <Reveal delay={0.1} className="prose" style={{ marginTop: '1.5rem' }}>
              <p>
                I&apos;m <Age />, from Dhaka. My way into technology started with one realisation: I could build digital
                things from my bedroom for people anywhere in the world.
              </p>
              <p>
                I started out freelancing, and at 13 I was working as a graphic designer at <strong>X-Brain Info Tech</strong>,
                an agency in Kushtia, while still in school. Along the way I picked up <strong>Python</strong> and web
                development, and I&apos;ve spent the years since connecting clean code with design and digital strategy. I like taking complicated problems apart and turning them
                into useful, user-centred products.
              </p>
              <p>
                In March 2026 I founded <strong>QORVAYN</strong> with my co-founders. It&apos;s the parent company for
                everything I build: <strong>eSkypixx</strong>, <strong>RYNEKA</strong> and <strong>GoalWear</strong>.
              </p>
              <p>
                Away from the screen I&apos;m an athlete at heart. Cricket, football and competitive gaming taught me
                patience, timing and resilience, and I bring the same energy to every project.
              </p>
              <p>
                Next, I&apos;m preparing for a move to <strong>Germany</strong>, learning German while I keep building and
                growing.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="hero-actions">
                <Magnetic><Link href="/#contact" className="btn btn-primary">Get in touch <Arrow /></Link></Magnetic>
                <Magnetic><Link href="/qorvayn" className="btn btn-ghost">About QORVAYN</Link></Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// experience</p></Reveal>
            <WordReveal text="Five years and counting" className="h2" gradientWords={['counting']} />
            <Reveal delay={0.1}>
              <p className="lead">Freelancing, agency work as a teenager, and now leading my own company.</p>
            </Reveal>
          </div>
          <Stagger className="exp-list">
            {experience.map((e) => (
              <StaggerItem key={e.org}>
                <TiltCard className="exp panel" max={4}>
                  <div>
                    <p className="t-year">{e.when}</p>
                    <h3 className="h3" style={{ marginTop: '0.35rem' }}>{e.role}</h3>
                    <p className="exp-org">{e.org}</p>
                  </div>
                  <p className="exp-text">{e.text}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-head sticky-head">
            <Reveal><p className="kicker">// my story</p></Reveal>
            <WordReveal text="From first lines of code to a company" className="h2" gradientWords={['company']} />
            <Reveal delay={0.1}>
              <p className="lead">The steps so far, and the ones I&apos;m planning next.</p>
            </Reveal>
          </div>
          <Timeline />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// skills</p></Reveal>
            <WordReveal text="What I work with" className="h2" />
          </div>
          <SkillGroups />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// languages</p></Reveal>
            <WordReveal text="Ten languages, and counting" className="h2" gradientWords={['counting']} />
          </div>
          <LanguageList />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// outside work</p></Reveal>
            <WordReveal text="What keeps me curious" className="h2" gradientWords={['curious']} />
          </div>
          <Stagger className="feature-grid">
            {interests.map((it, i) => {
              const Icon = interestIcons[i];
              return (
                <StaggerItem key={it.name}>
                  <TiltCard className="feature panel" max={8} style={{ height: '100%' }}>
                    <span className="feature-ico"><Icon /></span>
                    <h3 className="h3">{it.name}</h3>
                    <p>{it.text}</p>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// photos</p></Reveal>
            <WordReveal text="A few frames" className="h2" />
          </div>
          <div className="gallery-grid">
            <Reveal from="left" className="photo tall" style={{ minHeight: 0 }}>
              <Img src={photos.office.src} alt={photos.office.alt} sizes="(max-width: 760px) 50vw, 33vw" />
            </Reveal>
            <Reveal from="up" delay={0.05} className="photo">
              <Img src={photos.sky.src} alt={photos.sky.alt} sizes="(max-width: 760px) 50vw, 33vw" />
            </Reveal>
            <Reveal from="right" delay={0.1} className="photo">
              <Img src={photos.mono.src} alt={photos.mono.alt} sizes="(max-width: 760px) 50vw, 33vw" />
            </Reveal>
            <Reveal from="up" delay={0.1} className="photo">
              <Img src={photos.rooftop.src} alt={photos.rooftop.alt} sizes="(max-width: 760px) 50vw, 33vw" style={{ objectPosition: '50% 70%' }} />
            </Reveal>
            <Reveal from="right" delay={0.15} className="photo">
              <Img src={photos.portrait.src} alt={photos.portrait.alt} sizes="(max-width: 760px) 50vw, 33vw" style={{ objectPosition: '50% 30%' }} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <WordReveal text="Want to build something together?" className="h2" gradientWords={['together?']} />
          <Reveal delay={0.1}>
            <p className="lead">I&apos;m open to projects, collaborations and conversations about what QORVAYN is building.</p>
          </Reveal>
          <Reveal delay={0.15} className="actions">
            <Magnetic><Link href="/#contact" className="btn btn-primary">Contact me <Arrow /></Link></Magnetic>
            <Magnetic><Link href="/#work" className="btn btn-ghost">See the work</Link></Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}

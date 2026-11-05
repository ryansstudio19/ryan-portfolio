import Link from 'next/link';
import Age from '@/components/Age';
import ContactSection from '@/components/ContactSection';
import HomeHero from '@/components/home/HomeHero';
import PhotoStrip from '@/components/home/PhotoStrip';
import QorvaynOrb from '@/components/home/QorvaynOrb';
import { Arrow } from '@/components/Icons';
import Img from '@/components/Img';
import LanguageList from '@/components/LanguageList';
import { Magnetic, Marquee, Parallax, Reveal, WordReveal } from '@/components/motion';
import SkillGroups from '@/components/SkillGroups';
import WorkGrid from '@/components/WorkGrid';
import { marqueeSkills, photos, qorvayn } from '@/data/site';

export default function Home() {
  return (
    <>
      <HomeHero />
      <Marquee items={marqueeSkills} tilted />

      {/* About preview */}
      <section className="section" id="about">
        <div className="container intro-grid">
          <div>
            <Reveal><p className="kicker">// about me</p></Reveal>
            <WordReveal text="I turn ideas into products people can actually use." className="h2" gradientWords={['products']} />
            <Reveal delay={0.1}>
              <p className="lead" style={{ marginTop: '1.4rem' }}>
                I started freelancing more than five years ago, and at 13 I was a graphic designer at an agency in Kushtia.
                Today I lead QORVAYN, design and develop its products, and handle the SEO, content and design work that
                helps them reach people.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <dl className="facts">
                <div className="fact"><dt>Experience</dt><dd>5+ years</dd></div>
                <div className="fact"><dt>Age</dt><dd><Age /></dd></div>
                <div className="fact"><dt>Based in</dt><dd>Dhaka, Bangladesh</dd></div>
                <div className="fact"><dt>Leading</dt><dd>QORVAYN</dd></div>
                <div className="fact"><dt>Focus</dt><dd>Full-stack, design, SEO</dd></div>
                <div className="fact"><dt>Languages</dt><dd>English, Hindi + 8 more</dd></div>
              </dl>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ marginTop: '2rem' }}>
                <Magnetic>
                  <Link href="/about" className="btn btn-ghost">Read my story <Arrow /></Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>
          <div className="collage">
            <Parallax offset={40} className="photo c1">
              <Reveal from="left" style={{ position: 'absolute', inset: 0 }}>
                <Img src={photos.rooftop.src} alt={photos.rooftop.alt} sizes="(max-width: 900px) 60vw, 28vw" />
              </Reveal>
            </Parallax>
            <Parallax offset={-50} className="photo c2">
              <Reveal from="right" delay={0.1} style={{ position: 'absolute', inset: 0 }}>
                <Img src={photos.sky.src} alt={photos.sky.alt} sizes="(max-width: 900px) 55vw, 24vw" />
              </Reveal>
            </Parallax>
          </div>
        </div>
      </section>

      {/* QORVAYN */}
      <section className="section" id="qorvayn">
        <div className="container q-grid">
          <Reveal from="scale">
            <QorvaynOrb />
          </Reveal>
          <div>
            <Reveal><p className="kicker">// the parent company</p></Reveal>
            <WordReveal text="QORVAYN is where everything I build comes together." className="h2" gradientWords={['QORVAYN']} />
            <Reveal delay={0.1}>
              <p className="lead" style={{ marginTop: '1.2rem' }}>{qorvayn.summary}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="q-meta">
                <span className="chip">Founded {qorvayn.founded}</span>
                <span className="chip">{qorvayn.country}</span>
                <span className="chip">Remote-first</span>
                <span className="chip">Founder &amp; CEO: Ryan Zannah</span>
              </div>
            </Reveal>
            <div className="mv">
              <Reveal from="left" delay={0.1} className="panel">
                <h3 className="h3">Mission</h3>
                <p>{qorvayn.mission}</p>
              </Reveal>
              <Reveal from="right" delay={0.18} className="panel">
                <h3 className="h3">Vision</h3>
                <p>{qorvayn.vision}</p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Magnetic>
                <Link href="/qorvayn" className="btn btn-primary">Explore QORVAYN <Arrow /></Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="section" id="work">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// selected work</p></Reveal>
            <WordReveal text="Products in the QORVAYN ecosystem" className="h2" gradientWords={['ecosystem']} />
          </div>
          <WorkGrid />
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// skills</p></Reveal>
            <WordReveal text="What I work with" className="h2" />
            <Reveal delay={0.1}>
              <p className="lead">Thirty-one skills across four areas, from writing the code to getting it found.</p>
            </Reveal>
          </div>
          <SkillGroups />
        </div>
      </section>

      <Marquee items={['Think', 'Design', 'Build', 'Ship', 'Grow', 'Repeat']} baseVelocity={1.8} />

      {/* Languages */}
      <section className="section" id="languages">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="kicker">// languages</p></Reveal>
            <WordReveal text="Ten languages, and counting" className="h2" gradientWords={['counting']} />
            <Reveal delay={0.1}>
              <p className="lead">Professional working proficiency in English and Hindi, and elementary in eight more.</p>
            </Reveal>
          </div>
          <LanguageList />
        </div>
      </section>

      <PhotoStrip />
      <ContactSection />
    </>
  );
}

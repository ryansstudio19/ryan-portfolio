import { skillGroups } from '@/data/site';
import { Reveal, TiltCard } from './motion';

export default function SkillGroups() {
  return (
    <div className="skill-groups">
      {skillGroups.map((g, i) => (
        <Reveal key={g.name} from={i % 2 === 0 ? 'left' : 'right'} delay={(i % 2) * 0.08} style={{ display: 'flex' }}>
          <TiltCard className="skill-group panel" max={4} style={{ width: '100%' }}>
            <header>
              <h3 className="h3">{g.name}</h3>
              <span className="skill-count">{String(g.skills.length).padStart(2, '0')}</span>
            </header>
            <p>{g.text}</p>
            <ul className="chips" style={{ listStyle: 'none' }}>
              {g.skills.map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}

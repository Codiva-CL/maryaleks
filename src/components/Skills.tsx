import type { SkillGroup } from '@/types';

const skillGroups: SkillGroup[] = [
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Angular', 'Vue', 'Svelte', 'Astro', 'Redux', 'Express'],
  },
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Go', 'HTML', 'CSS', 'Dart'],
  },
  {
    title: 'Testing',
    skills: ['Jest', 'Playwright', 'React Testing Library', 'Enzyme'],
  },
  {
    title: 'Tools & Infrastructure',
    skills: ['Docker', 'AWS Lambda', 'Supabase', 'Redis', 'Git', 'Linux', 'Bash', 'i18n'],
  },
  {
    title: 'Concepts',
    skills: ['OAuth2', 'OpenID', 'Functional Programming', 'SEO', 'Design Systems'],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-label reveal" data-num="03">Skills</div>
        <h2 className="section-title reveal reveal-delay-1">Toolkit</h2>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={group.title} className={`skill-group reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Experience } from '@/types';

const experiences: Experience[] = [
  {
    num: '01',
    company: 'ZooMinder',
    role: 'Co-Founder & Front-End Developer',
    location: 'Remote',
    period: 'Dec 2025 — Present',
    description: 'Pet health management app designed to organize medications, vaccines, and check-ups. Designed and built the Android mobile app with Flutter, deployed a landing page with HTML/CSS/JS, integrated Google Analytics, and managed the full development cycle through Google Play launch.',
    stack: ['Flutter', 'Dart', 'HTML', 'CSS', 'JavaScript', 'SEO', 'Google Analytics'],
    link: 'https://play.google.com/store/apps/details?id=com.krlz.zoominder',
  },
  {
    num: '02',
    company: 'Previsible',
    role: 'Web SEO Developer',
    location: 'Santiago, Chile',
    period: 'Jun — Oct 2025',
    description: 'Built full-stack web applications in education — AI-powered learning tools and a platform connecting students with tutors by city, subject, and level. Made key architecture and design decisions in a fast-paced environment while ensuring SEO best practices.',
    stack: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'Playwright', 'Supabase', 'Go', 'Lambda'],
    link: null,
  },
  {
    num: '03',
    company: 'Portavita Health',
    role: 'Front-end Developer',
    location: 'Innopolis, Russia',
    period: '2023 — 2024',
    description: 'Played a key role in a healthcare MVP requiring critical framework selection decisions. Analyzed diverse JavaScript technologies, rapidly adapted to a new framework, and contributed significantly to the MVP development and implementation.',
    stack: ['React', 'Next.js', 'I18next', 'Material UI', 'Docker', 'Linux', 'Git'],
    link: null,
  },
  {
    num: '04',
    company: 'Portavita LLC',
    role: 'Front-end Developer & Functional Tester',
    location: 'Innopolis, Russia — Amsterdam, Netherlands',
    period: '2022 — 2023',
    description: 'Started as a functional tester on telemedicine software, then transitioned to frontend development. Built interactive, responsive interfaces while gaining deep insights into user-centered design within complex healthcare platforms.',
    stack: ['React', 'Redux', 'Jest', 'Enzyme', 'I18n', 'Material UI', 'Linux', 'Git'],
    link: null,
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-label reveal" data-num="02">Experience</div>
        <h2 className="section-title reveal reveal-delay-1">Selected Work</h2>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <article key={exp.num} className={`exp-item reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="exp-header">
                <span className="exp-num">{exp.num}</span>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
              </div>

              <div className="exp-body">
                <h3 className="exp-company">{exp.company}</h3>
                <p className="exp-role">{exp.role}</p>
                <p className="exp-desc">{exp.description}</p>

                <div className="exp-stack">
                  {exp.stack.map(tech => (
                    <span key={tech} className="exp-tag">{tech}</span>
                  ))}
                </div>

                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="exp-link">
                    View Project
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

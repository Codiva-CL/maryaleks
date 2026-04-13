import { PERSON, SOCIAL } from '@/constants/site';
import type { ContactLink } from '@/types';

const ArrowIcon = () => (
  <svg className="contact-link-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 16L16 4M16 4H6M16 4V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const links: ContactLink[] = [
  { label: 'Email', value: PERSON.email, href: `mailto:${PERSON.email}` },
  { label: 'LinkedIn', value: PERSON.name, href: SOCIAL.linkedin, external: true },
  { label: 'Telegram', value: '@KorryKo', href: SOCIAL.telegram, external: true },
  { label: 'Github', value: 'KorryKo', href: SOCIAL.github, external: true },
  { label: 'Phone', value: PERSON.phoneFormatted, href: `tel:${PERSON.phone}` },
];

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-label reveal" data-num="04">Contact</div>

        <div className="contact-content">
          <h2 className="contact-title reveal reveal-delay-1">
            Let&apos;s build<br />
            <span className="contact-title-accent">something</span> together
          </h2>

          <div className="contact-links reveal reveal-delay-2">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="contact-link"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact-link-label">{link.label}</span>
                <span className="contact-link-value">{link.value}</span>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

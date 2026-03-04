const ArrowIcon = () => (
  <svg className="contact-link-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 16L16 4M16 4H6M16 4V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const links = [
  { label: 'Email', value: 'marinaaleksdev@gmail.com', href: 'mailto:marinaaleksdev@gmail.com' },
  { label: 'LinkedIn', value: 'Marina Alekseeva', href: 'https://www.linkedin.com/in/marina-alekseeva-a190591b5/', external: true },
  { label: 'Telegram', value: '@KorryKo', href: 'https://t.me/KorryKo', external: true },
  { label: 'Github', value: 'KorryKo', href: 'https://github.com/KorryKo', external: true },
  { label: 'Phone', value: '+56 957 776 767', href: 'tel:+56957776767' },
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

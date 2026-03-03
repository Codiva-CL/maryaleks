'use client';

import { useState, useEffect } from 'react';

const sections = ['about', 'experience', 'skills', 'contact'] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -60% 0px' });

    els.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#hero" className="nav-logo">MA</a>

        <div className="nav-links">
          {sections.map(s => (
            <a key={s} href={`#${s}`} className={`nav-link${activeSection === s ? ' active' : ''}`}>
              {capitalize(s)}
            </a>
          ))}
        </div>

        <button
          className={`nav-toggle${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span />
        </button>
      </div>

      <div className={`nav-mobile${mobileOpen ? ' open' : ''}`}>
        {sections.map(s => (
          <a key={s} href={`#${s}`} className="nav-mobile-link" onClick={() => setMobileOpen(false)}>
            {capitalize(s)}
          </a>
        ))}
      </div>
    </nav>
  );
}

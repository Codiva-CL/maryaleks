export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner container">
        <div className="hero-location">
          <span className="hero-location-dot" />
          Santiago, Chile
        </div>

        <div className="hero-name">
          <div className="hero-name-line">
            <span className="hero-name-text hero-name-solid">MARINA</span>
          </div>
          <div className="hero-name-line">
            <span className="hero-name-text hero-name-outline">ALEKSEEVA</span>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-role">
            <span className="hero-role-line" />
            Front-end Developer
          </div>

          <div className="hero-badge-wrapper">
            <svg className="hero-badge" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>
              <text className="hero-badge-text">
                <textPath href="#circlePath">
                  FRONT-END DEVELOPER &#8226; CREATIVE CODER &#8226;
                </textPath>
              </text>
              <circle cx="100" cy="100" r="8" fill="var(--color-accent)" />
            </svg>
          </div>
        </div>

        <div className="hero-scroll">
          <span className="hero-scroll-text">Scroll</span>
          <span className="hero-scroll-line" />
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-label reveal" data-num="01">About</div>

        <div className="about-portrait-row reveal reveal-delay-1">
          <div className="about-portrait">
            <div className="about-portrait-frame">
              <Image src="/profile.jpg" alt="Marina Alekseeva" width={400} height={500} className="about-portrait-img" />
            </div>
            <span className="about-portrait-caption">Marina Alekseeva &mdash; Santiago, Chile</span>
          </div>

          <div className="about-headline">
            <h2 className="about-headline-text">
              4+ years crafting<br />
              <span className="about-headline-accent">digital experiences</span><br />
              for the web
            </h2>
          </div>
        </div>

        <div className="about-grid reveal reveal-delay-2">
          <div className="about-content">
            <p className="about-text">
              Front-End Developer with a deep understanding of the JavaScript ecosystem,
              mastery across multiple frameworks, and a sharp focus on interface design
              and architecture.
            </p>
            <p className="about-text">
              Experienced in implementing design systems from documentation, I bring
              adaptability and precision to every project &mdash; ensuring efficient,
              high-quality web solutions that feel intentional in every detail.
            </p>
          </div>

          <div className="about-languages">
            <div className="about-lang">
              <span className="about-lang-name">Russian</span>
              <span className="about-lang-level">Native</span>
            </div>
            <div className="about-lang">
              <span className="about-lang-name">English</span>
              <span className="about-lang-level">C2 Advanced</span>
            </div>
            <div className="about-lang">
              <span className="about-lang-name">Spanish</span>
              <span className="about-lang-level">A2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

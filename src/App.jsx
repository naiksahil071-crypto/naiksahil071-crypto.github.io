import { useState } from 'react'
import './App.css'

const skills = [
  { name: 'Java', desc: 'Core, OOP, Collections Framework' },
  { name: 'SQL', desc: 'Queries, Joins, Relational Schemas' },
  { name: 'Python', desc: 'Backend logic, File I/O, Automation' },
  { name: 'C', desc: 'Memory concepts, Pointers, Procedural' },
  { name: 'HTML & CSS', desc: 'Responsive layouts & Semantic markup' },
  { name: 'JavaScript', desc: 'DOM handling, ES6 logic' },
]

const projects = [
  {
    index: '01',
    name: 'FactFlow (MCIE)',
    subtitle: 'Multimodal Claim Intelligence Engine',
    category: 'Final-Year Project',
    when: '2026 – Present · Team of 3',
    stack: ['Python', 'SQL', 'REST APIs', 'Git'],
    points: [
      'Collaborated in a team of 3 to build a system enabling users to fact-check short-form video claims without switching away from the app.',
      'Developed core Python backend modules to manage video upload pipelines and integrate REST API endpoints.',
      'Designed SQLite database storage for query logs, verification states, and processing metadata under faculty guidance.',
    ],
  },
  {
    index: '02',
    name: 'FrameWise',
    subtitle: 'Synthetic & AI-Generated Media Detector',
    category: 'Personal Project',
    when: '2025 · Independent Work',
    stack: ['Python', 'Streamlit', 'Pillow', 'File I/O'],
    href: 'https://github.com/naiksahil071-crypto/AI-DETECTOR',
    points: [
      'Built a diagnostic web application that analyzes uploaded images and videos (MP4, AVI) to output an AI-generated likelihood score.',
      'Designed a modular pipeline with clean separation of concerns: media ingestion, frame extraction, and detection logic.',
      'Implemented an interactive UI with multilingual support (English, Hindi, Marathi) and defensive error handling for corrupted uploads.',
    ],
  },
  {
    index: '03',
    name: 'Voice Controlled Game System',
    subtitle: 'Assistive Voice-Navigation Gaming Prototype',
    category: 'Academic Project',
    when: 'Jan 2025 – Apr 2025 · Team of 3',
    stack: ['Python', 'Speech Recognition', 'OOP', 'Git'],
    points: [
      'Engineered a hands-free game prototype using Python and speech recognition to improve digital accessibility for players with limited motor control.',
      'Applied Object-Oriented Programming (OOP) principles to structure player states, score tracking, and character mechanics into clean classes.',
      'Collaborated with teammates managing version control, pull requests, and peer code reviews on GitHub.',
    ],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('naiksahil071@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="mark" href="#top">
            <span className="mark-badge">SN</span>
            <span className="mark-text">
              Sahil Naik<span className="accent-dot">.</span>
            </span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#work" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#education" onClick={closeMenu}>
                Education
              </a>
            </li>
            <li>
              <a className="nav-cta" href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="hero wrap">
          <div className="hero-content">
            <div className="hero-meta">
              <span className="chip live">
                <span className="pulse-dot"></span>
                Open to Internships
              </span>
              <span className="chip">BE Computer Engineering · 2027</span>
              <span className="chip">Pillai HOC College</span>
            </div>
            <h1>
              Building reliable software with <span className="highlight">Java</span>, <span className="highlight">SQL</span> & <span className="highlight">Python</span>.
            </h1>
            <p className="hero-lead">
              I am Sahil Naik, a third-year Computer Engineering undergrad focusing on backend logic, clean Object-Oriented design, and relational database systems.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">
                View projects
              </a>
              <button className="btn btn-secondary" onClick={handleCopyEmail}>
                {copied ? '✓ Email copied!' : 'Copy email'}
              </button>
              <a
                className="btn btn-ghost"
                href="https://github.com/naiksahil071-crypto"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
          <aside className="hero-aside">
            <div className="aside-header">
              <span className="aside-title">Candidate Profile</span>
              <span className="aside-status">Active</span>
            </div>
            <dl className="aside-dl">
              <dt>Location</dt>
              <dd>Neral, Karjat, Maharashtra</dd>
              <dt>Core Stack</dt>
              <dd>Java, Python, SQL, C</dd>
              <dt>Current Capstone</dt>
              <dd>FactFlow (Team of 3)</dd>
              <dt>Availability</dt>
              <dd className="highlight-text">2026/2027 Internships</dd>
            </dl>
          </aside>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">01 — Background</p>
              <h2>Engineering approach</h2>
            </div>
            <div className="about-grid">
              <div className="about-copy">
                <p>
                  I am a Computer Engineering student (graduating in 2027) targeting software development and backend engineering roles.
                </p>
                <p>
                  My focus centers on solid fundamentals: Object-Oriented Programming (OOP), Data Structures & Algorithms, writing clean, maintainable logic, and relational database queries.
                </p>
                <p>
                  Rather than claiming tools I haven't used, I take pride in a 100% honest, defensible skill set backed by hands-on projects and team collaboration.
                </p>
              </div>
              <div className="quote-card">
                <div className="quote-tag">Focus & Objective</div>
                <p>
                  "Seeking engineering teams where I can write structured Java and Python code, design clean SQL queries, and contribute to production systems."
                </p>
                <div className="quote-footer">
                  <span>Sahil Naik</span>
                  <span className="quote-sub">Neral, MH · Open to Hybrid & Remote</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">02 — Technical Skills</p>
              <h2>Core competencies</h2>
            </div>
            <p className="skills-note">
              Languages and tools I actively write code with and can comfortably defend in technical interviews.
            </p>
            <div className="skills-grid">
              {skills.map((item) => (
                <div className="skill-card" key={item.name}>
                  <div className="skill-name">{item.name}</div>
                  <div className="skill-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects / Work Section (Redesigned for Recruiter Impact) */}
        <section id="work">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">03 — Projects</p>
              <h2>Featured Work</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-card-header">
                    <div className="project-meta-left">
                      <span className="project-index">[{project.index}]</span>
                      <span className="project-category">{project.category}</span>
                    </div>
                    <span className="project-timeline">{project.when}</span>
                  </div>

                  <div className="project-title-area">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>

                  <ul className="project-bullets">
                    {project.points.map((point) => (
                      <li key={point}>
                        <span className="bullet-marker">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="project-footer">
                    <div className="project-tags">
                      {project.stack.map((tech) => (
                        <span className="tech-badge" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.href && (
                      <a
                        className="project-action-btn"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub Repo ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">04 — Education</p>
              <h2>Academic credentials</h2>
            </div>
            <div className="edu-grid">
              <article className="edu-card">
                <span className="edu-badge">Degree in Progress</span>
                <h3>Bachelor of Engineering in Computer Engineering</h3>
                <p className="edu-school">
                  Pillai HOC College of Engineering and Technology, Rasayani, Maharashtra
                </p>
                <p className="when">2023 – 2027 (Expected)</p>
                <p className="edu-summary">
                  Core coursework: Data Structures & Algorithms, Object-Oriented Analysis, Database Management Systems (DBMS), Operating Systems, Software Engineering.
                </p>
              </article>
              <div className="cert-panel">
                <div className="aside-title" style={{ marginBottom: '1rem' }}>
                  Certifications & Capstones
                </div>
                <ul className="certs-list">
                  <li>
                    <span className="cert-badge">Coursera</span>
                    <span className="cert-name">Python for Beginners</span>
                  </li>
                  <li>
                    <span className="cert-badge">Great Learning</span>
                    <span className="cert-name">Introduction to HTML & CSS</span>
                  </li>
                  <li>
                    <span className="cert-badge">Academic</span>
                    <span className="cert-name">2 Guided Software Capstones Completed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="wrap contact-grid">
            <div>
              <p className="kicker">05 — Contact</p>
              <h2>
                Let's discuss
                <br />
                opportunities.
              </h2>
              <p className="contact-lead-text">
                I am actively interviewing for 2026/2027 software engineering internships. Please reach out via email or phone.
              </p>
              <div className="contact-quick-action">
                <button className="btn btn-primary" onClick={handleCopyEmail}>
                  {copied ? '✓ Copied to clipboard!' : 'Copy naiksahil071@gmail.com'}
                </button>
              </div>
            </div>
            <div className="contact-card-box">
              <ul className="contact-list">
                <li>
                  <span className="c-label">Email</span>
                  <a className="c-val mail" href="mailto:naiksahil071@gmail.com">
                    naiksahil071@gmail.com
                  </a>
                </li>
                <li>
                  <span className="c-label">Phone</span>
                  <a className="c-val" href="tel:+917775984977">+91 77759 84977</a>
                </li>
                <li>
                  <span className="c-label">GitHub</span>
                  <a
                    className="c-val"
                    href="https://github.com/naiksahil071-crypto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    naiksahil071-crypto ↗
                  </a>
                </li>
                <li>
                  <span className="c-label">Location</span>
                  <span className="c-val">Neral / Karjat, MH (Open to Relocation)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-wrap">
        <div className="wrap footer">
          <span>© {new Date().getFullYear()} Sahil Naik · Computer Engineering Undergrad</span>
          <span>Built with React + Vite</span>
        </div>
      </footer>
    </>
  )
}

export default App

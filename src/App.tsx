import { useEffect, useRef, useState } from 'react';
import {
  ArrowUp, ArrowUpRight, BriefcaseBusiness, Check, ChevronDown, Code2, Copy,
  Download, FolderOpen, Globe2, GraduationCap, Link2, Mail, MapPin, Menu,
  Phone, Trophy, UserRound, X,
} from 'lucide-react';
import { experiences, profile, projects, skills } from './data/profile';
import './App.css';

const navigation = [
  { id: 'about', label: 'Overview', icon: UserRound },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'education', label: 'Education', icon: GraduationCap },
];

function App() {
  const [activeSection, setActiveSection] = useState('experience');
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('main > section[id]')];
    let frame = 0;
    const updateSection = () => {
      const offset = window.matchMedia('(max-width: 767px)').matches ? 150 : 120;
      const current = sections.filter(section => section.getBoundingClientRect().top <= offset).at(-1);
      setActiveSection(current?.id ?? 'experience');
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateSection);
    };
    updateSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus('Email address copied.');
    } catch {
      setCopyStatus('Could not copy. You can select the email address above.');
    }
  }

  return (
    <>
      <a className="skip-link" href="#experience">Skip to experience</a>
      <header className="mobile-header">
        <a className="wordmark" href="#top" aria-label="Tang The Anh, back to top">TA<span>.</span></a>
        <button ref={menuButton} className="icon-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav id="mobile-menu" aria-label="Mobile menu" className="mobile-menu" hidden={!menuOpen}>
          {navigation.map(({ id, label, icon: Icon }) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}><Icon size={18} />{label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}><Mail size={18} />Contact</a>
        </nav>
      </header>
      <div className="portfolio-layout" id="top">
        <aside className="profile-sidebar" aria-label="Profile">
          <div className="profile-inner">
            <a className="wordmark desktop-wordmark" href="#top" aria-label="Tang The Anh, back to top">TA<span>.</span></a>
            <div className="identity"><h1>{profile.name}</h1><p className="role">{profile.role}</p></div>
            <ul className="profile-facts">
              <li><MapPin size={18} /><span>{profile.location}</span></li>
              <li><Globe2 size={18} /><span>Open to New Zealand relocation</span></li>
              <li className="primary-stack"><Code2 size={18} /><span>Java / Spring Boot / Angular / TypeScript</span></li>
            </ul>
            <div className="profile-actions">
              <a className="button button-primary" href={profile.resume} download><Download size={18} />Download CV</a>
              <a className="button button-secondary" href="#contact"><Mail size={18} />Contact</a>
            </div>
            <nav className="desktop-nav" aria-label="Main navigation">
              {navigation.map(({ id, label, icon: Icon }) => (
                <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''}
                  aria-current={activeSection === id ? 'location' : undefined}><Icon size={20} />{label}</a>
              ))}
            </nav>
            <a className="sidebar-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Link2 size={17} />Connect on LinkedIn<ArrowUpRight size={15} />
            </a>
          </div>
        </aside>
        <nav className="mobile-section-nav" aria-label="Sections">
          {['experience', 'projects', 'about'].map(id => (
            <a key={id} href={`#${id}`} aria-current={activeSection === id || (id === 'about' && activeSection === 'education') ? 'location' : undefined}>
              {id === 'about' ? 'About' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <main id="main-content">
          <section id="experience" aria-labelledby="experience-heading">
            <div className="section-intro"><h2 id="experience-heading">Experience that ships.</h2><p>Enterprise modernization, distributed systems and technical ownership.</p></div>
            <div className="timeline">
              {experiences.map(experience => (
                <article className="timeline-item" key={experience.company}>
                  <p className="timeline-date">{experience.period}</p>
                  <div className="timeline-content">
                    <h3>{experience.company}</h3><p className="position">{experience.role}</p>
                    <ul className="highlights">{experience.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
                    {experience.award && <p className="award"><Trophy size={18} /><span>{experience.award}</span></p>}
                    <details className="experience-details">
                      <summary>More about {experience.shortName}<ChevronDown size={15} /></summary>
                      <div className="details-body">
                        {experience.details.map(detail => (
                          <div className="work-detail" key={detail.title}><h4>{detail.title}</h4>
                            <ul>{detail.points.map(point => <li key={point}>{point}</li>)}</ul>
                            <p className="tech-line">{detail.stack}</p>
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section id="projects" className="content-section" aria-labelledby="projects-heading">
            <div className="section-heading"><h2 id="projects-heading">Selected projects</h2><span>Built end to end</span></div>
            <div className="project-list">
              {projects.map(project => (
                <article className="project-row" key={project.name}>
                  <figure><img src={project.image} alt={project.imageAlt} width="640" height="400" loading="lazy" />
                    {project.illustration && <figcaption>Project illustration</figcaption>}
                  </figure>
                  <div className="project-copy"><h3>{project.name}</h3><p>{project.description}</p><p className="tech-line">{project.stack}</p>
                    <details className="project-details"><summary>Project details<ChevronDown size={15} /></summary><p>{project.details}</p></details>
                    {project.url && <a className="text-link" href={project.url} target="_blank" rel="noreferrer">Visit live project<ArrowUpRight size={16} /></a>}
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section id="about" className="content-section" aria-labelledby="about-heading">
            <h2 id="about-heading">A little more about me.</h2><p className="about-copy">{profile.summary}</p>
            <h3 className="subheading">Technical toolkit</h3>
            <dl className="skills-list">{skills.map(skill => <div key={skill.category}><dt>{skill.category}</dt><dd>{skill.items}</dd></div>)}</dl>
          </section>
          <section id="education" className="content-section" aria-labelledby="education-heading">
            <h2 id="education-heading">Education</h2>
            <div className="education-row"><GraduationCap size={25} />
              <div><h3>Bachelor of Computer Engineering</h3><p>International University - Vietnam National University, Ho Chi Minh City</p><p className="muted">Major: Computer Science and Engineering</p></div>
              <span className="education-year">2020</span>
            </div>
          </section>
          <section id="contact" className="content-section contact-section" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Let's connect.</h2><p>Based in Ho Chi Minh City. Open to software engineering opportunities in New Zealand.</p>
            <div className="email-row"><a href={`mailto:${profile.email}`} className="email-link">{profile.email}</a>
              <button className="icon-button" onClick={copyEmail} aria-label="Copy email address" title="Copy email address">
                {copyStatus === 'Email address copied.' ? <Check size={19} /> : <Copy size={19} />}
              </button>
            </div>
            <p className="copy-status" role="status">{copyStatus}</p>
            <div className="contact-links"><a href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={17} />{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Link2 size={17} />LinkedIn<ArrowUpRight size={15} /></a>
            </div>
          </section>
          <footer><span>&copy; {new Date().getFullYear()} Tang The Anh</span><a href="#top">Back to top<ArrowUp size={15} /></a></footer>
        </main>
      </div>
    </>
  );
}

export default App;

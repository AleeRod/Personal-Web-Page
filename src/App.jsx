import HuellitasVitalesImg from '../assets/images/projects/HuellitasVitales.jpg';
import GymControlImg from '../assets/images/projects/GymControl.jpg';
import NasrodNotesImg from '../assets/images/projects/NASROD-NOTES.jpg';
import HeroAvatarImg from '../assets/images/avatar/HeroAvatar ARCH.png';

const projects = [
  {
    title: 'HuellitasVitales',
    description:
      'Aplicación moderna para la gestion de una veterinaria, con funcionalidades de registro de clientes, mascotas, citas y pagos en línea.',
    stack: ['React + Vite', 'C#', 'PostreSQL (Supabase)', '.NET Core 6+'],
    image: HuellitasVitalesImg,
    link: 'https://github.com/AleeRod/HuellitasVitales',
  },
  {
    title: 'Gym-Control',
    description:
      'Aplicación web para la gestión de un gimnasio, con funcionalidades de registro de clientes, control de pagos y seguimiento de progreso físico.',
    stack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: GymControlImg,
    link: 'https://github.com/AleeRod/Gym-Control',
  },
  {
    title: 'NASROD-NOTES',
    description:
      'Bloc de notas del proceso de creación de mi NAS casero, un proyecto personal que documenta cada paso del proceso de construcción y configuración del sistema.',
    stack: ['Open Media Vault + OMV Extras', 'Docker', 'Jellyfin + Plex','Pihole + Adguard', 'Homarr','Linux'],
    image: NasrodNotesImg,
    link: 'https://github.com/AleeRod/NASROD-NOTES',
  },
];

const experience = [
  {
    period: 'Agosto 2025 - Presente',
    role: 'Desarrollador Junior medio tiempo',
    company: 'Dev Labs',
    description: [
    '● Desarrollé y di soporte a funcionalidades en sistemas frontend y backend, incluyendo programación práctica en entornos de producción',
    '● Investigué y resolví problemas técnicos, contribuyendo a los procesos de depuración y resolución de fallos', 
    '● Colaboré con equipos para identificar defectos y mejorar el rendimiento de las aplicaciones',
    ],
  },
  {
    period: 'Diciembre 2025 - Marzo 2026',
    role: 'Cybersecurity Intern',
    company: 'Oxford Computer Group',
    description: [
        '● Administré entornos de Azure Entra ID (aprovisionamiento de usuarios, control de acceso)',
        '● Colaboré en la resolución de problemas de identidad y acceso',
        '● Apoyé procesos de seguridad empresarial y gobernanza de identidad (SailPoint)'
    ],
  },
    {
    period: ' Junio 2025 - Septiembre 2025',
    role: 'Agente de ventas',
    company: 'Extremetech',
    description: [
        '● Atendí aproximadamente 25-40 llamadas entrantes por día en un entorno de call center de alto volumen',
        '● Diagnostiqué y resolví problemas de hardware y software, escalando casos complejos cuando era necesario',
        '● Mantuve altos niveles de satisfacción del cliente mediante una comunicación clara y efectiva'
    ],
  },
    {
    period: ' ~2022 - Presente',
    role: 'Soporte técnico y mantenimiento',
    company: 'Freelance',
    description: [
        '● Brindé soporte técnico integral para computadoras de escritorio, laptops y redes, atendiendo reportes de usuarios finales',
        '● Diagnostiqué y resolví problemas de sistemas y conectividad, aislando fallos de red',
        '● Configuré redes y realicé mantenimiento preventivo y correctivo de equipos'
    ],
  },
];

const skills = [
  'React, Angular, Vite, Node.js',
  'HTML, JavaScript, CSS, PHP',
  'C#, .Net Core, Python, Java',
  'PostgreSQL, MySQL, SQL Server',
  'Azure Entra ID (IAM), Azure Portal, SailPoint',
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Alejandro Rodríguez Chacón</div>
        <nav className="nav">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#experience">Experiencia</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Desarrollador web y apasionado por la ciberseguridad</p>
            <h1>Construyo software y protejo soluciones digitales.</h1>
            <p className="hero-text">
              Soy desarrollador con base sólida en programación, soporte técnico y entornos empresariales,
              y además estoy fortaleciendo mi perfil en ciberseguridad. Me interesa crear soluciones
              funcionales, modernas y seguras desde el diseño hasta la implementación.
            </p>
            <div className="cta-row">
              <div className="primary-actions">
                <a className="btn primary" href="#projects">Ver proyectos</a>
                <a className="btn secondary" href="#contact">Contáctame</a>
              </div>

              <div className="cv-actions" aria-label="Descargar CV">
                <span className="cv-label">Descargar CV</span>
                <div className="download-row">
                  <a className="btn tertiary" href="/cv/CV_Alejandro_Rodriguez_EN.pdf" download="CV_Alejandro_Rodriguez_EN.pdf">Inglés</a>
                  <a className="btn tertiary alt" href="/cv/CV_Alejandro_Rodriguez_ES.pdf" download="CV_Alejandro_Rodriguez_ES.pdf">Español</a>
                </div>
              </div>
            </div>
            <ul className="mini-stats">
              <li><strong>3+</strong><span>Años</span></li>
              <li><strong>~4</strong><span>Proyectos</span></li>
              <li><strong>100%</strong><span>Dedicación</span></li>
            </ul>
          </div>

          <div className="hero-card">
            <div className="avatar-ring">
              <img className="avatar" src={HeroAvatarImg} alt="Alejandro Rodríguez Chacón" />
            </div>
            <div className="card-info">
              <span className="label">Disponible para proyectos</span>
              <h3>Alejandro Rodríguez Chacón</h3>
              <p>Full Stack Developer • Formando un especialista en Ciberseguridad</p>
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Sobre mí</p>
            <h2>Perfil profesional</h2>
          </div>
          <div className="about-grid">
            <p>
              Soy un desarrollador con interés claro en crear soluciones web útiles, limpias y escalables.
              Me apasiona el frontend, el backend y el proceso completo de transformar una idea en una
              aplicación funcional. Me gusta trabajar con tecnologías modernas y mejorar la experiencia del usuario.
            </p>
            <p>
              A la vez, mi interés por la ciberseguridad me lleva a pensar también en la seguridad desde el
              inicio: control de acceso, buenas prácticas, identificación de riesgos y protección de sistemas.
              Mi perfil combina desarrollo con análisis técnico, resolución de problemas y una visión más
              integral del entorno digital.
            </p>
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Proyectos</p>
            <h2>Algunos trabajos destacados</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-visual">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="stack-list">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <a href={project.link}>Ver proyecto →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Experiencia</p>
            <h2>Mi trayectoria</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={item.role} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <span className="period">{item.period}</span>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.description.map((desc, index) => <span key={index}>{desc}</span>)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Habilidades</p>
            <h2>Tecnologías que manejo</h2>
          </div>
          <div className="skills-wrap">
            {skills.map((skill) => (
              <span className="skill" key={skill}>{skill}</span>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Hablemos de tu próximo proyecto</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:rodriguezchacon130@gmail.com">rodriguezchacon130@gmail.com</a>
          <a href="https://github.com/AleeRod" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/alejandro-rodríguez-chacón-917610279" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/cv/CV_Alejandro_Rodriguez_EN.pdf" download="CV_Alejandro_Rodriguez_EN.pdf">Descargar CV en inglés</a>
          <a href="/cv/CV_Alejandro_Rodriguez_ES.pdf" download="CV_Alejandro_Rodriguez_ES.pdf">Descargar CV en español</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

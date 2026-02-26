import './Timeline.css'

interface ExperienceLink {
  label: string
  href: string
}

interface ExperienceItem {
  title: string
  company: string
  location: string
  date: string
  tasks: string[]
  links?: ExperienceLink[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Développeur Web – Alternance',
    company: 'Ministère des armées',
    location: 'Saint-Jacques-de-la-Lande',
    date: '09/2022 → 09/2026 · 4 ans',
    tasks: [
      "Développement et maintenance d'applications web backend avec Symfony",
      'Conception et évolution de fonctionnalités métier complexes',
      'Développement frontend avec Angular (intégration, composants, échanges API)',
      'Développement backend JavaScript avec Express.js',
      "Création et consommation d'API REST",
      'Gestion de bases de données relationnelles (MySQL)',
      'Mise en production et déploiement via Docker & Kubernetes',
      'Participation aux phases de tests, corrections et améliorations continues',
      'Travail en équipe : revues de code, tickets, bonnes pratiques',
    ],
  },
  {
    title: 'Développeur Web – Stage',
    company: 'WEB-FASTNET',
    location: 'Saint-Brieuc',
    date: '2021',
    tasks: ['Réalisation de sites web vitrine pour des clients locaux'],
    links: [
      {
        label: 'location-appartement-pleneuf-val-andre.fr',
        href: 'http://location-appartement-pleneuf-val-andre.fr',
      },
      {
        label: 'web-fastnet-bretagne.fr',
        href: 'http://www.web-fastnet-bretagne.fr',
      },
    ],
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Expérience Professionnelle</h2>
          <p className="section-subtitle">Mon parcours professionnel</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__content">
                <div className="timeline__header">
                  <h3 className="timeline__title">{exp.title}</h3>
                  <span className="timeline__date">{exp.date}</span>
                </div>
                <p className="timeline__company">
                  <span>{exp.company}</span> · {exp.location}
                </p>
                <ul className="timeline__list">
                  {exp.tasks.map((task, j) => (
                    <li key={j}>{task}</li>
                  ))}
                </ul>
                {exp.links && exp.links.length > 0 && (
                  <div className="timeline__links">
                    <span className="timeline__links-label">Sites réalisés :</span>
                    {exp.links.map(link => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline__link"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

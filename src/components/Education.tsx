import './Timeline.css'

interface EducationItem {
  degree: string
  school: string
  date: string
  description: string
}

const educations: EducationItem[] = [
  {
    degree: "Développeur d'application Java",
    school: 'OpenClassrooms',
    date: '2024 – 2026',
    description: 'Formation à distance · En cours',
  },
  {
    degree: "Développeur d'application JavaScript React",
    school: 'OpenClassrooms',
    date: '2022 – 2024',
    description: 'Formation à distance · Diplôme obtenu',
  },
  {
    degree: 'BTS SIO option SLAM',
    school: 'Lycée Rabelais · Saint-Brieuc (22)',
    date: '2019 – 2021',
    description: 'Sciences Informatiques aux Organisations · Solutions Logicielles et Applications Métiers',
  },
  {
    degree: 'BAC STI2D option SIN',
    school: 'Lycée Paul Sérusier · Carhaix (29)',
    date: '2017 – 2019',
    description: "Sciences et Technologies de l'Industrie et du Développement Durable · Systèmes d'Information et Numérique",
  },
]

export default function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Formations</h2>
          <p className="section-subtitle">Mon parcours académique</p>
        </div>
        <div className="timeline">
          {educations.map((edu, i) => (
            <div key={i} className="timeline__item">
              <div className={`timeline__dot ${i % 2 !== 0 ? 'timeline__dot--alt' : ''}`} />
              <div className="timeline__content">
                <div className="timeline__header">
                  <h3 className="timeline__title">{edu.degree}</h3>
                  <span className="timeline__date">{edu.date}</span>
                </div>
                <p className="timeline__company">
                  <span>{edu.school}</span>
                </p>
                <p className="timeline__desc">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

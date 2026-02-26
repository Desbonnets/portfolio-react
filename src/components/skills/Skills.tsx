import './Skills.css'

interface SkillCategory {
  title: string
  icon: string
  colorClass: string
  skills: string[]
}

const categories: SkillCategory[] = [
  {
    title: 'Backend',
    icon: '⚙️',
    colorClass: 'icon-blue',
    skills: ['PHP', 'Symfony', 'JavaScript', 'Express.js', 'API REST', 'MySQL', 'Doctrine / ORM'],
  },
  {
    title: 'Frontend',
    icon: '🖥️',
    colorClass: 'icon-green',
    skills: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML / CSS', 'Twig'],
  },
  {
    title: 'DevOps & Outils',
    icon: '🚀',
    colorClass: 'icon-purple',
    skills: ['Docker', 'Kubernetes', 'Git', 'GitLab', 'Linux', 'Windows'],
  },
  {
    title: 'Qualité & Conception',
    icon: '✅',
    colorClass: 'icon-orange',
    skills: ['Tests PHPUnit', 'UML', 'Revues de code', 'Bonnes pratiques'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Compétences</h2>
          <p className="section-subtitle">Technologies et outils maîtrisés</p>
        </div>
        <div className="skills__grid">
          {categories.map(cat => (
            <div key={cat.title} className="skills__card">
              <div className="skills__card-header">
                <div className={`skills__card-icon ${cat.colorClass}`}>{cat.icon}</div>
                <h3 className="skills__card-title">{cat.title}</h3>
              </div>
              <div className="skills__tags">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

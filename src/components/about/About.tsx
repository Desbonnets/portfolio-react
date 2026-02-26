import './About.css'

const softSkills = ["Travail d'équipe", 'Sérieux', 'Autonome', 'Curieux']

const interests = [
  { emoji: '📚', label: 'Lecture (Manga)' },
  { emoji: '🎮', label: 'Jeux vidéo' },
  { emoji: '🚴', label: 'Vélo' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">À propos</h2>
        </div>
        <div className="about__grid">
          <div className="about__main">
            <p className="about__text">
              Développeur web avec <strong>4 ans d'expérience en alternance</strong> au sein
              du Ministère des armées. Spécialisé en backend PHP/Symfony, avec des compétences
              en frontend et en mise en production sur des environnements conteneurisés (Kubernetes).
            </p>
            <p className="about__text">
              Habitué au travail en équipe, aux projets long terme et aux environnements
              proches de la production. J'aime concevoir des solutions fiables et maintenables
              en suivant les bonnes pratiques de développement.
            </p>
            <p className="about__text">
              Actuellement en formation <strong>Développeur d'application Java</strong> chez
              OpenClassrooms (2024–2026), je continue d'élargir mes compétences techniques
              tout en menant à bien mes missions en alternance.
            </p>
          </div>

          <div className="about__sidebar">
            <div className="about__info-card">
              <p className="about__info-title">Savoir-être</p>
              <div className="about__badges">
                {softSkills.map(skill => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>

              <p className="about__info-title">Centres d'intérêt</p>
              <div className="about__interests">
                {interests.map(interest => (
                  <div key={interest.label} className="interest-item">
                    <span>{interest.emoji}</span>
                    <span>{interest.label}</span>
                  </div>
                ))}
              </div>

              <div className="about__location">
                <p className="about__info-title">Localisation</p>
                <p className="about__location-text">
                  📍 Chartres de Bretagne (35)
                  <br />
                  🚗 Permis B &amp; véhicule personnel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import './App.css'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/project/Projects'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Profile />
        <About />
        <Skills />
        <Projects />
      </main>
      <footer className="footer">
        <div className="container">
          <p className="footer__text">
            © 2026 <span>Gilles DESBONNETS</span> – Développeur Junior
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

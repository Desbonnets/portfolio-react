import './App.css'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Profile />
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

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ApplicationBuddyPage from './pages/ApplicationBuddyPage'

function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-stone-700">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/applicationbuddy" element={<ApplicationBuddyPage />} />
    </Routes>
  )
}

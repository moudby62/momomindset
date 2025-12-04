import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import DailyMotivation from './pages/DailyMotivation'
import Articles from './pages/Articles'
import Community from './pages/Community'
import Podcast from './pages/Podcast'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Newsletter from './pages/Newsletter'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-900">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/daily-motivation" element={<DailyMotivation />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/community" element={<Community />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

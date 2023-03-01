import './App.css'
import AboutSection from './components/about'
import Faqs from './components/acordion'
import Contact from './components/contact'
import HeroSection from './components/hero'
import Navbar from './components/navBar'
import WorksSection from './components/works'


function App() {
  
  return (
    <main className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <Faqs />
      <Contact />
    </main>
  )
}

export default App

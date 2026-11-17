import About from '../components/About'
import Club from '../components/Club'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <Club />
        <div className="vignette">
          <About />
          <Skills />
        </div>
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

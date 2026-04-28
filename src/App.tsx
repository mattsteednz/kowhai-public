import Hero from './components/Hero'
import Features from './components/Features'
import TechStack from './components/TechStack'
import Footer from './components/Footer'
import Nav from './components/Nav'

export default function App() {
  return (
    <div className="min-h-screen bg-vault-950 overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Features />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}

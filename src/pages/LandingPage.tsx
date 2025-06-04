import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'

export default function LandingPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <Services />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}

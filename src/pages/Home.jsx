import About from "../components/About"
import Brands from "../components/Brands"
import Contact from "../components/Contact"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Testimonials from "../components/Testimonials"


function Home() {
  return (
    <div>
        <Header />
        <Brands />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
    </div>
  )
}

export default Home
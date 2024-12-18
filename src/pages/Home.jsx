import About from "../components/About"
import Brands from "../components/Brands"
import Contact from "../components/Contact"
import Header from "../components/Header"
import Projects from "../components/Projects"
import PropertyList from "../components/PropertyList"
import Testimonials from "../components/Testimonials"


function Home() {
  return (
    <div>
        <Header />
        <Brands />
        <About />
        <Projects />
        <Testimonials />
        <PropertyList />
        <Contact />
    </div>
  )
}

export default Home
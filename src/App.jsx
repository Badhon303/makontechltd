import { useState, useEffect, useRef } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Clients from "./components/Clients"
import About from "./components/About"
import WhyUs from "./components/WhyUs"
import Skills from "./components/Skills"
import Services from "./components/Services"
import CallToAction from "./components/CallToAction"
import Portfolio from "./components/Portfolio"
import Team from "./components/Team"
import Pricing from "./components/Pricing"
import Faq from "./components/Faq"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  let navbarLinks = useRef([])
  const [activeLink, setActiveLink] = useState("#home")
  const [headerScrolled, setHeaderScrolled] = useState(false)

  useEffect(() => {
    navbarLinks.current = [
      ...document.querySelectorAll("#navbar .scrollTo", true),
    ]
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      let position = window.scrollY + 200
      navbarLinks.current.forEach((navbarLink) => {
        if (!navbarLink.hash) return
        let section = document.querySelector(navbarLink.hash)
        if (!section) return
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(navbarLink.attributes.href.value)
        }
        if (position < 500) {
          setActiveLink("#home")
        }
        if (window.scrollY > 200) {
          setHeaderScrolled(true)
        } else {
          setHeaderScrolled(false)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <Header activeLink={activeLink} headerScrolled={headerScrolled} />
      <Hero />
      <main id="main">
        <Clients />
        <About />
        <WhyUs />
        <Skills />
        <Services />
        <CallToAction />
        <Portfolio />
        <Team />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />

      {/* <div id="preloader"></div> */}
      <a
        href="#"
        className={`back-to-top d-flex align-items-center justify-content-center ${
          headerScrolled && "active"
        }`}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  )
}

export default App

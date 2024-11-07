import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Achievement from "./components/Achievement";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function page() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Achievement></Achievement>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </div>
  )
}

export default page;
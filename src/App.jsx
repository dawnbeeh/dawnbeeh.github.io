import "./styles/globals.css"
import Navbar from "./components/common/Navbar"
import Home from "./components/sections/Home/Home"
import About from "./components/sections/About/About"
import Skills from "./components/sections/Skills/Skills"
import Experience from "./components/sections/Experience/Experience"
import Projects from "./components/sections/Projects/Projects"
import Footer from "./components/common/Footer"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App

import "./styles/globals.css"
import Navbar from "./components/common/Navbar"
import Home from "./components/sections/Home/Home"
import About from "./components/sections/About/About"
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
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App

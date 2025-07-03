
import Home from "./pages/Home";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import './App.css'
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  

  return (
    <>
    <div className="relative overflow-hidden">
     
      <ParticlesBackground/>
      
      <Navbar/>
      <Hero/>
      <Home />
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
     </div> 
      
    </>
  )
}

export default App

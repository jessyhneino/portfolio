import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="">
      
      <Nav />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

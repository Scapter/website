import "./App.css";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;

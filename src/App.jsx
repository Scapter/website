import "./App.css";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
// import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {/* Header'a "Sen şu an mobildesin/değilsin" bilgisini gönderiyoruz */}
      <Header isMobile={isMobile} />

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

import "./App.css";
import { Hero } from "./hero/Hero";
import { Navbarr } from "../src/topnav/Navbarr";

import { Skills } from "./skills/Skills";
import { Project } from "./section/projects/Project";
import { About } from "./section/about-me/About";
import { Footer } from "./section/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbarr />

      <Hero />
      <Skills />
      <Project />
      <About />
      <Footer />
    </div>
  );
}

export default App;

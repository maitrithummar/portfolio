import { useTheme } from "./hooks/useTheme";
import { Loader } from "./components/Loader";
import { ScrollProgress } from "./components/ScrollProgress";
import { CursorGlow } from "./components/CursorGlow";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// No Certifications / Projects / Achievements components are rendered
// because the resume doesn't list any yet. Add data to src/data/resume.ts
// and a matching component when real ones exist.

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen bg-grid">
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

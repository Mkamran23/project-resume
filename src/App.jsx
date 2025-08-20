import { data } from "./data";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <About about={data.about} />
      <Experience experience={data.experience} />
      <Education education={data.education} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Contact contact={data.contact} />
    </div>
  );
}

export default App;

import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="space-y-8">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
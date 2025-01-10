import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { GridBackground } from "@/components/GridBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <GridBackground />
      <div className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
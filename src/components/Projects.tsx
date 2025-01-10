import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with React and Node.js",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform with real-time updates",
    tech: ["Next.js", "Prisma", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description: "AI-powered content management system",
    tech: ["Python", "TensorFlow", "React"],
    github: "#",
    live: "#",
  },
];

export const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center glowing-text"
      >
        Featured Projects
      </motion.h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="project-card group"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span 
                  key={tech} 
                  className="text-sm font-mono bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <motion.a 
                href={project.github}
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href={project.live}
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
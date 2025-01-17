import { motion } from "framer-motion";
import { Code2, Layout, Server } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    category: "Tools & Others",
    icon: Code2,
    items: ["Git", "Docker", "AWS", "CI/CD"],
  },
];

export const About = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center glowing-text"
        >
          About Me
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-gray-400 max-w-3xl mx-auto mb-16 text-center"
        >
          I'm a passionate developer with a focus on creating efficient and scalable web applications.
          With expertise in both frontend and backend technologies, I bring ideas to life through code.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4"
              >
                <skill.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-400 font-mono text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
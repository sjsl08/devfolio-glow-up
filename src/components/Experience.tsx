import { motion } from "framer-motion";
import { Code2, Laptop, Server, Terminal } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Led development of multiple React-based web applications",
    icon: Laptop,
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions",
    period: "2019 - 2021",
    description: "Built scalable web applications using Node.js and React",
    icon: Code2,
  },
  {
    title: "Backend Developer",
    company: "Cloud Systems",
    period: "2017 - 2019",
    description: "Developed microservices architecture using Python and AWS",
    icon: Server,
  },
  {
    title: "Junior Developer",
    company: "StartUp Inc",
    period: "2016 - 2017",
    description: "Worked on various web development projects",
    icon: Terminal,
  },
];

export const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center glowing-text"
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
                >
                  <exp.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{exp.company} • {exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
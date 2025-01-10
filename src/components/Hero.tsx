import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-b from-[#0070F3]/20 to-transparent pointer-events-none"
      />
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        Hi, I'm <span className="gradient-text glowing-text">Your Name</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8"
      >
        A full-stack developer crafting beautiful web experiences with modern technologies
      </motion.p>
      
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ gap: '1rem', scale: 1.05 }}
        href="#projects"
        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300"
      >
        View My Work <ArrowRight className="w-4 h-4" />
      </motion.a>
    </section>
  );
};
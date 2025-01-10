import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-b from-[#0070F3]/20 to-transparent pointer-events-none"
      />
      
      <motion.div
        style={{ y, opacity }}
        className="relative z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm <span className="gradient-text glowing-text">Your Name</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8 leading-relaxed"
        >
          A full-stack developer crafting beautiful web experiences with modern technologies
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.a
            whileHover={{ gap: '1rem', scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 hover-glow"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </motion.a>
          
          <motion.div 
            className="w-1 h-16 bg-gradient-to-b from-primary to-transparent mt-12 floating"
            animate={{
              opacity: [0.5, 1, 0.5],
              height: ["64px", "32px", "64px"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
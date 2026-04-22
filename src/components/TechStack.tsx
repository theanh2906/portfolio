import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    title: "Languages",
    skills: ["Java", "Rust", "Go", "TypeScript", "Python"]
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Backend & DB",
    skills: ["NodeJS", "NestJS", "Spring Boot", "PostgreSQL", "Redis", "MongoDB"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git Actions", "Linux", "Jenkins"]
  }
];

const TechStack: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 mb-32 relative z-10" id="tech">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4"
      >
        <span className="text-neonBlue font-mono text-2xl">02.</span>
        Technical Arsenal
        <div className="h-px bg-white/10 flex-grow ml-4 max-w-sm" />
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-white/10 pb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-surface border border-white/5 rounded-lg text-gray-300 font-medium hover:border-cyberPurple/50 hover:text-cyberPurple transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

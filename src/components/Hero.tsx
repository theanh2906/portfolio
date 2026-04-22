import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SKILLS = ['Java', 'Go', 'Python', 'Full-stack'];

const Hero: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 75 : 150;
    const currentWord = SKILLS[skillIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentSkill === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentSkill === '') {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % SKILLS.length);
      } else {
        setCurrentSkill(currentWord.substring(0, currentSkill.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);
    
    return () => clearTimeout(timer);
  }, [currentSkill, isDeleting, skillIndex]);

  return (
    <section className="min-h-[50vh] flex flex-col justify-center items-start pt-32 pb-16 relative z-10 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-neonBlue text-xl font-mono mb-4 tracking-wider">Hello World, my name is</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Anh</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-6 h-[72px]">
          I build with <span className="text-gradient font-bold">{currentSkill}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-[3px] h-10 md:h-14 bg-cyberPurple ml-1 align-text-bottom"
          />
        </h2>
        <p className="max-w-2xl text-gray-400 text-lg leading-relaxed mb-8">
          I'm a software engineer specializing in building high-performance, scalable full-stack applications.
          Currently crafting exceptional digital experiences and robust architectures.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;

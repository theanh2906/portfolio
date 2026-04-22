import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Code, ExternalLink, Monitor, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  links: { github: string; live: string };
  renderIframe?: boolean;
}

const projects: Project[] = [
  {
    title: 'AI Trip Planner',
    description: 'A comprehensive platform for planning trips with AI-driven recommendations and itinerary generation. Seamlessly creates full schedules based on user preferences.',
    tech: ['React', 'Gemini API', 'Tailwind CSS', 'Framer Motion'],
    links: { github: '#', live: 'https://trippedia.vercel.app' },
    renderIframe: true
  },
  {
    title: 'AI Document Analyzer',
    description: 'A tool that analyzes documents and extracts key information using AI. It can be used to extract information from documents, such as invoices, receipts, and other documents.',
    tech: ['React', 'Gemini API', 'Tailwind CSS', 'Framer Motion'],
    links: { github: '#', live: 'https://theanh2906.github.io/ai-finance/' },
    renderIframe: true
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [showIframe, setShowIframe] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="relative group rounded-2xl glass-panel p-8 perspective-1000 overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={!showIframe ? { scale: 1.01, rotateX: 1, rotateY: 1 } : {}}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 240, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono text-neonBlue bg-neonBlue/10 rounded border border-neonBlue/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-neonBlue hover:bg-white/10 transition-all"
              title="View Code"
            >
              <Code className="w-5 h-5" />
            </a>
            <a 
              href={project.links.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-neonBlue hover:bg-white/10 transition-all"
              title="Open in New Tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            {project.renderIframe && (
              <button 
                onClick={() => setShowIframe(!showIframe)}
                className={`p-2 rounded-lg transition-all ${showIframe ? 'bg-neonBlue text-background' : 'bg-white/5 text-gray-400 hover:text-neonBlue hover:bg-white/10'}`}
                title={showIframe ? "Close Preview" : "Live Preview"}
              >
                {showIframe ? <X className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>
        
        <div className="relative flex-grow min-h-[200px]">
          <AnimatePresence mode="wait">
            {!showIframe ? (
              <motion.p 
                key="desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-400 leading-relaxed"
              >
                {project.description}
              </motion.p>
            ) : (
              <motion.div 
                key="iframe"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-[390px] h-[670px] mx-auto rounded-[3rem] overflow-hidden border-[8px] border-white/10 bg-black flex flex-col shadow-2xl relative"
              >
                {/* iPhone Mockup Header (Notch) */}
                <div className="absolute top-0 inset-x-0 h-8 flex justify-center z-20 pointer-events-none">
                  <div className="w-40 h-6 bg-white/10 rounded-b-2xl flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="w-8 h-1.5 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Status Bar Mockup */}
                <div className="px-8 py-2 bg-black border-b border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>9:41</span>
                  <div className="flex gap-1.5 items-center">
                    <div className="w-3 h-3 rounded-sm border border-white/20" />
                    <div className="w-3 h-3 rounded-sm bg-white/20" />
                    <div className="w-3 h-3 rounded-full border border-white/20" />
                  </div>
                </div>

                <div className="w-full h-full relative overflow-hidden">
                  <iframe 
                    src={project.links.live} 
                    className="w-full h-full border-none"
                    title={`${project.title} Mobile Preview`}
                    loading="lazy"
                  />
                </div>

                {/* iPhone Home Indicator */}
                <div className="absolute bottom-1 inset-x-0 h-1 flex justify-center z-20 pointer-events-none">
                  <div className="w-32 h-1 bg-white/20 rounded-full" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectShowcase: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 mb-32 relative z-10 scroll-m-20" id="projects">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4"
      >
        <span className="text-cyberPurple font-mono text-2xl">01.</span>
        Featured Projects
        <div className="h-px bg-white/10 flex-grow ml-4 max-w-sm" />
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} project={p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;


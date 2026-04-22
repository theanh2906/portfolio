import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import RealTimeDashboard from './components/Dashboard/RealTimeDashboard';
import ProjectShowcase from './components/ProjectShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-background text-white selection:bg-cyberPurple/30 selection:text-white pb-10">
      {/* Background Layer */}
      <ParticleBackground />

      {/* Content Layers */}
      <div className="max-w-7xl mx-auto w-full relative">
        <Hero />
        <RealTimeDashboard />
        <ProjectShowcase />
        <ExperienceTimeline />
        <TechStack />
        <ContactForm />
      </div>

      <footer className="text-center text-sm text-gray-500 font-mono mt-20 relative z-10">
        <p>Built with React & Tailwind CSS.</p>
        <p className="mt-2">© {new Date().getFullYear()} Ben. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default App;

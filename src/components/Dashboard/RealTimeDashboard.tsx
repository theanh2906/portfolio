import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCounter from './ExperienceCounter';
import ClockWidget from './ClockWidget';
import StatusBadge from './StatusBadge';

const RealTimeDashboard: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 mb-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-panel p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 max-w-4xl"
      >
        <div className="flex flex-col gap-6 w-full">
          <StatusBadge />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full">
            <ExperienceCounter />
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            <ClockWidget />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RealTimeDashboard;

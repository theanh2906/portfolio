import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceCounter: React.FC = () => {
  const [experience, setExperience] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const startDate = new Date('2019-06-01T00:00:00');

    const updateExperience = () => {
      const now = new Date();
      let diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const years = Math.floor(days / 365.25);
      const remainingDays = days % 365.25;
      const months = Math.floor(remainingDays / 30.4375);

      setExperience({ years, months, days: Math.floor(remainingDays % 30.4375) });
    };

    updateExperience();
    const interval = setInterval(updateExperience, 1000 * 60 * 60); // Update hourly

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-neonBlue/10 rounded-lg">
        <Briefcase className="w-6 h-6 text-neonBlue" />
      </div>
      <div>
        <h3 className="text-sm text-gray-400 font-medium">Experience</h3>
        <p className="text-xl font-bold font-mono">
          {experience.years} <span className="text-sm text-neonBlue">Yrs</span> {experience.months} <span className="text-sm text-neonBlue">Mos</span>
        </p>
      </div>
    </div>
  );
};

export default ExperienceCounter;

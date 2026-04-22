import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const ClockWidget: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-cyberPurple/10 rounded-lg">
        <Clock className="w-6 h-6 text-cyberPurple" />
      </div>
      <div>
        <h3 className="text-sm text-gray-400 font-medium">{formatDate(time)}</h3>
        <p className="text-xl font-bold font-mono tracking-wider">{formatTime(time)}</p>
      </div>
    </div>
  );
};

export default ClockWidget;

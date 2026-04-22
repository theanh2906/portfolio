import React from 'react';

const StatusBadge: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full w-fit">
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </div>
      <span className="text-sm font-medium text-green-400 tracking-wide uppercase">
        Ready for Remote Projects
      </span>
    </div>
  );
};

export default StatusBadge;

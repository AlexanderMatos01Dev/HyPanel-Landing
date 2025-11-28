import React from 'react';
import type { ConnectionLineProps } from '../../types/nodes';

export const ConnectionLine: React.FC<ConnectionLineProps> = ({ start, end, active, delay = 0 }) => {
  const pathD = `M ${start.x} ${start.y} C ${end.x} ${start.y}, ${start.x} ${end.y}, ${end.x} ${end.y}`;
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
      <path 
        d={pathD}
        stroke={active ? '#4DA6FF' : '#2A3B4C'} 
        strokeWidth={active ? 2 : 1} 
        fill="none" 
        strokeDasharray={active ? 'none' : '4 4'}
        className="transition-all duration-500"
      />
      {active && (
        <circle r={3} fill="#EDA333">
          <animateMotion 
            dur="1.2s" 
            begin={`${delay}s`}
            repeatCount="indefinite"
            path={pathD} 
          />
        </circle>
      )}
    </svg>
  );
};

export default ConnectionLine;

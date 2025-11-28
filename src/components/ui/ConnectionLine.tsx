import React from 'react';
import type { ConnectionLineProps } from '../../types/nodes';

const normalizeValue = (value: number | string) => {
  if (typeof value === 'number') return value;
  const trimmed = value.trim();
  if (trimmed.endsWith('%')) {
    return parseFloat(trimmed.replace('%', ''));
  }
  if (trimmed.endsWith('px')) {
    return parseFloat(trimmed.replace('px', ''));
  }
  return parseFloat(trimmed);
};

const clampToViewBox = (value: number) => Math.max(0, Math.min(100, value));

export const ConnectionLine: React.FC<ConnectionLineProps> = ({ start, end, active, delay = 0 }) => {
  const startX = clampToViewBox(normalizeValue(start.x));
  const startY = clampToViewBox(normalizeValue(start.y));
  const endX = clampToViewBox(normalizeValue(end.x));
  const endY = clampToViewBox(normalizeValue(end.y));

  const pathD = `M ${startX} ${startY} C ${endX} ${startY}, ${startX} ${endY}, ${endX} ${endY}`;
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
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

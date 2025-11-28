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

export const ConnectionLine: React.FC<ConnectionLineProps> = ({ start, end, active, delay = 0 }) => {
  const startX = normalizeValue(start.x);
  const startY = normalizeValue(start.y);
  const endX = normalizeValue(end.x);
  const endY = normalizeValue(end.y);

  // Ruta desde el centro (HyCore) hacia el nodo
  const pathToNode = `M ${startX} ${startY} L ${endX} ${endY}`;
  // Ruta de regreso: desde el nodo hacia el centro
  const pathFromNode = `M ${endX} ${endY} L ${startX} ${startY}`;
  
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none z-10" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Gradiente para la línea activa */}
        <linearGradient id={`lineGrad-${startX}-${endX}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4DA6FF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#EDA333" stopOpacity="1" />
          <stop offset="100%" stopColor="#4DA6FF" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      
      {/* Línea base (siempre visible, conecta visualmente) */}
      <line 
        x1={startX} 
        y1={startY} 
        x2={endX} 
        y2={endY}
        stroke={active ? '#4DA6FF' : '#2A3B4C'} 
        strokeWidth={active ? 1.2 : 0.6} 
        strokeDasharray={active ? 'none' : '3 3'}
        strokeLinecap="round"
        className="transition-all duration-700"
      />
      
      {/* Glow sutil cuando está activo */}
      {active && (
        <line 
          x1={startX} 
          y1={startY} 
          x2={endX} 
          y2={endY}
          stroke="#4DA6FF"
          strokeWidth={5}
          opacity={0.1}
          strokeLinecap="round"
        />
      )}
      
      {/* Bolita 1: Va DESDE el centro (HyCore) HACIA el nodo - representa comando/señal */}
      {active && (
        <circle r={2.2} fill="#EDA333" className="drop-shadow-[0_0_6px_rgba(237,163,51,0.9)]">
          <animateMotion 
            dur="1.8s" 
            begin={`${delay}s`}
            repeatCount="indefinite"
            path={pathToNode}
          />
        </circle>
      )}
      
      {/* Bolita 2: Va DESDE el nodo HACIA el centro - representa respuesta/status */}
      {active && (
        <circle r={1.8} fill="#4DA6FF" className="drop-shadow-[0_0_5px_rgba(77,166,255,0.8)]">
          <animateMotion 
            dur="2.2s" 
            begin={`${delay + 0.9}s`}
            repeatCount="indefinite"
            path={pathFromNode}
          />
        </circle>
      )}
      
      {/* Pulso en el punto de conexión del nodo */}
      {active && (
        <circle cx={endX} cy={endY} r={3} fill="none" stroke="#4DA6FF" strokeWidth={0.5}>
          <animate 
            attributeName="r" 
            values="3;6;3" 
            dur="2s" 
            begin={`${delay}s`}
            repeatCount="indefinite" 
          />
          <animate 
            attributeName="opacity" 
            values="0.8;0;0.8" 
            dur="2s" 
            begin={`${delay}s`}
            repeatCount="indefinite" 
          />
        </circle>
      )}
    </svg>
  );
};

export default ConnectionLine;

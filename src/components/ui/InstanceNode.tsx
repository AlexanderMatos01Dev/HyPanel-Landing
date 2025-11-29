import React from 'react';
import { Users, Box } from 'lucide-react';
import type { InstanceNodeProps } from '../../types/nodes';

export const InstanceNode: React.FC<InstanceNodeProps> = ({ position, label, status, playerCount }) => (
  <div 
    className={`absolute w-36 p-2.5 rounded-xl backdrop-blur-md transition-all duration-500 ease-out border flex flex-col gap-1.5 shadow-2xl z-20
      ${status === 'active' 
        ? 'bg-[#0F1623]/90 border-[#4DA6FF] shadow-[#4DA6FF]/30 scale-100' 
        : status === 'waking'
        ? 'bg-[#0F1623]/80 border-[#EDA333] shadow-[#EDA333]/20 scale-[0.98] animate-pulse'
        : 'bg-[#0B0F19]/60 border-gray-800 scale-95 opacity-70 grayscale'
      }`}
    style={position}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1.5">
        <div className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-green-400 animate-pulse' : status === 'waking' ? 'bg-[#EDA333] animate-pulse' : 'bg-orange-500'}`}></div>
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#8B9BB4]">
          {status === 'active' ? 'ONLINE' : status === 'waking' ? 'WAKING' : 'SLEEP'}
        </span>
      </div>
      {status === 'active' && playerCount > 0 && (
        <span className="text-[9px] text-[#4DA6FF] font-mono flex items-center gap-1">
          <Users size={9}/> {playerCount}
        </span>
      )}
    </div>
    
    <div className="flex items-center gap-2">
      <div className={`p-1.5 rounded-lg ${status === 'active' ? 'bg-[#4DA6FF]/20 text-[#4DA6FF]' : status === 'waking' ? 'bg-[#EDA333]/20 text-[#EDA333]' : 'bg-gray-800 text-gray-500'}`}>
        <Box size={14} />
      </div>
      <div className="flex flex-col">
        <span className={`text-[11px] font-bold ${status === 'active' ? 'text-white' : status === 'waking' ? 'text-[#EDA333]' : 'text-gray-400'}`}>{label}</span>
        <span className="text-[9px] text-gray-500 font-mono">
          {status === 'active' ? 'container-01' : status === 'waking' ? 'Iniciando...' : 'CRaC Ready'}
        </span>
      </div>
    </div>
  </div>
);

export default InstanceNode;

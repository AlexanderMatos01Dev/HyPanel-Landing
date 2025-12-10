import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import InstanceNode from '../ui/InstanceNode';
import ConnectionLine from '../ui/ConnectionLine';

// Escenarios de demostración
const scenarios = [
  {
    name: 'multiworld',
    title: 'Multi-World Server',
    nodes: ['Lobby', 'Survival', 'Minigames', 'Creative'],
    steps: 8,
    coreMessages: ['💤 All sleeping', '⚡ Player joins', '✓ Lobby ready', '→ Moving to Survival', '✓ Survival ready', '→ Another joins Creative', '✓ Creative ready', '✓ Full activity']
  },
  {
    name: 'event',
    title: 'Live Event',
    nodes: ['Queue', 'Event Arena', 'Spectators', 'VIP Lounge'],
    steps: 7,
    coreMessages: ['💤 Event scheduled', '⚡ Gates opening', '✓ Queue active', '→ Players entering', '✓ Arena live', '→ VIPs arriving', '🎮 Event running']
  },
  {
    name: 'rpg',
    title: 'RPG Server',
    nodes: ['Spawn', 'Dungeons', 'PvP Zone', 'Trading Hub'],
    steps: 8,
    coreMessages: ['💤 Night time', '⚡ Adventurer logs in', '✓ Spawn ready', '→ Entering dungeon', '✓ Dungeon instance', '→ Trading time', '✓ Hub active', '⚔️ Adventure on']
  }
];

export const HyCoreVisualization: React.FC = () => {
  const [simStep, setSimStep] = useState(0);
  const [scenario, setScenario] = useState(0);

  const currentScenario = scenarios[scenario];

  useEffect(() => {
    // Ciclo de pasos dentro del escenario
    const simInterval = setInterval(() => {
      setSimStep((prev) => {
        const next = prev + 1;
        if (next >= currentScenario.steps) {
          // Cambiar al siguiente escenario
          setTimeout(() => {
            setScenario((s) => (s + 1) % scenarios.length);
          }, 500);
          return 0;
        }
        return next;
      });
    }, 2000);
    return () => clearInterval(simInterval);
  }, [scenario, currentScenario.steps]);

  // Lógica de estados de los nodos basada en el escenario y paso actual
  const getNodeStatus = (nodeIndex: number): 'sleeping' | 'waking' | 'active' => {
    // Cada nodo se activa en diferentes pasos según el escenario
    const activationStep = nodeIndex === 0 ? 2 : nodeIndex === 1 ? 4 : nodeIndex === 2 ? 6 : 7;
    const wakingStep = activationStep - 1;
    
    if (simStep >= activationStep) return 'active';
    if (simStep === wakingStep) return 'waking';
    return 'sleeping';
  };

  const getNodePlayers = (nodeIndex: number): number => {
    const activationStep = nodeIndex === 0 ? 2 : nodeIndex === 1 ? 4 : nodeIndex === 2 ? 6 : 7;
    if (simStep < activationStep) return 0;
    // Distribuir jugadores de forma realista
    if (nodeIndex === 0) return simStep >= 3 ? (simStep >= 5 ? 1 : 2) : 1;
    if (nodeIndex === 1) return simStep >= 5 ? 2 : 1;
    if (nodeIndex === 2) return 1;
    return simStep >= 7 ? 1 : 0;
  };

  const getCoreMessage = (): string => {
    const messages = currentScenario.coreMessages;
    return messages[Math.min(simStep, messages.length - 1)];
  };

  const getCoreStyle = (): string => {
    if (simStep === 0) return 'bg-[#1A3A5A]/40 border-[#2A3B4C] text-[#8B9BB4]';
    if (simStep === 1) return 'bg-[#EDA333]/20 border-[#EDA333]/50 text-[#EDA333]';
    return 'bg-green-500/20 border-green-500/50 text-green-400';
  };

  return (
    <div className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center select-none">
      {/* Hexágonos flotantes decorativos */}
      <svg className="absolute w-12 h-12 opacity-20" style={{top: '5%', left: '15%'}} viewBox="0 0 50 50">
        <polygon points="25,2 47,15 47,40 25,48 3,40 3,15" fill="none" stroke="#4DA6FF" strokeWidth="1"/>
      </svg>
      <svg className="absolute w-8 h-8 opacity-15" style={{top: '15%', right: '10%'}} viewBox="0 0 50 50">
        <polygon points="25,2 47,15 47,40 25,48 3,40 3,15" fill="none" stroke="#EDA333" strokeWidth="1"/>
      </svg>
      <svg className="absolute w-16 h-16 opacity-10" style={{bottom: '20%', left: '5%'}} viewBox="0 0 50 50">
        <polygon points="25,2 47,15 47,40 25,48 3,40 3,15" fill="none" stroke="#4DA6FF" strokeWidth="1"/>
      </svg>
      <svg className="absolute w-10 h-10 opacity-15" style={{bottom: '30%', right: '15%'}} viewBox="0 0 50 50">
        <polygon points="25,2 47,15 47,40 25,48 3,40 3,15" fill="none" stroke="#EDA333" strokeWidth="1"/>
      </svg>
      <svg className="absolute w-6 h-6 opacity-20" style={{top: '40%', left: '8%'}} viewBox="0 0 50 50">
        <polygon points="25,2 47,15 47,40 25,48 3,40 3,15" fill="none" stroke="rgb(74,222,128)" strokeWidth="1"/>
      </svg>
      
      <div className="relative w-full h-full max-w-[550px] flex items-center justify-center">
        {/* Indicador de escenario */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40">
          <span className="px-3 py-1 bg-[#151D2C]/80 border border-[#2A3B4C] rounded-full text-[10px] font-medium text-[#8B9BB4] backdrop-blur-sm">
            {currentScenario.title}
          </span>
          <div className="flex gap-1">
            {scenarios.map((_, i) => (
              <div 
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === scenario ? 'bg-[#EDA333] scale-125' : 'bg-[#2A3B4C]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* HyCore central */}
        <div className="relative z-30 w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-[#0B0F19] to-[#151D2C] border-2 border-[#2A3B4C] rounded-full flex flex-col items-center justify-center shadow-2xl">
           <div className={`absolute inset-0 rounded-full border-2 transition-all duration-700 ease-in-out ${simStep >= 1 ? 'border-[#EDA333] opacity-100 scale-110' : 'border-transparent opacity-0 scale-100'}`}></div>
           <div className={`absolute inset-0 rounded-full border-2 transition-all duration-1000 ease-in-out ${simStep >= 1 ? 'border-[#EDA333] opacity-50 scale-125' : 'border-transparent opacity-0 scale-100'}`}></div>
           <Globe className={`w-10 h-10 md:w-12 md:h-12 mb-1 transition-all duration-500 ${simStep >= 1 ? 'text-[#EDA333] drop-shadow-[0_0_8px_rgba(237,163,51,0.5)]' : 'text-gray-600'}`} strokeWidth={1.5} />
           <span className="text-[11px] md:text-[12px] font-bold text-[#8B9BB4] uppercase -mr-[0.2em]">HyCore</span>
           <div className={`absolute -bottom-8 px-2.5 py-1 rounded-lg text-[9px] font-medium border backdrop-blur-md shadow-xl transition-all duration-500 whitespace-nowrap ${getCoreStyle()}`}>
             {getCoreMessage()}
           </div>
        </div>
        
        {/* Líneas de conexión - 4 nodos */}
        <div className="absolute inset-0 pointer-events-none">
          <ConnectionLine start={{x: '50%', y: '50%'}} end={{x: '12%', y: '15%'}} active={getNodeStatus(0) === 'active'} />
          <ConnectionLine start={{x: '50%', y: '50%'}} end={{x: '88%', y: '15%'}} active={getNodeStatus(1) === 'active'} delay={0.2} />
          <ConnectionLine start={{x: '50%', y: '50%'}} end={{x: '88%', y: '85%'}} active={getNodeStatus(2) === 'active'} delay={0.4} />
          <ConnectionLine start={{x: '50%', y: '50%'}} end={{x: '12%', y: '85%'}} active={getNodeStatus(3) === 'active'} delay={0.6} />
        </div>
        
        {/* 4 Nodos de instancia */}
        <InstanceNode 
          position={{ top: '5%', left: '-2%' }}
          label={currentScenario.nodes[0]}
          status={getNodeStatus(0)}
          playerCount={getNodePlayers(0)}
        />
        <InstanceNode 
          position={{ top: '5%', right: '-2%' }}
          label={currentScenario.nodes[1]}
          status={getNodeStatus(1)}
          playerCount={getNodePlayers(1)}
        />
        <InstanceNode 
          position={{ bottom: '5%', right: '-2%' }}
          label={currentScenario.nodes[2]}
          status={getNodeStatus(2)}
          playerCount={getNodePlayers(2)}
        />
        <InstanceNode 
          position={{ bottom: '5%', left: '-2%' }}
          label={currentScenario.nodes[3]}
          status={getNodeStatus(3)}
          playerCount={getNodePlayers(3)}
        />
      </div>
    </div>
  );
};

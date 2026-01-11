import React from 'react';
import { Database, Server, Check, HardDrive, Cpu, Globe } from 'lucide-react';

interface Config {
  projectName: string;
  infraType: 'hypanel_managed' | 'bring_your_own';
  provider: string;
  scaling: string;
  worlds: string[];
}

interface VisualConfiguratorProps {
  config: Config;
  setConfig: (config: Config) => void;
  toggleWorld: (world: string) => void;
}

export const VisualConfigurator: React.FC<VisualConfiguratorProps> = ({ config, setConfig, toggleWorld }) => {
  
  const calculatePrice = () => {
    if (config.infraType === 'bring_your_own') return '20.00';
    // Managed: $29 base + $6 per world container
    return (29 + (config.worlds.length * 6)).toFixed(2);
  };

  const price = calculatePrice();
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto roadmap-scrollbar pr-2 space-y-8 py-2">
        
        {/* Infrastructure Type */}
        <div className="space-y-4">
          <label className="flex items-center gap-2 text-xs font-bold text-[#8B9BB4] uppercase tracking-wider">
            <Server size={14} /> Infrastructure (Physical Layer)
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setConfig({...config, infraType: 'hypanel_managed'})}
              className={`p-4 rounded-xl border text-left transition-all relative group ${config.infraType === 'hypanel_managed' ? 'bg-[#4DA6FF]/10 border-[#4DA6FF] ring-1 ring-[#4DA6FF]/50' : 'bg-[#0F1623] border-[#2A3B4C] hover:border-[#4DA6FF]/50'}`}
            >
              <div className="flex justify-between items-start mb-3">
                <Database size={24} className={config.infraType === 'hypanel_managed' ? 'text-[#4DA6FF]' : 'text-[#8B9BB4] group-hover:text-[#4DA6FF] transition-colors'} />
                {config.infraType === 'hypanel_managed' && <Check size={18} className="text-[#4DA6FF]" />}
              </div>
              <div className="text-base font-bold text-white mb-1">Managed Cloud</div>
              <div className="text-xs text-[#8B9BB4] leading-relaxed">We handle the hardware.<br/>You just play.</div>
            </button>

            <button 
              onClick={() => setConfig({...config, infraType: 'bring_your_own'})}
              className={`p-4 rounded-xl border text-left transition-all relative group ${config.infraType === 'bring_your_own' ? 'bg-[#EDA333]/10 border-[#EDA333] ring-1 ring-[#EDA333]/50' : 'bg-[#0F1623] border-[#2A3B4C] hover:border-[#EDA333]/50'}`}
            >
              <div className="flex justify-between items-start mb-3">
                <HardDrive size={24} className={config.infraType === 'bring_your_own' ? 'text-[#EDA333]' : 'text-[#8B9BB4] group-hover:text-[#EDA333] transition-colors'} />
                {config.infraType === 'bring_your_own' && <Check size={18} className="text-[#EDA333]" />}
              </div>
              <div className="text-base font-bold text-white mb-1">BYO Server</div>
              <div className="text-xs text-[#8B9BB4] leading-relaxed">Connect your VPS.<br/>Save costs.</div>
            </button>
          </div>
          
          {config.infraType === 'bring_your_own' && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-[#EDA333]/5 border border-[#EDA333]/20">
               <div className="w-1 h-1 rounded-full bg-[#EDA333] mt-1.5 flex-shrink-0"></div>
               <p className="text-[10px] text-[#8B9BB4] leading-normal">
                  <strong>Tip:</strong> You can use a cloud provider's free tier for testing. <span className="opacity-70">Stability and performance may vary depending on your active workload.</span>
               </p>
            </div>
          )}
        </div>

        {/* World Management */}
        <div className="space-y-4">
          <label className="flex items-center gap-2 text-xs font-bold text-[#8B9BB4] uppercase tracking-wider">
            <Cpu size={14} /> Active World Containers
          </label>
          <div className="space-y-2">
            {['lobby', 'survival', 'dungeons', 'creative'].map(world => (
              <div 
                key={world}
                onClick={() => toggleWorld(world)}
                className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all hover:bg-[#2A3B4C]/20 ${config.worlds.includes(world) ? 'border-[#4ADE80]/30 bg-[#2A3B4C]/20' : 'border-[#2A3B4C] opacity-60 hover:opacity-100'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full transition-all ${config.worlds.includes(world) ? 'bg-[#4ADE80] shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-[#2A3B4C]'}`}></div>
                  <span className={`text-sm font-medium ${config.worlds.includes(world) ? 'text-white' : 'text-[#8B9BB4]'}`}>{world.charAt(0).toUpperCase() + world.slice(1)}</span>
                </div>
                
                <span className={`text-[10px] uppercase px-2 py-0.5 rounded transition-colors ${config.worlds.includes(world) ? 'bg-[#4ADE80]/10 text-[#4ADE80]' : 'bg-[#2A3B4C]/50 text-[#8B9BB4]'}`}>
                  {config.worlds.includes(world) ? 'Online' : 'Offline'}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-[#8B9BB4]/50 italic text-center">
             Containers run isolated on your selected Infrastructure Instance
          </p>
        </div>
      </div>

      {/* Footer / Estimation */}
      <div className="mt-auto pt-6 border-t border-[#2A3B4C]">
         <div className="flex justify-between items-end mb-4">
            <div>
               <div className="text-[#8B9BB4] text-xs uppercase tracking-wider font-bold mb-1">Estimated Cost</div>
               <div className="flex items-baseline gap-1">
                 <span className="text-2xl font-bold text-white tracking-tight">${price}</span>
                 <span className="text-[#8B9BB4] text-sm font-medium">/mo</span>
               </div>
            </div>
            <div className="text-right">
                <div className="text-[#8B9BB4] text-xs mb-1">
                  {config.infraType === 'hypanel_managed' ? 'Hourly billing' : 'Standard License'}
                </div>
                {config.infraType === 'hypanel_managed' && (
                  <div className="text-[#4DA6FF] text-[10px] bg-[#4DA6FF]/10 px-2 py-0.5 rounded-full inline-block">
                    Includes {config.worlds.length} active instances
                  </div>
                )}
            </div>
         </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Server, Layers, Clock, LayoutDashboard, Code } from 'lucide-react';
import { VisualConfigurator } from './server-infrastructure/VisualConfigurator';
import { CodeViewer } from './server-infrastructure/CodeViewer';
import { ServerFeatures } from './server-infrastructure/ServerFeatures';

interface ConfigState {
  projectName: string;
  infraType: 'hypanel_managed' | 'bring_your_own';
  provider: string;
  scaling: string;
  worlds: string[];
}

export const ServerInfrastructure: React.FC = () => {
  const [viewMode, setViewMode] = useState<'visual' | 'code'>('visual');
  const [config, setConfig] = useState<ConfigState>({
    projectName: 'hytale-rpg',
    infraType: 'hypanel_managed',
    provider: 'external_vps',
    scaling: 'dynamic_auto',
    worlds: ['lobby', 'survival', 'dungeons']
  });

  const toggleWorld = (world: string) => {
    if (config.worlds.includes(world)) {
      setConfig({ ...config, worlds: config.worlds.filter(w => w !== world) });
    } else {
      setConfig({ ...config, worlds: [...config.worlds, world] });
    }
  };

  return (
    <section id="server-infrastructure" className="py-20 bg-gradient-to-b from-[#0F1623] to-[#0B0F19] relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(77,166,255,0.05),transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 backdrop-blur-sm mb-4">
            <Server size={16} className="text-[#4DA6FF]" />
            <span className="text-[#4DA6FF] text-xs font-bold tracking-wide uppercase">How does it help with infrastructure?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hybrid Infrastructure Management
          </h2>
          <p className="text-[#8B9BB4] text-lg max-w-2xl mx-auto mb-4">
            Professional infrastructure power with the freedom to choose where to host it.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4DA6FF]/10 to-[#EDA333]/10 border border-[#2A3B4C] rounded-xl">
            <Layers size={16} className="text-[#4DA6FF]" />
            <span className="text-[#8B9BB4] text-sm">Use our <strong className="text-white">managed cloud</strong> or <strong className="text-white">bring your own server</strong> to cut costs.</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Interactive Configurator (Visual/Code) */}
          <div className="relative flex flex-col">
            {/* Toggle Controls */}
            <div className="flex justify-between items-end mb-4">
               <div className="flex items-center gap-2 bg-[#0B0F19] border border-[#2A3B4C] p-1 rounded-lg w-fit">
                <button 
                  onClick={() => setViewMode('visual')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'visual' ? 'bg-[#2A3B4C] text-white shadow-sm' : 'text-[#8B9BB4] hover:text-white'}`}
                >
                  <LayoutDashboard size={14} />
                  Visual
                </button>
                <button 
                  onClick={() => setViewMode('code')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'code' ? 'bg-[#2A3B4C] text-white shadow-sm' : 'text-[#8B9BB4] hover:text-white'}`}
                >
                  <Code size={14} />
                  Code (JSON)
                </button>
              </div>
              <div className="text-xs text-[#8B9BB4] hidden sm:block">
                 {viewMode === 'visual' ? 'Interactive Mode' : 'Read-only View'}
              </div>
            </div>

            {/* Main Window Frame */}
            <div className="bg-[#0B0F19] border border-[#2A3B4C] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col h-[520px] transition-all duration-300 group hover:border-[#4DA6FF]/30">
               {/* Window Controls Decoration */}
               <div className="h-8 bg-[#0F1623] border-b border-[#2A3B4C] flex items-center px-4 gap-2 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  <div className="ml-4 text-xs text-[#8B9BB4] opacity-50 font-mono flex-1 text-center pr-12">
                     HyPanel Studio — {viewMode === 'visual' ? 'Designer' : 'Source'}
                  </div>
               </div>

               <div className="p-6 h-[calc(100%-2rem)] overflow-hidden">
                  {viewMode === 'visual' ? (
                    <div className="h-full animate-in fade-in zoom-in-95 duration-300">
                      <VisualConfigurator config={config} setConfig={setConfig} toggleWorld={toggleWorld} />
                    </div>
                  ) : (
                    <div className="h-full animate-in fade-in zoom-in-95 duration-300">
                      <CodeViewer config={config} />
                    </div>
                  )}
               </div>
               
               {/* Disclaimer overlay */}
               <div className="absolute bottom-2 right-4 pointer-events-none">
                  <span className="text-[10px] text-[#8B9BB4]/30 font-mono">* For illustration purposes only</span>
               </div>
            </div>
            
            {/* Background Glows */}
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-[#4DA6FF]/5 rounded-full blur-3xl z-[-1]"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-[#EDA333]/5 rounded-full blur-3xl z-[-1]"></div>

            {/* Messaging / Philosophy */}
            <div className="mt-6 text-center lg:text-left px-2">
               <p className="text-[#8B9BB4] text-sm">
                  <span className="text-[#4DA6FF] font-semibold">Deep control</span> for technical experts. <span className="text-[#EDA333] font-semibold">Effortless management</span> for project leaders. 
                  <br className="hidden md:block" />
                  We built HyPanel to empower every member of your team seamlessly.
               </p>
            </div>
          </div>

          {/* Right: Features */}
          <ServerFeatures />
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A3A5A]/30 border border-[#2A3B4C] rounded-xl text-sm text-[#8B9BB4]">
            <Clock size={16} className="text-[#4DA6FF]" />
            <span>Complex infrastructure, made <strong className="text-white">simple</strong>.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerInfrastructure;

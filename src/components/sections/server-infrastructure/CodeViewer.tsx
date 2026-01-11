import React from 'react';

interface Config {
  projectName: string;
  infraType: 'hypanel_managed' | 'bring_your_own';
  provider: string;
  scaling: string;
  worlds: string[];
}

interface CodeViewerProps {
  config: Config;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ config }) => {
  return (
    <div className="h-full flex flex-col font-mono text-sm pt-2">
      <div className="overflow-y-auto roadmap-scrollbar flex-1 pr-2 space-y-1">
        <div className="text-white opacity-50 select-none text-xs mb-2"># HyPanel Configuration File</div>
        <div><span className="text-white">{`{`}</span></div>
        <div className="pl-4 group hover:bg-[#2A3B4C]/20 -ml-4 px-4 rounded transition-colors">
            <span className="text-[#EDA333]">"project"</span>: <span className="text-[#4ADE80]">"{config.projectName}"</span>,
        </div>
        <div className="pl-4"><span className="text-[#EDA333]">"infrastructure"</span>: <span className="text-white">{`{`}</span></div>
        
        {config.infraType === 'hypanel_managed' ? (
          <>
            <div className="pl-8"><span className="text-[#8B9BB4] italic">// Managed by HyPanel Cloud</span></div>
            <div className="pl-8 group hover:bg-[#2A3B4C]/20 -ml-8 px-8 rounded transition-colors"><span className="text-[#EDA333]">"type"</span>: <span className="text-[#60A5FA]">"hypanel_managed"</span>,</div>
            <div className="pl-8 group hover:bg-[#2A3B4C]/20 -ml-8 px-8 rounded transition-colors"><span className="text-[#EDA333]">"region"</span>: <span className="text-[#60A5FA]">"auto"</span>,</div>
             <div className="pl-8 group hover:bg-[#2A3B4C]/20 -ml-8 px-8 rounded transition-colors"><span className="text-[#EDA333]">"billing"</span>: <span className="text-[#60A5FA]">"hourly"</span></div>
          </>
        ) : (
          <>
             <div className="pl-8"><span className="text-[#8B9BB4] italic">// External provider (Cost savings)</span></div>
             <div className="pl-8 group hover:bg-[#2A3B4C]/20 -ml-8 px-8 rounded transition-colors"><span className="text-[#EDA333]">"type"</span>: <span className="text-[#60A5FA]">"bring_your_own"</span>,</div>
             <div className="pl-8 group hover:bg-[#2A3B4C]/20 -ml-8 px-8 rounded transition-colors"><span className="text-[#EDA333]">"provider"</span>: <span className="text-[#60A5FA]">"external_vps"</span>,</div>
             <div className="pl-8 group hover:bg-[#2A3B4C]/20 -ml-8 px-8 rounded transition-colors"><span className="text-[#EDA333]">"ip"</span>: <span className="text-[#4ADE80]">"192.168.1.42"</span></div>
          </>
        )}
        
        <div className="pl-4"><span className="text-white">{`}`}</span>,</div>
        
        <div className="pl-4"><span className="text-[#EDA333]">"environments"</span>: <span className="text-white">{`{`}</span></div>
          <div className="pl-8 group hover:bg-[#2A3B4C]/20 -ml-8 px-8 rounded transition-colors"><span className="text-[#A78BFA]">"production"</span>: <span className="text-white">{`{`}</span> "scaling": <span className="text-[#60A5FA]">"auto"</span> <span className="text-white">{`}`}</span></div>
        <div className="pl-4"><span className="text-white">{`}`}</span>,</div>

        <div className="pl-4"><span className="text-[#EDA333]">"worlds"</span>: <span className="text-white">[</span></div>
        {config.worlds.map((w, i) => (
          <div key={w} className="pl-8 group hover:bg-[#2A3B4C]/20 -ml-8 px-8 rounded transition-colors">
            <span className="text-white">{`{`} </span>
            <span className="text-[#EDA333]">"name"</span>: <span className="text-[#4ADE80]">"{w}"</span>, <span className="text-[#EDA333]">"port"</span>: <span className="text-[#F87171]">{25565 + i}</span>
            <span className="text-white">{`}`}</span>{i < config.worlds.length - 1 ? ',' : ''}
          </div>
        ))}
        <div className="pl-4"><span className="text-white">]</span>,</div>
        <div className="pl-4"><span className="text-[#EDA333]">"hycore"</span>: <span className="text-white">{`{`}</span></div>
          <div className="pl-8"><span className="text-[#EDA333]">"version"</span>: <span className="text-[#4ADE80]">"latest"</span></div>
        <div className="pl-4"><span className="text-white">{`}`}</span></div>
        <div><span className="text-white">{`}`}</span></div>
        
        <div className="mt-4 border-t border-[#2A3B4C] pt-2 animate-pulse">
           <span className="text-[#8B9BB4]">{`~`}</span> <span className="text-white">_</span>
        </div>
      </div>
    </div>
  );
};

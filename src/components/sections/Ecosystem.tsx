import React from 'react';
import { Server, Box, Palette, Users, Hexagon } from 'lucide-react';

export const Ecosystem: React.FC = () => (
  <section id="ecosystem" className="min-h-screen py-20 bg-gradient-to-b from-[#0F1623] to-[#0B0F19] border-t border-[#2A3B4C] relative overflow-hidden scroll-mt-16 flex items-center">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4DA6FF]/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EDA333]/5 rounded-full blur-[100px]"></div>
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
        <line x1="50%" y1="50%" x2="25%" y2="70%" stroke="#4DA6FF" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="50%" x2="75%" y2="70%" stroke="#A78BFA" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.2s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="50%" x2="25%" y2="30%" stroke="#EDA333" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="0.8s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="#4ADE80" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.1s" repeatCount="indefinite" />
        </line>
      </svg>
    </div>
    
    <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 backdrop-blur-sm mb-4">
          <Hexagon size={16} className="text-[#4DA6FF]" />
          <span className="text-[#4DA6FF] text-xs font-bold tracking-wide uppercase">Unified Ecosystem</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          One platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA6FF] to-[#EDA333]">Everything connected.</span>
        </h2>
        <p className="text-[#8B9BB4] text-center max-w-3xl mx-auto">
          Every component talks to each other. Infrastructure scales servers, Hytahub deploys content, The Forge creates logic, and Community tools manage players — all through a single dashboard.
        </p>
      </div>

      {/* Visual diagram */}
      <div className="relative mb-16">
        {/* Center Hub */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-40 h-40 bg-gradient-to-br from-[#4DA6FF]/30 to-[#EDA333]/30 rounded-full flex items-center justify-center border-2 border-[#4DA6FF]/50 shadow-[0_0_50px_rgba(77,166,255,0.3)]">
              <div className="text-center">
                <Hexagon size={40} className="text-[#EDA333] mx-auto mb-2" />
                <span className="text-white font-bold text-base">HyPanel</span>
                <span className="text-[#4DA6FF] text-xs block font-semibold">Central Hub</span>
              </div>
            </div>
            {/* Multiple pulse animations */}
            <div className="absolute inset-0 rounded-full border-2 border-[#4DA6FF]/30 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-[#EDA333]/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Connected elements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="group p-5 rounded-xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-[#4DA6FF]/50 transition-all text-center relative">
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#4DA6FF] rounded-full animate-pulse"></div>
            <div className="w-12 h-12 bg-[#4DA6FF]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Server size={24} className="text-[#4DA6FF]" />
            </div>
              <h3 className="text-white font-bold text-sm mb-1">Hosting</h3>
            <p className="text-[#8B9BB4] text-[10px] mt-1 leading-relaxed">Auto-scales based on player load</p>
            <div className="mt-2 text-[#4DA6FF]/60 text-[9px] font-mono">↔ Resources</div>
          </div>

          <div className="group p-5 rounded-xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-[#4ef4d2]/50 transition-all text-center relative">
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#4ef4d2] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-12 h-12 bg-[#4ef4d2]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Box size={24} className="text-[#4ef4d2]" />
            </div>
              <h3 className="text-white font-bold text-sm mb-1">Content</h3>
            <p className="text-[#8B9BB4] text-[10px] mt-1 leading-relaxed">Deploy from Hytahub instantly</p>
            <div className="mt-2 text-[#4ef4d2]/60 text-[9px] font-mono">→ Mods & Assets</div>
          </div>

          <div className="group p-5 rounded-xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-orange-400/50 transition-all text-center relative">
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            <div className="w-12 h-12 bg-orange-400/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Palette size={24} className="text-orange-400" />
            </div>
              <h3 className="text-white font-bold text-sm mb-1">Creation</h3>
            <p className="text-[#8B9BB4] text-[10px] mt-1 leading-relaxed">Build logic in The Forge</p>
            <div className="mt-2 text-orange-400/60 text-[9px] font-mono">← Scripts & Logic</div>
          </div>

          <div className="group p-5 rounded-xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-green-400/50 transition-all text-center relative">
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
            <div className="w-12 h-12 bg-green-400/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Users size={24} className="text-green-400" />
            </div>
              <h3 className="text-white font-bold text-sm mb-1">Community</h3>
            <p className="text-[#8B9BB4] text-[10px] mt-1 leading-relaxed">Manage players & permissions</p>
            <div className="mt-2 text-green-400/60 text-[9px] font-mono">↕ Player Data</div>
          </div>
        </div>

        {/* Data Flow Explanation */}
        <div className="bg-gradient-to-r from-[#4DA6FF]/10 via-[#A78BFA]/10 to-[#4ADE80]/10 border border-[#2A3B4C] rounded-xl p-6 text-center">
          <p className="text-white font-semibold mb-2">Real-time Data Synchronization</p>
          <p className="text-[#8B9BB4] text-sm leading-relaxed">
            All components share data through HyPanel's unified API. When you deploy content from Hytahub, hosting automatically allocates resources. 
            Player actions in Community tools sync with The Forge scripts. Everything happens in milliseconds, transparently.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Ecosystem;

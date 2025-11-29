import React from 'react';
import { Server, Box, Palette, Users, Coins, ArrowRight, Hexagon, Sparkles } from 'lucide-react';

export const Ecosystem: React.FC = () => (
  <section id="ecosystem" className="py-20 min-h-screen bg-gradient-to-b from-[#0F1623] to-[#0B0F19] border-t border-[#2A3B4C] relative overflow-hidden scroll-mt-16">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4DA6FF]/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EDA333]/5 rounded-full blur-[100px]"></div>
    </div>
    
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 backdrop-blur-sm mb-4">
          <Hexagon size={16} className="text-[#4DA6FF]" />
          <span className="text-[#4DA6FF] text-xs font-bold tracking-wide uppercase">Unified Ecosystem</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          One platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA6FF] to-[#EDA333]">Everything connected.</span>
        </h2>
      </div>

      {/* Visual diagram */}
      <div className="relative mb-16">
        {/* Center Hub */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-[#4DA6FF]/20 to-[#EDA333]/20 rounded-full flex items-center justify-center border-2 border-[#4DA6FF]/30">
              <div className="text-center">
                <Hexagon size={32} className="text-[#EDA333] mx-auto mb-1" />
                <span className="text-white font-bold text-sm">HyPanel</span>
              </div>
            </div>
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full border border-[#4DA6FF]/20 animate-ping"></div>
          </div>
        </div>

        {/* Connected elements */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="group p-4 rounded-xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-[#4DA6FF]/50 transition-all text-center">
            <div className="w-10 h-10 bg-[#4DA6FF]/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Server size={20} className="text-[#4DA6FF]" />
            </div>
              <h3 className="text-white font-bold text-sm">Hosting</h3>
            <p className="text-[#8B9BB4] text-[10px] mt-1">Scalable infrastructure</p>
          </div>

          <div className="group p-4 rounded-xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-purple-400/50 transition-all text-center">
            <div className="w-10 h-10 bg-purple-400/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Box size={20} className="text-purple-400" />
            </div>
              <h3 className="text-white font-bold text-sm">Content</h3>
            <p className="text-[#8B9BB4] text-[10px] mt-1">Hytahub marketplace</p>
          </div>

          <div className="group p-4 rounded-xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-orange-400/50 transition-all text-center">
            <div className="w-10 h-10 bg-orange-400/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Palette size={20} className="text-orange-400" />
            </div>
              <h3 className="text-white font-bold text-sm">Creation</h3>
            <p className="text-[#8B9BB4] text-[10px] mt-1">The Forge editor</p>
          </div>

          <div className="group p-4 rounded-xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-green-400/50 transition-all text-center">
            <div className="w-10 h-10 bg-green-400/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Users size={20} className="text-green-400" />
            </div>
              <h3 className="text-white font-bold text-sm">Community</h3>
            <p className="text-[#8B9BB4] text-[10px] mt-1">Management tools</p>
          </div>

          <div className="group p-4 rounded-xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-[#EDA333]/50 transition-all text-center">
            <div className="w-10 h-10 bg-[#EDA333]/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Coins size={20} className="text-[#EDA333]" />
            </div>
              <h3 className="text-white font-bold text-sm">Business</h3>
            <p className="text-[#8B9BB4] text-[10px] mt-1">Integrated monetization</p>
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <div className="text-center">
        <div className="inline-block p-6 bg-gradient-to-r from-[#0F1623] to-[#151D2C] border border-[#2A3B4C] rounded-2xl max-w-2xl">
          <Sparkles size={24} className="text-[#EDA333] mx-auto mb-4" />
          <p className="text-lg text-white leading-relaxed">
            <strong className="text-[#EDA333]">HyPanel</strong> is the platform that unifies everything you need to build experiences in Hytale at scale.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Ecosystem;

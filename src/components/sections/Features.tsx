import React from 'react';
import { Clock, Zap, Download, DollarSign, Sparkles, Users } from 'lucide-react';

export const Features: React.FC = () => (
  <section id="features" className="py-16 bg-gradient-to-b from-[#0B0F19] via-[#0F1623] to-[#0B0F19] border-y border-[#2A3B4C] relative overflow-hidden scroll-mt-16">
    {/* Decorative background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(77,166,255,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(237,163,51,0.05),transparent_50%)]"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDA333]/10 border border-[#EDA333]/30 backdrop-blur-sm mb-4">
          <Sparkles size={16} className="text-[#EDA333]" />
          <span className="text-[#EDA333] text-xs font-bold tracking-wide uppercase">Why HyPanel?</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          The solution to all your problems
        </h2>
        <p className="text-[#8B9BB4] text-lg max-w-3xl mx-auto leading-relaxed">
          We eliminate the typical headaches: fixed costs, complex configurations, and fragmented content. All in one place.
        </p>
      </div>

      {/* Main Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {/* Feature 1 - Servidores que duermen */}
        <div className="group p-6 rounded-2xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-[#EDA333]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#EDA333]/10 hover:-translate-y-1">
          <div className="w-12 h-12 bg-gradient-to-br from-[#EDA333]/20 to-[#EDA333]/5 rounded-xl flex items-center justify-center mb-4 text-[#EDA333] group-hover:scale-110 transition-transform">
            <Clock size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">On-demand servers</h3>
          <p className="text-[#8B9BB4] text-sm leading-relaxed mb-3">
            Your server sleeps when empty and <strong className="text-[#EDA333]">wakes up in less than 1s</strong>. This allows us to reduce costs and offer free services.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#EDA333] font-medium">
            <DollarSign size={14} />
            <span>Reduce costs up to 80%</span>
          </div>
        </div>

        {/* Feature 2 - Instalación sin dolor */}
        <div className="group p-6 rounded-2xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-[#4DA6FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#4DA6FF]/10 hover:-translate-y-1">
          <div className="w-12 h-12 bg-gradient-to-br from-[#4DA6FF]/20 to-[#4DA6FF]/5 rounded-xl flex items-center justify-center mb-4 text-[#4DA6FF] group-hover:scale-110 transition-transform">
            <Download size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">One-click mod install</h3>
          <p className="text-[#8B9BB4] text-sm leading-relaxed mb-3">
            Search on <a href="https://hytahub.com/" title="Visit Hytahub" target="_blank" rel="noopener noreferrer" className="text-[#4DA6FF] hover:underline">Hytahub</a>, click <strong className="text-[#4DA6FF]">"Install"</strong> and done. Everything verified and nothing breaks.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#4DA6FF] font-medium">
            <Zap size={14} />
            <span>Real Plug & Play</span>
          </div>
        </div>

        {/* Feature 3 - Sin descargas para jugadores */}
        <div className="group p-6 rounded-2xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/10 hover:-translate-y-1">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-purple-400/5 rounded-xl flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
            <Users size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">100% seamless experience</h3>
          <p className="text-[#8B9BB4] text-sm leading-relaxed mb-3">
            Your players <strong className="text-purple-400">don't install anything</strong>. When connecting, the game downloads everything automatically.
          </p>
          <div className="flex items-center gap-2 text-xs text-purple-400 font-medium">
            <Sparkles size={14} />
            <span>Zero friction</span>
          </div>
        </div>

        {/* Feature 4 - Todo en un lugar */}
        <div className="group p-6 rounded-2xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-400/10 hover:-translate-y-1">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-400/5 rounded-xl flex items-center justify-center mb-4 text-green-400 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">All centralized</h3>
          <p className="text-[#8B9BB4] text-sm leading-relaxed mb-3">
            <strong className="text-green-400">Hosting, content and management</strong> in one place. No jumping between websites.
          </p>
          <div className="flex items-center gap-2 text-xs text-green-400 font-medium">
            <Zap size={14} />
            <span>One platform</span>
          </div>
        </div>

        {/* Feature 5 - Crear sin programar */}
        <div className="group p-6 rounded-2xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-orange-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-400/10 hover:-translate-y-1">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400/20 to-orange-400/5 rounded-xl flex items-center justify-center mb-4 text-orange-400 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Create without code</h3>
          <p className="text-[#8B9BB4] text-sm leading-relaxed mb-3">
            With The Forge, design with a <strong className="text-orange-400">visual editor</strong>. Connect boxes without touching code.
          </p>
          <div className="flex items-center gap-2 text-xs text-orange-400 font-medium">
            <Sparkles size={14} />
            <span>Creative power</span>
          </div>
        </div>

        {/* Feature 6 - Ecosistema económico */}
        <div className="group p-6 rounded-2xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-[#EDA333]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#EDA333]/10 hover:-translate-y-1">
          <div className="w-12 h-12 bg-gradient-to-br from-[#EDA333]/20 to-[#EDA333]/5 rounded-xl flex items-center justify-center mb-4 text-[#EDA333] group-hover:scale-110 transition-transform">
            <DollarSign size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Everyone wins</h3>
          <p className="text-[#8B9BB4] text-sm leading-relaxed mb-3">
            Creators sell mods, servers access professional content. <strong className="text-[#EDA333]">Monetize easily</strong>.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#EDA333] font-medium">
            <DollarSign size={14} />
            <span>Integrated business</span>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-8">
        <p className="text-[#8B9BB4] text-base mb-4">
          HyPanel: professional server as <strong className="text-white">easy, cheap and fun</strong> as playing.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A3A5A]/30 border border-[#2A3B4C] rounded-xl text-xs text-[#8B9BB4]">
          <Sparkles size={14} className="text-[#EDA333]" />
          <span>Designed to harness the full potential of Hytale</span>
        </div>
      </div>
    </div>
  </section>
);

export default Features;

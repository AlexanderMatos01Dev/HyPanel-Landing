import React from 'react';
import { Box, Download, GitMerge, ShoppingBag, Zap, Server, ExternalLink, Handshake, DollarSign, CheckCircle2, Globe } from 'lucide-react';

export const ContentOS: React.FC = () => (
  <section id="content-os" className="py-20 bg-gradient-to-b from-[#0B0F19] to-[#0F1623] border-t border-[#2A3B4C] relative overflow-hidden scroll-mt-16">
    {/* Background effects with Hytahub color #4ef4d2 */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(78,244,210,0.05),transparent_60%)]"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4ef4d2]/10 border border-[#4ef4d2]/30 backdrop-blur-sm mb-6">
          <Globe size={16} className="text-[#4ef4d2]" />
          <span className="text-[#4ef4d2] text-xs font-bold tracking-wide uppercase">An Open Content Ecosystem</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          The Open Ecosystem Standard
        </h2>
        
        <p className="text-[#8B9BB4] text-lg max-w-3xl mx-auto">
          Built for <span className="text-[#4ef4d2] font-semibold">Hytahub</span>, ready for anything. 
          <br className="hidden md:block" />
          HyPanel is architected to give you total control. Use Hytahub for a streamlined experience, or load content from any external source you prefer.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start lg:items-center">
        
        {/* Left: Freedom of Choice (Large Card) */}
        <div className="lg:col-span-7 bg-gradient-to-br from-[#0F1623] to-[#1A2332] border border-[#2A3B4C] rounded-2xl py-10 px-8 relative overflow-hidden group hover:border-[#4ef4d2]/30 transition-all">
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ef4d2]/5 rounded-full blur-3xl group-hover:bg-[#4ef4d2]/10 transition-all"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4ef4d2]/10 rounded-xl flex items-center justify-center">
                <Globe size={24} className="text-[#4ef4d2]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Freedom of Choice</h3>
            </div>

            <p className="text-[#8B9BB4] text-base mb-8 leading-relaxed">
              We don't believe in walled gardens. While <span className="text-[#4ef4d2] font-semibold">Hytahub</span> offers a native, one-click experience, 
              our architecture supports loading mods and assets from any third-party source or standard. Your server, your rules.
            </p>

            {/* Integration Options */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-4 bg-[#4ef4d2]/10 border border-[#4ef4d2]/30 rounded-xl">
                <a href="https://hytahub.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img src="/hytahub-logo.png" alt="Hytahub" className="h-8 hover:opacity-80 transition-opacity" />
                </a>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-bold text-sm">Hytahub</span>
                    <span className="text-[10px] uppercase bg-[#4ef4d2]/20 text-[#4ef4d2] px-2 py-0.5 rounded-full font-bold">Native Integration</span>
                  </div>
                  <p className="text-[#8B9BB4] text-xs">A community-driven content platform for Hytale</p>
                </div>
                <CheckCircle2 size={20} className="text-[#4ef4d2]" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-[#0F1623] border border-[#2A3B4C] rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Box size={16} className="text-[#8B9BB4]" />
                    <span className="text-white font-semibold text-sm">External Sources</span>
                  </div>
                  <p className="text-[#8B9BB4] text-xs">Load from any third-party platform or repository</p>
                </div>
                <div className="p-4 bg-[#0F1623] border border-[#2A3B4C] rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Download size={16} className="text-[#8B9BB4]" />
                    <span className="text-white font-semibold text-sm">Manual Upload</span>
                  </div>
                  <p className="text-[#8B9BB4] text-xs">Complete freedom with direct file management</p>
                </div>
              </div>
            </div>

            {/* Unified Identity */}
            <div className="mt-8 pt-6 border-t border-[#2A3B4C]/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#4ef4d2]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={20} className="text-[#4ef4d2]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-2">Unified Player Identity</h4>
                  <p className="text-[#8B9BB4] text-sm leading-relaxed">
                    One account for everything. Hytahub (or our partner platform) will manage player profiles centrally, 
                    so users never have to create separate accounts for each experience. Less friction, more play.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Feature Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Streamlined Deployment */}
          <div className="bg-gradient-to-br from-[#0F1623] to-[#1A2332] border border-[#2A3B4C] rounded-xl p-6 hover:border-[#4DA6FF]/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#4DA6FF]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Server size={20} className="text-[#4DA6FF]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">Streamlined Deployment</h3>
                <p className="text-[#8B9BB4] text-sm leading-relaxed">
                  Forget complex FTP commands. Our agent, HyCore, handles file management, dependencies, and updates directly within the container ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Designed for Fair Economy */}
          <div className="bg-gradient-to-br from-[#0F1623] to-[#1A2332] border border-[#2A3B4C] rounded-xl p-6 hover:border-[#EDA333]/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#EDA333]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Handshake size={20} className="text-[#EDA333]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">Designed for Fair Economy</h3>
                <p className="text-[#8B9BB4] text-sm leading-relaxed">
                  Our vision for monetization is ethical. The platform is being built to support automatic revenue sharing, ensuring mod creators get rewarded when their content powers successful experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Smart Version Control */}
          <div className="bg-gradient-to-br from-[#0F1623] to-[#1A2332] border border-[#2A3B4C] rounded-xl p-6 hover:border-[#A78BFA]/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#A78BFA]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <GitMerge size={20} className="text-[#A78BFA]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">Smart Version Control</h3>
                <p className="text-[#8B9BB4] text-sm leading-relaxed">
                  Easily swap between map versions or roll back changes. HyPanel's container-based structure makes version management inherent and safe.
                </p>
              </div>
            </div>
          </div>

          {/* Seamless Player Entry */}
          <div className="bg-gradient-to-br from-[#0F1623] to-[#1A2332] border border-[#2A3B4C] rounded-xl p-6 hover:border-[#4ADE80]/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#4ADE80]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Zap size={20} className="text-[#4ADE80]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">Seamless Player Entry</h3>
                <p className="text-[#8B9BB4] text-sm leading-relaxed">
                  Designed to synchronize content automatically. Our goal is zero manual downloads for players joining your world.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-[#8B9BB4] text-sm mb-6">
          <span className="text-[#4ef4d2] font-semibold">HyPanel</span> is the bridge between your server and the community's best content.
        </p>
        <a 
          href="https://hytahub.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4ef4d2] to-[#2dd4ae] hover:from-[#2dd4ae] hover:to-[#1ab892] text-[#0B0F19] font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#4ef4d2]/20 group"
        >
          <span>Visit Hytahub</span>
          <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default ContentOS;

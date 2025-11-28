import React from 'react';
import { Box, Download, GitMerge, ShoppingBag, Check, Zap, Server, ExternalLink, Handshake } from 'lucide-react';

export const ContentOS: React.FC = () => (
  <section id="content-os" className="py-20 bg-gradient-to-b from-[#0B0F19] to-[#0F1623] border-t border-[#2A3B4C] relative overflow-hidden scroll-mt-16">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.05),transparent_60%)]"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm mb-4">
          <Handshake size={16} className="text-purple-400" />
          <span className="text-purple-400 text-xs font-bold tracking-wide uppercase">Strategic Partnership</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <a href="https://hytahub.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Hytahub</a>: Your Content Marketplace
        </h2>
        <p className="text-[#8B9BB4] text-lg max-w-2xl mx-auto mb-4">
          An independent project building the largest Hytale content repository. 
          Mods, assets and configurations from the community, for the community.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F1623] border border-purple-500/20">
          <span className="text-[#8B9BB4] text-xs">Powered by</span>
          <span className="text-purple-400 font-bold text-sm">Hytahub Team</span>
          <span className="text-[#8B9BB4] text-xs">×</span>
          <span className="text-[#EDA333] font-bold text-sm">HyPanel</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Content cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Mod Pack Card */}
          <div className="bg-gradient-to-br from-[#0F1623] to-[#1A1F2E] border border-purple-500/30 rounded-xl p-4 hover:border-purple-400/50 transition-all">
            <div className="h-16 bg-gradient-to-br from-purple-900/60 to-purple-600/30 rounded-lg mb-3 flex items-center justify-center">
              <Box size={28} className="text-purple-400" />
            </div>
            <div className="text-[10px] text-purple-400 font-bold mb-1">MOD PACK</div>
            <div className="text-sm text-white font-bold mb-1">Elemental Magic</div>
            <p className="text-[10px] text-[#8B9BB4] mb-2">50+ spells and progression system</p>
            <div className="flex justify-between items-center">
              <span className="text-green-400 font-bold text-xs">FREE</span>
              <span className="text-[9px] text-[#8B9BB4]">★ 4.8</span>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-gradient-to-br from-[#0F1623] to-[#1A1F2E] border border-orange-500/30 rounded-xl p-4 hover:border-orange-400/50 transition-all">
            <div className="h-16 bg-gradient-to-br from-orange-900/60 to-orange-600/30 rounded-lg mb-3 flex items-center justify-center">
              <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div className="text-[10px] text-orange-400 font-bold mb-1">PREMIUM MAP</div>
            <div className="text-sm text-white font-bold mb-1">Floating Castle</div>
            <p className="text-[10px] text-[#8B9BB4] mb-2">Epic fortress with dungeons</p>
            <div className="flex justify-between items-center">
              <span className="text-[#EDA333] font-bold text-xs">$4.99</span>
              <span className="text-[9px] text-[#8B9BB4]">★ 5.0</span>
            </div>
          </div>

          {/* Script Card */}
          <div className="bg-gradient-to-br from-[#0F1623] to-[#1A1F2E] border border-blue-500/30 rounded-xl p-4 hover:border-blue-400/50 transition-all">
            <div className="h-16 bg-gradient-to-br from-blue-900/60 to-blue-600/30 rounded-lg mb-3 flex items-center justify-center">
              <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="text-[10px] text-blue-400 font-bold mb-1">SCRIPT</div>
            <div className="text-sm text-white font-bold mb-1">Economy System</div>
            <p className="text-[10px] text-[#8B9BB4] mb-2">Shops, banks and trading</p>
            <button className="w-full py-1.5 bg-[#4DA6FF] text-[#0B0F19] text-[10px] font-bold rounded-lg">
              Install Free
            </button>
          </div>

          {/* Asset Pack Card */}
          <div className="bg-gradient-to-br from-[#0F1623] to-[#1A1F2E] border border-green-500/30 rounded-xl p-4 hover:border-green-400/50 transition-all">
            <div className="h-16 bg-gradient-to-br from-green-900/60 to-green-600/30 rounded-lg mb-3 flex items-center justify-center">
              <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-[10px] text-green-400 font-bold mb-1">ASSET PACK</div>
            <div className="text-sm text-white font-bold mb-1">Medieval Props</div>
            <p className="text-[10px] text-[#8B9BB4] mb-2">100+ decorative items</p>
            <div className="flex justify-between items-center">
              <span className="text-[#EDA333] font-bold text-xs">$2.99</span>
              <span className="text-[9px] text-[#8B9BB4]">★ 4.7</span>
            </div>
          </div>
        </div>

        {/* Right: Features */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Download size={24} className="text-purple-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">One-click installation</h4>
              <p className="text-[#8B9BB4] text-sm">No FTP, no manual files. Click "Install" and everything configures automatically.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <GitMerge size={24} className="text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">Automatic versioning</h4>
              <p className="text-[#8B9BB4] text-sm">Dependencies and compatibility managed automatically. No version conflicts.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#EDA333]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <ShoppingBag size={24} className="text-[#EDA333]" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">Integrated marketplace</h4>
              <p className="text-[#8B9BB4] text-sm">Buy, sell and share content. Protected licenses and automatic payments.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Server size={24} className="text-green-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">Auto-sync with servers</h4>
              <p className="text-[#8B9BB4] text-sm">All content syncs automatically. Players don't install anything.</p>
            </div>
          </div>

          {/* Highlight box */}
          <div className="p-4 bg-purple-500/5 border border-purple-500/20 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={16} className="text-purple-400" />
              <span className="text-purple-400 font-bold text-sm">Zero friction for players</span>
            </div>
            <p className="text-[#8B9BB4] text-sm">
              Hytale downloads content automatically when connecting. Your players don't need to do anything.
            </p>
          </div>

          {/* CTA Button to Hytahub */}
          <a 
            href="https://hytahub.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-purple-500/20 group"
          >
            <span className="text-lg">Visit Hytahub</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContentOS;

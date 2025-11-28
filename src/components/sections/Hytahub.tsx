import React, { useState } from 'react';
import { Box, ExternalLink, Layout, Terminal, Zap, Server, Users, Star, Download, Globe, Gamepad2, Palette, Code2 } from 'lucide-react';

export const Hytahub: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="hytahub" className="py-16 bg-gradient-to-b from-[#0B0F19] to-[#151D2C] border-t border-[#2A3B4C] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
        <div className="order-2 lg:order-1 relative min-h-[400px] sm:h-[480px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:absolute sm:inset-0 z-10 sm:p-2">
            {/* Card 1 - Mod Pack - Mejorado */}
            <div 
              className={`bg-gradient-to-br from-[#0F1623] to-[#1A1F2E] border rounded-xl p-4 shadow-xl transition-all duration-300 cursor-pointer ${activeCard === 0 ? 'border-purple-400 scale-[1.02] shadow-purple-400/30' : 'border-[#2A3B4C] hover:border-purple-400/50 hover:shadow-lg'}`}
              onMouseEnter={() => setActiveCard(0)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-20 bg-gradient-to-br from-purple-900/60 to-purple-600/30 rounded-lg mb-3 flex items-center justify-center text-purple-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik00MCAyMGgtNDBNMjAgMHY0MCIgc3Ryb2tlPSIjOTMzM2VhIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
                <Box size={32}/>
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-green-500/30 text-green-300 text-[9px] font-bold rounded-full border border-green-500/30">NEW</div>
              </div>
              <div className="text-[11px] text-purple-400 font-bold mb-1 tracking-wide">MOD PACK</div>
              <div className="text-sm text-white font-bold mb-1">Elemental Magic</div>
              <p className="text-[10px] text-[#8B9BB4] mb-2 line-clamp-2">Complete magic system with 50+ spells and progression.</p>
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-bold text-sm">FREE</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5 text-[10px] text-[#8B9BB4]"><Star size={10} className="text-yellow-400 fill-yellow-400"/> 4.8</span>
                  <span className="flex items-center gap-0.5 text-[10px] text-[#8B9BB4]"><Download size={10}/> 2.4k</span>
                </div>
              </div>
              <div className="mt-3 flex gap-1.5 flex-wrap">
                <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-[9px] rounded-full">15 mods</span>
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-[9px] rounded-full">1.0 Compatible</span>
              </div>
            </div>
            
            {/* Card 2 - Mapa Premium - Mejorado */}
            <div 
              className={`bg-gradient-to-br from-[#0F1623] to-[#1A1F2E] border rounded-xl p-4 shadow-xl transition-all duration-300 cursor-pointer ${activeCard === 1 ? 'border-orange-400 scale-[1.02] shadow-orange-400/30' : 'border-[#2A3B4C] hover:border-orange-400/50 hover:shadow-lg'}`}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="h-20 bg-gradient-to-br from-orange-900/60 to-orange-600/30 rounded-lg mb-3 flex items-center justify-center text-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjgiIHN0cm9rZT0iI2Y5NzMxNiIgc3Ryb2tlLW9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
                <Layout size={32}/>
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-orange-500/30 text-orange-200 text-[9px] font-bold rounded-full border border-orange-500/30">⭐ TOP</div>
              </div>
              <div className="text-[11px] text-orange-400 font-bold mb-1 tracking-wide">PREMIUM MAP</div>
              <div className="text-sm text-white font-bold mb-1">Floating Castle</div>
              <p className="text-[10px] text-[#8B9BB4] mb-2 line-clamp-2">Epic fortress with secret dungeons and configurable bosses.</p>
              <div className="flex justify-between items-center">
                <span className="text-[#EDA333] font-bold text-sm">$4.99</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5 text-[10px] text-[#8B9BB4]"><Star size={10} className="text-yellow-400 fill-yellow-400"/> 5.0</span>
                  <span className="flex items-center gap-0.5 text-[10px] text-[#8B9BB4]"><Download size={10}/> 890</span>
                </div>
              </div>
              <div className="mt-3 flex gap-1.5 flex-wrap">
                <span className="px-2 py-0.5 bg-orange-500/20 text-orange-300 text-[9px] rounded-full">500x500</span>
                <span className="px-2 py-0.5 bg-green-500/20 text-green-300 text-[9px] rounded-full">PvE Ready</span>
              </div>
            </div>
            
            {/* Card 3 - Script/Plugin - Mejorado */}
            <div 
              className={`bg-gradient-to-br from-[#0F1623] to-[#1A1F2E] border rounded-xl p-4 shadow-xl flex flex-col transition-all duration-300 cursor-pointer ${activeCard === 2 ? 'border-blue-400 scale-[1.02] shadow-blue-400/30' : 'border-[#2A3B4C] hover:border-blue-400/50 hover:shadow-lg'}`}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-900/60 to-blue-600/30 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Code2 size={24}/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-blue-400 font-bold mb-0.5 tracking-wide">SCRIPT</div>
                  <div className="text-sm text-white font-bold truncate">Economy System</div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="flex items-center gap-0.5 text-[9px] text-[#8B9BB4]"><Star size={9} className="text-yellow-400 fill-yellow-400"/> 4.9</span>
                    <span className="text-[#8B9BB4] text-[9px]">•</span>
                    <span className="text-[9px] text-green-400">Plug & Play</span>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-[#8B9BB4] mb-3 flex-1">Shops, banks, jobs and player-to-player trading.</p>
              <button className="w-full py-2 bg-[#4DA6FF] text-[#0B0F19] text-[10px] font-bold rounded-lg hover:bg-[#3b8fd9] transition-colors flex items-center justify-center gap-1">
                <Download size={12}/> Install Free
              </button>
            </div>
            
            {/* Card 4 - Servidor Destacado - Mejorado */}
            <div 
              className={`bg-gradient-to-br from-[#0F1623] to-[#1A1F2E] border rounded-xl p-4 shadow-xl flex flex-col transition-all duration-300 cursor-pointer ${activeCard === 3 ? 'border-green-400 scale-[1.02] shadow-green-400/30' : 'border-[#2A3B4C] hover:border-green-400/50 hover:shadow-lg'}`}
              onMouseEnter={() => setActiveCard(3)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-900/60 to-green-600/30 rounded-xl flex items-center justify-center text-green-400 relative">
                  <Gamepad2 size={22}/>
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0F1623] animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <div className="text-[11px] text-green-400 font-bold tracking-wide">SERVER</div>
                  <div className="text-sm text-white font-bold">Hispano RPG</div>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-green-300 text-[9px] font-bold">ONLINE</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                <div className="bg-[#0B0F19]/50 rounded-lg py-2">
                  <div className="text-white font-bold text-sm">127</div>
                  <div className="text-[8px] text-[#8B9BB4]">Players</div>
                </div>
                <div className="bg-[#0B0F19]/50 rounded-lg py-2">
                  <div className="text-white font-bold text-sm">4</div>
                  <div className="text-[8px] text-[#8B9BB4]">Worlds</div>
                </div>
                <div className="bg-[#0B0F19]/50 rounded-lg py-2">
                  <div className="text-white font-bold text-sm flex items-center justify-center gap-0.5"><Star size={10} className="text-yellow-400 fill-yellow-400"/>4.9</div>
                  <div className="text-[8px] text-[#8B9BB4]">Rating</div>
                </div>
              </div>
              <button className="w-full py-2 bg-green-500/20 text-green-400 text-[10px] font-bold rounded-lg hover:bg-green-500/30 transition-colors border border-green-500/30">
                Connect Now
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-[60px] z-0"></div>
        </div>
        
        <div className="order-1 lg:order-2 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm">
            <Box size={12} className="text-purple-400" />
            <span className="text-purple-400 text-[10px] font-bold tracking-wide uppercase">Integrated Marketplace</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            <a href="https://hytahub.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Hytahub</a>: Your content store
          </h2>
          <p className="text-[#8B9BB4] text-sm leading-relaxed">
            Mods, maps, scripts and servers. <strong className="text-white">Search, install and play</strong>. Everything verified and ready to use.
          </p>
          
          <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-xl p-4 space-y-3">
            <h3 className="text-white font-bold text-sm flex items-center gap-2">
              <Zap size={14} className="text-[#EDA333]" />
              Real Plug & Play
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
                <p className="text-xs text-[#E0E6ED]"><strong>Instant install:</strong> No FTP or configs.</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                </div>
                <p className="text-xs text-[#E0E6ED]"><strong>No downloads:</strong> Hytale syncs everything automatically.</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-[#EDA333]/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EDA333]"></div>
                </div>
                <p className="text-xs text-[#E0E6ED]"><strong>Discover servers:</strong> Explore the community from the panel.</p>
              </li>
            </ul>
          </div>
          
          <div className="pt-2">
            <a href="https://hytahub.com/" target="_blank" rel="noopener noreferrer" className="inline-flex px-5 py-2.5 bg-[#4DA6FF] text-[#0B0F19] font-bold rounded-lg hover:bg-[#3b8fd9] transition-all items-center gap-2 text-sm">
              Explore Hytahub <ExternalLink size={14}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hytahub;

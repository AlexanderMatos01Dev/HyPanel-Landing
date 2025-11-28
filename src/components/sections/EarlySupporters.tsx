import React, { useState } from 'react';
import { Heart, Coffee, Users, Sparkles, Github, ExternalLink, ChevronRight } from 'lucide-react';

// Iconos SVG
const PatreonIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524zM.003 23.537h4.22V.524H.003z"/>
  </svg>
);

const BuyMeCoffeeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

export const EarlySupporters: React.FC = () => {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  return (
    <section id="supporters" className="py-12 bg-gradient-to-b from-[#0B0F19] via-[#0D1117] to-[#080B12] relative overflow-hidden scroll-mt-16">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#EDA333]/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#4DA6FF]/5 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header emotivo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#EDA333]/20 to-[#FF6B6B]/20 border border-[#EDA333]/30 backdrop-blur-sm mb-3">
            <Heart size={14} className="text-[#FF6B6B] animate-pulse" fill="#FF6B6B" />
            <span className="text-[#EDA333] text-[10px] font-bold tracking-wide uppercase">Early Supporters</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Help us make this <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDA333] to-[#FF6B6B]">a reality</span>
          </h2>
          
          <p className="text-[#8B9BB4] text-sm leading-relaxed max-w-xl mx-auto">
            We're a small team with big ideas. Every contribution <strong className="text-[#EDA333]">hugely boosts the project</strong>.
          </p>
        </div>

        {/* Opciones de apoyo */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {/* Tier 1 - Café */}
          <div 
            className={`relative bg-gradient-to-b from-[#151D2C] to-[#0F1623] border rounded-xl p-5 transition-all duration-300 flex flex-col ${
              hoveredTier === 0 ? 'border-[#FFDD00] shadow-lg shadow-[#FFDD00]/10 scale-[1.02]' : 'border-[#2A3B4C] hover:border-[#FFDD00]/50'
            }`}
            onMouseEnter={() => setHoveredTier(0)}
            onMouseLeave={() => setHoveredTier(null)}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#FFDD00]/10 rounded-lg flex items-center justify-center">
                <Coffee size={20} className="text-[#FFDD00]" />
              </div>
              <span className="px-2 py-0.5 bg-[#FFDD00]/20 border border-[#FFDD00]/30 rounded-full text-[#FFDD00] text-[9px] font-bold">FROM $1</span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1">Buy us a coffee</h3>
            <p className="text-[#8B9BB4] text-xs mb-3 flex-grow">
              Small gestures that give us energy.
            </p>
            
            <ul className="space-y-1.5 mb-4 text-[11px] text-[#8B9BB4]">
              <li className="flex items-center gap-1.5">
                <Sparkles size={10} className="text-[#FFDD00] flex-shrink-0" />
                Mention on the website
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles size={10} className="text-[#FFDD00] flex-shrink-0" />
                Our eternal gratitude
              </li>
            </ul>
            
            <a 
              href="https://buymeacoffee.com/hypanel_team" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#FFDD00] text-black text-sm font-bold rounded-lg hover:bg-[#e6c700] transition-all mt-auto"
            >
              <BuyMeCoffeeIcon /> Buy Me a Coffee
            </a>
          </div>

          {/* Tier 2 - Patreon */}
          <div 
            className={`relative bg-gradient-to-b from-[#151D2C] to-[#0F1623] border rounded-xl p-5 transition-all duration-300 flex flex-col ${
              hoveredTier === 1 ? 'border-[#FF424D] shadow-lg shadow-[#FF424D]/10 scale-[1.02]' : 'border-[#2A3B4C] hover:border-[#FF424D]/50'
            }`}
            onMouseEnter={() => setHoveredTier(1)}
            onMouseLeave={() => setHoveredTier(null)}
          >
            <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-[#EDA333] text-[#0B0F19] text-[8px] font-bold rounded">
              POPULAR
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#FF424D]/10 rounded-lg flex items-center justify-center">
                <Heart size={20} className="text-[#FF424D]" />
              </div>
              <span className="px-2 py-0.5 bg-[#FF424D]/20 border border-[#FF424D]/30 rounded-full text-[#FF424D] text-[9px] font-bold">FROM $5/MONTH</span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1">Patreon Supporter</h3>
            <p className="text-[#8B9BB4] text-xs mb-3 flex-grow">
              Monthly support for sustainable growth.
            </p>
            
            <ul className="space-y-1.5 mb-4 text-[11px] text-[#8B9BB4]">
              <li className="flex items-center gap-1.5">
                <Sparkles size={10} className="text-[#FF424D] flex-shrink-0" />
                Permanent "Early Supporter" badge
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles size={10} className="text-[#FF424D] flex-shrink-0" />
                Priority Alpha access
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles size={10} className="text-[#FF424D] flex-shrink-0" />
                Exclusive Discord channel
              </li>
            </ul>
            
            <a 
              href="https://patreon.com/HyPanel" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#FF424D] text-white text-sm font-bold rounded-lg hover:bg-[#e63946] transition-all mt-auto"
            >
              <PatreonIcon /> Support on Patreon
            </a>
          </div>

          {/* Tier 3 - Contribuir */}
          <div 
            className={`relative bg-gradient-to-b from-[#151D2C] to-[#0F1623] border rounded-xl p-5 transition-all duration-300 flex flex-col ${
              hoveredTier === 2 ? 'border-[#4DA6FF] shadow-lg shadow-[#4DA6FF]/10 scale-[1.02]' : 'border-[#2A3B4C] hover:border-[#4DA6FF]/50'
            }`}
            onMouseEnter={() => setHoveredTier(2)}
            onMouseLeave={() => setHoveredTier(null)}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#4DA6FF]/10 rounded-lg flex items-center justify-center">
                <Github size={20} className="text-[#4DA6FF]" />
              </div>
              <span className="px-2 py-0.5 bg-[#4DA6FF]/20 border border-[#4DA6FF]/30 rounded-full text-[#4DA6FF] text-[9px] font-bold">OPEN SOURCE</span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1">Contribute with code</h3>
            <p className="text-[#8B9BB4] text-xs mb-3 flex-grow">
              Are you a dev? Your time and talent are just as valuable.
            </p>
            
            <ul className="space-y-1.5 mb-4 text-[11px] text-[#8B9BB4]">
              <li className="flex items-center gap-1.5">
                <Sparkles size={10} className="text-[#4DA6FF] flex-shrink-0" />
                Credit as contributor
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles size={10} className="text-[#4DA6FF] flex-shrink-0" />
                Access to the dev team
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles size={10} className="text-[#4DA6FF] flex-shrink-0" />
                Direct impact on the product
              </li>
            </ul>
            
            <a 
              href="https://github.com/hypanel" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#4DA6FF] text-[#0B0F19] text-sm font-bold rounded-lg hover:bg-[#3b8fd9] transition-all mt-auto"
            >
              <Github size={16} /> Ver en GitHub
            </a>
          </div>
        </div>

        {/* Mensaje de comunidad - más compacto */}
        <div className="bg-gradient-to-r from-[#1A3A5A]/20 to-[#2A3B4C]/20 border border-[#2A3B4C] rounded-xl p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Users size={18} className="text-[#5865F2]" />
            <h3 className="text-base font-bold text-white">Can't donate? You can still help!</h3>
          </div>
          <p className="text-[#8B9BB4] text-xs max-w-xl mx-auto mb-3">
            Join Discord, share the project or suggest ideas. <strong className="text-white">Everything counts.</strong>
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a 
              href="https://discord.gg/QBVCzUq4TT" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#5865F2] text-white text-sm font-bold rounded-lg hover:bg-[#4752c4] transition-all"
            >
              <DiscordIcon /> Discord
            </a>
            <a 
              href="https://x.com/HyPanel" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#151D2C] text-white text-sm font-bold rounded-lg hover:bg-[#1F2937] transition-all border border-[#2A3B4C]"
            >
              Share <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlySupporters;

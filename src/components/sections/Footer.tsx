import React from 'react';
import { Hexagon } from 'lucide-react';

// Iconos SVG oficiales
const XIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

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

const RedditIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

export const Footer: React.FC = () => (
  <footer id="community" className="bg-[#080B12] pt-16 pb-8 border-t border-[#1A2634] text-sm text-muted">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-white font-bold text-2xl mb-2">Built for friends, scalable for networks.</h2>
          <p className="text-[#8B9BB4] max-w-md">
            Whether you want a private server for 5 friends or a network for 5,000 players, HyPanel is your foundation.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
           <a href="https://discord.gg/QBVCzUq4TT" title="Join our Discord" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#5865F2] hover:bg-[#4752c4] text-white rounded-lg transition-all font-bold shadow-md shadow-[#5865F2]/20">
             <DiscordIcon /> Discord
           </a>
           <a href="https://x.com/HyPanel" title="HyPanel on X" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-100 text-black rounded-lg transition-all font-bold">
             <XIcon /> Follow us
           </a>
           <a href="https://patreon.com/HyPanel" title="Support us on Patreon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#FF424D] hover:bg-[#e63946] text-white rounded-lg transition-all font-bold shadow-md shadow-[#FF424D]/20">
             <PatreonIcon /> Patreon
           </a>
           <a href="https://buymeacoffee.com/hypanel_team" title="Buy us a coffee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#FFDD00] hover:bg-[#e6c700] text-black rounded-lg transition-all font-bold">
             <BuyMeCoffeeIcon /> Support us
           </a>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 border-t border-[#1A2634] pt-12">
        <div>
          <h3 className="text-white font-bold mb-4 text-base uppercase tracking-wide">Product</h3>
          <ul className="space-y-2">
            <li><a href="#why-hypanel" title="About HyPanel" className="hover:text-[#EDA333]">About</a></li>
            <li><span className="text-muted">Pricing <span className="text-[8px] bg-[#EDA333]/20 text-[#EDA333] px-1.5 py-0.5 rounded ml-1">SOON</span></span></li>
            <li><a href="#ecosystem" title="Ecosystem" className="hover:text-[#EDA333]">Ecosystem</a></li>
            <li><a href="#the-forge" title="The Forge visual editor" className="hover:text-[#EDA333]">The Forge</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 text-base uppercase tracking-wide">Resources</h3>
          <ul className="space-y-2">
            <li><span className="text-muted">API Documentation <span className="text-[8px] bg-[#EDA333]/20 text-[#EDA333] px-1.5 py-0.5 rounded ml-1">SOON</span></span></li>
            <li><span className="text-muted">System Status <span className="text-[8px] bg-[#EDA333]/20 text-[#EDA333] px-1.5 py-0.5 rounded ml-1">SOON</span></span></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 text-base uppercase tracking-wide">Community</h3>
          <ul className="space-y-2">
            <li><a href="https://discord.gg/QBVCzUq4TT" title="Join our Discord" target="_blank" rel="noopener noreferrer" className="hover:text-[#EDA333] flex items-center gap-2"><DiscordIcon /> Discord</a></li>
            <li><a href="https://x.com/HyPanel" title="HyPanel on X" target="_blank" rel="noopener noreferrer" className="hover:text-[#EDA333] flex items-center gap-2"><XIcon /> X (Twitter)</a></li>
            <li><a href="https://patreon.com/HyPanel" title="Support us on Patreon" target="_blank" rel="noopener noreferrer" className="hover:text-[#EDA333] flex items-center gap-2"><PatreonIcon /> Patreon</a></li>
            <li><a href="https://www.reddit.com/r/HyPanel/" title="HyPanel subreddit" target="_blank" rel="noopener noreferrer" className="hover:text-[#EDA333] flex items-center gap-2"><RedditIcon /> Reddit</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 text-base uppercase tracking-wide">Company</h3>
          <ul className="space-y-2">
            <li><a href="#team" title="Team" className="hover:text-[#EDA333]">Team</a></li>
            <li><span className="text-muted">Blog <span className="text-[8px] bg-[#EDA333]/20 text-[#EDA333] px-1.5 py-0.5 rounded ml-1">SOON</span></span></li>
            <li><a href="#roadmap" title="Roadmap" className="hover:text-[#EDA333]">Roadmap</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 text-base uppercase tracking-wide">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" title="Privacy" className="hover:text-[#EDA333]">Privacy</a></li>
            <li><a href="#" title="Terms of Use" className="hover:text-[#EDA333]">Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#1A2634] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Hexagon size={16} className="text-[#2A3B4C]" />
          <span className="font-semibold text-[#8B9BB4]">HyPanel Project © 2025</span>
        </div>
        <div className="text-xs text-[#2A3B4C]">
          Made by the community for the community. Not affiliated with Hypixel Studios.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

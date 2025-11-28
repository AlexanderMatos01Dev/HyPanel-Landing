import React from 'react';
import { Coins, ShoppingBag, Store, Users } from 'lucide-react';

export const Business: React.FC = () => (
  <section id="business" className="min-h-screen py-16 bg-[#0B0F19] relative overflow-hidden scroll-mt-16 flex items-center">
    <div className="absolute inset-0 bg-gradient-to-br from-[#EDA333]/5 via-transparent to-[#4DA6FF]/5"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDA333]/10 border border-[#EDA333]/30 backdrop-blur-sm mb-3">
          <Coins size={16} className="text-[#EDA333]" />
          <span className="text-[#EDA333] text-xs font-bold tracking-wide uppercase">Integrated Monetization</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Built-in Business Ideas
        </h2>
        <p className="text-[#8B9BB4] text-base max-w-3xl mx-auto leading-relaxed">
          Hypanel is your business partner to monetize your server.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Hosting Reseller */}
        <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-2xl p-6 hover:border-[#EDA333]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#EDA333]/10 group">
          <div className="w-14 h-14 bg-[#EDA333]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Store size={28} className="text-[#EDA333]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Hosting Reseller</h3>
          <p className="text-[#8B9BB4] text-sm leading-relaxed mb-4">
            Create sub-servers for friends or clients and charge per slot.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#EDA333] font-medium">
            <div className="w-2 h-2 rounded-full bg-[#EDA333]"></div>
            Billing system included
          </div>
        </div>

        {/* Tienda VIP Nativa */}
        <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-2xl p-6 hover:border-[#4DA6FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#4DA6FF]/10 group">
          <div className="w-14 h-14 bg-[#4DA6FF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ShoppingBag size={28} className="text-[#4DA6FF]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Native VIP Store</h3>
          <p className="text-[#8B9BB4] text-sm leading-relaxed mb-4">
            Sell ranks and in-game cosmetics synced directly with the panel.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#4DA6FF] font-medium">
            <div className="w-2 h-2 rounded-full bg-[#4DA6FF]"></div>
            Stripe/PayPal payments
          </div>
        </div>

        {/* Mercado de Assets */}
        <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/10 group">
          <div className="w-14 h-14 bg-purple-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Asset Marketplace</h3>
          <p className="text-[#8B9BB4] text-sm leading-relaxed mb-4">
            Created an amazing 3D model? Sell it on the Hypanel Marketplace.
          </p>
          <div className="flex items-center gap-2 text-xs text-purple-400 font-medium">
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            Earn per download
          </div>
        </div>

        {/* Membresías de Gremio */}
        <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-400/10 group">
          <div className="w-14 h-14 bg-green-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Users size={28} className="text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Guild Memberships</h3>
          <p className="text-[#8B9BB4] text-sm leading-relaxed mb-4">
            Recurring subscription system for exclusive access to your servers.
          </p>
          <div className="flex items-center gap-2 text-xs text-green-400 font-medium">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            Predictable monthly income
          </div>
        </div>
      </div>

      {/* CTA Section - En construcción */}
      <div className="mt-10 bg-gradient-to-r from-[#EDA333]/10 to-[#4DA6FF]/10 border border-[#2A3B4C] rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm relative overflow-hidden">
        {/* Badge de En Desarrollo - Ahora integrado en el flujo */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#4DA6FF]/20 border border-[#4DA6FF]/30 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#4DA6FF] animate-pulse" />
            <span className="text-xs text-[#4DA6FF] font-bold uppercase">In development</span>
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          Building the future with you
        </h3>
        <p className="text-[#8B9BB4] text-base mb-5 max-w-2xl mx-auto">
          These features are being developed with feedback from our Alpha community. Want to participate and shape the product?
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://discord.gg/QBVCzUq4TT" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752c4] transition-all duration-200 shadow-xl shadow-[#5865F2]/20">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join the community
          </a>
          <a href="https://github.com/hypanel" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#151D2C] text-white font-bold rounded-xl hover:bg-[#1F2937] transition-all duration-200 border border-[#2A3B4C] flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Business;

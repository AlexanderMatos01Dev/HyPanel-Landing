import React from 'react';
import { Users, Shield, BarChart3, MessageSquare } from 'lucide-react';

export const Community: React.FC = () => (
  <section id="community" className="py-20 bg-gradient-to-b from-[#0B0F19] to-[#0F1623] border-t border-[#2A3B4C] relative overflow-hidden scroll-mt-16">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(74,222,128,0.03),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(237,163,51,0.03),transparent_50%)]"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm mb-4">
          <Users size={16} className="text-green-400" />
          <span className="text-green-400 text-xs font-bold tracking-wide uppercase">How do I manage my community?</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Grow your world, grow your community
        </h2>
        <p className="text-[#8B9BB4] text-lg max-w-2xl mx-auto">
          Tools to manage, moderate and grow. All integrated in one place.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Community */}
        <div className="bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
              <Users size={24} className="text-green-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">Community</h3>
              <p className="text-[#8B9BB4] text-sm">Manage and grow</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C]">
              <Shield size={18} className="text-green-400 mt-0.5" />
              <div>
                <h3 className="text-white font-bold text-sm">Roles and advanced permissions</h3>
                <p className="text-[#8B9BB4] text-xs">Centralized control. Define who can do what.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C]">
              <svg className="w-[18px] h-[18px] text-blue-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="text-white font-bold text-sm">Integrated moderation</h3>
                <p className="text-[#8B9BB4] text-xs">Filters, reports and automatic actions.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C]">
              <BarChart3 size={18} className="text-purple-400 mt-0.5" />
              <div>
                <h3 className="text-white font-bold text-sm">Analytics and insights</h3>
                <p className="text-[#8B9BB4] text-xs">Understand your players. Activity, retention, behavior.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C]">
              <MessageSquare size={18} className="text-[#5865F2] mt-0.5" />
              <div>
                <h3 className="text-white font-bold text-sm">Discord integration</h3>
                <p className="text-[#8B9BB4] text-xs">Sync roles, notifications and events with your server.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Community;

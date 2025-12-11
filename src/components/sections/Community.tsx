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

      <div className="max-w-6xl mx-auto">
        {/* Community */}
        <div className="bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center">
              <Users size={28} className="text-green-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl">Community Management</h3>
              <p className="text-[#8B9BB4] text-base">Everything you need to build and maintain a thriving community</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C] hover:border-green-400/30 transition-all">
              <Shield size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Roles and advanced permissions</h3>
                <p className="text-[#8B9BB4] text-xs leading-relaxed">Centralized control from the panel. Define who can build, moderate, access zones, or manage content. Multi-tier permission system with inheritance.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C] hover:border-blue-400/30 transition-all">
              <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Integrated moderation</h3>
                <p className="text-[#8B9BB4] text-xs leading-relaxed">Chat filters, report system, and automatic actions. Ban management, warnings, and temporary restrictions. All from the dashboard.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C] hover:border-purple-400/30 transition-all">
              <BarChart3 size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Analytics and insights</h3>
                <p className="text-[#8B9BB4] text-xs leading-relaxed">Understand your players with detailed metrics: peak hours, retention rates, popular zones, session duration, and player behavior patterns.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C] hover:border-[#5865F2]/30 transition-all">
              <MessageSquare size={20} className="text-[#5865F2] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Discord integration</h3>
                <p className="text-[#8B9BB4] text-xs leading-relaxed">Sync roles between Discord and your server. Announce events, send notifications, and manage your community from both platforms seamlessly.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C] hover:border-orange-400/30 transition-all">
              <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Player profiles & progression</h3>
                <p className="text-[#8B9BB4] text-xs leading-relaxed">Track player achievements, stats, and progression. Custom profiles with badges, ranks, and activity history visible to the community.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C] hover:border-yellow-400/30 transition-all">
              <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Announcements & events</h3>
                <p className="text-[#8B9BB4] text-xs leading-relaxed">Schedule events, send in-game announcements, and create custom alerts. Keep your community informed and engaged with scheduled content.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C] hover:border-cyan-400/30 transition-all">
              <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Live chat & support</h3>
                <p className="text-[#8B9BB4] text-xs leading-relaxed">Integrated chat system with ticketing. Help players in real-time, create FAQ bots, and maintain conversation history for better support.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C] hover:border-pink-400/30 transition-all">
              <svg className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Custom forms & surveys</h3>
                <p className="text-[#8B9BB4] text-xs leading-relaxed">Gather feedback with built-in forms. Create applications for staff positions, event registrations, or community polls with custom fields.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0F19]/50 border border-[#2A3B4C] hover:border-red-400/30 transition-all">
              <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">Security & audit logs</h3>
                <p className="text-[#8B9BB4] text-xs leading-relaxed">Track every action with detailed audit trails. Monitor admin activities, player reports, and system changes for transparency and security.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Community;

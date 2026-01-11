import React from 'react';
import { Zap, Server, GitBranch, Layers, Shield } from 'lucide-react';

export const ServerFeatures: React.FC = () => {
  return (
    <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1623]/50 border border-[#2A3B4C] hover:border-[#4DA6FF]/30 transition-all group">
          <div className="w-10 h-10 bg-[#4DA6FF]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Zap size={20} className="text-[#4DA6FF]" />
          </div>
          <div>
            <h3 className="text-white font-bold mb-1">HyCore Technology</h3>
            <p className="text-[#8B9BB4] text-sm">The brain of the system. An intelligent agent that manages and scales containers automatically, regardless of server location.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1623]/50 border border-[#2A3B4C] hover:border-[#A78BFA]/30 transition-all group">
          <div className="w-10 h-10 bg-[#A78BFA]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Server size={20} className="text-[#A78BFA]" />
          </div>
          <div>
            <h3 className="text-white font-bold mb-1">Infrastructure Freedom</h3>
            <p className="text-[#8B9BB4] text-sm">You choose. Use our managed cloud for ease or connect external providers (like OVH) to drastically cut costs.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1623]/50 border border-[#2A3B4C] hover:border-[#4ADE80]/30 transition-all group">
          <div className="w-10 h-10 bg-[#4ADE80]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <GitBranch size={20} className="text-[#4ADE80]" />
          </div>
          <div>
            <h3 className="text-white font-bold mb-1">Local Dev → Cloud</h3>
            <p className="text-[#8B9BB4] text-sm">Start developing and testing on your PC (localhost). Migrate to production with the same config when ready.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1623]/50 border border-[#2A3B4C] hover:border-[#EDA333]/30 transition-all group">
          <div className="w-10 h-10 bg-[#EDA333]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Layers size={20} className="text-[#EDA333]" />
          </div>
          <div>
            <h3 className="text-white font-bold mb-1">Centralized Management</h3>
            <p className="text-[#8B9BB4] text-sm">Control multiple servers or nodes from a single panel, without jumping between different providers.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1623]/50 border border-[#2A3B4C] hover:border-[#F87171]/30 transition-all group">
          <div className="w-10 h-10 bg-[#F87171]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Shield size={20} className="text-[#F87171]" />
          </div>
          <div>
            <h3 className="text-white font-bold mb-1">Isolation & Security</h3>
            <p className="text-[#8B9BB4] text-sm">Each experience runs in its own isolated container. If a service fails, the rest of your network keeps running.</p>
          </div>
        </div>
      </div>
  );
};

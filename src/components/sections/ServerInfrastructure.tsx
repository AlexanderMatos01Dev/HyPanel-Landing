import React from 'react';
import { Server, Layers, Copy, GitBranch, Shield, Zap, Database, Clock } from 'lucide-react';

export const ServerInfrastructure: React.FC = () => (
  <section id="server-infrastructure" className="py-20 bg-gradient-to-b from-[#0F1623] to-[#0B0F19] relative overflow-hidden scroll-mt-16">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(77,166,255,0.05),transparent_60%)]"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 backdrop-blur-sm mb-4">
          <Server size={16} className="text-[#4DA6FF]" />
          <span className="text-[#4DA6FF] text-xs font-bold tracking-wide uppercase">How does it help with servers?</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Modern Server Infrastructure
        </h2>
        <p className="text-[#8B9BB4] text-lg max-w-2xl mx-auto mb-4">
          Manage servers like projects. Isolated, reproducible and scalable environments.
        </p>
        {/* Template Marketplace inline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4DA6FF]/10 to-[#EDA333]/10 border border-[#2A3B4C] rounded-xl">
          <Layers size={16} className="text-[#4DA6FF]" />
          <span className="text-[#8B9BB4] text-sm">Not a DevOps expert? <strong className="text-white">Template Marketplace</strong> — one click to deploy.</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left: Visual */}
        <div className="relative">
          <div className="bg-[#0B0F19] border border-[#2A3B4C] rounded-2xl p-6 shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#2A3B4C]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <span className="text-[#8B9BB4] text-xs font-mono ml-2">hypanel.yaml</span>
            </div>
            
            {/* YAML content */}
            <div className="font-mono text-sm space-y-1">
              <div><span className="text-[#EDA333]">project:</span> <span className="text-[#4ADE80]">"my-rpg-server"</span></div>
              <div className="mt-3"><span className="text-[#EDA333]">environments:</span></div>
              <div className="pl-4"><span className="text-[#A78BFA]">development:</span></div>
              <div className="pl-8"><span className="text-[#8B9BB4]">scaling:</span> <span className="text-[#60A5FA]">auto</span></div>
              <div className="pl-8"><span className="text-[#8B9BB4]">sleep_when_empty:</span> <span className="text-[#60A5FA]">true</span></div>
              <div className="pl-4"><span className="text-[#A78BFA]">staging:</span></div>
              <div className="pl-8"><span className="text-[#8B9BB4]">clone_from:</span> <span className="text-[#4ADE80]">"development"</span></div>
              <div className="pl-4"><span className="text-[#A78BFA]">production:</span></div>
              <div className="pl-8"><span className="text-[#8B9BB4]">min_instances:</span> <span className="text-[#60A5FA]">1</span></div>
              <div className="pl-8"><span className="text-[#8B9BB4]">max_instances:</span> <span className="text-[#60A5FA]">10</span></div>
              <div className="mt-3"><span className="text-[#EDA333]">worlds:</span></div>
              <div className="pl-4"><span className="text-[#8B9BB4]">- name:</span> <span className="text-[#4ADE80]">"lobby"</span></div>
              <div className="pl-4"><span className="text-[#8B9BB4]">- name:</span> <span className="text-[#4ADE80]">"survival"</span></div>
              <div className="pl-4"><span className="text-[#8B9BB4]">- name:</span> <span className="text-[#4ADE80]">"dungeons"</span></div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4DA6FF]/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#EDA333]/10 rounded-full blur-2xl"></div>
        </div>

        {/* Right: Features */}
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1623]/50 border border-[#2A3B4C] hover:border-[#4DA6FF]/30 transition-all">
            <div className="w-10 h-10 bg-[#4DA6FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap size={20} className="text-[#4DA6FF]" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Smart Orchestration</h4>
              <p className="text-[#8B9BB4] text-sm">Servers sleep when empty and wake up in &lt;1s. Maximum efficiency.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1623]/50 border border-[#2A3B4C] hover:border-[#A78BFA]/30 transition-all">
            <div className="w-10 h-10 bg-[#A78BFA]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <GitBranch size={20} className="text-[#A78BFA]" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Dev → Staging → Production</h4>
              <p className="text-[#8B9BB4] text-sm">Professional environments. Test before deploying to production.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1623]/50 border border-[#2A3B4C] hover:border-[#4ADE80]/30 transition-all">
            <div className="w-10 h-10 bg-[#4ADE80]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Copy size={20} className="text-[#4ADE80]" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Isolated and Clonable Worlds</h4>
              <p className="text-[#8B9BB4] text-sm">Each world is independent. Duplicate configurations with one click.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1623]/50 border border-[#2A3B4C] hover:border-[#EDA333]/30 transition-all">
            <div className="w-10 h-10 bg-[#EDA333]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Database size={20} className="text-[#EDA333]" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Backups, Snapshots & Audit</h4>
              <p className="text-[#8B9BB4] text-sm">Full control of your project. Restore any previous state.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1623]/50 border border-[#2A3B4C] hover:border-[#F87171]/30 transition-all">
            <div className="w-10 h-10 bg-[#F87171]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield size={20} className="text-[#F87171]" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Integrated Anti-DDoS</h4>
              <p className="text-[#8B9BB4] text-sm">UDP proxy filters attacks automatically. Zero configuration.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A3A5A]/30 border border-[#2A3B4C] rounded-xl text-sm text-[#8B9BB4]">
          <Clock size={16} className="text-[#4DA6FF]" />
          <span>It's not just hosting: it's a <strong className="text-white">professional work infrastructure</strong>.</span>
        </div>
      </div>
    </div>
  </section>
);

export default ServerInfrastructure;

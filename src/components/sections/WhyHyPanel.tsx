import React from 'react';
import { Server, Box, Palette, Users, ArrowRight, Zap, Shield, ChevronRight, ExternalLink } from 'lucide-react';

const GlobeIcon = ({ size = 28, className = '', strokeWidth = 1.5 }: { size?: number; className?: string; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} aria-hidden="true">
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    <path d="M2.05 6.05h19.9M2.05 17.95h19.9M12 2v20M7 4v16M17 4v16" />
  </svg>
);

interface PillarProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  href: string;
  external?: boolean;
}

const Pillar: React.FC<PillarProps> = ({ icon, title, description, bgColor, href, external }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (external) return; // Let the browser handle external links
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a 
      href={href}
      title={external ? `Visit ${title}` : `${title} section`}
      onClick={handleClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group p-6 rounded-2xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
      style={{ borderColor: `${bgColor}30` }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${bgColor}80`)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${bgColor}30`)}
    >
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${bgColor}15` }}>
        <div style={{ color: bgColor }}>{icon}</div>
      </div>
      <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
        {title}
        {external ? (
          <ExternalLink size={14} className="text-muted group-hover:text-white transition-all" />
        ) : (
          <ChevronRight size={16} className="text-muted group-hover:text-white group-hover:translate-x-1 transition-all" />
        )}
      </h3>
      <p className="text-[#8B9BB4] text-sm leading-relaxed">{description}</p>
    </a>
  );
};

export const WhyHyPanel: React.FC = () => {
  const pillars: PillarProps[] = [
    {
      icon: <Server size={28} />,
      title: "Smart Infrastructure",
      description: "Servers that scale automatically based on demand. Pay only for what you use with intelligent orchestration.",
      bgColor: "#4DA6FF",
      href: "#server-infrastructure"
    },
    {
      icon: <Box size={28} />,
      title: "Hytahub",
      description: "The Hytale content marketplace. Partner project bringing mods, assets and configurations to your servers.",
      bgColor: "#A78BFA",
      href: "https://hytahub.com/",
      external: true
    },
    {
      icon: <Palette size={28} />,
      title: "The Forge",
      description: "Create game logic without coding. Visual editor to design events, quests and unique mechanics.",
      bgColor: "#FB923C",
      href: "#the-forge"
    },
    {
      icon: <Users size={28} />,
      title: "Community & Business",
      description: "Roles, moderation, stores and subscriptions. Everything you need to build and monetize your community.",
      bgColor: "#4ADE80",
      href: "#community"
    },
    {
      icon: <GlobeIcon size={28} />,
      title: "Unified Ecosystem",
      description: "All pillars connected. One platform where everything works together seamlessly.",
      bgColor: "#EDA333",
      href: "#ecosystem"
    }
  ];

  return (
    <section id="why-hypanel" className="py-24 bg-gradient-to-b from-[#0B0F19] to-[#0F1623] border-t border-[#2A3B4C] relative overflow-hidden scroll-mt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(77,166,255,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(237,163,51,0.05),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* What is HyPanel - Main explanation */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 backdrop-blur-sm mb-6">
            <Zap size={16} className="text-[#4DA6FF]" />
            <span className="text-[#4DA6FF] text-xs font-bold tracking-wide uppercase">What is HyPanel?</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA6FF] to-[#EDA333]">complete platform</span> to create,<br className="hidden md:block" />
            manage and scale experiences in Hytale
          </h2>
          
          <p className="text-[#8B9BB4] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            HyPanel is not just a hosting panel. It's an <strong className="text-white">integrated ecosystem</strong> that unifies 
            server infrastructure, content management, no-code creation, community tools and monetization 
            in <strong className="text-white">one place</strong>.
          </p>

          {/* Key differentiators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1623] border border-[#2A3B4C]">
              <Shield size={16} className="text-[#4DA6FF]" />
              <span className="text-white text-sm">Build in Public</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1623] border border-[#2A3B4C]">
              <Users size={16} className="text-[#4DA6FF]" />
              <span className="text-white text-sm">Community Driven</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1623] border border-[#2A3B4C]">
              <Zap size={16} className="text-[#4DA6FF]" />
              <span className="text-white text-sm">Designed for Hytale</span>
            </div>
          </div>
        </div>

        {/* The Context Section */}
        <div className="mb-20">
          {/* Two rows: Problems + Opportunity */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left: The Problems */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30">
                  <span className="text-red-400 text-xs font-bold tracking-wide uppercase">The problem</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#0F1623]/80 border border-red-500/20 hover:border-red-500/40 transition-colors min-h-[100px]">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">💸</span>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-1">High costs, low flexibility</h3>
                      <p className="text-[#8B9BB4] text-xs leading-relaxed">Fixed monthly payments even when no one is playing. Scaling requires expertise and more expenses.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#0F1623]/80 border border-red-500/20 hover:border-red-500/40 transition-colors min-h-[100px]">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🔧</span>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-1">Technical barriers</h3>
                      <p className="text-[#8B9BB4] text-xs leading-relaxed">Want unique experiences? Learn to code. Want a community? Use 5 different tools.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#0F1623]/80 border border-red-500/20 hover:border-red-500/40 transition-colors min-h-[100px]">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📦</span>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-1">Fragmented content</h3>
                      <p className="text-[#8B9BB4] text-xs leading-relaxed">Mods, assets and configs scattered everywhere. Version conflicts and hours lost.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Opportunity */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="px-3 py-1 rounded-full bg-[#EDA333]/10 border border-[#EDA333]/30">
                  <span className="text-[#EDA333] text-xs font-bold tracking-wide uppercase">The opportunity</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#0F1623]/80 border border-[#EDA333]/20 hover:border-[#EDA333]/40 transition-colors min-h-[100px]">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🚀</span>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-1">We're the pioneers</h3>
                      <p className="text-[#8B9BB4] text-xs leading-relaxed">No panels exist for Hytale yet. We're building the first complete infrastructure from scratch.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#0F1623]/80 border border-[#EDA333]/20 hover:border-[#EDA333]/40 transition-colors min-h-[100px]">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🌱</span>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-1">Everything is new</h3>
                      <p className="text-[#8B9BB4] text-xs leading-relaxed">No ecosystems, no marketplaces, no standards. Everything needs to be created from zero.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#0F1623]/80 border border-[#EDA333]/20 hover:border-[#EDA333]/40 transition-colors min-h-[100px]">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">💡</span>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-1">Shape the future</h3>
                      <p className="text-[#8B9BB4] text-xs leading-relaxed">Help build the foundation. Be part of the tools the entire Hytale community will use.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Solution - Pillars */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDA333]/10 border border-[#EDA333]/30 backdrop-blur-sm mb-4">
              <ArrowRight size={16} className="text-[#EDA333]" />
              <span className="text-[#EDA333] text-xs font-bold tracking-wide uppercase">The solution</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Five pillars, <span className="text-[#EDA333]">one platform</span>
            </h3>
            <p className="text-[#8B9BB4] text-lg max-w-2xl mx-auto">
              Each pillar solves a specific problem. Together, they form a complete ecosystem.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.slice(0, 3).map((pillar, index) => (
              <Pillar key={index} {...pillar} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-5 mt-5 max-w-3xl mx-auto">
            {pillars.slice(3).map((pillar, index) => (
              <Pillar key={index + 3} {...pillar} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-[#8B9BB4] text-lg mb-6">
              Designed for <strong className="text-white">solo creators</strong>, <strong className="text-white">communities</strong> and <strong className="text-white">professional teams</strong>.
            </p>
            <a 
              href="#server-infrastructure"
              title="Explore server infrastructure"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#server-infrastructure')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4DA6FF] to-[#4DA6FF]/80 hover:from-[#5DB3FF] hover:to-[#5DB3FF]/80 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_30px_-5px_rgba(77,166,255,0.4)]"
            >
              Explore the pillars
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHyPanel;

import React from 'react';
import { Server, Box, Palette, Users, Zap, Shield, ChevronRight, ExternalLink } from 'lucide-react';

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
      description: "The Hytale content marketplace. Mods, assets and configurations integrated directly into your servers.",
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
      title: "Community",
      description: "Roles, moderation, stores. Everything you need to build and manage your community.",
      bgColor: "#4ADE80",
      href: "#community"
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
            server infrastructure, content management, no-code creation and community tools 
            in <strong className="text-white">one place</strong>.
          </p>

          {/* Key differentiators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1623] border border-[#2A3B4C]">
              <Shield size={16} className="text-[#4DA6FF]" />
              <span className="text-white text-sm">Built by HyPanel Team</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1623] border border-[#2A3B4C]">
              <Users size={16} className="text-[#4DA6FF]" />
              <span className="text-white text-sm">Made for the Community</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1623] border border-[#2A3B4C]">
              <Zap size={16} className="text-[#4DA6FF]" />
              <span className="text-white text-sm">Designed for Hytale</span>
            </div>
          </div>
        </div>

        {/* The Pillars */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Four pillars, <span className="text-[#EDA333]">one platform</span>
            </h3>
            <p className="text-[#8B9BB4] text-lg max-w-2xl mx-auto">
              One platform where everything works together seamlessly.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, index) => (
              <Pillar key={index} {...pillar} />
            ))}
          </div>          
        </div>
      </div>
    </section>
  );
};

export default WhyHyPanel;

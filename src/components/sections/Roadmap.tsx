import React from 'react';
import { Rocket, Calendar, CheckCircle2, Circle, Clock, Sparkles, Flag, Zap, Users, Box, Palette, Globe, Shield } from 'lucide-react';

interface MilestoneProps {
  quarter: string;
  title: string;
  description: string;
  items: string[];
  status: 'completed' | 'current' | 'upcoming';
  icon: React.ReactNode;
}

const Milestone: React.FC<MilestoneProps> = ({ quarter, title, description, items, status, icon }) => {
  const statusStyles = {
    completed: {
      border: 'border-[#22C55E]/50',
      bg: 'bg-[#22C55E]/5',
      dot: 'bg-[#22C55E]',
      text: 'text-[#22C55E]',
      badge: 'bg-[#22C55E]/20 text-[#22C55E] border-[#22C55E]/30'
    },
    current: {
      border: 'border-[#EDA333]/50',
      bg: 'bg-[#EDA333]/5',
      dot: 'bg-[#EDA333] animate-pulse',
      text: 'text-[#EDA333]',
      badge: 'bg-[#EDA333]/20 text-[#EDA333] border-[#EDA333]/30'
    },
    upcoming: {
      border: 'border-[#2A3B4C]',
      bg: 'bg-[#0F1623]/50',
      dot: 'bg-[#4A5B74]',
      text: 'text-[#8B9BB4]',
      badge: 'bg-[#2A3B4C]/50 text-[#8B9BB4] border-[#2A3B4C]'
    }
  };

  const style = statusStyles[status];

  return (
    <div className={`relative p-6 rounded-2xl border ${style.border} ${style.bg} transition-all duration-300 hover:scale-[1.02]`}>
      {/* Status dot on timeline */}
      <div className={`absolute -left-[41px] top-8 w-4 h-4 rounded-full ${style.dot} border-4 border-[#0B0F19] z-10`}></div>
      
      {/* Quarter badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${style.badge}`}>
          {quarter}
        </span>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${style.bg} border ${style.border}`}>
          <div className={style.text}>{icon}</div>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-[#8B9BB4] text-sm mb-4">{description}</p>

      {/* Items */}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            {status === 'completed' ? (
              <CheckCircle2 size={16} className="text-[#22C55E] mt-0.5 flex-shrink-0" />
            ) : status === 'current' ? (
              <Clock size={16} className="text-[#EDA333] mt-0.5 flex-shrink-0" />
            ) : (
              <Circle size={16} className="text-[#4A5B74] mt-0.5 flex-shrink-0" />
            )}
            <span className={status === 'completed' ? 'text-[#8B9BB4]' : status === 'current' ? 'text-white' : 'text-[#6B7B94]'}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Roadmap: React.FC = () => {
  const milestones: MilestoneProps[] = [
    {
      quarter: 'Q4 2024',
      title: 'Foundation',
      description: 'Building the community and laying the groundwork.',
      items: [
        'Community Discord launch',
        'Landing page & branding',
        'Early supporters program',
        'Core team formation'
      ],
      status: 'completed',
      icon: <Flag size={20} />
    },
    {
      quarter: 'Q1 2025',
      title: 'Hytale Early Access',
      description: 'Hytale launches Jan 13. Real development begins.',
      items: [
        'Hytale EA research & analysis',
        'Server architecture design',
        'The Forge prototype',
        'Hytahub partnership integration'
      ],
      status: 'current',
      icon: <Rocket size={20} />
    },
    {
      quarter: 'Q2 2025',
      title: 'Alpha Release',
      description: 'First internal version for testing.',
      items: [
        'Basic server management',
        'One-click deployment',
        'The Forge v1 (visual editor)',
        'Closed alpha for supporters'
      ],
      status: 'upcoming',
      icon: <Zap size={20} />
    },
    {
      quarter: 'Q3 2025',
      title: 'Beta Launch',
      description: 'Public beta with core features.',
      items: [
        'Smart hibernation system',
        'Hytahub content integration',
        'Community tools beta',
        'Public beta access'
      ],
      status: 'upcoming',
      icon: <Users size={20} />
    },
    {
      quarter: 'Q4 2025',
      title: 'Full Launch',
      description: 'Production-ready platform.',
      items: [
        'Monetization features',
        'Template Marketplace',
        'Enterprise features',
        'Global CDN deployment'
      ],
      status: 'upcoming',
      icon: <Globe size={20} />
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-[#0B0F19] to-[#0F1623] border-t border-[#2A3B4C] relative overflow-hidden scroll-mt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(77,166,255,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(237,163,51,0.05),transparent_50%)]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 backdrop-blur-sm mb-6">
            <Calendar size={16} className="text-[#4DA6FF]" />
            <span className="text-[#4DA6FF] text-xs font-bold tracking-wide uppercase">Roadmap</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The journey to <span className="text-[#EDA333]">launch</span>
          </h2>
          
          <p className="text-[#8B9BB4] text-lg max-w-2xl mx-auto">
            Transparent development. Every milestone brings us closer to the complete HyPanel ecosystem.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#22C55E] via-[#EDA333] to-[#2A3B4C]"></div>

          {/* Milestones */}
          <div className="space-y-8 pl-16">
            {milestones.map((milestone, index) => (
              <Milestone key={index} {...milestone} />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0F1623]/80 border border-[#2A3B4C]">
            <Sparkles size={20} className="text-[#EDA333]" />
            <p className="text-[#8B9BB4] text-sm">
              <span className="text-white font-bold">Timeline is flexible.</span> We prioritize quality over speed. 
              Join Discord to follow real-time progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

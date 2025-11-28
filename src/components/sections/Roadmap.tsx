import React from 'react';
import { Rocket, Calendar, CheckCircle2, Circle, Clock, Sparkles, Flag, Zap, Users, Target, Gamepad2, ArrowRight } from 'lucide-react';

interface MilestoneProps {
  date: string;
  title: string;
  description: string;
  items: string[];
  status: 'completed' | 'current' | 'upcoming';
  icon: React.ReactNode;
}

const Milestone: React.FC<MilestoneProps> = ({ date, title, description, items, status, icon }) => {
  const statusStyles = {
    completed: {
      border: 'border-[#22C55E]/50',
      bg: 'bg-[#22C55E]/5',
      dot: 'bg-[#22C55E]',
      text: 'text-[#22C55E]',
      badge: 'bg-[#22C55E]/20 text-[#22C55E] border-[#22C55E]/30',
      line: 'bg-[#22C55E]'
    },
    current: {
      border: 'border-[#EDA333]/50',
      bg: 'bg-[#EDA333]/5',
      dot: 'bg-[#EDA333] animate-pulse',
      text: 'text-[#EDA333]',
      badge: 'bg-[#EDA333]/20 text-[#EDA333] border-[#EDA333]/30',
      line: 'bg-gradient-to-r from-[#EDA333] to-[#2A3B4C]'
    },
    upcoming: {
      border: 'border-[#2A3B4C]',
      bg: 'bg-[#0F1623]/50',
      dot: 'bg-[#4A5B74]',
      text: 'text-[#8B9BB4]',
      badge: 'bg-[#2A3B4C]/50 text-[#8B9BB4] border-[#2A3B4C]',
      line: 'bg-[#2A3B4C]'
    }
  };

  const style = statusStyles[status];

  return (
    <div className="flex flex-col items-center min-w-[260px] max-w-[280px] flex-shrink-0">
      {/* Timeline dot and line */}
      <div className="flex items-center w-full mb-4">
        <div className={`h-0.5 flex-1 ${style.line}`}></div>
        <div className={`w-5 h-5 rounded-full ${style.dot} border-4 border-[#0B0F19] z-10 flex-shrink-0`}></div>
        <div className={`h-0.5 flex-1 ${status === 'upcoming' ? 'bg-[#2A3B4C]' : style.line}`}></div>
      </div>

      {/* Card */}
      <div className={`relative p-5 rounded-2xl border ${style.border} ${style.bg} transition-all duration-300 hover:scale-[1.02] w-full h-full flex flex-col`}>
        {/* Date badge */}
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${style.badge}`}>
            {date}
          </span>
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${style.bg} border ${style.border}`}>
            <div className={style.text}>{icon}</div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-[#8B9BB4] text-xs mb-3">{description}</p>

        {/* Items */}
        <ul className="space-y-1.5 flex-grow">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-xs">
              {status === 'completed' ? (
                <CheckCircle2 size={14} className="text-[#22C55E] mt-0.5 flex-shrink-0" />
              ) : status === 'current' ? (
                <Clock size={14} className="text-[#EDA333] mt-0.5 flex-shrink-0" />
              ) : (
                <Circle size={14} className="text-[#4A5B74] mt-0.5 flex-shrink-0" />
              )}
              <span className={status === 'completed' ? 'text-[#8B9BB4]' : status === 'current' ? 'text-white' : 'text-[#6B7B94]'}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Roadmap: React.FC = () => {
  const milestones: MilestoneProps[] = [
    {
      date: 'NOV 2025',
      title: 'Project Kickoff',
      description: 'Building the community and foundations.',
      items: [
        'Landing page launch',
        'Discord community',
        'Early supporters program',
        'Brand identity'
      ],
      status: 'current',
      icon: <Flag size={18} />
    },
    {
      date: 'DEC 2025',
      title: 'Pre-Launch Prep',
      description: 'Getting ready for Hytale EA.',
      items: [
        'Architecture planning',
        'The Forge prototype',
        'Hytahub partnership',
        'Infrastructure design'
      ],
      status: 'upcoming',
      icon: <Target size={18} />
    },
    {
      date: 'JAN 13, 2026',
      title: 'Hytale EA Launch',
      description: 'Game launches. Integration begins.',
      items: [
        'Hytale EA deep dive',
        'Server integration MVP',
        'Basic panel features',
        'Alpha for supporters'
      ],
      status: 'upcoming',
      icon: <Gamepad2 size={18} />
    },
    {
      date: 'Q1 2026',
      title: 'Alpha Release',
      description: 'First working version.',
      items: [
        'One-click deployment',
        'The Forge v1',
        'Content installation',
        'Closed alpha testing'
      ],
      status: 'upcoming',
      icon: <Rocket size={18} />
    },
    {
      date: 'Q2 2026',
      title: 'Public Beta',
      description: 'Open to all users.',
      items: [
        'Smart hibernation',
        'Hytahub integration',
        'Community tools',
        'Monetization beta'
      ],
      status: 'upcoming',
      icon: <Users size={18} />
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-[#0B0F19] to-[#0F1623] border-t border-[#2A3B4C] relative overflow-hidden scroll-mt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(77,166,255,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(237,163,51,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 backdrop-blur-sm mb-6">
            <Calendar size={16} className="text-[#4DA6FF]" />
            <span className="text-[#4DA6FF] text-xs font-bold tracking-wide uppercase">Roadmap</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The journey to <span className="text-[#EDA333]">launch</span>
          </h2>
          
          <p className="text-[#8B9BB4] text-lg max-w-2xl mx-auto">
            Building in public. Every milestone brings us closer to the complete HyPanel ecosystem.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Scroll container */}
          <div className="overflow-x-auto pb-6 -mx-6 px-6 roadmap-scroll">
            <style>{`
              .roadmap-scroll::-webkit-scrollbar {
                height: 8px;
              }
              .roadmap-scroll::-webkit-scrollbar-track {
                background: #0F1623;
                border-radius: 4px;
                border: 1px solid #2A3B4C;
              }
              .roadmap-scroll::-webkit-scrollbar-thumb {
                background: linear-gradient(90deg, #4DA6FF, #EDA333);
                border-radius: 4px;
              }
              .roadmap-scroll::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(90deg, #5DB3FF, #F5B347);
              }
              .roadmap-scroll {
                scrollbar-width: thin;
                scrollbar-color: #4DA6FF #0F1623;
              }
            `}</style>
            <div className="flex gap-4 min-w-max">
              {milestones.map((milestone, index) => (
                <Milestone key={index} {...milestone} />
              ))}
            </div>
          </div>
          
          {/* Scroll hint */}
          <div className="flex justify-center mt-4 lg:hidden">
            <div className="flex items-center gap-2 text-[#4A5B74] text-xs">
              <ArrowRight size={14} />
              <span>Scroll to see more</span>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0F1623]/80 border border-[#2A3B4C]">
            <Sparkles size={20} className="text-[#EDA333]" />
            <p className="text-[#8B9BB4] text-sm">
              <span className="text-white font-bold">Building in public.</span> Timeline adapts to Hytale's development. 
              Join Discord for real-time updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

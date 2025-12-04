import React, { useState } from 'react';
import { Users, Heart, Sparkles } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar: string;
  color: string;
  socials: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  skills: string[];
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#0F1623] to-[#0B0F19] border border-[#2A3B4C] hover:border-opacity-50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
      style={{ borderColor: isHovered ? `${member.color}50` : undefined }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${member.color}10, transparent 70%)` }}
      ></div>

      {/* Avatar */}
      <div className="relative mb-5">
        <div 
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${member.color}15`, border: `2px solid ${member.color}30` }}
        >
          <span style={{ color: member.color }}>{member.avatar}</span>
        </div>
        {/* Online indicator */}
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
          <div className="w-4 h-4 rounded-full bg-[#22C55E] border-2 border-[#0B0F19]"></div>
        </div>
      </div>

      {/* Info - flex-grow to push socials to bottom */}
      <div className="text-center relative z-10 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
        <p className="text-sm font-medium mb-3" style={{ color: member.color }}>{member.role}</p>
        <p className="text-[#8B9BB4] text-xs leading-relaxed mb-4 flex-grow">{member.description}</p>

        {/* Skills - always aligned at same position from bottom */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {member.skills.map((skill, i) => (
            <span 
              key={i} 
              className="px-2 py-0.5 rounded-full text-[10px] font-medium"
              style={{ backgroundColor: `${member.color}15`, color: member.color }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Hytahub Team",
      role: "Building the Future of Hytale",
      description: "A passionate team dedicated to creating the best platform for the Hytale community.",
      avatar: "H",
      color: "#A78BFA",
      socials: {},
      skills: ["Development", "Design"]
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-[#0F1623] to-[#0B0F19] border-t border-[#2A3B4C] relative overflow-hidden scroll-mt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(237,163,51,0.05),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDA333]/10 border border-[#EDA333]/30 backdrop-blur-sm mb-6">
            <Users size={16} className="text-[#EDA333]" />
            <span className="text-[#EDA333] text-xs font-bold tracking-wide uppercase">The Team</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Building the <span className="text-[#EDA333]">future</span> together
          </h2>
        </div>

        {/* Single Team Card - Centered */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-sm">
            <TeamMemberCard member={teamMembers[0]} />
          </div>
        </div>

        {/* Join the team CTA */}
        <div className="relative p-8 rounded-2xl bg-gradient-to-r from-[#EDA333]/10 via-[#4DA6FF]/10 to-[#A78BFA]/10 border border-[#2A3B4C] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(237,163,51,0.1),transparent_70%)]"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDA333]/20 border border-[#EDA333]/30 mb-4">
              <Heart size={14} className="text-[#EDA333]" />
              <span className="text-[#EDA333] text-xs font-bold">We're growing!</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">
              Want to join the adventure?
            </h3>
            
            <p className="text-[#8B9BB4] text-sm max-w-xl mx-auto mb-6">
              We're looking for all kinds of talent: <strong className="text-white">developers</strong>, <strong className="text-white">designers</strong>, <strong className="text-white">community managers</strong>, <strong className="text-white">content creators</strong>, and anyone passionate about Hytale.
              Remote-friendly, flexible hours, and a chance to shape something big from the ground up.
            </p>
            
            <a 
              href="https://discord.gg/TrcwkU8x" 
              title="Join our Discord"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Join us on Discord
            </a>
          </div>
        </div>

        {/* Contributors note */}
        <div className="mt-12 text-center">
          <p className="text-[#6B7B94] text-sm flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[#EDA333]" />
            Special thanks to all early supporters and contributors
            <Sparkles size={14} className="text-[#EDA333]" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;

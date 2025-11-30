import React from 'react';
import { Newspaper } from 'lucide-react';

export const BlogHero: React.FC = () => {
  return (
    <section className="relative px-6 pt-32 pb-16">
      {/* Hexágonos sutiles de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <svg className="absolute top-10 right-20 w-16 h-16" viewBox="0 0 50 50">
          <polygon points="25,2 47,15 47,40 25,48 3,40 3,15" fill="none" stroke="#4DA6FF" strokeWidth="1"/>
        </svg>
        <svg className="absolute bottom-20 left-10 w-12 h-12" viewBox="0 0 50 50">
          <polygon points="25,2 47,15 47,40 25,48 3,40 3,15" fill="none" stroke="#EDA333" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A3A5A]/50 border border-[#2A3B4C] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#4DA6FF] animate-pulse"></span>
            <span className="text-[#4DA6FF] text-xs font-bold tracking-wide uppercase">HyPanel Blog</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Latest{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA6FF] to-[#EDA333]">
              Updates
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#8B9BB4] max-w-2xl leading-relaxed">
            News, development insights and announcements from the HyPanel team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;

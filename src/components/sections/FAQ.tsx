import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

// Split FAQ into two sections to make the page shorter and clearer
const FAQ_GENERAL: FAQItem[] = [
  {
    question: "What exactly is HyPanel?",
    answer: "HyPanel is the first complete platform designed specifically for Hytale. It combines server infrastructure, content management (via Hytahub), a visual logic editor (The Forge) and community tools — all in one integrated ecosystem."
  },
  {
    question: "Do I need technical knowledge to use it?",
    answer: "No. You can create and manage complete worlds without code. The Forge lets you design game logic visually, Hytahub handles content with one click, and we offer a Template Marketplace with pre-configured setups ready to deploy."
  },
  {
    question: "When will HyPanel be available?",
    answer: "Hytale Early Access launches January 13, 2025. From that date, we can start building with the real game. We don't have a fixed launch date for HyPanel yet, but we're building the community, infrastructure and foundations now so we're ready."
  },
  {
    question: "Why build this before the game is out?",
    answer: "Because Hytale is new and nothing exists yet. We're the pioneers — no panels, no ecosystems, no standards. By starting now, we'll be ready when the community needs us, and early supporters help shape the tools everyone will use."
  },
  {
    question: "How can I support or get involved?",
    answer: "Join as an early supporter! You'll help shape the platform, get priority access when we launch, and receive exclusive perks. Join our Discord to stay updated and be part of the community."
  }
];

const FAQ_USAGE: FAQItem[] = [
  {
    question: "What is Hytahub?",
    answer: "Hytahub is an independent project built by the Hytahub team, creating the largest content marketplace for Hytale. Mods, assets, maps and configurations, integrated directly with HyPanel for seamless installation. <a href='https://hytahub.com/' title='Visit Hytahub' target='_blank' rel='noopener noreferrer' class='text-[#4ef4d2] hover:underline'>Visit Hytahub →</a>"
  },
  {
    question: "Can I use my own mods and content?",
    answer: "Absolutely. Upload your own mods, manage them manually, or install verified content from Hytahub. You have full flexibility — HyPanel doesn't lock you into any ecosystem."
  },
  {
    question: "Is HyPanel free?",
    answer: "There will be free plans thanks to smart resource management (servers sleep when empty). Premium plans offer more resources for larger projects and professional teams."
  },
  {
    question: "What is The Forge?",
    answer: "The Forge is a visual logic editor that lets you create game mechanics, quests, and events without writing code. It's designed to make complex server logic accessible to everyone — from beginners to experienced developers."
  },
  {
    question: "Why is HyPanel different?",
    answer: "Because it's not just a hosting panel. It's a complete ecosystem built from scratch for Hytale: infrastructure, content, no-code creation, and tools — all connected and working together."
  }
];

const FAQItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({ item, isOpen, onToggle }) => (
  <div className="border border-[#2A3B4C] rounded-xl overflow-hidden bg-[#0F1623]">
    <button
      onClick={onToggle}
      className="w-full px-5 py-4 flex items-center justify-between text-left transition-colors"
    >
      <span className={`font-medium pr-4 transition-colors ${isOpen ? 'text-white' : 'text-[#8B9BB4]'}`}>{item.question}</span>
      <ChevronDown 
        size={20} 
        className={`text-[#8B9BB4] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="px-5 pb-4 pt-0 border-t border-[#2A3B4C]/50">
        <p className="text-[#8B9BB4] text-sm leading-relaxed mt-4" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
      </div>
    </div>
  </div>
);

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'general' | 'usage'>('general');
  const [activeTab, setActiveTab] = useState<string>(FAQ_GENERAL[0].question);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleCategoryChange = (category: 'general' | 'usage') => {
    setActiveCategory(category);
    const firstQuestion = category === 'general' ? FAQ_GENERAL[0].question : FAQ_USAGE[0].question;
    setActiveTab(firstQuestion);
    setOpenIndex(null); // Reset mobile accordion
  };

  const displayedFaqs = activeCategory === 'general' ? FAQ_GENERAL : FAQ_USAGE;
  const activeItem = displayedFaqs.find(item => item.question === activeTab) || displayedFaqs[0];

  return (
    <section id="faq" className="min-h-screen flex flex-col justify-center py-20 bg-gradient-to-b from-[#0F1623] to-[#0B0F19] border-t border-[#2A3B4C] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 backdrop-blur-sm mb-4">
            <HelpCircle size={16} className="text-[#4DA6FF]" />
            <span className="text-[#4DA6FF] text-xs font-bold tracking-wide uppercase">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Got questions?
          </h2>
          <p className="text-[#8B9BB4] text-lg mb-6">
            Here are the answers to the most common questions.
          </p>

          {/* Category Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-full border border-[#2A3B4C] relative">
              <button
                onClick={() => handleCategoryChange('general')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === 'general'
                    ? 'bg-[#4DA6FF]/10 border-[#4DA6FF] text-[#4DA6FF] shadow-[0_0_15px_rgba(77,166,255,0.1)]'
                    : 'border-transparent text-[#8B9BB4] hover:text-white'
                }`}
              >
                General
              </button>
              <button
                onClick={() => handleCategoryChange('usage')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === 'usage'
                    ? 'bg-[#4DA6FF]/10 border-[#4DA6FF] text-[#4DA6FF] shadow-[0_0_15px_rgba(77,166,255,0.1)]'
                    : 'border-transparent text-[#8B9BB4] hover:text-white'
                }`}
              >
                Usage & Technical
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View (Tabs) */}
        <div className="hidden md:grid grid-cols-12 gap-8 items-start">
          {/* Left: Questions List */}
          <div className="col-span-5 flex flex-col gap-2">
            {displayedFaqs.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(item.question)}
                className={`px-6 py-4 text-left rounded-xl transition-all duration-200 border ${
                  activeTab === item.question 
                  ? 'bg-[#4DA6FF]/10 border-[#4DA6FF] text-white shadow-[0_0_20px_rgba(77,166,255,0.1)]' 
                  : 'bg-[#0F1623] border-transparent text-[#8B9BB4] hover:bg-[#151D2C] hover:text-white'
                }`}
              >
                <span className="font-medium text-sm">{item.question}</span>
              </button>
            ))}
            
            <div className="mt-4 pt-4 border-t border-[#2A3B4C]/50">
              <a
                href="https://discord.gg/TrcwkU8x"
                title="Ask on Discord"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8B9BB4] hover:text-[#5865F2] transition-colors text-sm font-medium px-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Can't find what you're looking for? Ask on Discord
              </a>
            </div>
          </div>

          {/* Right: Answer Panel */}
          <div className="col-span-7">
            <div className="bg-[#0F1623] border border-[#2A3B4C] rounded-2xl p-8 min-h-[350px] relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4DA6FF]/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
              
              <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-300" key={activeTab}>
                <h3 className="text-2xl font-bold text-white mb-6">{activeItem.question}</h3>
                <div className="prose prose-invert prose-p:text-[#8B9BB4] prose-a:text-[#4DA6FF] max-w-none">
                  <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: activeItem.answer }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View (Accordion) */}
        <div className="md:hidden space-y-3">
          {displayedFaqs.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
          
          <div className="mt-8 text-center">
            <a
              href="https://discord.gg/TrcwkU8x"
              title="Ask on Discord"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#8B9BB4] hover:text-[#5865F2] transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Can't find what you're looking for? Ask on Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

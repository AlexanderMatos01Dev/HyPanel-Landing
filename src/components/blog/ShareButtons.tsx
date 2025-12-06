import React, { useState } from 'react';
import { Twitter, Link, Facebook } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'hover:text-[#1877F2]'
    }
  ];

  const activeLinks = shareLinks;

  return (
    <div className="flex flex-row lg:flex-col gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider hidden lg:block writing-vertical">Share</span>
      
      {activeLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 text-gray-400 ${link.color}`}
          aria-label={`Share on ${link.name}`}
        >
          <link.icon size={20} />
        </a>
      ))}

      <button
        onClick={handleCopy}
        className={`p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 relative ${copied ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}
        aria-label="Copy Link"
      >
        <Link size={20} />
        {copied && (
          <span className="absolute left-full ml-2 px-2 py-1 bg-black/90 text-xs text-white rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}

import React, { useState } from 'react';
import { Twitter, Facebook, Link as LinkIcon, MessageCircle } from 'lucide-react';

interface ShareSidebarProps {
  title: string;
  url?: string; // Optional, defaults to window.location.href
}

export const ShareSidebar: React.FC<ShareSidebarProps> = ({ title, url }) => {
  const [copied, setCopied] = useState(false);

  const getUrl = () => {
    if (typeof window !== 'undefined') {
      return url || window.location.href;
    }
    return '';
  };

  const handleShare = (platform: 'twitter' | 'facebook' | 'whatsapp' | 'discord') => {
    const shareUrl = getUrl();
    const text = title;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + shareUrl)}`, '_blank');
        break;
      case 'discord':
        handleCopy();
        alert('Link copied! Share it on Discord.');
        break;
    }
  };

  const handleCopy = async () => {
    const shareUrl = getUrl();
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="h-[calc(100%-150px)] relative">
      <div className="flex flex-col gap-3 items-center pt-4">
        <span
          className="text-[10px] font-bold text-[#8B9BB4] uppercase tracking-wider mb-2"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          Share
        </span>
        <div className="w-px h-6 bg-[#2A3B4C]"></div>
        
        <button
          onClick={() => handleShare('twitter')}
          className="p-2.5 rounded-xl bg-[#151D2C]/50 border border-[#2A3B4C] text-[#8B9BB4] hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 hover:bg-[#1DA1F2]/10 transition-all group"
          title="Share on Twitter"
        >
          <Twitter size={18} className="group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={() => handleShare('facebook')}
          className="p-2.5 rounded-xl bg-[#151D2C]/50 border border-[#2A3B4C] text-[#8B9BB4] hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 transition-all group"
          title="Share on Facebook"
        >
          <Facebook size={18} className="group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={() => handleShare('discord')}
          className="p-2.5 rounded-xl bg-[#151D2C]/50 border border-[#2A3B4C] text-[#8B9BB4] hover:text-[#5865F2] hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 transition-all group"
          title="Share on Discord"
        >
          <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={() => handleShare('whatsapp')}
          className="p-2.5 rounded-xl bg-[#151D2C]/50 border border-[#2A3B4C] text-[#8B9BB4] hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all group"
          title="Share on WhatsApp"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="group-hover:scale-110 transition-transform"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>

        <div className="w-px h-6 bg-[#2A3B4C]"></div>
        
        <button
          onClick={handleCopy}
          className={`p-2.5 rounded-xl bg-[#151D2C]/50 border border-[#2A3B4C] transition-all group ${copied ? 'text-[#EDA333] border-[#EDA333]/50' : 'text-[#8B9BB4] hover:text-[#EDA333] hover:border-[#EDA333]/50 hover:bg-[#EDA333]/10'}`}
          title="Copy Link"
        >
          <LinkIcon size={18} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

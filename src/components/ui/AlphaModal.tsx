import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Hexagon, Loader2, CheckCircle, AlertCircle, Sparkles, Clock } from 'lucide-react';
import { subscribeToAlpha, checkRateLimit, formatWaitTime } from '../../lib/supabase';

interface AlphaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AlphaModal: React.FC<AlphaModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'rate-limited'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [waitTime, setWaitTime] = useState(0);

  
  // Countdown timer para rate limiting
  useEffect(() => {
    if (status === 'rate-limited' && waitTime > 0) {
      const timer = setInterval(() => {
        setWaitTime(prev => {
          if (prev <= 1) {
            setStatus('idle');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [status, waitTime]);

  // Verificar rate limit al abrir
  useEffect(() => {
    if (isOpen && status === 'idle') {
      const { allowed, waitTime: wait } = checkRateLimit();
      if (!allowed) {
        setStatus('rate-limited');
        setWaitTime(wait);
      }
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar rate limit
    const { allowed, waitTime: wait } = checkRateLimit();
    if (!allowed) {
      setStatus('rate-limited');
      setWaitTime(wait);
      return;
    }

    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email');
      return;
    }

    setStatus('loading');

    const result = await subscribeToAlpha(email);

    if (result.success) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Registration error');
    }
  };

  const handleClose = () => {
    // Reset state
    setStatus('idle');
    setEmail('');
    setErrorMessage('');

    onClose();
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#0B0F19] border border-[#2A3B4C] rounded-2xl shadow-2xl shadow-black/50 w-full max-w-md overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#EDA333]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#4DA6FF]/20 rounded-full blur-3xl pointer-events-none" />
        
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-[#8B9BB4] hover:text-white hover:bg-white/10 rounded-lg transition-all z-10"
        >
          <X size={20} />
        </button>

        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Hexagon className="text-[#EDA333] fill-[#EDA333]/10 w-10 h-10" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-[#EDA333] blur-lg opacity-30"></div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Alpha Access</h2>
              <p className="text-xs text-[#8B9BB4]">Join the first testers</p>
            </div>
          </div>

          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-sm text-[#8B9BB4] mb-6">
                We'll notify you when Alpha access is ready. In the meantime, join our Discord community.
              </p>
              <a 
                href="https://discord.gg/QBVCzUq4TT" 
                title="Join our Discord"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5865F2] text-white font-bold rounded-lg hover:bg-[#4752c4] transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord
              </a>
            </div>
          ) : status === 'rate-limited' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Wait a moment</h3>
              <p className="text-sm text-[#8B9BB4] mb-4">
                Please wait before trying to register another email.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                <Clock size={16} className="text-orange-400" />
                <span className="text-orange-400 font-bold">{formatWaitTime(waitTime)}</span>
              </div>
            </div>
          ) : (
            <>
              {/* Benefits */}
              <div className="bg-[#151D2C] border border-[#2A3B4C] rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={14} className="text-[#EDA333]" />
                  <span className="text-xs font-bold text-white">Alpha Benefits</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-[#8B9BB4]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                    Priority access to new features
                  </li>
                  <li className="flex items-center gap-2 text-xs text-[#8B9BB4]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4DA6FF]" />
                    Exclusive Discord channel
                  </li>
                  <li className="flex items-center gap-2 text-xs text-[#8B9BB4]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EDA333]" />
                    Permanent "Early Supporter" badge
                  </li>
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#8B9BB4] mb-2">
                    Your email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#151D2C] border border-[#2A3B4C] rounded-xl focus:outline-none focus:border-[#EDA333] text-white placeholder-muted text-sm transition-colors"
                    disabled={status === 'loading'}
                  />
                  {status === 'error' && (
                    <div className="flex items-center gap-2 mt-2 text-red-400 text-xs">
                      <AlertCircle size={14} />
                      {errorMessage}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 bg-[#EDA333] text-[#0B0F19] font-bold rounded-xl hover:bg-[#FFC145] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Registering...
                    </>
                  ) : (
                    'Join the waitlist'
                  )}
                </button>
              </form>

              <p className="text-[10px] text-muted text-center mt-4">
                No spam. We'll only notify you when Alpha is ready.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );

  // Renderizar en document.body usando createPortal
  if (typeof document === 'undefined') return null;
  
  return createPortal(modalContent, document.body);
};

export default AlphaModal;

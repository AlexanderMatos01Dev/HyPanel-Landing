import React, { useEffect, useMemo, useState } from 'react';
import { ChevronRight, Mail, Loader2, CheckCircle, UserCheck, Clock, AlertCircle, Heart, Zap } from 'lucide-react';

import { HERO_MESSAGES } from '../../types/hero';
import { HyCoreVisualization } from './HyCoreVisualization';
import { subscribeToAlpha, checkRateLimit, formatWaitTime } from '../../lib/supabase';
import { SOCIAL_LINKS } from '../../lib/constants';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'already-registered' | 'error' | 'rate-limited'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [waitTime, setWaitTime] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setMsgIndex((prev) => (prev + 1) % HERO_MESSAGES.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);
    return () => clearInterval(msgInterval);
  }, []);

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

  const currentMessage = useMemo(() => HERO_MESSAGES[msgIndex], [msgIndex]);

  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
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
      setErrorMessage('Invalid email');
      return;
    }

    setStatus('loading');

    const result = await subscribeToAlpha(email);

    if (result.success) {
      setSubmittedEmail(email);
      setStatus('success');
      setEmail('');
    } else {
      if (result.isDuplicate) {
        setSubmittedEmail(email);
        setStatus('already-registered');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Registration error');
      }
    }
  };

  return (
    <header className="relative min-h-screen flex items-center px-6 pt-20 pb-12 notranslate" translate="no">
      {/* Fondo de hexágonos isométricos - Patrón tipo panal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Patrón de hexágonos estilo panal isométrico */}
            <pattern id="hex-pattern" width="28" height="49" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              {/* Hexágono principal */}
              <path 
                d="M14 0 L28 8 L28 24 L14 32 L0 24 L0 8 Z" 
                fill="none" 
                stroke="#4DA6FF" 
                strokeWidth="0.4"
                opacity="0.08"
              />
              {/* Hexágono desplazado para efecto panal */}
              <path 
                d="M14 32 L28 40 L28 56 L14 64 L0 56 L0 40 Z" 
                fill="none" 
                stroke="#4DA6FF" 
                strokeWidth="0.4"
                opacity="0.08"
              />
              {/* Medio hexágono derecho */}
              <path 
                d="M28 24 L42 32 L42 48 L28 56" 
                fill="none" 
                stroke="#4DA6FF" 
                strokeWidth="0.4"
                opacity="0.08"
              />
            </pattern>
            {/* Gradiente radial para desvanecimiento en bordes */}
            <radialGradient id="hex-fade" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="white" stopOpacity="1"/>
              <stop offset="70%" stopColor="white" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            <mask id="hex-mask">
              <rect width="100%" height="100%" fill="url(#hex-fade)"/>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" mask="url(#hex-mask)"/>
        </svg>
        {/* Brillo sutil central */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(77,166,255,0.03)_0%,transparent_60%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <div className="space-y-6 animate-fade-in-up relative z-10 mx-auto lg:mx-0 w-full max-w-3xl lg:max-w-none text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A3A5A]/50 border border-[#2A3B4C] backdrop-blur-sm mx-auto lg:mx-0">
            <span className="w-2 h-2 rounded-full bg-[#4DA6FF] animate-pulse"></span>
            <span className="text-[#4DA6FF] text-xs font-bold tracking-wide uppercase">Private Alpha • Coming Soon</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight">
            <span 
              className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#EDA333] to-[#F5D76E] transition-all duration-500 ease-out min-h-[1.2em] ${
                isTransitioning ? 'opacity-0 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'
              }`}
            >
               {currentMessage}
            </span>
            <br/>
            <span className="text-white">{' '}for Hytale</span>
          </h1>
          <p className="text-base md:text-lg text-[#8B9BB4] max-w-full md:max-w-2xl lg:max-w-lg leading-relaxed mx-auto lg:mx-0">
            More than just hosting. HyPanel is the engine that powers your imagination. Create unique experiences, manage your community, and scale effortlessly. 
            <br/>
            Join the <strong className="text-white">private Alpha</strong> and start building.
          </p>
          <form onSubmit={handleJoin} className="flex flex-col gap-3 max-w-full md:max-w-xl lg:max-w-md mx-auto lg:mx-0">
            {/* Estado: Registro exitoso (nuevo usuario) */}
            {status === 'success' && (
              <div className="space-y-3 animate-fade-in-up">
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/40 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <CheckCircle size={20} className="text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-emerald-400 font-bold text-sm">Registration successful!</p>
                      <p className="text-emerald-400/70 text-xs mt-1">
                        <span className="font-medium text-emerald-400">{submittedEmail}</span> is on the list.
                        We'll notify you when Alpha is available.
                      </p>
                    </div>
                  </div>
                </div>
                <a 
                  href={SOCIAL_LINKS.discord}
                  title="Join our Discord"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold rounded-xl transition-all text-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Join the Discord community
                </a>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-xs text-muted hover:text-white transition-colors"
                >
                  ← Register another email
                </button>
              </div>
            )}

            {/* Estado: Usuario ya registrado */}
            {status === 'already-registered' && (
              <div className="space-y-3 animate-fade-in-up">
                <div className="p-4 bg-[#4DA6FF]/10 border border-[#4DA6FF]/40 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#4DA6FF]/20 rounded-lg">
                      <UserCheck size={20} className="text-[#4DA6FF]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#4DA6FF] font-bold text-sm">You're already registered!</p>
                      <p className="text-[#4DA6FF]/70 text-xs mt-1">
                        <span className="font-medium text-[#4DA6FF]">{submittedEmail}</span> is already on our list.
                        Don't worry, we'll notify you when Alpha is ready.
                      </p>
                    </div>
                  </div>
                </div>
                <a 
                  href={SOCIAL_LINKS.discord}
                  title="Join our Discord"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold rounded-xl transition-all text-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Meanwhile, join Discord
                </a>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-xs text-muted hover:text-white transition-colors"
                >
                  ← Register another email
                </button>
              </div>
            )}

            {/* Estado: Rate limited (cooldown) */}
            {status === 'rate-limited' && (
              <div className="space-y-3 animate-fade-in-up">
                <div className="p-4 bg-orange-500/10 border border-orange-500/40 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <Clock size={20} className="text-orange-400 animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <p className="text-orange-400 font-bold text-sm">Too many attempts</p>
                      <p className="text-orange-400/70 text-xs mt-1">
                        Please wait before trying again.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-orange-500/20 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-orange-400 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(100, (waitTime / 900) * 100)}%` }}
                          />
                        </div>
                        <span className="text-orange-400 font-mono text-sm font-bold min-w-[60px] text-right">
                          {formatWaitTime(waitTime)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted text-xs text-center">
                  Already registered? <a href={SOCIAL_LINKS.discord} title="Join our Discord" target="_blank" rel="noopener noreferrer" className="text-[#4DA6FF] hover:underline">Join Discord</a> while you wait.
                </p>
              </div>
            )}

            {/* Estado: Formulario normal (idle, loading, error) */}
            {(status === 'idle' || status === 'loading' || status === 'error') && (
              <>
                <div className="flex-1 relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
                    <Mail size={16} />
                  </div>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className={`w-full pl-10 pr-4 py-3 bg-[#151D2C] border rounded-xl focus:outline-none focus:border-[#EDA333] text-white placeholder-muted text-sm shadow-inner transition-colors ${
                      status === 'error' ? 'border-red-500 focus:border-red-500' : 'border-[#2A3B4C]'
                    }`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    disabled={status === 'loading'}
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="px-5 py-3 bg-[#EDA333] hover:bg-[#D48F22] text-[#0B0F19] font-bold rounded-xl transition-transform hover:-translate-y-1 shadow-xl shadow-[#EDA333]/10 flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={16} className="animate-spin" /> Registering...</>
                  ) : (
                    <>Join the Alpha <ChevronRight size={16} /></>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errorMessage}
                  </p>
                )}
              </>
            )}
          </form>
          <div className="flex items-center justify-center lg:justify-start gap-5 text-xs font-medium text-muted">
             <div className="flex items-center gap-2">
               <Heart size={12} className="text-[#EDA333]"/>Made for Hytale    
             </div>
          </div>
        </div>

        {/* HyCore Visualization */}
        <div className="flex justify-center items-center w-full mx-auto lg:mx-0">
          <HyCoreVisualization />
        </div>
      </div>
    </header>
  );
};

export default Hero;

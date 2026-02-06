import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Shield, Building2, Briefcase } from 'lucide-react';
import { MarketChart } from './MarketChart';

interface HeroProps {
  onGetFundedClick: () => void;
  onViewMandatesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetFundedClick, onViewMandatesClick }) => {
  return (
    <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-nova-950">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-nova-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-12 leading-[1.15] animate-fade-in-up uppercase italic max-w-5xl">
            Bespoke Credit solutions <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-nova-500">
              & business support services to Nano, Micro, small and medium enterprises (NMSME).
            </span>
          </h1>
          
          {/* Strategic Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <button 
              onClick={onGetFundedClick}
              className="px-10 py-5 rounded-2xl bg-white text-nova-950 font-black uppercase tracking-[0.2em] text-[11px] hover:bg-nova-500 hover:text-white transition-all shadow-2xl shadow-white/5 active:scale-95 flex items-center gap-3"
            >
              Access Solutions <ChevronRight size={18} strokeWidth={3} />
            </button>
            <button 
              onClick={onViewMandatesClick}
              className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 text-white font-black uppercase tracking-[0.2em] text-[11px] hover:bg-white/10 transition-all active:scale-95"
            >
              View Mandates
            </button>
          </div>

        
        </div>
      </div>
    </div>
  );
};
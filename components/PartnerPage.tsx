import React from 'react';
import { Handshake, Globe, Zap, Network, Scale, Mail, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const PartnerPage: React.FC = () => {
  const partnersTypes = [
    {
      title: "Institutional Capital",
      description: "Partner with CASIEC to deploy structured credit facilities across the NMSME sector.",
      icon: <Network className="text-nova-400" size={32} />
    },
    {
      title: "Referral Networks",
      description: "Professional intermediaries, brokers, and advisors who align their clients with our elite capital solutions.",
      icon: <Globe className="text-purple-400" size={32} />
    },
    {
      title: "Strategic Alliances",
      description: "Technology providers and industry specialists who enhance our credit architecture and enterprise support.",
      icon: <Zap className="text-nova-accent" size={32} />
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-nova-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-nova-500/5 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-nova-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 animate-fade-in-up">
            <Sparkles size={14} className="animate-pulse" />
            Strategic Synergies
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.9] animate-fade-in-up">
            Forge <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-nova-400 to-purple-400">Alliances.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up">
            Join the ecosystem of elite partners driving financial inclusion and enterprise innovation across the continent.
          </p>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {partnersTypes.map((partner, idx) => (
            <div 
              key={idx} 
              className="group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-nova-500/40 transition-all duration-500 flex flex-col items-center text-center hover:translate-y-[-8px]"
            >
              <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-nova-500/10 transition-all">
                {partner.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">{partner.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
                {partner.description}
              </p>
              <div className="mt-auto">
                 <CheckCircle2 size={24} className="text-nova-500 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Card */}
        <div className="relative p-1 bg-gradient-to-br from-nova-500/20 via-transparent to-purple-500/20 rounded-[4rem]">
          <div className="bg-nova-900 rounded-[3.8rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto">
                <Handshake size={48} className="text-nova-400 mx-auto mb-8 animate-float" />
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase italic tracking-tighter">Initiate Dialogue.</h2>
                <p className="text-gray-300 text-xl mb-12 font-medium leading-relaxed italic">
                  "Our partnership desk is currently open for institutional alignment and strategic referral mappings."
                </p>
                
                <a 
                  href="mailto:info@casiecfinancials.com?subject=Partnership%20Inquiry%20-%20CASIEC%20Financials"
                  className="inline-flex items-center gap-4 px-12 py-6 bg-white text-nova-900 font-black uppercase tracking-widest text-sm rounded-full hover:bg-nova-500 hover:text-white transition-all shadow-2xl active:scale-95"
                >
                  Contact Partnership Desk <Mail size={20} />
                </a>
                
                <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                   <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-nova-500" /> Secure Transmission</span>
                   <span className="flex items-center gap-2"><Scale size={14} className="text-nova-500" /> Regulatory Compliance</span>
                   <span className="flex items-center gap-2"><Sparkles size={14} className="text-nova-500" /> Strategic Synergy</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
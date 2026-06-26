import React from 'react';
import { ChevronRight } from './Icons';

export const Hero = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-24 flex flex-col items-center text-center overflow-hidden">
      {/* Background abstract decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-nocturnal rounded-full blur-[120px] opacity-40 -z-10 pointer-events-none"></div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nocturnal border border-mystic/20 text-mystic text-xs font-mono mb-8 hover:border-forsythia/50 transition-colors duration-200">
        <span className="w-2 h-2 rounded-full bg-forsythia animate-pulse"></span>
        SpeedRun Engine v2.0 is now live
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-arctic leading-tight max-w-4xl animate-fade-up-1">
        Automate Data Flow at <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-saffron">Terminal Velocity</span>
      </h1>
      
      <p className="mt-6 text-lg md:text-xl text-mystic max-w-2xl font-light animate-fade-up-2">
        Experience <strong>Next-Gen AI Platform</strong> SpeedRun: the ultimate AI-driven data automation system. Connect pipelines, transform datasets, and deploy intelligent agents in seconds.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-up-3">
        <button className="relative overflow-hidden group flex items-center gap-2 bg-forsythia text-oceanic font-bold py-4 px-8 rounded-lg transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,200,1,0.4)] hover:shadow-[0_0_30px_rgba(255,153,50,0.6)] hover:scale-[1.02]">
          <span className="relative z-10 flex items-center gap-2">
            Start Building Free
            <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent [animation:shimmer_2.5s_infinite]"></div>
        </button>
        
        <button className="relative overflow-hidden group flex items-center gap-2 bg-transparent text-arctic font-medium py-4 px-8 rounded-lg border border-mystic/20 hover:border-mystic/50 transition-all duration-200 ease-out hover:bg-mystic/5 hover:scale-[1.02]">
          <span className="relative z-10">Read Documentation</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-mystic/10 to-transparent [animation:shimmer_2.5s_infinite]" style={{ animationDelay: '1.25s' }}></div>
        </button>
      </div>

      {/* Terminal UI Mockup */}
      <div className="mt-20 w-full max-w-4xl bg-oceanic border border-mystic/10 rounded-xl overflow-hidden shadow-2xl relative animate-fade-up-3">
        <div className="flex items-center gap-2 bg-nocturnal/50 px-4 py-3 border-b border-mystic/10">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          <div className="ml-4 font-mono text-xs text-mystic/60">bash - speedrun-ai</div>
        </div>
        <div className="p-6 font-mono text-sm text-mystic text-left flex flex-col gap-3">
          <div className="text-forsythia">$ speedrun init pipeline --ai-model=gpt-4o <span className="animate-pulse">_</span></div>
          <div className="flex items-center gap-2 text-arctic opacity-80">
            <div className="w-2 h-2 rounded-full bg-mystic animate-ping"></div>
            &gt; Analyzing schema parameters...
          </div>
          <div className="flex items-center gap-2 text-arctic opacity-80">
            <div className="w-2 h-2 rounded-full bg-mystic animate-ping" style={{animationDelay: '150ms'}}></div>
            &gt; Generating transformation logic...
          </div>
          <div className="text-[#27C93F] font-semibold mt-2">✓ Pipeline generated in 0.4s. Ready for deployment.</div>
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-oceanic via-transparent to-transparent z-10"></div>
        <div className="absolute top-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-forsythia to-transparent animate-data-stream opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-saffron to-transparent animate-data-stream opacity-50" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

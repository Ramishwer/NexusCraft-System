
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Neural Network Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Engineering the Agentic Future
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] mb-8 tracking-tighter">
            THE <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500">NEURAL</span> <br />
            ARCHITECTURE.
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-300 mb-12 max-w-3xl leading-tight font-medium">
            NexusCraft Systems designs high-performance autonomous software ecosystems that learn from data and scale with intent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group relative px-10 py-5 bg-blue-600 rounded-2xl font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/40">
              <span className="relative z-10 flex items-center gap-3">
                Deploy Your Vision
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="px-10 py-5 bg-slate-900 border border-white/10 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all text-center backdrop-blur-sm">
              Explore Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

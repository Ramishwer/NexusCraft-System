
import React from 'react';
import { AI_METHODOLOGY } from '../constants';

const AIFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-blue-500 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">The AI Advantage</h2>
          <p className="text-slate-400 text-lg">
            We've integrated high-level intelligence into every stage of our software development life cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {AI_METHODOLOGY.map((item, i) => (
            <div key={i} className="group relative p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500">
              <div className="absolute -top-6 left-10 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-xl shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed italic">
                "{item.desc}"
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Active System</span>
                <div className="flex gap-1">
                  {[1,2,3].map(d => <div key={d} className="w-1 h-1 bg-blue-500 rounded-full animate-ping" style={{animationDelay: `${d * 0.2}s`}}></div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;

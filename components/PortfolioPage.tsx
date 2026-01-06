
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'ALL'>('ALL');

  const filteredProjects = filter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      <section className="py-20 bg-gradient-to-b from-violet-900/10 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-500">Case Studies</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From deep-tech AI agents to high-frequency trading platforms, explore how we build the future.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button 
              onClick={() => setFilter('ALL')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === 'ALL' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
            >
              All Work
            </button>
            {Object.values(ProjectCategory).map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-slate-900/50 border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all shadow-xl">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <button className="text-blue-400 text-xs font-black uppercase tracking-widest flex items-center gap-2 group/btn">
                    View Project Details
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to be our next success story?</h2>
          <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all">
            Schedule a Strategy Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

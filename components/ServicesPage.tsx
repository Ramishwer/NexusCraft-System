
import React from 'react';
import { SERVICES, PROCESS_STEPS } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      {/* Header Section */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-blue-900/10 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">Capabilities</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We provide specialized engineering services designed to scale your business. From intelligent AI integrations to global cloud infrastructures.
          </p>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-24">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="text-6xl mb-8">{service.icon}</div>
                  <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    {service.longDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features?.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.techStack?.map((tech, i) => (
                      <span key={i} className="px-4 py-1.5 bg-slate-900 border border-white/10 rounded-full text-xs font-semibold text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2 w-full aspect-video bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl relative group">
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl opacity-10 group-hover:scale-110 transition-transform duration-700">
                       {service.icon}
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-[80px] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-slate-400">A transparent and proven methodology for project success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -translate-y-1/2 z-0"></div>
            
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative z-10 p-8 rounded-3xl bg-slate-950 border border-white/5 hover:border-blue-500/50 transition-all group">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">0{i+1}. {step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600/10 to-violet-600/10 border border-white/5 rounded-[3rem] p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Need a custom technical roadmap?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Our consultants can help you define the right technologies for your specific business requirements.
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all">
              Consult with our CTO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

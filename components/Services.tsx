
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h4 className="text-blue-500 font-bold uppercase tracking-widest mb-4">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold">End-to-End Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-blue-500/50 transition-all group cursor-default"
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

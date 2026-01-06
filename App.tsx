
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import ConsultantPage from './components/ConsultantPage';
import AIFeatures from './components/AIFeatures';
import { View } from './types';

const SectionHeader: React.FC<{ title: string; subtitle: string; image?: string }> = ({ title, subtitle, image }) => (
  <section className="relative pt-44 pb-28 overflow-hidden bg-slate-950">
    {image && (
      <div className="absolute inset-0 z-0">
        <img src={image} className="w-full h-full object-cover opacity-25" alt={title} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/20 to-slate-950"></div>
      </div>
    )}
    <div className="container mx-auto px-6 relative z-10 text-center">
      <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter uppercase italic bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-600">
        {title}
      </h1>
      <p className="text-xl md:text-3xl text-slate-300 max-w-5xl mx-auto leading-tight font-medium">
        {subtitle}
      </p>
    </div>
  </section>
);

const FeatureBlock: React.FC<{ title: string; text: string; image: string; reverse?: boolean }> = ({ title, text, image, reverse }) => (
  <section className="py-32 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className={`flex flex-col lg:flex-row items-center gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className="lg:w-1/2 space-y-10">
          <h2 className="text-5xl font-bold tracking-tight text-white leading-none">{title}</h2>
          <p className="text-xl text-slate-400 leading-relaxed font-light">{text}</p>
          <div className="flex gap-4">
            <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20">
              Explore Solution
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full aspect-[16/10] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl relative group">
          <img src={image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={title} />
          <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderContent = () => {
    switch(currentView) {
      case 'services': return <ServicesPage />;
      case 'portfolio': return <PortfolioPage />;
      case 'consultant': return <ConsultantPage />;
      
      // Detailed Service Pages
      case 'software-dev':
        return (
          <>
            <SectionHeader title="Engineering" subtitle="Architecting the next generation of high-performance digital ecosystems." image="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=2000" />
            <FeatureBlock 
              title="Built for the Future" 
              text="Our engineering team specializes in the development of fault-tolerant, high-concurrency systems designed to handle the most demanding enterprise workloads. We leverage a modular microservices approach that ensures your software can grow without limits. By utilizing the latest in container orchestration and automated scaling, we guarantee 99.99% uptime for your most mission-critical digital assets."
              image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
            />
          </>
        );
      case 'web-dev':
        return (
          <>
            <SectionHeader title="Web Platforms" subtitle="Blurring the line between traditional websites and high-performance native applications." image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000" />
            <FeatureBlock 
              title="Immersive Speed" 
              text="We don't just build websites; we craft immersive digital hubs that define your brand's authority. Our web development focus centers on performance engineering, ensuring that your users never wait more than a fraction of a second for content to appear. By integrating advanced headless architectures, we provide you with a flexible content ecosystem that scales across every platform and screen size effortlessly."
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
              reverse
            />
          </>
        );
      case 'mobile-dev':
        return (
          <>
            <SectionHeader title="Mobile-First" subtitle="Empowering your brand with high-fidelity apps that customers carry everywhere." image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000" />
            <FeatureBlock 
              title="Universal Reach" 
              text="Our mobile engineering squad specializes in creating deeply integrated apps that provide native performance while maintaining cross-platform efficiency. We focus on a human-centered design approach, ensuring that every gesture and interaction feels intuitive. From secure payment processing to real-time data streaming, our mobile solutions are engineered to be the most reliable tools in your customers' hands."
              image="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=1200"
            />
          </>
        );
      case 'blockchain-dev':
        return (
          <>
            <SectionHeader title="Web3 & Trust" subtitle="Integrating immutable transparency into your enterprise's core value proposition." image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000" />
            <FeatureBlock 
              title="Immutable Integrity" 
              text="Blockchain technology is the new standard for digital trust. We help businesses leverage decentralized protocols to improve security, reduce transactional friction, and build transparent relationships with their customers. Our team engineers secure, audited smart contracts that automate complex business logic without the need for traditional intermediaries, driving efficiency and trust across your entire supply chain."
              image="https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80&w=1200"
              reverse
            />
          </>
        );
      case 'uiux-design':
        return (
          <>
            <SectionHeader title="Design Systems" subtitle="Bridging the cognitive gap between complex data and intuitive human interaction." image="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=2000" />
            <FeatureBlock 
              title="Strategic Aesthetics" 
              text="Design at NexusCraft is rooted in technical empathy. We create robust design systems that serve as a single source of truth for your entire digital ecosystem. By conducting deep usability research and behavioral analysis, we ensure that every pixel serves a purpose. Our goal is to remove friction from the user experience, turning complex technical workflows into delightful, effortless interactions."
              image="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200"
            />
          </>
        );
      case 'digital-marketing':
        return (
          <>
            <SectionHeader title="Growth Engine" subtitle="Scaling your digital footprint through data-driven performance and AI-insights." image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" />
            <FeatureBlock 
              title="Precision Scale" 
              text="We treat digital growth as a technical optimization problem. Our marketing engineering team uses predictive analytics and machine learning to identify the most valuable user segments and optimize your acquisition spend in real-time. By integrating advanced tracking and sentiment analysis directly into your digital platforms, we ensure that your brand captures the right attention and drives sustainable, long-term growth."
              image="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200"
              reverse
            />
          </>
        );

      // Company Pages
      case 'about':
        return (
          <>
            <SectionHeader title="About Us" subtitle="A technical collective dedicated to the pursuit of digital perfection." image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" />
            <FeatureBlock 
              title="The Nexus Philosophy" 
              text="Founded in the heart of the technical revolution, NexusCraft Systems was built on the belief that software should be beautiful, reliable, and intelligent. We are a collective of elite architects, researchers, and designers who believe that standard engineering is no longer enough. We partner with companies that want to redefine their industry, providing the technical depth and innovative thinking required to build world-class products."
              image="https://images.unsplash.com/photo-1522071823991-b9671f903f79?auto=format&fit=crop&q=80&w=1200"
            />
          </>
        );
      case 'mission':
        return (
          <>
            <SectionHeader title="Our Mission" subtitle="To architect a world where intelligence is integrated into every interaction." image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" />
            <FeatureBlock 
              title="The North Star" 
              text="Our mission is to bridge the gap between human ambition and technical possibility. We are committed to developing software that is not only high-performing but also secure, ethical, and sustainable. By the end of this decade, our goal is to have provided the technical backbone for the next generation of global companies, ensuring that intelligence is a universal feature of the digital world."
              image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
              reverse
            />
          </>
        );
      case 'why-us':
        return (
          <>
            <SectionHeader title="Why Us" subtitle="The standard in high-fidelity technical partnership and elite engineering." image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2000" />
            <FeatureBlock 
              title="Elite Capability" 
              text="Leading enterprises choose NexusCraft because we do not compromise. We hire only the top 1% of technical talent and apply a rigorous peer-review process to every line of code we ship. Our partners benefit from our senior-only squad model, which guarantees that your most critical technical problems are solved by experts with decades of experience. When failure is not an option, NexusCraft is the only choice."
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200"
            />
          </>
        );
      case 'faq':
        return (
          <div className="pt-48 pb-24 min-h-screen bg-slate-950">
            <div className="container mx-auto px-6 max-w-4xl">
              <h1 className="text-8xl font-black mb-24 text-center tracking-tighter italic">F.A.Q.</h1>
              <div className="space-y-16">
                {[
                  { q: "What is your typical engagement model?", a: "We operate on a 'Squad-Based' model where you get a dedicated team of senior architects, engineers, and a project lead. This team acts as an extension of your company, integrating deeply into your technical workflows to ensure maximum alignment and speed." },
                  { q: "How do you ensure enterprise-grade security?", a: "Every project at NexusCraft follows our 'Security-by-Design' framework. This includes mandatory SOC2-compliant engineering pipelines, automated vulnerability scanning, and third-party penetration testing as part of our core delivery process." },
                  { q: "Do you handle maintenance after launch?", a: "We believe a launch is just the beginning. We provide comprehensive 'Nexus Assurance' packages that include 24/7 technical support, proactive uptime monitoring, and quarterly technical health audits to ensure your software stays ahead of the curve." }
                ].map((faq, i) => (
                  <div key={i} className="p-16 rounded-[4rem] bg-slate-900/50 border border-white/10 shadow-3xl hover:border-blue-500/30 transition-all group">
                    <h3 className="text-3xl font-bold mb-8 text-blue-400 group-hover:text-blue-300 transition-colors">Q: {faq.q}</h3>
                    <p className="text-slate-300 text-xl leading-relaxed font-light">A: {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'industries':
        return (
          <>
            <SectionHeader title="Industries" subtitle="Tailored technical excellence for the world's most critical business sectors." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" />
            <div className="container mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-20">
              {[
                { title: "Fintech", img: "https://images.unsplash.com/photo-1611974714024-4637d2305c91?auto=format&fit=crop&q=80&w=1000", text: "High-frequency trading engines and secure payment rails." },
                { title: "Healthcare", img: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1000", text: "Compliant data lakes and predictive patient diagnostic systems." },
                { title: "Logistics", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000", text: "Autonomous fleet management and real-time supply chain logic." },
                { title: "Enterprise", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000", text: "Global operational scale through custom-engineered automation." }
              ].map((ind, i) => (
                <div key={i} className="group relative aspect-[16/9] rounded-[4rem] overflow-hidden border border-white/5 shadow-3xl">
                  <img src={ind.img} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" alt={ind.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  <div className="absolute bottom-16 left-16">
                    <h3 className="text-6xl font-black mb-4 tracking-tighter uppercase italic">{ind.title}</h3>
                    <p className="text-slate-200 text-xl max-w-sm font-medium leading-tight">{ind.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case 'contact':
        return (
          <div className="pt-48 pb-24 min-h-screen bg-slate-950 container mx-auto px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-32">
              <div className="lg:w-1/2 space-y-20">
                <h1 className="text-8xl md:text-9xl font-black tracking-tighter leading-none italic uppercase">THE <br /><span className="text-blue-500 underline decoration-blue-500/20">FUTURE</span> <br />STARTS <br />HERE.</h1>
                <p className="text-3xl text-slate-400 leading-relaxed font-light max-w-lg">
                  "NexusCraft does not just build software; we build the competitive advantage of your next decade."
                </p>
                <div className="space-y-12">
                  <div className="flex items-center gap-10">
                    <div className="w-24 h-24 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex items-center justify-center text-4xl shadow-2xl">📧</div>
                    <div>
                      <p className="text-xs font-black text-slate-500 uppercase tracking-[0.5em] mb-2">Transmission Link</p>
                      <p className="text-3xl font-bold tracking-tight">architects@nexuscraft.systems</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="w-24 h-24 bg-violet-600/10 border border-violet-500/20 rounded-3xl flex items-center justify-center text-4xl shadow-2xl">📍</div>
                    <div>
                      <p className="text-xs font-black text-slate-500 uppercase tracking-[0.5em] mb-2">Global HQ</p>
                      <p className="text-3xl font-bold tracking-tight">Innovation Hub, SF, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-slate-900/50 p-20 rounded-[5rem] border border-white/10 shadow-3xl relative overflow-hidden backdrop-blur-2xl">
                <form className="space-y-10 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input type="text" placeholder="Full Name" className="w-full bg-slate-950/50 border border-white/10 rounded-2xl p-7 focus:ring-2 focus:ring-blue-500 outline-none text-xl transition-all placeholder:text-slate-600" />
                    <input type="email" placeholder="Corporate Email" className="w-full bg-slate-950/50 border border-white/10 rounded-2xl p-7 focus:ring-2 focus:ring-blue-500 outline-none text-xl transition-all placeholder:text-slate-600" />
                  </div>
                  <input type="text" placeholder="Organization" className="w-full bg-slate-950/50 border border-white/10 rounded-2xl p-7 focus:ring-2 focus:ring-blue-500 outline-none text-xl transition-all placeholder:text-slate-600" />
                  <textarea placeholder="Describe your technical vision..." rows={5} className="w-full bg-slate-950/50 border border-white/10 rounded-2xl p-7 focus:ring-2 focus:ring-blue-500 outline-none text-xl transition-all placeholder:text-slate-600"></textarea>
                  <button className="w-full bg-blue-600 py-8 rounded-[2rem] font-black uppercase tracking-widest hover:bg-blue-500 transition-all text-2xl shadow-2xl shadow-blue-600/40 active:scale-95 transform">
                    Initiate Connection
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <Hero />
            <AIFeatures />
            <Services />
            <AIConsultant />
            <Portfolio />
            
            <section className="py-32 bg-slate-900/30 border-y border-white/5">
              <div className="container mx-auto px-6 text-center">
                <p className="text-slate-500 text-xs mb-20 font-black tracking-[0.6em] uppercase">Industry Standard Infrastructure Protocols</p>
                <div className="flex flex-wrap justify-center gap-20 md:gap-40 opacity-20 grayscale filter transition-all hover:grayscale-0 hover:opacity-100 duration-500">
                  {['AWS', 'NVIDIA', 'GOOGLE', 'OPENAI', 'DOCKER', 'KUBERNETES'].map((brand) => (
                    <div key={brand} className="text-4xl font-black text-slate-300 uppercase tracking-tighter italic">{brand}</div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-40 relative overflow-hidden">
              <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-700 via-blue-900 to-slate-950 p-24 md:p-40 rounded-[6rem] shadow-4xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-5 text-[300px] leading-none select-none group-hover:scale-110 transition-transform duration-1000">🧠</div>
                  <h2 className="text-6xl md:text-9xl font-black mb-12 leading-none tracking-tighter uppercase italic">Scale <br /><span className="text-blue-300">Intelligently.</span></h2>
                  <p className="text-2xl md:text-3xl text-blue-100 mb-20 leading-relaxed max-w-4xl mx-auto font-light">
                    Stop building legacy technical debt. Partner with NexusCraft and architect a future that learns, scales, and outperforms.
                  </p>
                  <button 
                    onClick={() => { setCurrentView('consultant'); window.scrollTo(0, 0); }}
                    className="bg-white text-blue-950 px-20 py-10 rounded-[3rem] font-black text-3xl hover:scale-110 transition-all shadow-4xl active:scale-95 transform"
                  >
                    Deploy Consultant AI
                  </button>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/50">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;


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
  <section className="relative pt-40 pb-24 overflow-hidden bg-slate-950">
    {image && (
      <div className="absolute inset-0 z-0">
        <img src={image} className="w-full h-full object-cover opacity-20" alt={title} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950"></div>
      </div>
    )}
    <div className="container mx-auto px-6 relative z-10 text-center">
      <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
        {subtitle}
      </p>
    </div>
  </section>
);

const FeatureBlock: React.FC<{ title: string; text: string; image: string; reverse?: boolean }> = ({ title, text, image, reverse }) => (
  <section className="py-24 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className={`flex flex-col lg:flex-row items-center gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">{title}</h2>
          <p className="text-lg text-slate-400 leading-relaxed whitespace-pre-line">{text}</p>
          <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2 w-full aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group">
          <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />
          <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 to-transparent"></div>
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
            <SectionHeader title="Engineering Excellence" subtitle="Building robust, high-availability software that powers enterprise digital transformations." image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Scalable Microservices" 
              text="We specialize in breaking down complex monolithic applications into agile, independent microservices. This approach allows for faster deployment cycles, improved fault tolerance, and the ability to scale individual components of your stack independently. Our engineering protocols follow rigorous CI/CD and automated testing standards to ensure production stability from day one."
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
            />
          </>
        );
      case 'web-dev':
        return (
          <>
            <SectionHeader title="Web Presence" subtitle="Creating fast, accessible, and high-conversion web platforms using modern architectures." image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Next-Generation Performance" 
              text="In an era where every millisecond counts, our web development focuses on Core Web Vitals and edge-side rendering. We utilize Next.js and Vercel to deliver content closer to your users, drastically reducing latency. Every interface we build is accessible, mobile-responsive, and optimized for maximum user retention and SEO performance."
              image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
              reverse
            />
          </>
        );
      case 'mobile-dev':
        return (
          <>
            <SectionHeader title="Mobile-First" subtitle="Deploying high-fidelity applications across iOS and Android with a single codebase." image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Seamless Portability" 
              text="Our mobile solutions leverage Flutter and React Native to provide native-level performance while maintaining the efficiency of a unified codebase. We focus on creating smooth animations, intuitive UI flows, and robust offline data management. Whether you need a simple MVP or a complex enterprise app, we provide a consistent experience for all users."
              image="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000"
            />
          </>
        );
      case 'blockchain-dev':
        return (
          <>
            <SectionHeader title="Secure Ledgers" subtitle="Integrating transparency and security into your core business through decentralized protocols." image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="The Trust Economy" 
              text="Blockchain is no longer just for finance; it's about immutable data and automated trust. We build decentralized applications (dApps) that streamline supply chain verification, digital identity management, and secure asset tokenization. Our security experts perform comprehensive audits of all smart contracts to ensure your protocols are resilient against common exploits."
              image="https://images.unsplash.com/photo-1621504450181-5d356f63d3ee?auto=format&fit=crop&q=80&w=1000"
              reverse
            />
          </>
        );
      case 'uiux-design':
        return (
          <>
            <SectionHeader title="Design Systems" subtitle="Bridging the gap between human intuition and complex data through clarity." image="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Cognitive Design" 
              text="Our design philosophy is rooted in usability and efficiency. We create comprehensive design systems that ensure brand consistency across every digital touchpoint. By performing deep user research and data-driven flow analysis, we remove friction from the user journey, making complex enterprise software feel natural and effortless for the end-user."
              image="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=1000"
            />
          </>
        );
      case 'digital-marketing':
        return (
          <>
            <SectionHeader title="Growth Strategy" subtitle="Accelerating your digital footprint through data-driven campaigns and AI insights." image="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d1?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Engineered Marketing" 
              text="We treat digital marketing as a science. Our growth team uses predictive modeling to identify high-conversion audiences and optimizes ad spend in real-time. By integrating technical SEO directly into our codebases and using AI for content personalization, we ensure your brand captures and retains the right attention in a crowded digital marketplace."
              image="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000"
              reverse
            />
          </>
        );

      // Company Pages
      case 'about':
        return (
          <>
            <SectionHeader title="About NexusCraft" subtitle="A technical collective dedicated to building the future of autonomous systems." image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Our Architecture" 
              text="Founded in San Francisco, NexusCraft Systems was born from a desire to merge world-class engineering with the transformative power of AI. We are not just an agency; we are technical partners. Our team consists of former lead engineers from global tech firms, unified by a passion for solving the world's most complex scalability and intelligence problems through elegant, neural software."
              image="https://images.unsplash.com/photo-1522071823991-b9671f903f79?auto=format&fit=crop&q=80&w=1000"
            />
          </>
        );
      case 'mission':
        return (
          <>
            <SectionHeader title="Our Mission" subtitle="Empowering humanity through secure and ethical artificial intelligence integration." image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="The Human-AI Bridge" 
              text="Our mission is to ensure that the transition to an AI-native world is secure, efficient, and ethical. We believe that technology should amplify human potential, not replace it. Every project we undertake is evaluated for its long-term impact on the end-user, ensuring we build tools that foster productivity and innovation for generations to come."
              image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
              reverse
            />
          </>
        );
      case 'why-us':
        return (
          <>
            <SectionHeader title="The Nexus Advantage" subtitle="Why leading enterprises trust us to architect their most critical systems." image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Security Without Compromise" 
              text="We treat security as a first-class feature, not an afterthought. Our SOC2-compliant engineering pipelines and private VPC model deployments ensure your data remains your most protected asset. Combined with our rapid delivery cycles and senior-only talent pool, we provide a level of technical depth that typical agencies cannot match."
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
            />
          </>
        );
      case 'faq':
        return (
          <div className="pt-40 pb-24 min-h-screen bg-slate-950">
            <div className="container mx-auto px-6 max-w-4xl">
              <h1 className="text-7xl font-black mb-20 text-center tracking-tighter">F.A.Q.</h1>
              <div className="space-y-12">
                {[
                  { q: "How long does a typical AI integration take?", a: "Most production-ready AI integrations follow a 3-phase cycle: Discovery (1 week), MVP (4 weeks), and Production-Scale (8-12 weeks). We move fast without sacrificing security." },
                  { q: "Is our data used to train your public models?", a: "Absolutely not. We specialize in VPC-isolated deployments. Your proprietary data never leaves your secure environment, and the models we fine-tune for you belong exclusively to your company." },
                  { q: "Do you offer post-launch support and maintenance?", a: "Yes. We provide comprehensive 'Neural Maintenance' packages that include 24/7 uptime monitoring, model drift analysis, and quarterly technical health audits." }
                ].map((faq, i) => (
                  <div key={i} className="p-12 rounded-[3rem] bg-slate-900/50 border border-white/10 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">Q: {faq.q}</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">A: {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'industries':
        return (
          <>
            <SectionHeader title="Industry Verticals" subtitle="Tailored intelligence for the world's most demanding technical sectors." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" />
            <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                { title: "Fintech", img: "https://images.unsplash.com/photo-1611974714024-4637d2305c91?auto=format&fit=crop&q=80&w=800", text: "Low-latency trading infrastructure and AI-driven risk modeling." },
                { title: "Healthcare", img: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800", text: "Secure, compliant EHR systems and predictive diagnostic pipelines." },
                { title: "Logistics", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800", text: "Autonomous supply chain rerouting and predictive fleet analytics." },
                { title: "Enterprise", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", text: "Scaling internal operations through agentic AI automation." }
              ].map((ind, i) => (
                <div key={i} className="group relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                  <img src={ind.img} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt={ind.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-12 left-12">
                    <h3 className="text-5xl font-black mb-4 tracking-tighter">{ind.title}</h3>
                    <p className="text-slate-200 text-lg max-w-sm font-medium">{ind.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case 'contact':
        return (
          <div className="pt-40 pb-24 min-h-screen bg-slate-950 container mx-auto px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
              <div className="lg:w-1/2 space-y-16">
                <h1 className="text-8xl font-black tracking-tighter leading-none">LET'S <br /><span className="text-blue-500">ENGINEER</span> <br />SUCCESS.</h1>
                <p className="text-2xl text-slate-400 leading-relaxed italic max-w-lg">
                  "NexusCraft does not just build software; we build the foundations of your company's next decade."
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-8">
                    <div className="w-20 h-20 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex items-center justify-center text-3xl">📧</div>
                    <div>
                      <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Inquiries</p>
                      <p className="text-2xl font-bold">architects@nexuscraft.systems</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="w-20 h-20 bg-violet-600/10 border border-violet-500/20 rounded-3xl flex items-center justify-center text-3xl">📍</div>
                    <div>
                      <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">HQ</p>
                      <p className="text-2xl font-bold">Innovation District, San Francisco</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-slate-900/50 p-16 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden backdrop-blur-xl">
                <form className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name" className="w-full bg-slate-950 border border-white/10 rounded-2xl p-6 focus:ring-2 focus:ring-blue-500 outline-none text-lg transition-all" />
                    <input type="email" placeholder="Work Email" className="w-full bg-slate-950 border border-white/10 rounded-2xl p-6 focus:ring-2 focus:ring-blue-500 outline-none text-lg transition-all" />
                  </div>
                  <input type="text" placeholder="Company Name" className="w-full bg-slate-950 border border-white/10 rounded-2xl p-6 focus:ring-2 focus:ring-blue-500 outline-none text-lg transition-all" />
                  <textarea placeholder="Describe your technical vision..." rows={6} className="w-full bg-slate-950 border border-white/10 rounded-2xl p-6 focus:ring-2 focus:ring-blue-500 outline-none text-lg transition-all"></textarea>
                  <button className="w-full bg-blue-600 py-8 rounded-3xl font-black uppercase tracking-widest hover:bg-blue-500 transition-all text-xl shadow-2xl shadow-blue-600/40 active:scale-95">Send Transmission</button>
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
            
            <section className="py-24 bg-slate-900/30 border-y border-white/5">
              <div className="container mx-auto px-6 text-center">
                <p className="text-slate-500 text-sm mb-16 font-black tracking-[0.4em] uppercase">Built on the world's most robust tech stacks</p>
                <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-30 grayscale filter transition-all hover:grayscale-0 hover:opacity-100">
                  {['AWS', 'NVIDIA', 'GOOGLE', 'OPENAI', 'DOCKER'].map((brand) => (
                    <div key={brand} className="text-3xl font-black text-slate-300 uppercase tracking-tighter">{brand}</div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-32 relative overflow-hidden">
              <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 p-20 md:p-32 rounded-[5rem] shadow-4xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-5 text-[200px] leading-none">🧠</div>
                  <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tighter">Accelerate your technical roadmap.</h2>
                  <p className="text-2xl text-blue-100 mb-16 leading-relaxed max-w-3xl mx-auto font-medium">
                    Do not let legacy thinking hold your enterprise back. Partner with NexusCraft to architect an AI-first future today.
                  </p>
                  <button 
                    onClick={() => { setCurrentView('consultant'); window.scrollTo(0, 0); }}
                    className="bg-white text-blue-900 px-16 py-8 rounded-[2.5rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl active:scale-95"
                  >
                    Launch Consultant AI
                  </button>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/40">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;


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
  <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
    {image && (
      <div className="absolute inset-0 z-0">
        <img src={image} className="w-full h-full object-cover opacity-10" alt={title} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      </div>
    )}
    <div className="container mx-auto px-6 relative z-10 text-center">
      <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
        {subtitle}
      </p>
    </div>
  </section>
);

const FeatureBlock: React.FC<{ title: string; text: string; image: string; reverse?: boolean }> = ({ title, text, image, reverse }) => (
  <section className="py-24 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className={`flex flex-col lg:flex-row items-center gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-white">{title}</h2>
          <p className="text-lg text-slate-400 leading-relaxed whitespace-pre-line">{text}</p>
        </div>
        <div className="lg:w-1/2 w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group">
          <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />
          <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderContent = () => {
    switch(currentView) {
      case 'services':
        return <ServicesPage />;
      case 'software-dev':
        return (
          <>
            <SectionHeader title="Software Development" subtitle="Custom, high-performance software engineered for enterprise scale and intelligence." image="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Modern Tech Stacks" 
              text="Our software engineering team specializes in building resilient, distributed systems. From microservices architectures to real-time data processing engines, we leverage the latest in cloud-native technologies to ensure your software is future-proof. Whether it's complex backend logic or high-throughput APIs, we deliver excellence through clean, maintainable code and rigorous testing."
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
            />
          </>
        );
      case 'web-dev':
        return (
          <>
            <SectionHeader title="Web Development" subtitle="Immersive web experiences that merge aesthetics with advanced functionality." image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Dynamic Web Solutions" 
              text="In a world of static pages, we build dynamic ecosystems. Our web development focus centers on Next.js, React, and serverless architectures to provide blazingly fast load times and seamless user transitions. We integrate AI at the edge to personalize content in real-time, creating a web presence that feels alive and intelligent."
              image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
              reverse
            />
          </>
        );
      case 'mobile-dev':
        return (
          <>
            <SectionHeader title="Mobile Development" subtitle="Native and cross-platform apps that define mobile-first excellence." image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Intelligence on the Go" 
              text="Our mobile developers create high-performance apps for iOS and Android using Flutter and React Native. We focus on deeply integrated mobile experiences, including offline-first capabilities, biometrics, and on-device machine learning. Your mobile app will not just be a tool, but a powerful extension of your digital strategy."
              image="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000"
            />
          </>
        );
      case 'blockchain-dev':
        return (
          <>
            <SectionHeader title="Blockchain Solutions" subtitle="Decentralized infrastructure and smart contracts built for the trust economy." image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Decentralized Future" 
              text="We engineer secure, scalable blockchain protocols and smart contracts. Our expertise spans Ethereum, Solana, and private ledger implementations for enterprise use-cases. From tokenization platforms to decentralized identity management, we build the foundations of a trustless digital world."
              image="https://images.unsplash.com/photo-1621504450181-5d356f63d3ee?auto=format&fit=crop&q=80&w=1000"
              reverse
            />
          </>
        );
      case 'uiux-design':
        return (
          <>
            <SectionHeader title="UI/UX & Design" subtitle="Human-centric design systems that bridge the gap between complexity and clarity." image="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Cognitive Design" 
              text="Design at NexusCraft is more than just visuals; it's about psychology and flow. Our UI/UX team creates comprehensive design systems that ensure consistency and accessibility across all platforms. We use data-driven insights to map user journeys, ensuring that even the most complex enterprise software feels intuitive and effortless to use."
              image="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=1000"
            />
          </>
        );
      case 'digital-marketing':
        return (
          <>
            <SectionHeader title="Digital Marketing" subtitle="AI-powered growth strategies that scale your digital footprint." image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Growth Engineering" 
              text="We move beyond traditional marketing. By utilizing AI for predictive analytics, sentiment analysis, and hyper-targeted campaigns, we ensure your message reaches the right audience at the perfect moment. Our performance-driven approach focuses on conversion optimization and technical SEO to drive sustainable, long-term growth."
              image="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000"
              reverse
            />
          </>
        );
      case 'portfolio':
        return <PortfolioPage />;
      case 'consultant':
        return <ConsultantPage />;
      case 'about':
        return (
          <>
            <SectionHeader title="About Us" subtitle="Pioneers in the science of autonomous engineering and neural software systems." image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Our Legacy" 
              text="Founded by a collective of AI researchers and distributed systems architects, NexusCraft was born from the realization that legacy software cannot keep pace with the exponential growth of intelligence. We don't build tools; we build systems that think. Our team consists of world-class engineers who have previously designed infrastructure for global tech giants, now focused on bringing that same scale to our partners."
              image="https://images.unsplash.com/photo-1522071823991-b9671f903f79?auto=format&fit=crop&q=80&w=1000"
            />
          </>
        );
      case 'mission':
        return (
          <>
            <SectionHeader title="Our Mission" subtitle="To accelerate the world's transition to agentic intelligence." image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="The North Star" 
              text="We believe the future of software is autonomous. Our mission is to provide every enterprise with the 'Neural Backbone' required to deploy AI agents that are secure, ethical, and performant. By 2030, we envision a world where software doesn't just respond to commands—it anticipates needs, solves bottlenecks, and iterates on its own performance. We are here to build the bridge to that future."
              image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
              reverse
            />
          </>
        );
      case 'why-us':
        return (
          <>
            <SectionHeader title="Why NexusCraft" subtitle="The standard in high-performance digital infrastructure." image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200" />
            <FeatureBlock 
              title="Security First" 
              text="In an era where data is the most valuable asset, we treat security as a first-class citizen. Our SOC2-compliant engineering protocols and VPC-isolated model deployments ensure your proprietary intelligence remains yours. We don't just secure your code; we secure your future."
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
            />
          </>
        );
      case 'faq':
        return (
          <div className="pt-32 pb-24 min-h-screen bg-slate-950">
            <div className="container mx-auto px-6 max-w-4xl">
              <h1 className="text-6xl font-black mb-16 text-center">F.A.Q.</h1>
              <div className="space-y-8">
                {[
                  { q: "What is Agentic Engineering?", a: "Agentic Engineering is the practice of designing software where the core logic is handled by autonomous AI agents capable of planning, tool-use, and reasoning, rather than fixed, hard-coded procedures." },
                  { q: "How do you ensure AI data privacy?", a: "We deploy models within your own private cloud infrastructure. This means your data never leaves your secure environment, and the models we train for you are for your eyes only." },
                  { q: "What is your typical project timeline?", a: "We operate in rapid cycles. A functional AI prototype (MVP) is typically delivered within 3-4 weeks, with full production-grade systems taking 3-6 months depending on complexity." }
                ].map((faq, i) => (
                  <div key={i} className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/10">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Q: {faq.q}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">A: {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'industries':
        return (
          <>
            <SectionHeader title="Industries" subtitle="Tailored intelligence for the world's most demanding sectors." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" />
            <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: "Fintech", img: "https://images.unsplash.com/photo-1611974714024-4637d2305c91?auto=format&fit=crop&q=80&w=800", text: "AI-driven fraud detection and high-frequency trading infrastructure." },
                { title: "Healthcare", img: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800", text: "HIPAA-compliant data lakes and predictive medical scribes." },
                { title: "Logistics", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800", text: "Real-time supply chain optimization and autonomous fleet management." },
                { title: "Retail", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", text: "Hyper-personalized commerce engines and predictive inventory systems." }
              ].map((ind, i) => (
                <div key={i} className="group relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/5">
                  <img src={ind.img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={ind.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  <div className="absolute bottom-10 left-10">
                    <h3 className="text-4xl font-black mb-2">{ind.title}</h3>
                    <p className="text-slate-300 max-w-sm">{ind.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case 'contact':
        return (
          <div className="pt-32 pb-24 min-h-screen bg-slate-950 container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/2 space-y-12">
                  <h1 className="text-7xl font-black tracking-tighter">LET'S <span className="text-blue-500">BUILD</span>.</h1>
                  <p className="text-2xl text-slate-400 leading-relaxed italic">
                    "The best way to predict the future is to engineer it. Reach out to our team of architects to start your neural transformation."
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl">📧</div>
                      <div>
                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Global Inquiries</p>
                        <p className="text-xl font-bold">architects@nexuscraft.systems</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center text-2xl">📍</div>
                      <div>
                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest">HQ Hub</p>
                        <p className="text-xl font-bold">Market St, San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 bg-slate-900/50 p-12 rounded-[4rem] border border-white/10 shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
                  <form className="space-y-6 relative z-10">
                    <input type="text" placeholder="Your Name" className="w-full bg-slate-950 border border-white/10 rounded-2xl p-6 focus:ring-2 focus:ring-blue-500 outline-none text-lg" />
                    <input type="email" placeholder="Work Email" className="w-full bg-slate-950 border border-white/10 rounded-2xl p-6 focus:ring-2 focus:ring-blue-500 outline-none text-lg" />
                    <select className="w-full bg-slate-950 border border-white/10 rounded-2xl p-6 focus:ring-2 focus:ring-blue-500 outline-none text-lg appearance-none text-slate-400">
                      <option>Project Category: AI Engineering</option>
                      <option>Project Category: Cloud Infrastructure</option>
                      <option>Project Category: Digital Strategy</option>
                    </select>
                    <textarea placeholder="Tell us about your technical vision..." rows={5} className="w-full bg-slate-950 border border-white/10 rounded-2xl p-6 focus:ring-2 focus:ring-blue-500 outline-none text-lg"></textarea>
                    <button className="w-full bg-blue-600 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 transition-all text-xl shadow-xl shadow-blue-500/20">Send Transmission</button>
                  </form>
                </div>
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
              <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale filter transition-all hover:grayscale-0">
                  {['Google Cloud', 'NVIDIA', 'OpenAI', 'Anthropic', 'LangChain'].map((brand) => (
                    <div key={brand} className="text-2xl font-black text-slate-300 uppercase tracking-widest hover:text-blue-400 transition-colors cursor-default">{brand}</div>
                  ))}
                </div>
                <p className="text-center text-slate-500 text-sm mt-12 font-medium tracking-[0.2em] uppercase">Built with World-Class Foundations</p>
              </div>
            </section>

            <section className="py-24 relative overflow-hidden">
              <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 via-blue-700 to-violet-800 p-12 md:p-24 rounded-[4rem] shadow-2xl shadow-blue-500/20 relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl">🧠</div>
                  <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Transition to an AI-Native business today.</h2>
                  <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Stop building legacy software. Start building the future with NexusCraft's Agentic Engineering protocols.
                  </p>
                  <button 
                    onClick={() => {
                      setCurrentView('consultant');
                      window.scrollTo(0, 0);
                    }}
                    className="bg-white text-blue-700 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-slate-100 transition-all transform hover:-translate-y-1 shadow-xl"
                  >
                    Initiate Neural Discovery
                  </button>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

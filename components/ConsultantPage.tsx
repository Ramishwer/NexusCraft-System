
import React, { useState, useRef, useEffect } from 'react';
import { getProjectConsultation } from '../services/gemini';
import { ChatMessage } from '../types';

const ConsultantPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Welcome to the NexusCraft Neuro-Link. I'm your dedicated Solutions Architect. What kind of autonomous future are we building today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getProjectConsultation(input);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-950 flex flex-col">
      <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">AI ARCHITECT <span className="text-blue-500">v3.0</span></h1>
          <p className="text-slate-400 font-medium tracking-widest uppercase text-xs">Deep Reasoning & Infrastructure Design Engine</p>
        </div>

        <div className="flex-1 bg-slate-900/50 border border-white/10 rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl relative">
          {/* Animated Background for Chat */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0,transparent_50%)]"></div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 relative z-10 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] md:max-w-[70%] rounded-3xl px-8 py-5 shadow-lg ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-950/80 border border-white/10 text-slate-100 rounded-tl-none backdrop-blur-md'
                }`}>
                  <p className="text-base md:text-lg leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-950/80 border border-white/10 text-slate-100 rounded-3xl rounded-tl-none px-8 py-5 italic text-sm animate-pulse flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                  Analyzing Neural Patterns...
                </div>
              </div>
            )}
          </div>

          <div className="p-8 bg-slate-950/80 border-t border-white/10 relative z-10">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your technical vision (e.g., 'An autonomous logistics network using multi-agent RL')"
                className="flex-1 bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                disabled={isLoading}
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 rounded-2xl transition-all disabled:opacity-50 flex items-center justify-center font-black"
              >
                <span className="hidden md:inline mr-2">PROCESS</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
            <p className="text-center text-[10px] text-slate-600 mt-4 uppercase tracking-[0.3em]">Encrypted Session • NexusCraft Systems Intelligence Layer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantPage;

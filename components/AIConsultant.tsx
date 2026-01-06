
import React, { useState, useRef, useEffect } from 'react';
import { getProjectConsultation } from '../services/gemini';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hello! I'm the NexusCraft Architect. Tell me about your software idea, and I'll give you a professional architecture recommendation." }
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
    <section id="consultant" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Interactive AI Consultation</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Don't know where to start? Our custom-trained AI Architect can help you brainstorm your tech stack, estimate complexity, and envision your project's roadmap. It's like having a CTO in your pocket.
            </p>
            <ul className="space-y-4">
              {['Get instant tech stack recommendations', 'Understand project complexity', 'Draft initial roadmaps'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <span className="text-blue-500 text-xl font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
              <div className="bg-slate-900 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-sm uppercase tracking-wider text-slate-400">Project Architect AI</span>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl px-5 py-3 ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-100 rounded-tl-none border border-white/5'}`}>
                      <p className="text-sm md:text-base whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800 text-slate-100 rounded-2xl rounded-tl-none px-5 py-3 border border-white/5 italic text-sm animate-pulse">
                      Analyzing requirements...
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-4 bg-slate-900/50 border-t border-white/10 flex gap-2">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g., I want to build a real-time analytics dashboard..."
                  className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-xl transition-colors disabled:opacity-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;

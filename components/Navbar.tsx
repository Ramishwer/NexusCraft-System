
import React, { useState, useEffect } from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companySubItems: { id: View; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'mission', label: 'Mission, Vision and Values' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'faq', label: 'FAQ' },
  ];

  const servicesSubItems: { id: View; label: string }[] = [
    { id: 'software-dev', label: 'Software Development' },
    { id: 'web-dev', label: 'Website Development' },
    { id: 'mobile-dev', label: 'Mobile App Development' },
    { id: 'blockchain-dev', label: 'Blockchain Development' },
    { id: 'uiux-design', label: 'UI/UX & Graphics Designing' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
  ];

  const mainNavItems: { id: View; label: string; dropdownItems?: { id: View; label: string }[] }[] = [
    { id: 'home', label: 'Home' },
    { id: 'company', label: 'Company', dropdownItems: companySubItems },
    { id: 'services', label: 'Services', dropdownItems: servicesSubItems },
    { id: 'industries', label: 'Industries' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'casestudies', label: 'Case Studies' },
    { id: 'blog', label: 'Blog' },
    { id: 'consultant', label: 'AI Consultant' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (view: View) => {
    onNavigate(view);
    setIsMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const isViewActive = (id: View) => {
    if (currentView === id) return true;
    const item = mainNavItems.find(n => n.id === id);
    if (item?.dropdownItems?.some(sub => sub.id === currentView)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'bg-slate-950/90 backdrop-blur-xl py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer z-50" 
          onClick={() => handleNavClick('home')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">N</div>
          <span className="text-xl font-bold tracking-tighter">NexusCraft</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden xl:flex gap-6 text-[11px] 2xl:text-[13px] font-bold uppercase tracking-wider text-slate-400">
          {mainNavItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group h-full py-2"
              onMouseEnter={() => item.dropdownItems && setActiveDropdown(item.id)}
              onMouseLeave={() => item.dropdownItems && setActiveDropdown(null)}
            >
              <button 
                onClick={() => !item.dropdownItems && handleNavClick(item.id)}
                className={`transition-all hover:text-blue-400 px-1 flex items-center gap-1 ${isViewActive(item.id) ? 'text-blue-400' : ''}`}
              >
                {item.label}
                {item.dropdownItems && (
                  <svg className={`w-3 h-3 transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                )}
              </button>
              
              {item.dropdownItems && (
                <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${activeDropdown === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                  <div className="bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-4 w-64 backdrop-blur-xl bg-opacity-80">
                    <div className="flex flex-col gap-1">
                      {item.dropdownItems.map(sub => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(sub.id)}
                          className={`text-left px-4 py-3 rounded-xl transition-all hover:bg-white/5 hover:text-blue-400 text-[12px] font-bold tracking-wide ${currentView === sub.id ? 'text-blue-400 bg-white/5' : 'text-slate-400'}`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden lg:block bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95">
            Get Started
          </button>
          
          {/* Mobile Toggle */}
          <button 
            className="xl:hidden z-50 p-2 text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-950 z-40 flex flex-col items-center justify-start pt-32 gap-6 transition-transform duration-500 xl:hidden overflow-y-auto ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {mainNavItems.map((item) => (
          <div key={item.id} className="w-full flex flex-col items-center">
            {item.dropdownItems ? (
              <div className="w-full flex flex-col items-center gap-4 py-4">
                <span className="text-sm font-black text-slate-500 uppercase tracking-[0.3em]">{item.label}</span>
                {item.dropdownItems.map(sub => (
                  <button 
                    key={sub.id}
                    onClick={() => handleNavClick(sub.id)}
                    className={`text-2xl font-black uppercase tracking-widest ${currentView === sub.id ? 'text-blue-500' : 'text-slate-400'}`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            ) : (
              <button 
                onClick={() => handleNavClick(item.id)}
                className={`text-2xl font-black uppercase tracking-widest ${currentView === item.id ? 'text-blue-500' : 'text-slate-400'}`}
              >
                {item.label}
              </button>
            )}
          </div>
        ))}
        <button className="mt-8 mb-12 bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest">
          Start a Project
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

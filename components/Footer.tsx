
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center font-bold">N</div>
              <span className="text-xl font-bold tracking-tight">NexusCraft</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Designing and developing the next generation of digital infrastructure. Based in the future.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-6">Solutions</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">AI Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Migrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UX Strategy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media Kit</a></li>
            </ul>
          </div>

          <div id="contact">
            <h5 className="font-bold mb-6">Connect</h5>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@nexuscraft.systems" className="text-blue-400 hover:underline">hello@nexuscraft.systems</a>
              <p className="text-slate-400 text-sm leading-relaxed">
                123 Innovation Drive<br />
                San Francisco, CA 94103
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2024 NexusCraft Systems LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

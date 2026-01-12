
import React from 'react';
import { Zap } from 'lucide-react';

interface FooterProps {
  onLegalClick: (type: 'tos' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  const logoSrc = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23000000'/%3E%3Cpath d='M50 10 A40 40 0 1 1 10 50' stroke='white' stroke-width='12' fill='none' opacity='0.9'/%3E%3Cpath d='M10 50 A40 40 0 0 1 50 10' stroke='%2339FF14' stroke-width='12' fill='none'/%3E%3C/svg%3E";

  return (
    <footer className="py-24 bg-black border-t border-white/5 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-black">
               <img 
                src={logoSrc}
                alt="Square" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-white uppercase font-geist">Square</span>
          </div>
          <div className="flex gap-10 text-[11px] font-bold text-white/30 tracking-[0.2em] uppercase">
            <button onClick={() => onLegalClick('privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy</button>
            <button onClick={() => onLegalClick('tos')} className="hover:text-white transition-colors cursor-pointer">Terms</button>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8 text-[11px] font-bold text-white/10 tracking-[0.25em] uppercase">
          <p>© 2025 SQUARE. SIMPLE TRACKING.</p>
          <div className="flex items-center gap-4 px-5 py-2.5 bg-white/[0.02] rounded-full border border-white/5 text-white/30">
             <Zap className="w-3.5 h-3.5 text-white/20" />
             <span>~30MS LATENCY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

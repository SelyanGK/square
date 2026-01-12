
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const logoSrc = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23000000'/%3E%3Cpath d='M50 10 A40 40 0 1 1 10 50' stroke='white' stroke-width='12' fill='none' opacity='0.9'/%3E%3Cpath d='M10 50 A40 40 0 0 1 50 10' stroke='%2339FF14' stroke-width='12' fill='none'/%3E%3C/svg%3E";
  const inviteLink = "https://discord.com/oauth2/authorize?client_id=1459901325595640082&permissions=4503599627979936&integration_type=0&scope=bot+applications.commands";

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl text-center flex flex-col items-center">
        
        {/* Real Bot Image */}
        <div className="relative mb-10 animate-in fade-in zoom-in duration-1000">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-white/5 bg-black relative z-10 shadow-2xl">
             <img 
              src={logoSrc}
              alt="Square Bot" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Subtle glow behind */}
          <div className="absolute inset-0 bg-[#39FF14]/20 blur-3xl rounded-full scale-110 z-0"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[11px] font-medium text-white/40 tracking-widest uppercase">
            ~30ms Latency
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[11px] font-medium text-white/40 tracking-widest uppercase">
            Zero Configuration
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-[-0.04em] leading-[1] text-white font-geist">
          See who <br />
          <span className="text-white/30">invited who.</span>
        </h1>

        <p className="max-w-xl mx-auto text-white/50 text-lg md:text-xl mb-14 font-medium leading-relaxed">
          The most accurate invite tracker for modern servers. Square provides real-time insights with high-performance detection and smart filtering.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm sm:max-w-none">
          <a 
            href={inviteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-5 bg-white text-black font-extrabold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group active:scale-[0.98] shadow-2xl shadow-white/5"
          >
            Add Square
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

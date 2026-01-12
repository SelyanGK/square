
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const logoSrc = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23000000'/%3E%3Cpath d='M50 10 A40 40 0 1 1 10 50' stroke='white' stroke-width='12' fill='none' opacity='0.9'/%3E%3Cpath d='M10 50 A40 40 0 0 1 50 10' stroke='%2339FF14' stroke-width='12' fill='none'/%3E%3C/svg%3E";
  const inviteLink = "https://discord.com/oauth2/authorize?client_id=1459901325595640082&permissions=4503599627979936&integration_type=0&scope=bot+applications.commands";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-black/60 backdrop-blur-2xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-black">
             <img 
              src={logoSrc}
              alt="Square" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-white uppercase font-geist">Square</span>
        </div>

        <div>
          <a 
            href={inviteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white text-black text-[12px] font-bold rounded-full hover:bg-gray-100 transition-all active:scale-95 shadow-lg shadow-white/5 block"
          >
            Add to Discord
          </a>
        </div>
      </div>
    </nav>
  );
};

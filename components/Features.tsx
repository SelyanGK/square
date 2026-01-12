
import React from 'react';
import { Search, Calculator, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 flex justify-center">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 place-items-stretch">
          
          {/* Card 1: Identify Inviters */}
          <div className="bento-card p-8 lg:p-10 flex flex-col items-start w-full bg-gradient-to-br from-[#39FF14]/[0.03] to-transparent border-[#39FF14]/5">
            <div className="w-12 h-12 bg-[#39FF14]/10 rounded-2xl flex items-center justify-center text-[#39FF14] mb-8 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Identify Inviters</h3>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              Instantly see who invited a specific user to your server with a single, lightning-fast command.
            </p>
          </div>

          {/* Card 2: Manage Counts */}
          <div className="bento-card p-8 lg:p-10 flex flex-col items-start w-full bg-gradient-to-t from-[#39FF14]/[0.02] to-transparent border-[#39FF14]/5">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/70 mb-8">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Manage Counts</h3>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              Add bonus invites, remove fake ones, or reset counts for specific users or the entire server.
            </p>
          </div>

          {/* Card 3: Accurate Detection */}
          <div className="bento-card p-8 lg:p-10 flex flex-col items-start w-full bg-gradient-to-bl from-[#39FF14]/[0.04] to-transparent border-[#39FF14]/10">
            <div className="w-12 h-12 bg-[#39FF14]/20 rounded-2xl flex items-center justify-center text-[#39FF14] mb-8 shadow-[0_0_20px_rgba(57,255,20,0.05)]">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              Accurate Detection
            </h3>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              Reliable tracking that ignores manipulation attempts and rejoins, giving you clean data you can trust.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

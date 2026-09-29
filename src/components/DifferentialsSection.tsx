import React from 'react';
import { Heart, MessageCircle, ShieldCheck, Scissors, Car, Star, CheckCircle2, Sparkles } from 'lucide-react';
import { siteData } from '@/src/data/siteData';

export const DifferentialsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Heart,
    MessageCircle,
    ShieldCheck,
    Scissors,
    Car,
    Star,
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Porquê Escolher a Nossa Hospedagem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-4">
            Diferenciais de Excelência para o Seu Cão
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Priorizamos o conforto emocional, a segurança em cada interação e a transparência absoluta com os tutores através de fotos e vídeos diários.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteData.differentials.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-7 hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-300 group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

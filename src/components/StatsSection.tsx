import React, { useEffect, useState } from 'react';
import { Star, Heart, Home, ShieldCheck } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxBg = (scrollY - 500) * 0.15;

  const stats = [
    {
      metric: '5.0 / 5.0',
      label: 'Nota Máxima no Google',
      description: '12 avaliações 100% 5 estrelas em Lisboa',
      icon: Star,
      iconColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      metric: 'Supervisão',
      label: 'Cuidado Contínuo & Carinho',
      description: 'Acompanhamento diário sem estresse ou gaiolas',
      icon: Heart,
      iconColor: 'text-rose-400',
      bgColor: 'bg-rose-500/10 border-rose-500/20',
    },
    {
      metric: '4 em 1',
      label: 'Solução Completa Pet',
      description: 'Hospedagem, Creche, Banho e Táxi Pet',
      icon: Home,
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      metric: 'No WhatsApp',
      label: 'Fotos & Vídeos Diários',
      description: 'Atualizações para sua tranquilidade',
      icon: ShieldCheck,
      iconColor: 'text-teal-400',
      bgColor: 'bg-teal-500/10 border-teal-500/20',
    },
  ];

  return (
    <section
      id="estatisticas"
      className="relative py-16 sm:py-20 bg-slate-950 overflow-hidden border-y border-slate-800/80"
    >
      {/* Background Parallax Subtle Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.25) 0%, transparent 70%)`,
          transform: `translateY(${parallaxBg}px)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/60 backdrop-blur-md border border-slate-800/90 rounded-2xl p-6 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-300 group shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.bgColor}`}>
                    <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1.5 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {item.metric}
                </div>

                <div className="text-sm font-semibold text-slate-200 mb-1">
                  {item.label}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
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

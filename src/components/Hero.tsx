import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, MapPin, Star, ShieldCheck, Home } from 'lucide-react';
import { siteData } from '@/src/data/siteData';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real JS Parallax calculation for background image
  const parallaxOffset = scrollY * 0.4;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-[#090d16]"
    >
      {/* Background Image with Real JS Parallax */}
      <div
        className="absolute inset-0 w-full h-[125%] -top-[12%] pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(1.05)`,
          willChange: 'transform',
        }}
      >
        <img
          src={siteData.images.hero}
          alt="Cão feliz hospedado e bem cuidado no Lisboa Bichos e Caprichos"
          className="w-full h-full object-cover object-center filter brightness-90"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Dark Multi-layer Gradient Overlay for Ultra-Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-slate-950/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(5,150,105,0.18),transparent_55%)]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left py-12 md:py-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
          <Home className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="whitespace-nowrap">Hotel Pet, Creche Daycare &amp; Cuidados em Lisboa</span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-300">Alto de São João</span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 max-w-4xl">
          Hospedagem Canina, Creche Daycare, Banho e Transporte{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
            Para o Seu Patudo em Lisboa
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl font-normal leading-relaxed">
          O hotel canino onde o seu cão dorme confortável, gasta energia na creche diurna, recebe banho e tosquia profissional e conta com serviço de táxi pet porta-a-porta na Parada Alto de São João.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10 max-w-md sm:max-w-none">
          <a
            href={siteData.company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-950/60 hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5 text-emerald-100" />
            <span>Reservar Vaga no WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onOpenBookingModal}
            className="inline-flex items-center justify-center gap-2 px-5 py-4 text-base font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/40 rounded-xl backdrop-blur-md transition-all whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Simulador de Estadia &amp; Vaga</span>
          </button>

          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-medium text-slate-400 hover:text-white transition-colors whitespace-nowrap"
          >
            <span>Ver Nossos 4 Serviços</span>
          </a>
        </div>

        {/* Trust Badges - Natural Editorial Proof */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-white ml-1">5.0</span>
            <span className="text-slate-400">(12 avaliações no Google)</span>
          </div>

          <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-600" />

          <div className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Fotos &amp; Vídeos Diários no WhatsApp</span>
          </div>

          <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-600" />

          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Parada Alto de São João, 1900-051 Lisboa</span>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <a
        href="#estatisticas"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors group cursor-pointer"
        aria-label="Rolar para estatísticas"
      >
        <span className="text-[11px] tracking-wider uppercase font-medium text-slate-400 group-hover:text-emerald-300">
          Explorar
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 group-hover:border-emerald-500/60 flex items-start justify-center p-1 transition-colors">
          <div className="w-1.5 h-2.5 bg-emerald-400 rounded-full animate-bounce mt-1" />
        </div>
      </a>
    </section>
  );
};

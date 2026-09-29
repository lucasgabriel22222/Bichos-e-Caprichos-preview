import React from 'react';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';
import { siteData } from '@/src/data/siteData';

export const SocialProofSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 sm:py-28 bg-[#090d16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google 5.0 prominence */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Avaliações Reais dos Tutores</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-4">
            O Que Dizem os Tutores
          </h2>

          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-white">5.0 / 5.0</span>
            <span className="text-slate-400 text-sm">no Google</span>
          </div>

          <p className="text-base text-slate-300">
            Total tranquilidade para quem viaja ou trabalha: veja o relato de quem confia o seu patudo ao Lisboa Bichos e Caprichos.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {siteData.testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 shadow-md relative group"
            >
              <div>
                {/* Top: 5 Stars + Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle className="w-3 h-3" />
                    Google
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author & Service */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {review.serviceMention}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 font-bold text-xs uppercase">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info link to Google reviews */}
        <div className="text-center">
          <a
            href={siteData.company.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <span>Ver perfil e localização no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

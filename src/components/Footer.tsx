import React from 'react';
import { Scissors, MapPin, Phone, Clock, MessageCircle, Instagram } from 'lucide-react';
import { siteData } from '@/src/data/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Scissors className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-base tracking-tight text-white uppercase">
                {siteData.company.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Banho, tosquia, alimentação de qualidade e cuidados especiais para o seu patudo em Lisboa.
            </p>

            <div className="pt-2">
              <a
                href={siteData.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-emerald-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-emerald-400 transition-colors">
                  Serviços de Estética Pet
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-emerald-400 transition-colors">
                  Diferenciais &amp; Cuidados
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-emerald-400 transition-colors">
                  Avaliações dos Tutores (Google)
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-emerald-400 transition-colors">
                  Localização &amp; Horário
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Contacto &amp; Localização
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{siteData.company.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${siteData.company.phoneRaw}`} className="hover:text-white transition-colors">
                  {siteData.company.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p>{siteData.company.hoursSchedule}</p>
                  <p className="text-slate-400">{siteData.company.sundaySchedule}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Business & Social */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Lisboa Bichos e Caprichos
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Espaço de estética animal dedicado ao bem-estar, beleza e saúde do seu cão ou gato no Alto de São João.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteData.company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteData.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {siteData.company.name}. Todos os direitos reservados.
          </p>
          <p className="text-slate-400">
            Parada Alto de São João, 1900-051 Lisboa, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
};

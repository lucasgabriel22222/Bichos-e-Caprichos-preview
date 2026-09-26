import React from 'react';
import { MapPin, Phone, Clock, CreditCard, ExternalLink, MessageCircle, Navigation } from 'lucide-react';
import { siteData } from '@/src/data/siteData';
import { getStoreStatus } from '@/src/utils/status';

export const LocationScheduleSection: React.FC = () => {
  const status = getStoreStatus();

  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Fácil Acesso em Lisboa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-4">
            Visite-nos ou Faça a Sua Marcação
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Estamos convenientemente localizados na Parada Alto de São João. Venha visitar-nos ou contacte-nos diretamente.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Practical Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
              {/* Live Status Indicator */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    {status.isOpen ? (
                      <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                      </>
                    ) : (
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
                    )}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      status.isOpen ? 'text-emerald-400' : 'text-amber-400'
                    }`}
                  >
                    {status.statusText}
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  {status.nextOpenText}
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    Endereço Completo
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {siteData.company.address}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Código Postal: {siteData.company.postalCode}
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    Telefone &amp; WhatsApp
                  </h4>
                  <a
                    href={`tel:${siteData.company.phoneRaw}`}
                    className="text-sm text-emerald-400 hover:text-emerald-300 font-semibold block transition-colors"
                  >
                    {siteData.company.phoneFormatted}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Atendimento ágil para marcações e esclarecimento de dúvidas
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-sm text-slate-300">
                    {siteData.company.hoursSchedule}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {siteData.company.sundaySchedule}
                  </p>
                </div>
              </div>

              {/* Payments */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    Formas de Pagamento
                  </h4>
                  <p className="text-sm text-slate-300">
                    MB WAY, Cartões de Débito/Crédito e Numerário
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={siteData.company.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors text-center"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  <span>Como Chegar via Google Maps</span>
                </a>

                <a
                  href={siteData.company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Embedded Google Maps */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl relative">
              <iframe
                title="Localização do Lisboa Bichos e Caprichos na Parada Alto de São João"
                src={siteData.company.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '100%' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px] grayscale-[20%] contrast-110"
              />
              <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800 shadow-lg text-xs font-medium text-slate-200 pointer-events-none">
                <span className="font-semibold text-white">Lisboa Bichos e Caprichos</span>
                <span className="block text-[11px] text-emerald-400">Alto de São João · Lisboa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

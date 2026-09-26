import React, { useState } from 'react';
import { MessageCircle, Check, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { siteData, ServiceItem } from '@/src/data/siteData';

interface ServicesSectionProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

type CategoryFilter = 'todos' | 'banho_tosquia' | 'alimentacao' | 'acessorios' | 'higiene';

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookingModal }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos');

  const filterTabs = [
    { id: 'todos', label: 'Todos os Cuidados' },
    { id: 'banho_tosquia', label: 'Banho & Tosquia' },
    { id: 'higiene', label: 'Higiene & Bem-Estar' },
    { id: 'alimentacao', label: 'Alimentação' },
    { id: 'acessorios', label: 'Acessórios' },
  ];

  const filteredServices = siteData.services.filter((service) => {
    if (activeCategory === 'todos') return true;
    return service.category === activeCategory;
  });

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Excelência em Cuidados Pet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-4">
            Serviços &amp; Produtos em Destaque
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Higienização, tosquias personalizadas, cosmética especializada e nutrição de primeira linha para cães e gatos em Lisboa.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Buttons) */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/60'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of Service / Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {filteredServices.map((service) => {
            const whatsappLink = `https://wa.me/351939487333?text=${encodeURIComponent(
              service.whatsappMessage
            )}`;

            return (
              <div
                key={service.id}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20 group"
              >
                <div>
                  {/* Card Image Header with Zoom Effect */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-800">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        {service.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 flex items-center justify-between">
                      <span className="font-medium text-slate-200">
                        {service.categoryLabel}
                      </span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        Disponível
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Service Highlights / Bullet Points */}
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="px-6 pb-6 pt-0 flex flex-col sm:flex-row gap-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Saber Mais no WhatsApp</span>
                  </a>

                  {service.category === 'banho_tosquia' && (
                    <button
                      type="button"
                      onClick={() => onOpenBookingModal(service.name)}
                      className="px-3 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                      title="Agendar este serviço"
                    >
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>Agendar</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner with Fast Interactive Simulator Prompt */}
        <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-heading font-bold text-white mb-1">
              Quer marcar com dia e horário exato para o seu patudo?
            </h4>
            <p className="text-sm text-slate-300">
              Utilize o nosso assistente de marcação direta e receba a confirmação no WhatsApp em poucos minutos.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenBookingModal()}
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-slate-900" />
            <span>Abrir Simulador de Agendamento</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

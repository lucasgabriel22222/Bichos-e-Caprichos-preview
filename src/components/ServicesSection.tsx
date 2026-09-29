import React, { useState } from 'react';
import { MessageCircle, Check, Sparkles, Calendar, ChevronRight, Home, Sun, Scissors, Car } from 'lucide-react';
import { siteData, ServiceItem } from '@/src/data/siteData';

interface ServicesSectionProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

type CategoryFilter = 'todos' | 'hospedagem' | 'creche' | 'banho_tosquia' | 'transporte';

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookingModal }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos');

  const filterTabs = [
    { id: 'todos', label: 'Todos os 4 Serviços', icon: Sparkles },
    { id: 'hospedagem', label: 'Hospedagem (Hotel)', icon: Home },
    { id: 'creche', label: 'Creche (Daycare)', icon: Sun },
    { id: 'banho_tosquia', label: 'Banho & Tosquia', icon: Scissors },
    { id: 'transporte', label: 'Transporte (Táxi Pet)', icon: Car },
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
            <span>Estrutura Completa de Cuidados Caninos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-4">
            Nossos 4 Serviços Principais
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Hospedagem segura, creche com recreação diurna, estética e banho profissional e serviço de transporte porta-a-porta na Parada Alto de São João em Lisboa.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Buttons) */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/60'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of 4 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
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
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-800">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        {service.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-xs text-slate-300 flex items-center justify-between">
                      <span className="font-semibold text-slate-200">
                        {service.categoryLabel}
                      </span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        Vagas &amp; Reservas Disponíveis
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Service Highlights / Bullet Points */}
                    <ul className="space-y-2.5 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="px-6 pb-6 pt-0 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl transition-all shadow-md shadow-emerald-950/40"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Saber Mais no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenBookingModal(service.name)}
                    className="px-4 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Reservar Vaga</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner with Fast Interactive Simulator Prompt */}
        <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-heading font-bold text-white mb-1">
              Precisa de Hospedagem, Creche ou Táxi Pet para o seu cão?
            </h4>
            <p className="text-sm text-slate-300">
              Personalize o período de estadia, porte e preferências para receber a confirmação de vaga pelo WhatsApp.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenBookingModal()}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-slate-900" />
            <span>Simulador de Estadia &amp; Vagas</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

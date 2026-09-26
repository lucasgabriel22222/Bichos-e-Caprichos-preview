import React from 'react';
import { MessageCircle, Scissors, Phone } from 'lucide-react';
import { siteData } from '@/src/data/siteData';

interface FinalCtaSectionProps {
  onOpenBookingModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#090d16] via-slate-950 to-slate-950 relative overflow-hidden border-t border-slate-800/80">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-6">
          <Scissors className="w-7 h-7" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
          O seu patudo precisa de um banho ou tosquia?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Fale connosco pelo WhatsApp e agende o horário ideal para o seu animal de estimação no Lisboa Bichos e Caprichos. Garantimos carinho, higiene e pontualidade.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <a
            href={siteData.company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-xl shadow-emerald-950/80 hover:shadow-emerald-600/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Marcar pelo WhatsApp Agora</span>
          </a>

          <button
            type="button"
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all cursor-pointer"
          >
            <span>Simular Agendamento</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-xs text-slate-400">
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>Atendimento direto pelo telefone {siteData.company.phoneFormatted}</span>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteData } from '@/src/data/siteData';

export const FloatingWhatsapp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3"
    >
      {/* Tooltip on hover / subtle nudge */}
      <div
        className={`bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-xl border border-slate-700 shadow-xl transition-all duration-300 pointer-events-none hidden sm:block ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="whitespace-nowrap">Faça a sua marcação aqui!</span>
      </div>

      {/* Floating Button */}
      <a
        href={siteData.company.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-950/80 transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Abrir conversa no WhatsApp com Lisboa Bichos e Caprichos"
      >
        {/* Pulse Aura */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 text-white transition-transform group-hover:rotate-6" />
      </a>
    </aside>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from '@/src/components/Navbar';
import { Hero } from '@/src/components/Hero';
import { StatsSection } from '@/src/components/StatsSection';
import { ServicesSection } from '@/src/components/ServicesSection';
import { DifferentialsSection } from '@/src/components/DifferentialsSection';
import { SocialProofSection } from '@/src/components/SocialProofSection';
import { LocationScheduleSection } from '@/src/components/LocationScheduleSection';
import { FaqSection } from '@/src/components/FaqSection';
import { FinalCtaSection } from '@/src/components/FinalCtaSection';
import { Footer } from '@/src/components/Footer';
import { FloatingWhatsapp } from '@/src/components/FloatingWhatsapp';
import { BookingModal } from '@/src/components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>(
    'Banho & Tosquia Especializada'
  );

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForModal(serviceName);
    }
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* 1. NAVBAR (Header Fixo) */}
      <Navbar />

      <main className="flex-1">
        {/* 2. HERO (Seção Principal) */}
        <Hero onOpenBookingModal={() => handleOpenBooking()} />

        {/* 3. SEÇÃO DE ESTATÍSTICAS E DESTAQUES (BANNER PARALLAX) */}
        <StatsSection />

        {/* 4. SEÇÃO SERVIÇOS & CATEGORIAS */}
        <ServicesSection onOpenBookingModal={handleOpenBooking} />

        {/* 5. SEÇÃO DIFERENCIAIS */}
        <DifferentialsSection />

        {/* 6. SEÇÃO DE PROVA SOCIAL (AVALIAÇÕES DO GOOGLE) */}
        <SocialProofSection />

        {/* 7. SEÇÃO DE LOCALIZAÇÃO & HORÁRIO */}
        <LocationScheduleSection />

        {/* 8. SEÇÃO FAQ (PERGUNTAS FREQUENTES) */}
        <FaqSection />

        {/* 9. CTA FINAL (CHAMADA PARA AÇÃO DIRETA) */}
        <FinalCtaSection onOpenBookingModal={() => handleOpenBooking()} />
      </main>

      {/* 10. FOOTER (RODAPÉ) */}
      <Footer />

      {/* 11. BOTÃO FLUTUANTE DO WHATSAPP */}
      <FloatingWhatsapp />

      {/* Interactive Booking Assistant Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialService={selectedServiceForModal}
      />
    </div>
  );
}

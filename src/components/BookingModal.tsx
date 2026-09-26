import React, { useState } from 'react';
import { X, Calendar, Clock, MessageCircle, Dog, Cat, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteData } from '@/src/data/siteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Banho & Tosquia Especializada',
}) => {
  const [petType, setPetType] = useState<'Cão' | 'Gato'>('Cão');
  const [petSize, setPetSize] = useState<'Pequeno' | 'Médio' | 'Grande'>('Pequeno');
  const [service, setService] = useState<string>(initialService);
  const [preferredDay, setPreferredDay] = useState<string>('Segunda a Sexta');
  const [preferredPeriod, setPreferredPeriod] = useState<string>('Manhã (09h - 13h)');
  const [petName, setPetName] = useState<string>('');

  if (!isOpen) return null;

  const handleSendBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Lisboa Bichos e Caprichos! Gostaria de marcar um agendamento:
- Patudo: ${petType} (${petSize}) ${petName ? `chamado "${petName}"` : ''}
- Serviço pretendido: ${service}
- Preferência de dia: ${preferredDay}
- Período: ${preferredPeriod}

Poderiam confirmar a disponibilidade de horário? Obrigado!`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/351939487333?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Marcação Rápida no WhatsApp</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
          Agendar Banho ou Tosquia
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          Personalize as informações do seu patudo para receber uma confirmação rápida no WhatsApp.
        </p>

        <form onSubmit={handleSendBooking} className="space-y-4">
          {/* Tipo de Animal */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Tipo de Animal
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPetType('Cão')}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-sm font-medium transition-all ${
                  petType === 'Cão'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Dog className="w-4 h-4" />
                <span>Cão</span>
              </button>
              <button
                type="button"
                onClick={() => setPetType('Gato')}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-sm font-medium transition-all ${
                  petType === 'Gato'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Cat className="w-4 h-4" />
                <span>Gato</span>
              </button>
            </div>
          </div>

          {/* Nome do Animal (Opcional) */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Nome do Patudo (Opcional)
            </label>
            <input
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Ex: Bobby, Mia, Rex..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          {/* Porte do Animal */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Porte do Animal
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Pequeno', sub: 'Até 10kg' },
                { label: 'Médio', sub: '10 a 25kg' },
                { label: 'Grande', sub: '+25kg' },
              ].map((size) => (
                <button
                  key={size.label}
                  type="button"
                  onClick={() => setPetSize(size.label as any)}
                  className={`flex flex-col items-center justify-center py-2 px-2 rounded-xl border text-xs font-medium transition-all ${
                    petSize === size.label
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                      : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className="font-semibold">{size.label}</span>
                  <span className="text-[10px] text-slate-400">{size.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Serviço Pretendido */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Serviço Pretendido
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            >
              <option value="Banho & Hidratação de Pelagem">Banho &amp; Hidratação de Pelagem</option>
              <option value="Tosquia à Tesoura & Máquina">Tosquia à Tesoura &amp; Máquina</option>
              <option value="Tosquia Higiénica">Tosquia Higiénica</option>
              <option value="Corte de Unhas e Limpeza de Ouvidos">Corte de Unhas &amp; Limpeza de Ouvidos</option>
              <option value="Banho e Tosquia Completa">Banho e Tosquia Completa (Combo)</option>
              <option value="Aconselhamento Nutricional / Rações">Aconselhamento Nutricional / Rações</option>
            </select>
          </div>

          {/* Dia & Período */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Preferência de Dia
              </label>
              <select
                value={preferredDay}
                onChange={(e) => setPreferredDay(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500"
              >
                <option value="Segunda-feira">Segunda-feira</option>
                <option value="Terça-feira">Terça-feira</option>
                <option value="Quarta-feira">Quarta-feira</option>
                <option value="Quinta-feira">Quinta-feira</option>
                <option value="Sexta-feira">Sexta-feira</option>
                <option value="Sábado">Sábado</option>
                <option value="O mais breve possível">O mais breve possível</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Período Ideal
              </label>
              <select
                value={preferredPeriod}
                onChange={(e) => setPreferredPeriod(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500"
              >
                <option value="Manhã (09h00 - 13h00)">Manhã (09h00 - 13h00)</option>
                <option value="Tarde (13h00 - 19h00)">Tarde (13h00 - 19h00)</option>
                <option value="Qualquer horário">Qualquer horário</option>
              </select>
            </div>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 px-5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-950/60 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Confirmar Agendamento no WhatsApp</span>
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Resposta rápida durante o horário de funcionamento (09h–19h)</span>
        </div>
      </div>
    </div>
  );
};

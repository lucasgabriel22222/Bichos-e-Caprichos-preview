import React, { useState } from 'react';
import { X, Calendar, Clock, MessageCircle, Dog, Sparkles, CheckCircle2, Car, Home, Sun, Scissors } from 'lucide-react';
import { siteData } from '@/src/data/siteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Hospedagem (Hotel Pet / Pernoite)',
}) => {
  const [service, setService] = useState<string>(initialService);
  const [petBreed, setPetBreed] = useState<string>('');
  const [petName, setPetName] = useState<string>('');
  const [petSize, setPetSize] = useState<'Pequeno' | 'Médio' | 'Grande'>('Médio');
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [needsTaxi, setNeedsTaxi] = useState<boolean>(false);
  const [needsBath, setNeedsBath] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSendBooking = (e: React.FormEvent) => {
    e.preventDefault();

    let datesText = '';
    if (service.includes('Hospedagem')) {
      datesText = `- Período pretendido: De ${checkInDate || 'A definir'} até ${checkOutDate || 'A definir'}`;
    } else if (service.includes('Creche')) {
      datesText = `- Início pretendido para Creche: ${checkInDate || 'O mais breve possível'}`;
    } else {
      datesText = `- Data preferencial: ${checkInDate || 'A combinar'}`;
    }

    const additionalNotes = [
      needsTaxi ? 'Necessita de Táxi Pet (transporte levar/buscar)' : '',
      needsBath ? 'Pretende Banho e Tosquia incluído' : '',
    ]
      .filter(Boolean)
      .join(', ');

    const text = `Olá Lisboa Bichos e Caprichos! Gostaria de informações e reserva de vaga:
- Serviço: ${service}
- Cão: ${petName ? `"${petName}"` : 'Patudo'} (Porte: ${petSize}${petBreed ? `, Raça: ${petBreed}` : ''})
${datesText}
${additionalNotes ? `- Cuidados adicionais: ${additionalNotes}` : ''}

Poderiam confirmar a disponibilidade de vaga e valores? Muito obrigado!`;

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
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Reserva &amp; Orçamento Rápido no WhatsApp</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
          Simular Estadia &amp; Vaga Pet
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          Preencha os dados do seu cão para enviarmos disponibilidade imediata de hotel, creche ou transporte.
        </p>

        <form onSubmit={handleSendBooking} className="space-y-4">
          {/* Serviço Pretendido */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Serviço Principal
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Hospedagem (Hotel Pet)', icon: Home },
                { name: 'Creche (Daycare)', icon: Sun },
                { name: 'Banho e Tosquia', icon: Scissors },
                { name: 'Transporte (Táxi Pet)', icon: Car },
              ].map((item) => {
                const ItemIcon = item.icon;
                const isSelected = service.includes(item.name.slice(0, 8));
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setService(item.name)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <ItemIcon className="w-4 h-4 shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Nome e Raça do Cão */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Nome do Cão
              </label>
              <input
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                placeholder="Ex: Bobby, Thor, Luna..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Raça / Cruzamento
              </label>
              <input
                type="text"
                value={petBreed}
                onChange={(e) => setPetBreed(e.target.value)}
                placeholder="Ex: Labrador, SRD, Poodle..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Porte do Animal */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Porte do Cão
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
                  className={`flex flex-col items-center justify-center py-2 px-2 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
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

          {/* Datas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Data de Entrada / Check-in
              </label>
              <input
                type="text"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                placeholder="Ex: 15/10 ou Amanhã"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Data de Saída / Check-out
              </label>
              <input
                type="text"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                placeholder="Ex: 20/10 ou Diária"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Serviços Adicionais */}
          <div className="pt-2 border-t border-slate-800/80 space-y-2">
            <label className="block text-xs font-medium text-slate-300">
              Serviços Complementares
            </label>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <label className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-800 cursor-pointer flex-1">
                <input
                  type="checkbox"
                  checked={needsTaxi}
                  onChange={(e) => setNeedsTaxi(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>Incluir Táxi Pet (Buscar/Levar)</span>
              </label>

              <label className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-800 cursor-pointer flex-1">
                <input
                  type="checkbox"
                  checked={needsBath}
                  onChange={(e) => setNeedsBath(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>Banho antes do regresso</span>
              </label>
            </div>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 px-5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-950/60 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Consultar Disponibilidade no WhatsApp</span>
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Vagas limitadas para garantir o acompanhamento calmo e personalizado</span>
        </div>
      </div>
    </div>
  );
};

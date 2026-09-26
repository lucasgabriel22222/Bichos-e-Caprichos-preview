/**
 * Utility to calculate business open/closed status in Europe/Lisbon timezone.
 * Schedule: Monday to Saturday 09:00 - 19:00 (Lisbon Time)
 */
export function getStoreStatus(): {
  isOpen: boolean;
  statusText: string;
  nextOpenText: string;
} {
  try {
    const now = new Date();
    // Format to Lisbon local time
    const lisbonTimeString = now.toLocaleString('en-US', {
      timeZone: 'Europe/Lisbon',
      hour12: false,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    });

    // Parse weekday and hour
    const [weekday, time] = lisbonTimeString.split(', ');
    const [hourStr, minStr] = time.split(':');
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minStr, 10);
    const currentMinutes = hour * 60 + minute;

    const isSunday = weekday === 'Sun';
    const openMinutes = 9 * 60; // 09:00
    const closeMinutes = 19 * 60; // 19:00

    if (!isSunday && currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      return {
        isOpen: true,
        statusText: 'Aberto Agora',
        nextOpenText: `Encerra hoje às 19h00`,
      };
    }

    if (isSunday) {
      return {
        isOpen: false,
        statusText: 'Encerrado Hoje',
        nextOpenText: 'Reabre segunda-feira às 09h00',
      };
    }

    if (currentMinutes < openMinutes) {
      return {
        isOpen: false,
        statusText: 'Encerrado',
        nextOpenText: 'Abre hoje às 09h00',
      };
    }

    return {
      isOpen: false,
      statusText: 'Encerrado Agora',
      nextOpenText: 'Reabre amanhã às 09h00',
    };
  } catch {
    return {
      isOpen: true,
      statusText: 'Seg a Sáb 09h–19h',
      nextOpenText: 'Atendimento via WhatsApp',
    };
  }
}

export function createWhatsAppLink(message: string): string {
  const phone = '351939487333';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

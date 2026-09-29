import heroImage from '@/src/assets/images/hero_pet_grooming_1790449480073.jpg';
import hotelPetImage from '@/src/assets/images/service_hotel_pet_1790706153980.jpg';
import daycareImage from '@/src/assets/images/service_daycare_creche_1790706164160.jpg';
import groomingImage from '@/src/assets/images/service_scissor_cut_1790449501711.jpg';
import taxiPetImage from '@/src/assets/images/service_taxi_pet_1790706175394.jpg';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'hospedagem' | 'creche' | 'banho_tosquia' | 'transporte';
  categoryLabel: string;
  badge: string;
  description: string;
  details: string[];
  image: string;
  whatsappMessage: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  serviceMention: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteData = {
  company: {
    name: 'Lisboa Bichos e Caprichos',
    shortName: 'Bichos e Caprichos',
    segment: 'Hospedagem Canina, Hotel Pet, Creche Daycare, Banho & Tosquia e Táxi Pet',
    tagline: 'Hospedagem canina, creche daycare, banho e tosquia e transporte seguro para o seu patudo em Lisboa',
    postalCode: '1900-051',
    address: 'Parada Alto de São João, 1900-051 Lisboa, Portugal',
    addressShort: 'Parada Alto de São João, Lisboa',
    phoneFormatted: '+351 939 487 333',
    phoneRaw: '351939487333',
    whatsappUrl: 'https://wa.me/351939487333?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Hospedagem%20e%20Creche%20no%20Lisboa%20Bichos%20e%20Caprichos.',
    hoursSchedule: 'Segunda a Sábado: 09h00 às 19h00',
    sundaySchedule: 'Domingo: Check-in/Check-out sob agendamento',
    googleRating: 5.0,
    googleReviewCount: 12,
    instagram: '@lisboabichosecaprichos',
    instagramUrl: 'https://www.instagram.com',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Parada+Alto+de+S%C3%A3o+Jo%C3%A3o+1900-051+Lisboa+Portugal',
    mapsEmbedUrl: 'https://maps.google.com/maps?q=Parada%20Alto%20de%20S%C3%A3o%20Jo%C3%A3o,%201900-051%20Lisboa,%20Portugal&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },

  images: {
    hero: heroImage,
    hotel: hotelPetImage,
    daycare: daycareImage,
    grooming: groomingImage,
    taxi: taxiPetImage,
  },

  stats: [
    {
      metric: '5.0 / 5.0',
      label: 'Nota Máxima no Google',
      description: '100% de satisfação com tutores em Lisboa',
    },
    {
      metric: 'Supervisão',
      label: 'Cuidado Contínuo & Carinho',
      description: 'Acompanhamento diário sem gaiolas frias',
    },
    {
      metric: '4 em 1',
      label: 'Solução Completa Pet',
      description: 'Hotel, Creche, Banho e Transporte Táxi',
    },
    {
      metric: 'No WhatsApp',
      label: 'Fotos & Relatórios Diários',
      description: 'Tranquilidade total para os tutores',
    },
  ],

  services: [
    {
      id: 'hospedagem-hotel-pet',
      name: 'Hospedagem (Hotel Pet / Pernoite)',
      category: 'hospedagem',
      categoryLabel: 'Hotel Pet & Pernoite',
      badge: 'Estadia Confortável',
      description: 'Acomodação acolhedora e segura para o seu patudo pernoitar enquanto viaja ou trabalha. Rotina equilibrada de passeios, descanso em caminhas ortopédicas e acompanhamento dedicado.',
      details: [
        'Dormitórios higienizados e climatizados',
        'Rotina de socialização diurna incluída',
        'Envio de fotografias e vídeos diários no WhatsApp',
        'Administração de medicação e alimentação personalizada',
      ],
      image: hotelPetImage,
      whatsappMessage: 'Olá! Gostaria de informações sobre a Hospedagem (Hotel Pet) para o meu cão no Lisboa Bichos e Caprichos.',
    },
    {
      id: 'creche-daycare',
      name: 'Creche (Daycare / Recreação de Dia)',
      category: 'creche',
      categoryLabel: 'Creche & Daycare',
      badge: 'Gasto de Energia & Socialização',
      description: 'O seu cão passa o dia a brincar, socializar e exercitar-se com supervisão constante. Ideal para evitar ansiedade de separação, tédio e comportamentos destrutivos em casa.',
      details: [
        'Atividades recreativas e estímulo cognitivo',
        'Separação por porte e compatibilidade comportamental',
        'Momentos de repouso programado',
        'Planos diários, semanais ou mensais flexíveis',
      ],
      image: daycareImage,
      whatsappMessage: 'Olá! Gostaria de saber mais sobre a Creche Daycare para o meu cão no Lisboa Bichos e Caprichos.',
    },
    {
      id: 'banho-tosquia',
      name: 'Banho e Tosquia Especializada',
      category: 'banho_tosquia',
      categoryLabel: 'Estética & Higiene',
      badge: 'Higiene & Bem-Estar',
      description: 'Serviço completo de estética e higiene animal com champôs dermatológicos de topo, tosquias à tesoura ou máquina, corte de unhas e limpeza auricular sem stresse.',
      details: [
        'Champôs hipoalergénicos e hidratação profunda',
        'Tosquia higiénica, comercial ou estilizada à tesoura',
        'Corte de unhas e higienização dos ouvidos',
        'Pode ser agendado avulso ou no check-out do hotel/creche',
      ],
      image: groomingImage,
      whatsappMessage: 'Olá! Gostaria de agendar Banho e Tosquia para o meu patudo no Lisboa Bichos e Caprichos.',
    },
    {
      id: 'transporte-taxi-pet',
      name: 'Transporte (Táxi Pet / Levar e Buscar)',
      category: 'transporte',
      categoryLabel: 'Transporte Seguro',
      badge: 'Conveniência Total',
      description: 'Serviço de recolha e entrega do seu patudo diretamente ao domicílio em Lisboa. Viagens seguras em veículo climatizado, com caixas e cintos de segurança homologados.',
      details: [
        'Recolha e entrega ao domicílio com pontualidade',
        'Viatura higienizada com ar condicionado',
        'Motorista com experiência em condução e manejo canino',
        'Conexão direta com a creche, hotel ou serviço de banho',
      ],
      image: taxiPetImage,
      whatsappMessage: 'Olá! Gostaria de solicitar informações sobre o serviço de Transporte Táxi Pet (levar e buscar) no Lisboa Bichos e Caprichos.',
    },
  ] as ServiceItem[],

  differentials: [
    {
      id: 'supervisao-atenta',
      icon: 'Heart',
      title: 'Supervisão Atenta & Ambiente Familiar',
      description: 'Espaço pensado para o bem-estar animal, com cuidadores dedicados, rotinas de descanso e atenção individual para cada patudo.',
    },
    {
      id: 'relatorios-diarios',
      icon: 'MessageCircle',
      title: 'Fotos e Vídeos Diários no WhatsApp',
      description: 'Mantenha-se informado em tempo real sobre as brincadeiras, refeições e momentos de repouso do seu cão.',
    },
    {
      id: 'socializacao-segura',
      icon: 'ShieldCheck',
      title: 'Socialização Controlada & Segura',
      description: 'Grupos divididos criteriosamente por porte, nível de energia e temperamento, garantindo interações saudáveis e sem conflitos.',
    },
    {
      id: 'cuidados-integrados',
      icon: 'Scissors',
      title: 'Banho & Tosquia no Local',
      description: 'O seu patudo pode regressar a casa cheiroso, tosquiado e banhado no final da sua estadia no hotel ou dia de creche.',
    },
    {
      id: 'transporte-porta-a-porta',
      icon: 'Car',
      title: 'Táxi Pet Porta a Porta em Lisboa',
      description: 'Buscamos e levamos o seu animal à sua porta com segurança, poupando tempo na sua rotina diária.',
    },
    {
      id: 'nota-maxima',
      icon: 'Star',
      title: 'Nota Máxima 5.0 no Google',
      description: 'Reconhecimento comprovado e 100% de satisfação dos tutores de Lisboa que confiam a nossa equipa com a sua família de quatro patas.',
    },
  ],

  testimonials: [
    {
      id: '1',
      name: 'Inês Silva',
      rating: 5,
      date: 'Avaliação Verificada no Google',
      comment: 'Deixei o meu cão na hospedagem durante as minhas férias e foi uma paz de espírito! Recebia fotos todos os dias, ele voltou feliz, calmo e ainda veio com um banho e tosquia impecáveis. Recomendo vivamente!',
      serviceMention: 'Hospedagem Canina & Banho',
    },
    {
      id: '2',
      name: 'Miguel Pereira',
      rating: 5,
      date: 'Avaliação Verificada no Google',
      comment: 'O meu cão frequenta a Creche Daycare semanalmente e adora. O serviço de Táxi Pet facilita imenso a nossa rotina matinal. Profissionais dedicados e muito carinhosos.',
      serviceMention: 'Creche Daycare & Táxi Pet',
    },
    {
      id: '3',
      name: 'Sofia Martins',
      rating: 5,
      date: 'Avaliação Verificada no Google',
      comment: 'O melhor sítio em Lisboa para deixar o patudo. Pontualidade, simpatia, instalações impecavelmente limpas e muito amor pelos animais. Nota 5 estrelas merecidíssima.',
      serviceMention: 'Hospedagem & Creche Canina',
    },
  ] as ReviewItem[],

  faqs: [
    {
      question: 'Como funciona a Hospedagem canina (Hotel Pet / Pernoite)?',
      answer: 'O seu patudo pernoita em acomodações confortáveis, limpas e climatizadas. Durante o dia, participa nas atividades e brincadeiras da creche e desfruta de descanso supervisionado. Enviamos atualizações diárias com fotos e vídeos pelo WhatsApp.',
    },
    {
      question: 'O que é necessário para o meu cão frequentar a Creche (Daycare)?',
      answer: 'Para a segurança e saúde de todos os animais, é obrigatório apresentar o boletim com vacinas atualizadas (incluindo a vacina contra a tosse do canil), desparasitação interna e externa em dia e realizar uma avaliação comportamental prévia.',
    },
    {
      question: 'Como funciona o serviço de Transporte (Táxi Pet)?',
      answer: 'Fazemos o serviço de levar e buscar o seu patudo na sua residência em Lisboa. O transporte é efetuado em veículo próprio, climatizado e equipado com caixas de transporte confortáveis e cinto de retenção de segurança.',
    },
    {
      question: 'Posso agendar Banho e Tosquia juntamente com a estadia?',
      answer: 'Sim, com toda a certeza! É um dos serviços mais solicitados: o seu patudo aproveita o hotel ou creche e, no dia da recolha, é banhado, tosquiado e higienizado para regressar a casa cheiroso e impecável.',
    },
    {
      question: 'Como posso reservar uma vaga de Hotel ou Creche?',
      answer: 'Basta clicar em qualquer botão de WhatsApp nesta página, indicar as datas pretendidas, porte e raça do seu cão. A nossa equipa responde prontamente com a disponibilidade e orientações para a reserva.',
    },
  ] as FaqItem[],
};

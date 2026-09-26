import heroImage from '@/src/assets/images/hero_pet_grooming_1790449480073.jpg';
import bathServiceImage from '@/src/assets/images/service_bath_grooming_1790449491069.jpg';
import scissorServiceImage from '@/src/assets/images/service_scissor_cut_1790449501711.jpg';
import foodServiceImage from '@/src/assets/images/service_pet_food_1790449510791.jpg';
import accessoriesServiceImage from '@/src/assets/images/service_accessories_1790449520631.jpg';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'banho_tosquia' | 'alimentacao' | 'acessorios' | 'higiene';
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
    segment: 'Pet Shop, Banho e Tosquia, Alimentação e Acessórios para Animais de Estimação',
    tagline: 'Banho, tosquia, alimentação de qualidade e cuidados especiais para o seu patudo em Lisboa',
    postalCode: '1900-051',
    address: 'Parada Alto de São João, 1900-051 Lisboa, Portugal',
    addressShort: 'Parada Alto de São João, Lisboa',
    phoneFormatted: '+351 939 487 333',
    phoneRaw: '351939487333',
    whatsappUrl: 'https://wa.me/351939487333?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20servi%C3%A7o%20no%20Lisboa%20Bichos%20e%20Caprichos.',
    hoursSchedule: 'Segunda a Sábado: 09h00 às 19h00',
    sundaySchedule: 'Domingo: Encerrado',
    googleRating: 5.0,
    googleReviewCount: 12,
    instagram: '@lisboabichosecaprichos',
    instagramUrl: 'https://www.instagram.com',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Parada+Alto+de+S%C3%A3o+Jo%C3%A3o+1900-051+Lisboa+Portugal',
    mapsEmbedUrl: 'https://maps.google.com/maps?q=Parada%20Alto%20de%20S%C3%A3o%20Jo%C3%A3o,%201900-051%20Lisboa,%20Portugal&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },

  images: {
    hero: heroImage,
    bath: bathServiceImage,
    scissorCut: scissorServiceImage,
    food: foodServiceImage,
    accessories: accessoriesServiceImage,
  },

  stats: [
    {
      metric: '5.0',
      suffix: '/ 5.0',
      label: 'Nota Máxima Google',
      description: '100% de clientes satisfeitos em Lisboa',
    },
    {
      metric: '100%',
      suffix: '',
      label: 'Cuidado & Respeito',
      description: 'Tratamento calmo e sem stresse',
    },
    {
      metric: 'Especialistas',
      suffix: '',
      label: 'Banho & Tosquia',
      description: 'Estética animal à tesoura e máquina',
    },
    {
      metric: 'Rápido',
      suffix: '',
      label: 'Marcação no WhatsApp',
      description: 'Resposta ágil e horários flexíveis',
    },
  ],

  services: [
    {
      id: 'banho-completo',
      name: 'Banho & Hidratação de Pelagem',
      category: 'banho_tosquia',
      categoryLabel: 'Banho & Tosquia',
      badge: 'Mais Procurado',
      description: 'Higienização profunda com champôs dermatológicos de gama alta, amaciadores específicos, secagem cuidadosa e desembaraço delicado.',
      details: ['Champô específico para pele sensível', 'Secagem com temperatura controlada', 'Hidratação e perfume suave hipoalergénico'],
      image: bathServiceImage,
      whatsappMessage: 'Olá! Gostaria de agendar um Banho & Hidratação para o meu patudo no Lisboa Bichos e Caprichos.',
    },
    {
      id: 'tosquia-especializada',
      name: 'Tosquia à Tesoura & Máquina',
      category: 'banho_tosquia',
      categoryLabel: 'Banho & Tosquia',
      badge: 'Estética Pet',
      description: 'Corte personalizado respeitando o padrão da raça e as preferências do tutor. Realizamos tosquia higiénica, comercial e estilizada à tesoura.',
      details: ['Técnica à tesoura sem stresse', 'Tosquia higiénica preventiva', 'Acabamento minucioso do pelo facial e patas'],
      image: scissorServiceImage,
      whatsappMessage: 'Olá! Gostaria de agendar uma Tosquia Especializada para o meu animal no Lisboa Bichos e Caprichos.',
    },
    {
      id: 'cuidados-higiene',
      name: 'Higiene Clínica & Bem-Estar',
      category: 'higiene',
      categoryLabel: 'Higiene & Cuidados',
      badge: 'Essencial',
      description: 'Cuidados essenciais de manutenção para saúde preventiva: corte seguro de unhas, limpeza auricular anti-otites e escovagem dentária.',
      details: ['Corte e limagem de unhas', 'Limpeza profunda de ouvidos', 'Escovagem dentária com pasta enzimática'],
      image: bathServiceImage,
      whatsappMessage: 'Olá! Preciso de corte de unhas e limpeza de ouvidos para o meu patudo. Como posso marcar?',
    },
    {
      id: 'alimentacao-super-premium',
      name: 'Rações Super Premium & Snacks Naturais',
      category: 'alimentacao',
      categoryLabel: 'Alimentação',
      badge: 'Nutrição de Qualidade',
      description: 'Seleção rigorosa de nutrição para cães e gatos. Rações hipoalergénicas, grain-free, comida húmida gourmet e biscoitos 100% naturais.',
      details: ['Marcas de referência no mercado', 'Ingredientes naturais e digestão fácil', 'Aconselhamento nutricional personalizado'],
      image: foodServiceImage,
      whatsappMessage: 'Olá! Gostaria de saber que marcas de ração Super Premium têm disponíveis na loja.',
    },
    {
      id: 'acessorios-premium',
      name: 'Acessórios & Equipamento Pet',
      category: 'acessorios',
      categoryLabel: 'Acessórios',
      badge: 'Conforto & Estilo',
      description: 'Trelas seguras, peitorais ergonómicos anti-puxão, coleiras duradouras, camas aconchegantes e brinquedos de estimulação mental.',
      details: ['Peitorais com fecho de alta segurança', 'Camas laváveis e ergonómicas', 'Brinquedos interativos duráveis'],
      image: accessoriesServiceImage,
      whatsappMessage: 'Olá! Gostaria de ver opções de acessórios e peitorais disponíveis no Lisboa Bichos e Caprichos.',
    },
    {
      id: 'cosmetica-dermatologica',
      name: 'Cosmética e Higiene Pet de Topo',
      category: 'higiene',
      categoryLabel: 'Higiene & Cuidados',
      badge: 'Alta Gama',
      description: 'Linha completa de loções hidratantes, bálsamos de almofadinhas, sprays desembaraçadores e toalhetes específicos para uso doméstico.',
      details: ['Fórmulas com pH fisiológico animal', 'Bálsamo protetor para patinhas e focinho', 'Perfumes sem álcool de longa duração'],
      image: scissorServiceImage,
      whatsappMessage: 'Olá! Gostaria de informações sobre produtos de cosmética e higiene pet na vossa loja.',
    },
  ] as ServiceItem[],

  differentials: [
    {
      id: 'carinho-sem-stresse',
      icon: 'Heart',
      title: 'Tratamento Carinhoso & Sem Stresse',
      description: 'Respeitamos rigorosamente o tempo, personalidade e limites de cada patudo. Nunca usamos métodos invasivos ou apressados.',
    },
    {
      id: 'produtos-alta-gama',
      icon: 'Sparkles',
      title: 'Produtos de Cosmética Pet de Topo',
      description: 'Linha de champôs e amaciadores de elevada qualidade para peles atópicas, pelos compridos e todas as raças de cães e gatos.',
    },
    {
      id: 'nota-maxima',
      icon: 'Star',
      title: 'Nota Máxima 5.0 no Google',
      description: 'Excelência comprovada e recomendada a 100% por tutores em Lisboa. Confiança e transparência em cada atendimento.',
    },
    {
      id: 'localizacao-central',
      icon: 'MapPin',
      title: 'Localização de Fácil Acesso',
      description: 'Situado na Parada Alto de São João, 1900-051 Lisboa, com comodidade para entregas e recolhas pontuais do seu patudo.',
    },
    {
      id: 'marcacao-simples',
      icon: 'MessageCircle',
      title: 'Marcação Simples no WhatsApp',
      description: 'Sem filas ou formulários complexos. Basta enviar uma mensagem rápida para confirmar a disponibilidade do dia e horário.',
    },
    {
      id: 'espaco-higienizado',
      icon: 'ShieldCheck',
      title: 'Espaço Limpo, Seguro e Acolhedor',
      description: 'Desinfeção sistemática entre atendimentos com produtos amigos dos animais, garantindo ambiente seguro e higiénico.',
    },
  ],

  testimonials: [
    {
      id: '1',
      name: 'Inês Silva',
      rating: 5,
      date: 'Avaliação Verificada no Google',
      comment: 'Atendimento excecional! O meu cão ficou cheiroso, com o pelo super macio e veio super calmo da tosquia. Recomendo a 100%!',
      serviceMention: 'Banho & Tosquia de Cão',
    },
    {
      id: '2',
      name: 'Miguel Pereira',
      rating: 5,
      date: 'Avaliação Verificada no Google',
      comment: 'Excelente profissionalismo e muito carinho pelos animais. Grande variedade de rações e acessórios de qualidade na loja.',
      serviceMention: 'Alimentação & Acessórios',
    },
    {
      id: '3',
      name: 'Sofia Martins',
      rating: 5,
      date: 'Avaliação Verificada no Google',
      comment: 'O melhor sítio em Lisboa para cuidar do meu patudo. Pontualidade, simpatia e um trabalho de banho e tosquia impecável.',
      serviceMention: 'Banho & Tosquia Especializada',
    },
  ] as ReviewItem[],

  faqs: [
    {
      question: 'Como posso marcar um serviço de banho ou tosquia?',
      answer: 'É muito simples! Basta clicar em qualquer botão de WhatsApp aqui no site e indicar o dia, hora e porte do seu animal para confirmarmos a disponibilidade de imediato.',
    },
    {
      question: 'Trabalham com que marcas de alimentação?',
      answer: 'Trabalhamos com marcas de ração Super Premium e opções de nutrição natural selecionadas para cães e gatos, garantindo saúde digestiva e pelagem brilhante.',
    },
    {
      question: 'Onde fica localizada a loja?',
      answer: 'Estamos situados na Parada Alto de São João, 1900-051 em Lisboa, Portugal. Pode abrir diretamente o mapa de localização pelo botão nesta página.',
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos MB WAY, cartões de débito/crédito e numerário para sua total conveniência.',
    },
    {
      question: 'Fazem tosquia a tesoura e higiénica?',
      answer: 'Sim! Realizamos tosquias à tesoura, à máquina e higiénicas, ajustadas à raça, sensibilidade e necessidade do seu peludo.',
    },
  ] as FaqItem[],
};

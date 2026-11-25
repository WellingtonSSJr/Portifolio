import capriColonial from '../assets/images/projects/cafeararuama/colonial-spread.jpg';
import capriCoffee from '../assets/images/projects/cafeararuama/artisan-coffee.jpg';
import capriPatisserie from '../assets/images/projects/cafeararuama/patisserie.jpg';
import capriBistro from '../assets/images/projects/cafeararuama/bistro-plate.jpg';

import pizzaHero from '../assets/images/projects/pizzaria/hero-pizza.jpg';
import pizzaDough from '../assets/images/projects/pizzaria/manifesto-dough.jpg';
import pizzaOven from '../assets/images/projects/pizzaria/wood-oven.jpg';

export const PROJECTS = [
  {
    id: 'finapp',
    index: '01',
    title: 'FinApp',
    subtitle: 'Sistema web de gestão financeira pessoal e familiar',
    year: '2026',
    category: 'Aplicação SaaS Full-Stack',
    summary:
      'Plataforma completa para controle de receitas, despesas, faturas de cartão com regra de fechamento, assinaturas recorrentes e contas compartilhadas em grupo.',
    highlights: [
      'Dashboard com KPIs consolidados, comparativo de 6 meses e relatórios exportáveis em CSV.',
      'Autenticação via Supabase Auth com níveis de permissão, painel administrativo e grupos por código de convite.',
      'Integração de cobrança com Stripe (planos Individual e Time) e arquitetura preparada para Open Finance.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Stripe', 'Recharts', 'Tailwind CSS'],
    liveUrl: 'https://finapp-gestao.vercel.app',
    repoUrl: 'https://github.com/WellingtonSSJr/FinApp',
    previewType: 'finapp-ui',
  },
  {
    id: 'cafe-araruama',
    index: '02',
    title: 'Café Capri do Brasil',
    subtitle: 'Site institucional e cardápio para café colonial e bistrô',
    year: '2026',
    category: 'Landing Page Gastronômica',
    summary:
      'Experiência editorial desenvolvida para o Café Capri do Brasil, referência em café colonial, confeitaria fina e bistrô na Rod. Amaral Peixoto em Araruama (RJ).',
    highlights: [
      'Hero interativo com sequência de frames sincronizada com a rolagem da página.',
      'Cardápio navegável por categorias (café colonial, cafés especiais, confeitaria e bistrô).',
      'Foco em conversão local com prova social, localização integrada e atendimento direto no WhatsApp.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: null,
    repoUrl: null,
    previewType: 'gallery',
    gallery: [
      { src: capriColonial, caption: 'Mesa de café colonial completo' },
      { src: capriCoffee, caption: 'Cafés especiais e barista' },
      { src: capriPatisserie, caption: 'Vitrine de confeitaria fina' },
      { src: capriBistro, caption: 'Pratos do bistrô' },
    ],
  },
  {
    id: 'forneria-brasa-farinha',
    index: '03',
    title: 'Forneria Brasa & Farinha',
    subtitle: 'Cardápio interativo e pedidos via WhatsApp para pizzaria artesanal',
    year: '2026',
    category: 'Landing Page & Pedido Direto',
    summary:
      'Site desenvolvido para pizzaria artesanal de fermentação lenta (48h) e forno a lenha a 450°C, unindo apresentação editorial com montagem rápida de pedido.',
    highlights: [
      'Storytelling visual das etapas de preparo: maturação da massa, ingredientes e forno a lenha.',
      'Cardápio interativo com gerenciamento de carrinho via Context API.',
      'Checkout enxuto que gera o resumo completo do pedido e envia direto para o WhatsApp da casa.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Context API'],
    liveUrl: null,
    repoUrl: null,
    previewType: 'gallery',
    gallery: [
      { src: pizzaHero, caption: 'Pizza artesanal de fermentação lenta' },
      { src: pizzaDough, caption: 'Processo de maturação 48h' },
      { src: pizzaOven, caption: 'Forno a lenha a 450°C' },
    ],
  },
];

export const SKILLS = [
  {
    group: 'Front-end',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    group: 'Back-end & Dados',
    items: ['Node.js', 'Supabase', 'PostgreSQL', 'APIs REST', 'Stripe'],
  },
  {
    group: 'Ferramentas & Rotina',
    items: ['Git & GitHub', 'Vercel', 'Framer Motion', 'Design Responsivo'],
  },
];

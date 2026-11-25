import { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  ArrowDown,
  Github,
  Linkedin,
  MapPin,
  MessageCircle,
} from 'lucide-react';

import fotoPerfil from '../../assets/images/perfil.jpg';
import logowelldev from '../../assets/images/welldevLogo.svg';
import logowelldevdark from '../../assets/images/logodark.svg';
import ProjectShowcase from '../../Components/Projects/ProjectShowcase';
import Form from '../../Components/Form/Form';
import { PROJECTS, SKILLS } from '../../data/projects';

const WHATSAPP_URL =
  'https://wa.me/5522997981894?text=Ol%C3%A1%20Wellington!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.';

const NAV_ITEMS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contatos', label: 'Contato' },
];

function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      id="inicio"
      className="min-h-screen bg-[#F4F5F4] dark:bg-[#111827] text-[#1A4027] dark:text-gray-100 transition-colors duration-200"
    >
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-[#1A4027]/12 dark:border-gray-800 bg-[#F4F5F4]/90 dark:bg-[#111827]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a
            href="#inicio"
            aria-label="WellDev — Início"
            className="flex items-center gap-2.5 focus:outline-none"
          >
            <img
              src={logowelldev}
              alt="WellDev"
              className="h-5 w-auto block dark:hidden"
            />
            <img
              src={logowelldevdark}
              alt="WellDev"
              className="h-7 w-auto hidden dark:block"
            />
          </a>

          {/* Navegação desktop */}
          <nav className="hidden sm:flex items-center gap-7" aria-label="Navegação principal">
            <ul className="flex items-center gap-6 text-sm font-medium text-[#1A4027]/80 dark:text-gray-300">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#1A4027] dark:hover:text-[#1ED760] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <span className="h-4 w-px bg-[#1A4027]/15 dark:bg-gray-700" aria-hidden="true" />

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Alternar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
              className="p-2 rounded-md border border-[#1A4027]/15 dark:border-gray-700 text-[#1A4027] dark:text-[#1ED760] hover:border-[#1ED760] transition-colors cursor-pointer"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </nav>

          {/* Ações mobile */}
          <div className="sm:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Alternar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
              className="p-2 rounded-md border border-[#1A4027]/15 dark:border-gray-700 text-[#1A4027] dark:text-[#1ED760] cursor-pointer"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMenuAberto((v) => !v)}
              aria-expanded={menuAberto}
              aria-controls="mobile-menu"
              aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
              className="p-2 rounded-md border border-[#1A4027]/15 dark:border-gray-700 text-[#1A4027] dark:text-gray-200 cursor-pointer"
            >
              {menuAberto ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {menuAberto && (
          <nav
            id="mobile-menu"
            className="sm:hidden border-t border-[#1A4027]/10 dark:border-gray-800 bg-white dark:bg-[#131C2C] px-5 py-4"
          >
            <ul className="flex flex-col gap-3 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuAberto(false)}
                    className="block py-1 text-[#1A4027] dark:text-gray-200 hover:text-[#1ED760]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* HERO EDITORIAL */}
      <section className="border-b border-[#1A4027]/12 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Texto principal */}
            <div className="lg:col-span-7 space-y-6">
              <p className="font-mono text-xs uppercase tracking-widest text-[#1A4027]/70 dark:text-[#1ED760]">
                Wellington Soares · Front-end &amp; Full-stack
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.08] text-[#1A4027] dark:text-white">
                Interfaces diretas e aplicações web pensadas para o uso real
                <span className="text-[#1ED760]">.</span>
              </h1>

              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Desenvolvedor React e Next.js com foco em front-end e prática real em back-end —
                construindo desde landing pages de conversão para negócios locais até sistemas SaaS
                com autenticação, banco de dados e pagamentos.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projetos"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1ED760] text-[#1A4027] font-semibold text-sm hover:bg-[#32FF5F] transition-colors"
                >
                  Ver projetos
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a
                  href="#contatos"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#1A4027]/25 dark:border-gray-700 text-[#1A4027] dark:text-gray-100 font-medium text-sm hover:border-[#1A4027] dark:hover:border-[#1ED760] transition-colors"
                >
                  Entrar em contato
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-5 text-sm text-gray-600 dark:text-gray-400">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#1A4027] dark:hover:text-[#1ED760] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://github.com/WellingtonSSJr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#1A4027] dark:hover:text-[#1ED760] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/wellingtonssoares/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#1A4027] dark:hover:text-[#1ED760] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#1ED760]" />
                  <span>Rio de Janeiro, Brasil</span>
                </span>
              </div>
            </div>

            {/* Coluna direita — Retrato e resumo técnico */}
            <div className="lg:col-span-5">
              <div className="max-w-sm lg:ml-auto rounded-lg border border-[#1A4027]/15 dark:border-gray-800 bg-white dark:bg-[#131C2C] overflow-hidden">
                <div className="p-4 pb-0">
                  <div className="aspect-[4/3] w-full rounded-md overflow-hidden border border-[#1A4027]/10 dark:border-gray-800 bg-[#EBECEB] dark:bg-[#0F1724]">
                    <img
                      src={fotoPerfil}
                      alt="Foto de Wellington Soares"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-[#1A4027]/10 dark:border-gray-800 pb-3">
                    <div>
                      <p className="text-sm font-bold text-[#1A4027] dark:text-white">
                        Wellington Soares
                      </p>
                      <p className="font-mono text-xs text-gray-500 dark:text-gray-400">
                        @WellingtonSSJr
                      </p>
                    </div>
                    <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-[#1A4027] text-[#1ED760] dark:bg-[#1ED760]/15 dark:text-[#1ED760]">
                      WellDev
                    </span>
                  </div>

                  <dl className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between gap-2">
                      <dt className="text-gray-500 dark:text-gray-400">Foco</dt>
                      <dd className="text-[#1A4027] dark:text-gray-200 text-right">
                        React · Next.js · TS
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-gray-500 dark:text-gray-400">Back-end</dt>
                      <dd className="text-[#1A4027] dark:text-gray-200 text-right">
                        Node.js · Supabase
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-gray-500 dark:text-gray-400">Entregas</dt>
                      <dd className="text-[#1A4027] dark:text-gray-200 text-right">
                        SaaS &amp; Landing Pages
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="bg-white dark:bg-[#121A2A]">
        {/* 01 / SOBRE */}
        <section
          id="sobre"
          className="border-b border-[#1A4027]/12 dark:border-gray-800"
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
            <div className="flex items-baseline gap-3 mb-10">
              <span className="font-mono text-xs font-semibold text-[#1ED760] bg-[#1A4027] px-2 py-0.5 rounded">
                01
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A4027] dark:text-white">
                Sobre mim
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-6 space-y-4 text-[15px] sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                  Comecei no front-end com React, JavaScript e Tailwind CSS, e fui avançando para
                  o back-end conforme os projetos passaram a exigir autenticação, banco relacional,
                  regras de negócio e cobrança real.
                </p>
                <p>
                  No dia a dia de equipe, sou participativo, comunicativo e de fácil adaptação —
                  gosto de entender o problema do negócio antes de sair escrevendo código e manter
                  a interface simples de usar e fácil de dar manutenção.
                </p>
              </div>

              <div className="lg:col-span-6 space-y-5">
                {SKILLS.map((group) => (
                  <div
                    key={group.group}
                    className="pb-4 border-b border-[#1A4027]/10 dark:border-gray-800 last:border-b-0 last:pb-0"
                  >
                    <h3 className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                      {group.group}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs font-medium px-3 py-1.5 rounded border border-[#1A4027]/20 dark:border-gray-700 bg-[#F4F5F4] dark:bg-[#111827] text-[#1A4027] dark:text-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 02 / PROJETOS */}
        <section
          id="projetos"
          className="border-b border-[#1A4027]/12 dark:border-gray-800 bg-[#F4F5F4] dark:bg-[#111827]"
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-semibold text-[#1ED760] bg-[#1A4027] px-2 py-0.5 rounded">
                    02
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A4027] dark:text-white">
                    Projetos selecionados
                  </h2>
                </div>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
                  Trabalhos recentes entre aplicações full-stack e sites comerciais construídos do
                  zero.
                </p>
              </div>

              <a
                href="https://github.com/WellingtonSSJr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#1A4027] dark:text-[#1ED760] hover:underline shrink-0"
              >
                Mais no GitHub
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div>
              {PROJECTS.map((project) => (
                <ProjectShowcase key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* 03 / CONTATO */}
        <section id="contatos" className="bg-white dark:bg-[#121A2A]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-semibold text-[#1ED760] bg-[#1A4027] px-2 py-0.5 rounded">
                    03
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A4027] dark:text-white">
                    Vamos conversar
                  </h2>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  Tem um projeto em mente, precisa de um site para o seu negócio ou quer trocar uma
                  ideia sobre oportunidades? Mande uma mensagem pelo formulário ou me chame direto
                  nas redes.
                </p>

                <div className="pt-2 space-y-2.5">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-md border border-[#1A4027]/15 dark:border-gray-800 hover:border-[#1ED760] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-[#1A4027] dark:text-[#1ED760]" />
                      <div>
                        <p className="text-sm font-semibold text-[#1A4027] dark:text-white">
                          WhatsApp
                        </p>
                        <p className="font-mono text-xs text-gray-500 dark:text-gray-400">
                          (22) 99798-1894
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#1ED760] transition-colors" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/wellingtonssoares/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-md border border-[#1A4027]/15 dark:border-gray-800 hover:border-[#1ED760] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-[#1A4027] dark:text-[#1ED760]" />
                      <div>
                        <p className="text-sm font-semibold text-[#1A4027] dark:text-white">
                          LinkedIn
                        </p>
                        <p className="font-mono text-xs text-gray-500 dark:text-gray-400">
                          /in/wellingtonssoares
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#1ED760] transition-colors" />
                  </a>

                  <a
                    href="https://github.com/WellingtonSSJr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-md border border-[#1A4027]/15 dark:border-gray-800 hover:border-[#1ED760] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-4 h-4 text-[#1A4027] dark:text-[#1ED760]" />
                      <div>
                        <p className="text-sm font-semibold text-[#1A4027] dark:text-white">
                          GitHub
                        </p>
                        <p className="font-mono text-xs text-gray-500 dark:text-gray-400">
                          @WellingtonSSJr
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#1ED760] transition-colors" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Form />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#1A4027]/12 dark:border-gray-800 bg-[#F4F5F4] dark:bg-[#111827]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <img
              src={logowelldev}
              alt="WellDev"
              className="h-4 w-auto block dark:hidden opacity-90"
            />
            <img
              src={logowelldevdark}
              alt="WellDev"
              className="h-6 w-auto hidden dark:block opacity-90"
            />
            <span className="text-gray-400">·</span>
            <span>&copy; {new Date().getFullYear()} Wellington Soares</span>
          </div>

          <a
            href="#inicio"
            className="font-mono hover:text-[#1A4027] dark:hover:text-[#1ED760] transition-colors"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;

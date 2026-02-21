import React, { useState, useEffect } from 'react';

function Teste() {
  // 1. Gerenciar o tema com o estado do React (useState).
  //    A função dentro do useState só executa na primeira renderização,
  //    sendo perfeita para ler o localStorage e a preferência do sistema uma única vez.
  const [theme, setTheme] = useState(() => {
    // Garante que o código só rode no navegador (importante para Next.js/SSR)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      // Se não houver tema salvo, verifica a preferência do sistema
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    // Um valor padrão caso o código rode no servidor
    return 'light';
  });

  // 2. Usar useEffect para aplicar os efeitos colaterais (mudar a classe e salvar no localStorage).
  //    Este efeito roda sempre que o estado 'theme' mudar.
  useEffect(() => {
    const root = document.documentElement; // A tag <html>
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]); // O array de dependências garante que o efeito rode APENAS quando 'theme' mudar.

  // 3. A função de clique agora apenas atualiza o estado. O resto é trabalho do useEffect.
  function handleclick() {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div>
      <div className="bg-white  dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {/* O conteúdo do SVG estava vazio, adicionei um ícone de exemplo */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        </div>
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          <button className='border-2 dark:border-white cursor-pointer m-2 p-2 rounded' onClick={handleclick}>
            {/* O texto do botão agora é dinâmico */}
            Mudar para modo {theme === 'dark' ? 'Claro' : 'Escuro'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Teste;
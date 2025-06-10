import React, { useState, useEffect } from 'react'; // Importando os hooks necessários
import { Sun, Moon } from 'lucide-react'; // Exemplo de ícones. Instale: npm i lucide-react

// Suas importações de assets
import fotoPerfil from './../../assets/images/perfil.jpg';
import logowelldev from './../../assets/images/welldevLogo.svg';
import imageBg from './../../assets/images/imageBgLeft.png';
import image1 from './../../assets/images/imagem1.jpg';
import image2 from './../../assets/images/imagem2.jpg';
import image3 from './../../assets/images/imagem3.jpg';
import git from './../../assets/icons/git.png';
import linkedin from './../../assets/icons/linkedin.png';
import openCloseModalCtt from './../../assets/icons/openCloseModalCtt.svg';
import Carrossel from '../../Components/Carrossel/Carrossel';
import { motion } from "framer-motion";
import Form from '../../Components/Form/Form';
import Teste from '../../Components/teste/teste';
function Home() {
    // Seus estados existentes
    const [menuAberto, setMenuAberto] = useState(false);
    const [menuInfoAberto, setMenuInfoAberto] = useState(false);

    // --- LÓGICA DO TEMA (INÍCIO) ---
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    console.log(theme);
    

    useEffect(() => {
        const root = window.document.documentElement;
        console.log(root);
        
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme', 'light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    const ThemeToggleButton = ({ className = '' }) => (
        <button
            onClick={toggleTheme}
            aria-label={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
            className={`p-2 rounded-full transition-colors duration-300 ${className}`}
        >
            {theme === 'light' ? (
                <Moon className="h-5 w-5 text-[#1A4027]" />
            ) : (
                <Sun className="h-5 w-5 text-[#1ED760]" />
            )}
        </button>
    );

    return (
        <div className="bg-[#b4b4b4] dark:bg-[#111827] text-black dark:text-white transition-colors duration-300">
            <div className='relative overflow-hidden min-h-dvh flex flex-col'>
                <img src={imageBg} alt="background decorativo" className="absolute z-0 -left-10 max-sm:mt-18 max-sm:-left-18 top-16 opacity-20 dark:opacity-10" />
                
                <header className="fixed left-0 right-0 flex items-center justify-between px-4 sm:px-10 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md z-20">
                    <div className="min-w-28 h-max p-2 flex items-center gap-3">
                        <img src={fotoPerfil} alt="Foto de Perfil" className="sm:hidden h-12 w-12 shrink-0 rounded-full" />
                        <img src={logowelldev} alt="Logo Welldev" className="h-6" />
                    </div>

                    {/* Menu padrão */}
                    <nav className="hidden sm:flex items-center gap-4">
                        <ul className="flex gap-6 text-[#1A4027] dark:text-gray-200 font-semibold">
                            <li><a href="/" className="hover:text-[#1ED760] transition-colors">HOME</a></li>
                            <li><a href="#sobre" className="hover:text-[#1ED760] transition-colors">SOBRE</a></li>
                            <li><a href="#projetos" className="hover:text-[#1ED760] transition-colors">PROJETOS</a></li>
                            <li><a href="#contatos" className="hover:text-[#1ED760] transition-colors">CONTATOS</a></li>
                        </ul>
                        <ThemeToggleButton />
                    </nav>

                    {/* Container mobile */}
                    <div className="sm:hidden flex items-center gap-2">
                        <ThemeToggleButton />
                        <button
                            className="text-2xl cursor-pointer text-[#1A4027] dark:text-gray-200 relative w-8 h-8 flex items-center justify-center z-50"
                            onClick={() => setMenuAberto(!menuAberto)}
                            aria-expanded={menuAberto}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Abrir menu</span>
                            <span className={`absolute h-0.5 w-6 bg-current rounded transition-all duration-300 ${menuAberto ? 'rotate-45' : '-translate-y-2'}`}></span>
                            <span className={`absolute h-0.5 w-6 bg-current rounded transition-all duration-300 ${menuAberto ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`absolute h-0.5 w-6 bg-current rounded transition-all duration-300 ${menuAberto ? '-rotate-45' : 'translate-y-2'}`}></span>
                        </button>
                    </div>

                    {/* Menu mobile (dropdown) */}
                    {menuAberto && (
                        <nav
                            id="mobile-menu"
                            className="absolute top-full right-0 w-52 m-4 rounded bg-[#1ED760] sm:hidden shadow-lg border-[#1A4027]/45 border animate-fade-in z-40"
                        >
                            <ul className="flex flex-col items-center gap-4 p-4 text-[#2C344B] font-semibold">
                                <li><a href="/" onClick={() => setMenuAberto(false)}>HOME</a></li>
                                <li><a href="#sobre" onClick={() => setMenuAberto(false)}>SOBRE</a></li>
                                <li><a href="#projetos" onClick={() => setMenuAberto(false)}>PROJETOS</a></li>
                                <li><a href="#contatos" onClick={() => setMenuAberto(false)}>CONTATOS</a></li>
                            </ul>
                        </nav>
                    )}
                </header>
                
                <div className='relative flex flex-col justify-center items-center text-center flex-grow pt-32 pb-16 px-4'>
                    <img src={fotoPerfil} alt="Foto de Perfil" className="hidden sm:block h-36 w-36 shrink-0 rounded-full border-[#1ED760] border-2 mb-4" />
                    <h1 className='text-[#1A4027] dark:text-gray-100 font-black text-4xl sm:text-5xl lg:text-6xl max-w-2xl'>Olá, sou o Wellington!</h1>
                    <p className='max-w-xl mx-auto mt-4 text-gray-600 dark:text-gray-400 text-lg sm:text-xl md:text-2xl'>
                        Desenvolvedor front-end React Jr. Curioso back-end. E um pouco de full-stack.
                    </p>
                    <a href="#contato" className='bg-[#1ED760] mt-8 px-8 py-3 rounded shadow text-[#1A4027] font-medium transform transition hover:-translate-y-1'>
                        CONTATO
                    </a>

                    {/* CONTATO LATERAL */}
                    <div className={`fixed top-1/2 -translate-y-1/2 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-r-lg transition-transform duration-300 ease-in-out z-10 ${menuInfoAberto ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="relative p-4 flex flex-col gap-5 items-center justify-center">
                            {/* Ícones de contato também podem ser ajustados para o tema escuro se forem SVGs */}
                            <a href="#" aria-label="GitHub"><img src={git} alt="GitHub" className="w-8 h-8" /></a>
                            <a href="#" aria-label="LinkedIn"><img src={linkedin} alt="LinkedIn" className="w-8 h-8" /></a>
                        </div>
                         <button 
                            className='absolute left-full top-1/2 -translate-y-1/2 w-9 bg-white dark:bg-gray-800 py-3 rounded-tr-lg rounded-br-lg cursor-pointer shadow-lg'
                            onClick={() => setMenuInfoAberto(!menuInfoAberto)}
                            aria-expanded={menuInfoAberto}
                        >
                            <img 
                                className={`transition-transform duration-300 ${menuInfoAberto ? 'rotate-180' : ''}`} 
                                src={openCloseModalCtt} 
                                alt={menuInfoAberto ? "Fechar menu de contato" : "Abrir menu de contato"}
                            />
                        </button>
                    </div>
                </div> 
            </div>

            {/* MAIN CONTENT */}
            <main className='flex flex-col items-center gap-5 px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-gray-900 transition-colors duration-300'>
                <span className='w-24 h-2 rounded shadow bg-gray-300 dark:bg-gray-700 mb-8 border-[#1ED760] border-2'></span>

                {/* SEÇÃO SOBRE */}
                <section id='sobre' className='flex flex-col justify-center items-center gap-12 my-8 w-full max-w-6xl mx-auto'>
                    <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
                        <motion.h1 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="text-5xl font-black text-gray-800 dark:text-white text-left md:text-left">
                            SO<br />
                            BRE<span className="text-[#1ED760] animate-pulse drop-shadow-[0_0_6px_#1ED760]">.</span>
                        </motion.h1>
                        <p className='text-center md:text-left max-w-xl text-gray-600 dark:text-gray-400 font-medium leading-8'>Nesta seção eu descrevo um pouco de mim. Como me vejo no quesito habilidades e também se tratando de comportamento organizacional.</p>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between w-full gap-10 mt-8'>
                        {/* SKILLS */}
                        <div className='flex-1'>
                            <div className='border-[#32FF5F] text-[#1A4027] bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-3xl font-black border-l-4 w-full text-left px-4 py-2 rounded-r shadow'>
                                SKILLS<span className='text-[#1ED760]'>.</span>
                            </div>
                            <div className='mt-8 flex flex-wrap gap-3 justify-center lg:justify-start'>
                                {/* As skills já tem um bom contraste */}
                                <span className='text-sm font-bold border-[#1ED760] border bg-[#1E1E1E] text-white px-4 py-2 rounded shadow'>REACT</span>
                                <span className='text-sm font-bold border-[#1ED760] border bg-[#1E1E1E] text-white px-4 py-2 rounded shadow'>JAVASCRIPT</span>
                                <span className='text-sm font-bold border-[#1ED760] border bg-[#1E1E1E] text-white px-4 py-2 rounded shadow'>TAILWIND</span>
                                <span className='text-sm font-bold border-[#1ED760] border bg-[#1E1E1E] text-white px-4 py-2 rounded shadow'>NODE</span>
                                <span className='text-sm font-bold border-[#1ED760] border bg-[#1E1E1E] text-white px-4 py-2 rounded shadow'>HTML</span>
                                <span className='text-sm font-bold border-[#1ED760] border bg-[#1E1E1E] text-white px-4 py-2 rounded shadow'>CSS</span>
                            </div>
                        </div>

                        {/* PERFIL */}
                        <div className='flex-1'>
                            <div className='border-[#32FF5F] bg-gray-100 dark:bg-gray-800 text-[#1A4027] dark:text-gray-100 text-3xl border-r-4 font-black w-full shadow text-right px-4 py-2 rounded-l'>
                                PERFIL<span className='text-[#1ED760]'>.</span>
                            </div>
                            <p className='mt-8 text-center lg:text-right text-gray-600 dark:text-gray-400 font-medium leading-8'>Me considero participativo e comunicativo em equipe. De fácil adaptação, consigo me integrar a rotina e fazer parte do processo.</p>
                        </div>
                    </div>
                </section>

                <span className='w-24 h-2 rounded shadow bg-gray-300 dark:bg-gray-700 my-8 border-[#1ED760] border-2'></span>

                {/* SEÇÃO PROJETOS */}
                <section id='projetos' className='flex flex-col justify-center items-center gap-12 my-8 w-full max-w-6xl mx-auto'>
                     <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
                        <motion.h1 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="text-5xl font-black text-gray-800 dark:text-white text-left md:text-left">
                            PRO<br />
                            JETOS<span className="text-[#1ED760] animate-pulse drop-shadow-[0_0_6px_#1ED760]">.</span>
                        </motion.h1>
                        <p className='text-center md:text-left max-w-xl text-gray-600 dark:text-gray-400 font-medium leading-8'>Essa seção é destinada a mostrar meus projetos pessoais e corporativos onde pratico e desenvolvo minhas habilidades.</p>
                    </div> 	

                    <div className='flex flex-col items-center w-full gap-16 mt-8'>
                        {/* PROJETO 1 */}
                        <div className='w-full'>
                            <div className='border-[#32FF5F] text-[#1A4027] dark:text-gray-100 bg-gray-100 dark:bg-gray-800 text-3xl font-black border-l-4 w-full md:w-96 text-left px-4 py-2 rounded-r shadow mb-8'>
                                PROJETO 1<span className='text-[#1ED760]'>.</span>
                            </div>
                            <div className='flex flex-col lg:flex-row items-center gap-8'>
                                <div className="w-full lg:w-1/2"><Carrossel images={[image1, image2, image3]}/></div>
                                <div className='w-full lg:w-1/2'>
                                    <h2 className='text-2xl text-gray-800 dark:text-white font-bold flex items-center gap-2'><span className="w-2 h-4 bg-[#1ED760] inline-block rounded shadow"></span>Projeto Exemplo</h2>
                                    <p className='mt-2 text-gray-600 dark:text-gray-400 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aut.</p>
                                    <h3 className='text-lg text-gray-800 dark:text-white font-bold mt-4 flex items-center gap-2'><span className="w-1 h-3 bg-[#1ED760] inline-block rounded shadow"></span>Tecnologias</h3>
                                    <div className='flex gap-2 flex-wrap mt-2'>
                                        <span className='text-xs text-white shadow-[#1A4027] bg-[#1A4027] border-[#1ED760] border rounded py-1 px-3'>React</span>
                                        <span className='text-xs text-white shadow-[#1A4027] bg-[#1A4027] border-[#1ED760] border rounded py-1 px-3'>Tailwind</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PROJETO 2 */}
                        <div className='w-full'>
                             <div className='border-[#32FF5F] bg-gray-100 dark:bg-gray-800 text-[#1A4027] dark:text-gray-100 text-3xl border-r-4 font-black w-full md:w-96 shadow text-right px-4 py-2 rounded-l ml-auto mb-8'>
                                PROJETO 2<span className='text-[#1ED760]'>.</span>
                            </div>
                            <div className='flex flex-col lg:flex-row-reverse items-center gap-8'>
                                <div className="w-full lg:w-1/2"><Carrossel images={[image1, image2, image3]}/></div>
                                <div className='w-full lg:w-1/2'>
                                    <h2 className='text-2xl text-gray-800 dark:text-white font-bold flex items-center gap-2'><span className="w-2 h-4 bg-[#1ED760] inline-block rounded shadow"></span>Outro Projeto</h2>
                                    <p className='mt-2 text-gray-600 dark:text-gray-400 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aut.</p>
                                    <h3 className='text-lg text-gray-800 dark:text-white font-bold mt-4 flex items-center gap-2'><span className="w-1 h-3 bg-[#1ED760] inline-block rounded shadow"></span>Tecnologias</h3>
                                    <div className='flex gap-2 flex-wrap mt-2'>
                                        <span className='text-xs text-white shadow-[#1A4027] bg-[#1A4027] border-[#1ED760] border rounded py-1 px-3'>Node.js</span>
                                        <span className='text-xs text-white shadow-[#1A4027] bg-[#1A4027] border-[#1ED760] border rounded py-1 px-3'>Express</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="https://github.com/WellingtonSSJr" target='_blank' rel="noopener noreferrer" className='border-2 px-4 py-2 rounded border-[#1ED760] text-gray-800 dark:text-white font-extrabold hover:bg-[#1ED760] hover:text-[#1A4027] transition-colors duration-300'>
                            Veja mais ➔
                        </a>
                    </div>
                </section>

                <span className='w-24 h-2 rounded shadow bg-gray-300 dark:bg-gray-700 my-8 border-[#1ED760] border-2'></span>
                
                {/* SEÇÃO CONTATO */}
                <section id='contatos' className='flex flex-col justify-center items-center gap-8 my-8 w-full max-w-6xl mx-auto min-h-[50vh]'>
                    <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
                        <motion.h1 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="text-5xl font-black text-gray-800 dark:text-white text-left md:text-left">
                            CON<br />
                            TATOS<span className="text-[#1ED760] animate-pulse drop-shadow-[0_0_6px_#1ED760]">.</span>
                        </motion.h1>
                        <p className='text-center md:text-left max-w-xl text-gray-600 dark:text-gray-400 font-medium leading-8'>
                            Gostou do que viu? Entre em contato comigo através das minhas redes sociais ou me envie um e-mail.
                        </p>
                    </div>

                    <Form/>
                </section>
            </main>
        </div>
    ) 
}

export default Home;
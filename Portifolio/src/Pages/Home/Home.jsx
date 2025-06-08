import React from 'react'
import fotoPerfil from './../../assets/images/perfil.jpg'
import logowelldev from './../../assets/images/welldevLogo.svg'
import imageBg from './../../assets/images/imageBgLeft.png'
import image1 from './../../assets/images/imagem1.jpg'
import image2 from './../../assets/images/imagem2.jpg'
import image3 from './../../assets/images/imagem3.jpg'
import git from './../../assets/icons/git.png'
import linkedin from './../../assets/icons/linkedin.png'
import openCloseModalCtt from './../../assets/icons/openCloseModalCtt.svg'
import Carrossel from '../../Components/Carrossel/Carrossel'

function Home() {
      const [menuAberto, setMenuAberto] = React.useState(false);
      const [menuInfoAberto, setMenuInfoAberto] = React.useState(false);
  return (
    <>
        <div className='relative overflow-hidden max-sm:h-fit h-dvh flex flex-col'>
                <img src={imageBg} alt="logo welldev"  className="absolute -z-10 -left-10" />
            <header className="fixed left-0 right-0 flex items-center justify-between px-10 py-6 bg-white shadow-md z-20">
                <div className="min-w-28 h-max p-2 flex items-center gap-3">
                    <img src={fotoPerfil} alt="logo welldev"  className="sm:hidden h-12 w-12 shrink-0 rounded-full" />
                    <img src={logowelldev} alt="logo welldev" className="h-6" />
                </div>

                <button
                    className="sm:hidden text-2xl cursor-pointer text-[#1A4027] relative w-6 h-6 flex items-center justify-center z-50 ms-1 p-2"
                    onClick={() => setMenuAberto(!menuAberto)}
                    >
                    {/* Linha 1 */}
                    <span
                        className={`absolute h-1 w-6 bg-[#1A4027] rounded transition-all duration-300 ${
                        menuAberto ? 'rotate-45' : '-translate-y-2'
                        }`}
                    ></span>

                    {/* Linha 2 */}
                    <span
                        className={`absolute h-1 w-6 bg-[#1A4027] rounded transition-all duration-300 ${
                        menuAberto ? 'opacity-0' : 'opacity-100'
                        }`}
                    ></span>

                    {/* Linha 3 */}
                    <span
                        className={`absolute h-1 w-6 bg-[#1A4027] rounded transition-all duration-300 ${
                        menuAberto ? '-rotate-45' : 'translate-y-2'
                        }`}
                    ></span>
                </button>

            {/* Menu padrão (desktop) */}
            <nav className="hidden sm:block">
                <ul className="flex gap-6 **:text-[#1A4027] font-semibold">
                    <li><a href="/">HOME</a></li>
                    <li><a href="#sobre">SOBRE</a></li>
                    <li><a href="#projetos">PROJETOS</a></li>
                    <li><a href="#contato">CONTATOS</a></li>
                </ul>
            </nav>

            {/* Menu mobile (dropdown) */}
            {menuAberto && (
                <nav
                    className="absolute top-20 right-0 w-52 m-1 rounded bg-[#1ED760] sm:hidden shadow-md  border-[#1A4027]/45 border border-b-4 animate-fade-in !z-15"
                >
                    <ul className="flex flex-col items-center gap-4 p-4 text-[#2C344B] font-semibold">
                    <li><a href="/">HOME</a></li>
                    <li><a href="#sobre">SOBRE</a></li>
                    <li><a href="#projetos">PROJETOS</a></li>
                    <li><a href="#contato">CONTATOS</a></li>
                    </ul>
                </nav>
                )}
            </header> 
            <div className='relative not-only:flex flex-col justify-center items-center bg-[#] py-8  mt-32 h-dvh max-sm:h-fit'>
               <div className='flex flex-col items-center  gap-2 p-2  '>
                    <img src={fotoPerfil} alt="logo welldev"  className="h-36 w-36 shrink-0 rounded-full max-sm:hidden border-[#1ED760] border-1" />
                    <h1 className='text-[#1A4027] font-black max-sm:text-4xl text-5xl max-sm:w-58 text-center p-1 -z-10'>Olá, sou o Wellington!</h1>
                    <p className='max-sm:w-72 w-[40rem] text-center text-[#929292] text-2xl'>Desenvolvedor front-end React Jr. Curioso back-end. E um pouco de full-stack.</p>
               </div>

                <a href="#contato" className='bg-[#1ED760] mt-6 px-6 py-2 rounded shadow text-[#1A4027] font-medium transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>CONTATO</a>

                {/* contato e informações */}
                    <div className={`flex flex-col gap-5 items-center justify-center bg-white absolute -left-2 ${menuInfoAberto ? 'w-18 h-50': 'w-0 h-50' } rounded-br `}>
                        <button className=' flex justify-end absolute top-0 -right-9 w-9 bg-white py-3 rounded-tr rounded-br cursor-pointer'
                            onClick={() => setMenuInfoAberto(!menuInfoAberto)}
                        >
                            {menuInfoAberto ?
                                <img className='rotate-180' src={openCloseModalCtt} alt="icone menu aberto"/> :
                                <img src={openCloseModalCtt} alt="icone menu aberto"/>
                            }
                        </button>
                        <a href=""><img src={git} alt="" srcset="" /></a>
                        <a href=""><img src={linkedin} alt="" srcset="" /></a>
                </div>
            </div> 

                
        </div>
        <main className='flex flex-col items-center gap-5'>
            <span className='w-14 h-2 rounded shadow bg-[#CBCBCB] mb-4 size-8 animate-bounce border-[#1ED760] border-1'></span>
            

            {/* seção sobre */}
            <section id='sobre' className='flex flex-col justify-center items-center gap-15  my-8 w-full h-dvh max-sm:h-fit' >
                <div className='flex items-start gap-8 max-sm:gap-0'>
                    <h1 className='text-5xl rotate-270 font-black text-white '>
                        SO<br/>
                        BRE<span className='text-[#1ED760]'>.</span>
                    </h1>
                    <p className='break-words max-sm:w-fit w-[35rem] text-[#929292] font-bold leading-8'>Nesta seção eu descrevo um pouco de mim. Como me vejo no quesito habilidades e também se tratando de comportamento organizacional.</p>
                </div>

                <div className='flex max-sm:flex-col  flex-row justify-between w-full max-sm:gap-0 gap-5'>
                    <div className='flex  flex-col  w-full h-96 max-sm:h-fit max-sm:py-8 relative'>
                        <div className='border-[#32FF5F] text-[#1A4027] text-3xl font-black border-1 max-sm:w-72 w-96 text-right px-4 py-2 rounded-r shadow absolute border-l-0'>
                            SKILLS<span className='text-[#1ED760]'>.</span>
                        </div>

                        <div className='mt-24 ml-28 max-sm:ml-0 flex flex-wrap   gap-2 gap-x-4 max-sm:justify-center justify-start p-1'>
                            <span className='w-32 text-center text font-bold border-[#1ED760] border-1 bg-[#1E1E1E] text-white p-2 rounded shadow'>SKILLS</span>
                            <span className='w-32 text-center text font-bold border-[#1ED760] border-1 bg-[#1E1E1E] text-white p-2 rounded shadow'>SKILLS</span>
                            <span className='w-32 text-center text font-bold border-[#1ED760] border-1 bg-[#1E1E1E] text-white p-2 rounded shadow'>SKILLS</span>
                            <span className='w-32 text-center text font-bold border-[#1ED760] border-1 bg-[#1E1E1E] text-white p-2 rounded shadow'>SKILLS</span>
                            <span className='w-32 text-center text font-bold border-[#1ED760] border-1 bg-[#1E1E1E] text-white p-2 rounded shadow'>SKILLS</span>
                            <span className='w-32 text-center text font-bold border-[#1ED760] border-1 bg-[#1E1E1E] text-white p-2 rounded shadow'>SKILLS</span>
                            <span className='w-32 text-center text font-bold border-[#1ED760] border-1 bg-[#1E1E1E] text-white p-2 rounded shadow'>SKILLS</span>
                        </div>
                    </div>


                    <div className='w-full h-96 relative'>
                        
                        <div className='w-full h-96 max-sm:h-fit max-sm:py-8 relative flex flex-col items-center'>
                            <div className='border-[#32FF5F] absolute  text-[#1A4027] text-3xl border-1 font-black max-sm:w-72 w-96 shadow text-left  px-4 py-2 rounded-l border-r-0 right-0'>
                            PERFIL<span className='text-[#1ED760]'>.</span>
                            </div>
                            <p className='mt-24 ml-28 max-sm:ml-0  max-sm:leading-8 break-words w-[30rem] max-sm:w-[20rem] text-[#929292] font-bold '>Me considero participativo e comunicativo em equipe. De facíl adaptação, consigo me integrar a rotina e fazer parte do processo.</p>
                            
                        </div>
                    </div>
                </div>
            </section>

            <span className='w-14 h-2 rounded shadow bg-[#CBCBCB] mb-4 size-8 animate-bounce border-[#1ED760] border-1'></span>

                            {/* SEÇÃO PROJETOS */}
            <section id='projetos' className='flex flex-col justify-center items-center gap-15  my-8 w-full max-sm:h-fit '>
                <div className='flex items-start max-sm:gap-0 max-sm:items-center'>
                    <h1 className='text-5xl max-sm:rotate-270  font-black text-white '>
                        PRO<br/>
                        JETOS<span className='text-[#1ED760]'>.</span>
                    </h1>
                    <p className='break-words max-sm:w-fit max-sm:px-3 w-[25rem] text-[#929292] font-bold leading-8 max-sm:leading-7'>Essa seção é destinada a mostrar meus projetos pessoais e corporativos onde pratico e desenvolvo minhas habilidades.</p>
                </div>   

                 <div className='flex max-sm:flex-col  flex-col justify-between w-full max-sm:gap-0 gap-5'>
                    {/* PROJETO 1 */}
                            <div className='flex  flex-col gap-10 w-full h-96  max-sm:h-fit max-sm:py-8 relative '>

                                <div className='border-[#32FF5F] text-[#1A4027] text-3xl font-black border-1 max-sm:w-72 w-96 text-right px-4 py-2 rounded-r shadow absolute border-l-0'>
                                    PROJETO 1<span className='text-[#1ED760]'>.</span>
                                </div>

                                <div className='mt-20 w-fit py-2 px-4 ml-8'>
                                        <Carrossel images={[image1, image2, image3]}/>
                                </div>

                            </div>

                    {/* PROJETO 2 */}
                            <div className='w-full h-96 max-sm:h-fit max-sm:py-8 relative flex flex-col items-center'>
                            <div className='border-[#32FF5F] absolute  text-[#1A4027] text-3xl border-1 font-black max-sm:w-72 w-96 shadow text-left  px-4 py-2 rounded-l border-r-0 right-0'>
                            PROJETO 2<span className='text-[#1ED760]'>.</span>
                            </div>
                            
                            </div>
                 </div>
            </section>

            <span className='w-14 h-2 rounded shadow bg-[#CBCBCB] mb-4 size-8 animate-bounce border-[#1ED760] border-1'></span>
            <section id='contatos' className='flex flex-col justify-center items-center gap-15  my-8 w-full h-dvh max-sm:h-fit'>

            </section>
        </main>
    </>
  ) 
}

export default Home
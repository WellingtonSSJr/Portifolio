import React from 'react'
import fotoPerfil from './../../assets/images/perfil.jpg'
import logowelldev from './../../assets/images/welldevLogo.svg'
import imageBg from './../../assets/images/imageBgLeft.png'
import git from './../../assets/icons/git.png'
import linkedin from './../../assets/icons/linkedin.png'
import openCloseModalCtt from './../../assets/icons/openCloseModalCtt.svg'

function Home() {
      const [menuAberto, setMenuAberto] = React.useState(false);
      const [menuInfoAberto, setMenuInfoAberto] = React.useState(false);
  return (
    <>
        <div className='relative overflow-hidden max-sm:h-fit h-dvh flex flex-col'>
                <img src={imageBg} alt="logo welldev"  className="absolute -z-10 -left-10" />
            <header className="fixed left-0 right-0 flex items-center justify-between px-10 py-6 bg-white shadow-md">
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
                <li><a href="#">HOME</a></li>
                <li><a href="#">SOBRE</a></li>
                <li><a href="#">PROJETOS</a></li>
                <li><a href="#">CONTATOS</a></li>
                </ul>
            </nav>

            {/* Menu mobile (dropdown) */}
            {menuAberto && (
                <nav
                    className="absolute top-20 right-0 w-52 m-1 rounded bg-[#1ED760] sm:hidden shadow-md z-10 border-[#1A4027]/45 border border-b-4 animate-fade-in"
                >
                    <ul className="flex flex-col items-center gap-4 p-4 text-[#2C344B] font-semibold">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SOBRE</a></li>
                    <li><a href="#">PROJETOS</a></li>
                    <li><a href="#">CONTATOS</a></li>
                    </ul>
                </nav>
                )}
            </header> 
            <div className='relative not-only:flex flex-col justify-center items-center bg-[#] py-8  mt-32'>
               <div className='flex flex-col items-center  gap-2 p-2 '>
                    <img src={fotoPerfil} alt="logo welldev"  className="h-36 w-36 shrink-0 rounded-full max-sm:hidden border-[#1ED760] border-1" />
                    <h1 className='text-[#1A4027] font-black max-sm:text-4xl text-5xl max-sm:w-58 text-center p-1'>Olá, sou o Wellington!</h1>
                    <p className='max-sm:w-72 w-[40rem] text-center text-[#929292] text-2xl '>Desenvolvedor front-end React Jr. Curioso back-end. E um pouco de full-stack.</p>
               </div>

                <a href="#contato" className='bg-[#1ED760] mt-6 px-6 py-2 rounded shadow'>CONTATO</a>

                {/* contato e informações */}
                    <div className={`flex flex-col gap-5 items-center justify-center bg-white absolute -left-2 ${menuInfoAberto ? 'w-18 h-50': 'w-0 h-50' }   rounded-br `}>
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
    </>
  ) 
}

export default Home
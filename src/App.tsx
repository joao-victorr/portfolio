import { MaquinaDeEscrever } from './Componentes/maquinaDeEsquecer';
import webIcon from './assets/web.svg';
import rocktCofferBanner from './assets/banner/rocktCofferBanner.png';
import calculadoraBanner from './assets/banner/calculadoraBanner.png';

import { RenderSkills } from './Componentes/reanderSkills';
import { ScrollCustom } from './Componentes/scrollCustom';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const [sectionPositions, setSectionPositions] = useState({
    home: 0,
    about: 0,
    skills: 0,
    projects: 0,
  });

  useEffect(() => {
    const updateSectionPositions = () => {
      setSectionPositions({
        home: homeRef.current ? homeRef.current.offsetTop : 0,
        about: aboutRef.current ? aboutRef.current.offsetTop : 0,
        skills: skillsRef.current ? skillsRef.current.offsetTop : 0,
        projects: projectsRef.current ? projectsRef.current.offsetTop : 0,
      });
    };

    updateSectionPositions();
  
    window.addEventListener('resize', updateSectionPositions);

    return () => {
      window.removeEventListener('resize', updateSectionPositions);
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <body className="relative bg-danger w-screen h-full min-h-screen">
      <div className="
        absolute top-0 left-1/2 transform -translate-x-1/2
        max-w-screen-md w-full h-20 bg-danger
      ">
        <nav className="w-full h-full">
        <ul className='flex flex-row justify-around items-center gap-4 text-white h-full'>
          <li><a href="#" onClick={() => scrollToSection(homeRef)}>Home</a></li>
          <li><a href="#" onClick={() => scrollToSection(aboutRef)}>About</a></li>
          <li><a href="#" onClick={() => scrollToSection(projectsRef)}>Projects</a></li>
          <li><a href="#" onClick={() => scrollToSection(skillsRef)}>Skills</a></li>
          {/* <li><a href="#" onClick={() => scrollToSection(contactRef)}>Contact</a></li> */}
        </ul>
        </nav>
      </div>
      <div className="max-w-screen-md h-full m-auto">
        <main>
          {/* Home */}
          <section ref={homeRef} className="
            relative w-full h-screen
            flex flex-col justify-center items-start
          ">
            <h1 className="
                text-6xl text-white
              ">
                Olá, eu sou <br /> João Víctor Rodrigues
              </h1>

              <MaquinaDeEscrever 
                text="<Desenvolvedor Web FullStack />"
                className='text-3xl text-secondary'
              />
            <ScrollCustom 
              refScroll={sectionPositions}
            />
          </section>

          <section  className='w-full h-screen flex flex-col justify-between'>
            {/* About */}
            <article ref={aboutRef} className='relative flex-1 flex flex-col justify-center'>
              <h2 className="text-4xl  text-secondary mb-4">
                &lt;Sobre mim /&gt;
              </h2>

              <p className="
                text-xl text-white
              ">
                Meu nome é João Victor Rodrigues e eu sou um apaixonado por tecnologia que decidiu trilhar o caminho da programação.
                <br /><br />
                Atualmente estou cursando análise e desenvolvimento de sistemas (ADS) e focando no desenvolvimento FullStack.
              </p>
              <div className="text-3xl font-mono relative">
                <MaquinaDeEscrever 
                text="<JavaScript/>"
                className='text-secondary'
              />
              </div>
              <ScrollCustom 
                refScroll={sectionPositions}
              />
            </article>

            {/* Skills */}
            <div ref={skillsRef} className='relative flex-1 flex flex-col justify-center'>
              <h2 className='text-4xl mb-4 text-secondary'>
                &lt;Skills /&gt;
              </h2>
              <RenderSkills 
                className='flex flex-row justify-center flex-wrap gap-4 '
              />
              <ScrollCustom 
                refScroll={sectionPositions}
              />
            </div>
          </section>

          <section ref={projectsRef} className='relative w-full h-screen flex flex-col justify-center'>
            {/* Projetos */}
            <article>
              <h1 className='text-4xl mb-4 text-secondary'>  &lt;Projetos /&gt;</h1>
              
              <div className='flex flex-row justify-between flex-wrap gap-8'>
                
                <a href='https://joao-victorr.github.io/RocketCoffee/' target='_blank' className='
                  w-[23rem] h-[14rem] rounded-lg relative transition-transform transform hover:scale-110
                '>
                  <img src={rocktCofferBanner} alt="" className='absolute w-full h-full rounded-lg' />
                  <div className='relative rounded-lg w-full h-full flex flex-col justify-center items-center gap-2 z-10 backdrop-blur-md transition-all duration-500 hover:backdrop-blur-none hover:opacity-0 '>
                    <h4 className='text-xl text-white'>Rocket Coffer</h4>
                    <span className='flex gap-2 flex-row justify-center items-center flex-wrap'>
                      <img src={webIcon} alt="" className='w-10' /> 
                    </span>
                  </div>
                </a>

                <a href='https://calculadora-eta-nine.vercel.app/' target='_blank' className='
                  w-[23rem] h-[14rem] rounded-lg relative transition-transform transform hover:scale-110
                '>
                  <img src={calculadoraBanner} alt="" className='absolute w-full h-full rounded-lg' />
                  <div className='relative rounded-lg w-full h-full flex flex-col justify-center items-center gap-2 z-10 backdrop-blur-md transition-all duration-500 hover:backdrop-blur-none hover:opacity-0 '>
                    <h4 className='text-xl text-white'>Calculadora</h4>
                    <span className='flex gap-2 flex-row justify-center items-center flex-wrap'>
                      <img src={webIcon} alt="" className='w-10' /> 
                    </span>
                  </div>
                </a>
                
              </div>
            </article>

            {/* Scroll */} 
            <ScrollCustom 
              refScroll={sectionPositions}
            />
          </section>

        </main>

        <footer className=" w-full max-w-screen-md h-10 text-center items-center m-auto mt-10">
          <p>
            &copy; 2024 <a href="#">João Víctor Rodrigues</a>
          </p>
        </footer>
      </div>
    </body>
  );
}

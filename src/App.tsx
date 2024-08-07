
import { MaquinaDeEscrever } from './Componentes/maquinaDeEsquecer';
import webIcon from './assets/web.svg';
import rocktCofferBanner from './assets/banner/rocktCofferBanner.png';
import nodejsIcon from './assets/nodejs.svg';
import reactIcon from './assets/react.svg';

import { RenderSkills } from './Componentes/reanderSkills';

export default function App() {
  return (

  
    <body className="bg-danger w-screen h-full min-h-screen">
      <div className="
        fixed top-0 left-1/2 transform -translate-x-1/2
        w-full max-w-screen-md h-20 bg-danger
      ">
        <nav className="w-full h-full">
          <ul className="flex flex-row justify-around items-center gap-4 text-white h-full">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="max-w-screen-md h-full m-auto">
        <main>
          {/* Home */}
          <section className="
            w-full h-screen
            flex flex-col justify-center items-start
          ">
            <div>
              <h1 className="
                text-6xl text-white
              ">
                Olá, eu sou <br /> João Víctor Rodrigues
              </h1>

              <MaquinaDeEscrever 
                text="<Desenvolvedor Web FullStack />"
                className='text-3xl text-secondary'
              />
            </div>
          </section>

          
          <section className='w-full h-screen flex flex-col justify-between'>
            {/* Abount */}
            <div className='flex-1 flex flex-col justify-center'>
              <h2 className="
                  text-4xl mb-4 text-secondary
                ">
                &lt;Sobre mim /&gt;
              </h2>

              <p className="
                text-xl text-white
              ">
                Meu nome é João Victor Rodrigues e eu sou um apaixonado por tecnologia que decidiu trilhar o caminho da programação. Trabalhei com projetos envolvendo gestão educacional, APIs e banco de dados.
                <br /><br />
                Atualmente estou cursando análise e desenvolvimento de sistemas (ADS) e focando no desenvolvimento FullStack.
              </p>
              <div className="text-3xl  font-mono relative">
                <MaquinaDeEscrever 
                text="<JavaScript/>"
                className='text-secondary'
              />
              </div>
            </div>

            {/* Skills */}
            <div className='flex-1 flex flex-col justify-center'>
              <h2 className='text-4xl mb-4 text-secondary'>
                &lt;Skills /&gt;
              </h2>
                <RenderSkills 
                  className='flex flex-row gap-4'
                />
              
            </div>
          </section>

          <section className='w-full h-screen flex flex-col justify-center'>
            {/* Projetos */}
            <article>
              <h1 className='text-4xl mb-4 text-secondary'>  &lt;Projetos /&gt;</h1>
              
              <div className=' flex flex-row justify-between flex-wrap gap-8'>
                <div className='
                  w-[23rem] h-[14rem] rounded-lg relative transition-transform transform hover:scale-110
                '>
                  <img src={rocktCofferBanner} alt="" className='absolute w-full h-full rounded-lg' />
                  <div className='relative rounded-lg w-full h-full flex flex-col justify-center items-center gap-2 z-10 backdrop-blur-md transition-all duration-500 hover:backdrop-blur-none hover:opacity-0 '>
                    <h4 className='text-xl text-white'>Rocker Coffer</h4>
                    <span className='flex gap-2 flex-row justify-center items-center flex-wrap'>
                      <img src={webIcon} alt="" className='w-10' /> 
                    </span>
                  </div>
                </div>
              </div>

              
            </article>
          </section>

        </main>

        

      <footer className="m-auto mt-10 w-full max-w-screen-md h-10 text-center items-center">
        <p>
          &copy; 2024  <a href="#">João Víctor Rodrigues</a>
        </p>
      </footer>
      </div>
    </body>
  );

  
}

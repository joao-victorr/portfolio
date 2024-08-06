// import { useEffect, useState } from 'react';
import { MaquinaDeEscrever } from './Componentes/maquinaDeEsquecer';
// import gitIcon from "./assets/git.svg";
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
                Olá, me chamo <br /> João Víctor Rodrigues
              </h1>

              <MaquinaDeEscrever 
                text="<Desenvolvedor Web Full Stack />"
                className='text-3xl text-secondary'
              />
            </div>
          </section>

          
          <section className='w-full h-scree flex flex-col  gap-8'>
            {/* Abount */}
            <div>
              <h2 className="
                text-4xl m-4 text-secondary
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
            <div>
              <h2 className='text-4xl m-4 text-secondary'>
              &lt;Skills /&gt;
              </h2>
                <RenderSkills 
                  className='flex flex-row gap-4'
                />
              
            </div>
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

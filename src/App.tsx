import { MaquinaDeEscrever } from "./Componentes/maquinaDeEsquecer";
import webIcon from "./assets/web.svg";
import rocktCofferBanner from "./assets/banner/rocktCofferBanner.png";
import calculadoraBanner from "./assets/banner/calculadoraBanner.png";

import { RenderSkills } from "./Componentes/reanderSkills";
import { ScrollCustom } from "./Componentes/scrollCustom";
import { useEffect, useRef, useState } from "react";
import { Form } from "./Componentes/form";

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

    window.addEventListener("resize", updateSectionPositions);

    return () => {
      window.removeEventListener("resize", updateSectionPositions);
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <body className="relative h-full min-h-screen w-screen bg-danger">
      <nav className="fixed left-1/2 top-0 z-10 h-20 w-full max-w-screen-md -translate-x-1/2 bg-danger">
        <ul className="flex h-full flex-row items-center justify-around gap-4 text-white">
          <li>
            <a href="#" onClick={() => scrollToSection(homeRef)}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection(aboutRef)}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection(projectsRef)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection(skillsRef)}>
              Skills
            </a>
          </li>
          {/* <li><a href="#" onClick={() => scrollToSection(contactRef)}>Contact</a></li> */}
        </ul>
      </nav>
      <div className="relative m-auto h-full max-w-screen-md">
        <ScrollCustom refScroll={sectionPositions} />
        <main className="relative flex flex-col px-8">
          {/* Home */}
          <section ref={homeRef} className="flex min-h-screen w-full flex-col items-start justify-center py-14">
            <h1
              className="
                text-6xl text-white
              "
            >
              Olá, eu sou <br /> João Víctor Rodrigues
            </h1>

            <MaquinaDeEscrever text="<Desenvolvedor Web FullStack />" className="text-3xl text-secondary" />
            {/* <ScrollCustom refScroll={sectionPositions} /> */}
          </section>

          {/* About */}
          <section ref={aboutRef} className="flex min-h-[50vh] w-full flex-col justify-center py-14">
            <h2 className="mb-4 text-4xl text-secondary">&lt;Sobre mim /&gt;</h2>

            <p
              className="
              text-xl text-white
            "
            >
              Meu nome é João Victor Rodrigues e eu sou um apaixonado por tecnologia que decidiu trilhar o caminho da
              programação.
              <br />
              <br />
              Atualmente estou cursando análise e desenvolvimento de sistemas (ADS) e focando no desenvolvimento
              FullStack.
            </p>
            <div className="relative font-mono text-3xl">
              <MaquinaDeEscrever text="<JavaScript/>" className="text-secondary" />
            </div>
            {/* <ScrollCustom refScroll={sectionPositions} /> */}
          </section>

          {/* Skills */}
          <section ref={skillsRef} className="flex min-h-[50vh] w-full flex-col justify-center py-14">
            <h2 className="mb-4 text-4xl text-secondary">&lt;Skills /&gt;</h2>
            <RenderSkills className="flex flex-row flex-wrap justify-center gap-4 " />
            {/* <ScrollCustom refScroll={sectionPositions} /> */}
          </section>

          {/* Projetos */}
          <section ref={projectsRef} className="flex min-h-[50vh] w-full flex-col justify-center py-14">
            <h1 className="mb-4 text-4xl text-secondary"> &lt;Projetos /&gt;</h1>

            <div className="flex flex-row flex-wrap justify-evenly gap-x-4 gap-y-8">
              <a
                href="https://joao-victorr.github.io/RocketCoffee/"
                target="_blank"
                className="
                  relative h-52 w-80 rounded-lg transition-transform hover:scale-110
                "
                rel="noreferrer"
              >
                <img src={rocktCofferBanner} alt="" className="absolute size-full rounded-lg" />
                <div className="relative z-10 flex size-full flex-col items-center justify-center gap-2 rounded-lg backdrop-blur-md transition-all duration-500 hover:opacity-0 hover:backdrop-blur-none ">
                  <h4 className="text-xl text-white">Rocket Coffer</h4>
                  <span className="flex flex-row flex-wrap items-center justify-center gap-2">
                    <img src={webIcon} alt="" className="w-10" />
                  </span>
                </div>
              </a>

              <a
                href="https://calculadora-eta-nine.vercel.app/"
                target="_blank"
                className="
                  relative h-52 w-80 rounded-lg transition-transform hover:scale-110
                "
                rel="noreferrer"
              >
                <img src={calculadoraBanner} alt="" className="absolute size-full rounded-lg" />
                <div className="relative z-10 flex size-full flex-col items-center justify-center gap-2 rounded-lg backdrop-blur-md transition-all duration-500 hover:opacity-0 hover:backdrop-blur-none ">
                  <h4 className="text-xl text-white">Calculadora</h4>
                  <span className="flex flex-row flex-wrap items-center justify-center gap-2">
                    <img src={webIcon} alt="" className="w-10" />
                  </span>
                </div>
              </a>
            </div>
          </section>

          {/* Contato */}
          <section className="flex min-h-[50vh] w-full flex-col justify-center py-14">
            <h1 className="mb-4 text-4xl text-secondary"> &lt;Contato /&gt;</h1>
            <Form />
          </section>
        </main>

        <footer className=" m-auto mt-10 h-10 w-full max-w-screen-md items-center text-center">
          <p>
            &copy; 2024 <a href="#">João Víctor Rodrigues</a>
          </p>
        </footer>
      </div>
    </body>
  );
}

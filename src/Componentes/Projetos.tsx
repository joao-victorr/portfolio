import bannerRocketCoffee from "../assets/banner/rocktCofferBanner.png";
import bannerCalculator from "../assets/banner/calculadoraBanner.png";

import webIcon from "../assets/web.svg";

type DataProjections = Array<{
  id: number;
  name: string;
  banner: string;
  icon: Array<string>;
  link: string;
}>;

const dataProjections: DataProjections = [
  {
    id: 1,
    name: "Rocket Coffee",
    banner: bannerRocketCoffee,
    icon: [webIcon],
    link: "https://joao-victorr.github.io/RocketCoffee/",
  },
  {
    id: 2,
    name: "Calculadora",
    banner: bannerCalculator,
    icon: [webIcon],
    link: "https://calculadora-eta-nine.vercel.app/",
  },
];

export const Projetos = () => {
  return (
    <div className="flex flex-row flex-wrap justify-evenly gap-x-4 gap-y-8">
      {dataProjections.map((projection) => {
        return (
          <a
            href={projection.link}
            target="_blank"
            key={projection.id} // Adicionando uma key única aqui
            className="
              relative h-52 w-80 rounded-lg transition-transform hover:scale-110
            "
            rel="noreferrer"
          >
            <img src={projection.banner} alt={`${projection.name} banner`} className="absolute size-full rounded-lg" />{" "}
            <div className="relative z-10 flex size-full flex-col items-center justify-center gap-2 rounded-lg backdrop-blur-md transition-all duration-500 hover:opacity-0 hover:backdrop-blur-none ">
              <h4 className="text-xl text-white">{projection.name}</h4>
              <span className="flex flex-row flex-wrap items-center justify-center gap-2">
                {projection.icon.map((icon, index) => (
                  <img src={icon} alt={`${projection.name} icon ${index + 1}`} className="w-10" key={index} />
                ))}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

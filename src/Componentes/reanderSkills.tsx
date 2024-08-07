import nodeIcon from "../assets/nodejs.svg";
import gitIcon from "../assets/git.svg";
import reactIcon from "../assets/react.svg";
import typescriptIcon from "../assets/typescript.svg";
import webIcon from "../assets/web.svg";

type JsonSkills = {
  name: string
  description: string
  img: string
}

const SkillJson: Array<JsonSkills> = [
  {
    name: "NodeJS",
    description: "Node.js é um ambiente de execução JavaScript para backend, usado para criar servidores e aplicações escaláveis.",
    img: nodeIcon
  },
  {
    name: "Git",
    description: "Git é um sistema de controle de versão para rastrear mudanças no código-fonte.",
    img: gitIcon
  },
  {
    name: "TypeScript",
    description: "TypeScript é um superconjunto de JavaScript que adiciona tipagem estática, ajudando a prevenir erros.",
    img: typescriptIcon
  },
  {
    name: "React",
    description: "React é uma biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis.",
    img: reactIcon
  },
  {
    name: "HTML CSS JS",
    description: "React é uma biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis.",
    img: webIcon
  }
]

export const RenderSkills = (props: {className: string}) => {
  const skillsItem = SkillJson.map((skills, index) => {
    return (
      <div key={index} className='w-52 h-52 text-white bg-[#2B2E41] flex flex-col gap-3 justify-center p-3 rounded-lg'>
        <img src={skills.img} className='w-10 h-10' alt={skills.name} />
        <h4 className='text-lg'>{skills.name}</h4>
        <p className='text-sm overflow-hidden overflow-ellipsis whitespace-normal line-clamp-4'>{skills.description}</p>
      </div>
    );
  });

  return (
    <div className={props.className}>
      {skillsItem}
    </div>
  );
}

import nodeIcon from "../assets/nodejs.svg";
import gitIcon from "../assets/git.svg";
import reactIcon from "../assets/react.svg";
import typescriptIcon from "../assets/typescript.svg";
import webIcon from "../assets/web.svg";
import dockerIcon from "../assets/docker.svg";
import mongoDBIcon from "../assets/mongodbIcon.svg";
import sqlIcon from "../assets/sql.svg";

type JsonSkills = {
  name: string
  description: string
  img: string
}
const SkillJson: Array<JsonSkills> = [
  {
    name: "NodeJS",
    description: "Ambiente de execução JavaScript para backend.",
    img: nodeIcon
  },
  {
    name: "Git",
    description: "Sistema de controle de versão para código.",
    img: gitIcon
  },
  {
    name: "TypeScript",
    description: "Superconjunto de JavaScript com tipagem estática.",
    img: typescriptIcon
  },
  {
    name: "React",
    description: "Biblioteca JavaScript para interfaces de usuário.",
    img: reactIcon
  },
  {
    name: "HTML CSS JS",
    description: "Tecnologias básicas da web.",
    img: webIcon
  },
  {
    name: "Docker",
    description: "Plataforma de containerização para aplicações.",
    img: dockerIcon
  },
  {
    name: "MongoDB",
    description: "Banco de dados NoSQL orientado a documentos.",
    img: mongoDBIcon
  },
  {
    name: "SQL",
    description: "Linguagem para gerenciamento de bancos de dados.",
    img: sqlIcon
  }
];

export const RenderSkills = (props: {className: string}) => {
  const skillsItem = SkillJson.map((skills, index) => {
    return (
      <div key={index} className='max-w-36 max-h-44 text-white bg-[#2B2E41] flex flex-col gap-3 justify-center p-3 rounded-lg'>
        <img src={skills.img} className='w-10 h-10' alt={skills.name} />
        <h4 className='text-lg truncate'>{skills.name}</h4>
        <p className='text-sm overflow-hidden overflow-ellipsis whitespace-normal line-clamp-3'>{skills.description}</p>
      </div>
    );
  });

  return (
    <div className={props.className}>
      {skillsItem}
    </div>
  );
}

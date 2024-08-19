import nodeIcon from "../assets/nodejs.svg";
import gitIcon from "../assets/git.svg";
import reactIcon from "../assets/react.svg";
import typescriptIcon from "../assets/typescript.svg";
import webIcon from "../assets/web.svg";
import dockerIcon from "../assets/docker.svg";
import mongoDBIcon from "../assets/mongodbIcon.svg";
import sqlIcon from "../assets/sql.svg";

type JsonSkills = {
  name: string;
  description: string;
  img: string;
};
const SkillJson: Array<JsonSkills> = [
  {
    name: "NodeJS",
    description: "Ambiente de execução JavaScript para backend.",
    img: nodeIcon,
  },
  {
    name: "Git",
    description: "Sistema de controle de versão para código.",
    img: gitIcon,
  },
  {
    name: "TypeScript",
    description: "Superconjunto de JavaScript com tipagem estática.",
    img: typescriptIcon,
  },
  {
    name: "React",
    description: "Biblioteca JavaScript para interfaces de usuário.",
    img: reactIcon,
  },
  {
    name: "HTML CSS JS",
    description: "Tecnologias básicas da web.",
    img: webIcon,
  },
  {
    name: "Docker",
    description: "Plataforma de containerização para aplicações.",
    img: dockerIcon,
  },
  {
    name: "MongoDB",
    description: "Banco de dados NoSQL orientado a documentos.",
    img: mongoDBIcon,
  },
  {
    name: "SQL",
    description: "Linguagem para gerenciamento de bancos de dados.",
    img: sqlIcon,
  },
];

export const RenderSkills = (props: { className: string }) => {
  const skillsItem = SkillJson.map((skills, index) => {
    return (
      <div
        key={index}
        className="flex max-h-44 max-w-36 flex-col justify-center gap-3 rounded-lg bg-[#2B2E41] p-3 text-white"
      >
        <img src={skills.img} className="size-10" alt={skills.name} />
        <h4 className="truncate text-lg">{skills.name}</h4>
        <p className="line-clamp-3 overflow-hidden text-ellipsis whitespace-normal text-sm">{skills.description}</p>
      </div>
    );
  });

  return <div className={props.className}>{skillsItem}</div>;
};

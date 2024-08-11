import { useEffect, useState } from "react";

type ElementRef = {
  startElement: number;
  endElement: number;
};

type RefScroll = {
  home: ElementRef;
  about: ElementRef;
  skills: ElementRef;
  projects: ElementRef;
  footer: ElementRef;
};

export const ScrollCustom = (props: { refScroll: RefScroll }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (possitionScroll: number) => {
    window.scrollTo({
      top: possitionScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className={`absolute right-0 z-10 h-full w-4`}>
      <div className="fixed flex h-screen w-1 flex-col items-center justify-center">
        <div className="flex size-full h-48 flex-col items-center justify-between rounded-md bg-[#4C4E64]">
          {/* Home */}
          <span
            onClick={() => {
              handleClick(props.refScroll.home.startElement);
            }}
            className={`${
              scrollY >= props.refScroll.home.startElement && scrollY < props.refScroll.home.endElement
                ? "bg-secondary"
                : "bg-[#4C4E64]"
            } inline-block size-4 rounded-xl border-2 border-secondary`}
          ></span>
          {/* Abount */}
          <span
            onClick={() => {
              handleClick(props.refScroll.about.startElement);
            }}
            className={`${
              scrollY >= props.refScroll.about.startElement && scrollY < props.refScroll.about.endElement
                ? "bg-secondary"
                : "bg-[#4C4E64]"
            } inline-block size-4 rounded-xl border-2 border-secondary`}
          ></span>
          {/* Skills */}
          <span
            onClick={() => {
              handleClick(props.refScroll.skills.startElement);
            }}
            className={`${
              scrollY >= props.refScroll.skills.startElement && scrollY < props.refScroll.skills.endElement
                ? "bg-secondary"
                : "bg-[#4C4E64]"
            } inline-block size-4 rounded-xl border-2 border-secondary`}
          ></span>
          {/* Projects */}
          <span
            onClick={() => {
              handleClick(props.refScroll.projects.startElement);
            }}
            className={`${
              scrollY >= props.refScroll.projects.startElement && scrollY <= props.refScroll.projects.endElement
                ? "bg-secondary"
                : "bg-[#4C4E64]"
            } inline-block size-4 rounded-xl border-2 border-secondary`}
          ></span>
        </div>
      </div>
    </div>
  );
};

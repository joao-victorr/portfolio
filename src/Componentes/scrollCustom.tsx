import { useEffect, useState } from "react";

type RefScroll = {
  home: number;
  about: number;
  skills: number;
  projects: number;
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
    window.scrollTo({ top: possitionScroll, behavior: "smooth" });
  };

  return (
    <div className="absolute right-0 z-10 h-full w-4">
      <div className="fixed flex h-screen w-1 flex-col items-center justify-center">
        <div className="flex size-full h-48 flex-col items-center justify-between rounded-md bg-[#4C4E64]">
          <span
            onClick={() => {
              handleClick(props.refScroll.home);
            }}
            className={`${props.refScroll.home === scrollY ? "bg-secondary" : "bg-none"}  inline-block size-4 rounded-xl border-2 border-secondary`}
          ></span>
          <span className="inline-block h-12 w-1 bg-[#4C4E64]"></span>
          <span
            onClick={() => {
              handleClick(props.refScroll.about);
            }}
            className={`${props.refScroll.about === scrollY ? "bg-secondary" : "bg-none"}  inline-block size-4 rounded-xl border-2 border-secondary`}
          ></span>
          <span className="inline-block h-12 w-1 bg-[#4C4E64]"></span>
          <span
            onClick={() => {
              handleClick(props.refScroll.skills);
            }}
            className={`${props.refScroll.skills === scrollY ? "bg-secondary" : "bg-none"}  inline-block size-4 rounded-xl border-2 border-secondary`}
          ></span>
          <span className="inline-block h-12 w-1 bg-[#4C4E64]"></span>
          <span
            onClick={() => {
              handleClick(props.refScroll.projects);
            }}
            className={`${props.refScroll.projects === scrollY ? "bg-secondary" : "bg-none"}  inline-block size-4 rounded-xl border-2 border-secondary`}
          ></span>
        </div>
      </div>
    </div>
  );
};

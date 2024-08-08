import { useEffect, useState } from "react"

type RefScroll = {
  home: number
  about: number
  skills: number
  projects: number
}

export const ScrollCustom = (props: {refScroll: RefScroll}) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("ScrollY", scrollY);
    console.log(props.refScroll);
  }, [scrollY]);


  const handleClick = (possitionScroll: number) => {
    window.scrollTo({ top: possitionScroll, behavior: 'smooth' });
  }



  return (
    <div className='absolute -right-10 mt-[50%] mb-[50%] flex flex-col items-center'>
      <span onClick={() => {handleClick(props.refScroll.home)}} className={`${props.refScroll.home == scrollY ? "bg-secondary" : "bg-none"}  border-secondary border-2 w-4 h-4 inline-block rounded-xl`}></span>
      <span className='bg-[#4C4E64] w-1 h-12 inline-block'></span>
      <span onClick={() => {handleClick(props.refScroll.about)}} className={`${props.refScroll.about == scrollY ? "bg-secondary" : "bg-none"}  border-secondary border-2 w-4 h-4 inline-block rounded-xl`}></span>
      <span className='bg-[#4C4E64] w-1 h-12 inline-block'></span>
      <span onClick={() => {handleClick(props.refScroll.skills)}}className={`${props.refScroll.skills == scrollY ? "bg-secondary" : "bg-none"}  border-secondary border-2 w-4 h-4 inline-block rounded-xl`}></span>
      <span className='bg-[#4C4E64] w-1 h-12 inline-block'></span>
      <span onClick={() => {handleClick(props.refScroll.projects)}}className={`${props.refScroll.projects == scrollY ? "bg-secondary" : "bg-none"}  border-secondary border-2 w-4 h-4 inline-block rounded-xl`}></span>
    </div>
  )
}
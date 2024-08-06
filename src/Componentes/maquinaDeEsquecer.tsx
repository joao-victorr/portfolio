import { useEffect, useState } from "react";

export const MaquinaDeEscrever = (props: {text: string, className: string}) => {
  const [text, setText] = useState("") 
  
  const escreverNaTela = (text: string, i = 0) => {

    if(i < text.length) {
      setText(text.slice(0, i + 1))
      setTimeout(() => escreverNaTela(text, i + 1), 200)
    } else {
      setText("")
    }
  }

  const interval = (props.text.length * 200) + 1200
  useEffect(() => {
    setInterval(() => escreverNaTela(props.text), interval)
    
  }, [])
  
  return (
    <div className={props.className}>
      {text}
      <span className="animate-ping">|</span>
    </div>
   )

}
import emailjs from "@emailjs/browser";

import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const parameters = {
      name,
      email,
      message,
    };
    const serviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLATEID;
    const publicId = import.meta.env.VITE_PUBLICID;

    const res = await emailjs.send(serviceId, templateId, parameters, publicId);

    if (res.status === 200) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="Digite o seu nome"
        className="rounded-md border-none bg-primary p-2 text-white outline-none"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Digite o seu Email"
        className=" rounded-md border-none bg-primary p-2 text-white outline-none"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <textarea
        placeholder="Digite uma mensagem"
        className="h-40 min-h-20 rounded-md border-none bg-primary p-2 text-white outline-none"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button type="submit" className="rounded-md bg-secondary outline-none">
        Enviar
      </button>
    </form>
  );
};

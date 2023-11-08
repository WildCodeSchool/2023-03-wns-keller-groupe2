import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./contact.scss";

import { useRef } from "react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w6bb867",
        "template_rea863v",
        form.current!,
        "tNbx8uOV8UB-sQyZv"
      )
      ?.then(() => {
        Swal.fire({
          title: "Message envoyé",
          text: "Nous reviendrons vers vous au plus vite",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
    e.target.reset();
  };
  return (
    <div className="contact-padding">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h1 className="contact-title">Contactez-nous !</h1>
        <input className="contact-input" placeholder="Nom" type="text" />
        <input className="contact-input" placeholder="E-mail" type="email" />
        <textarea className="contact-input" placeholder="Message" />
        <button className="contact-button">Envoyer</button>
      </form>
    </div>
  );
}

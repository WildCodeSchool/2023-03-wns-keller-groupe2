import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./contact.scss";

import { useRef } from "react";
import CustomForm from "../../Components/CustomForm/CustomForm";

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
      <CustomForm
        ref={form}
        onSubmit={sendEmail}
        title="Contactez-nous !"
        buttonText="Envoyer"
        fields={[
          { type: "text", placeholder: "Nom" },
          { type: "email", placeholder: "E-mail" },
          { type: "textarea", placeholder: "Message" },
        ]}
      />
    </div>
  );
}

import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [contato, setContato] = useState(false);
  const handleClick = () => {
    setContato(true);
  };
  return (
    <section className="bodyForm">
      {contato ? <h2>Vamos conversar</h2> : ""}
      <div className="formRead">
        <h2>Vamos conversar</h2>
        <p>
          Entrarei em contato com você via e-mail, não esqueça de verificar a
          caixa Span !
        </p>
      </div>
    </section>
  );
}

export default Contact;

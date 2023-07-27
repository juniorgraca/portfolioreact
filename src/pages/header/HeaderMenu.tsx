import React, { useState, useEffect, useRef, AreaHTMLAttributes } from "react";
import Contact from "../contact/Contact";
import styles from "./HeaderMenu.module.css";
import "./Menu.css";
import backg from "/src/backg.svg";
type bar = {
  navBar: boolean;
};

export const HeaderMenu = ({ navBar }: bar) => {
  const [contact, setContact] = useState<boolean>(false);

  const handleScrollTest = (event: any) => {
    if (scrollY >= 0) {
      scrollTo(0, 0);
    }
  };
  useEffect(() => {}, [contact]);

  const handleContact = () => {
    setContact(true);
  };

  const handleClickPai = (event: React.MouseEvent) => {
    event.stopPropagation();
    setContact(false);
  };

  const handleClickFilho = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      {contact ? (
        <div className="contactAlou" onClick={handleClickPai}>
          <div className="formRead" onClick={handleClickFilho}>
            <h2>Vamos conversar</h2>
            <p>
              Entrarei em contato com você via e-mail, não esqueça de verificar
              a caixa Span !
            </p>
          </div>
          Test
        </div>
      ) : (
        ""
      )}

      <section className={contact ? "headerAfter" : "headerInicial"}>
        <div className={styles.containerHeader}>
          <div className={styles.menuContainer}>
            <div className={styles.logo}> Junior Carlos</div>
            <div className={navBar ? "menuOn" : "menuOf"}>
              <p className="fa-2x">
                <i className="fa-solid fa-bars"></i>
              </p>
            </div>
            <div className={navBar ? "contact" : "contactRmv"}>
              <button onClick={handleContact} className="btnCont">
                Contact
              </button>
            </div>
          </div>
          <div className={styles.inicialContent}>
            <p className={styles.locale}>
              <span></span>Campo Grande - MS (Brasil)
            </p>
          </div>
          <div className={styles.textContent}>
            <p className={styles.helo}>Olá, eu sou </p>
            <h1 className={styles.name}>Carlos Jr</h1>
            <p className={styles.descr}>Front-end Developer</p>
            <p className={styles.initialText}>
              Sou desenvolvedor front-end e designer gráfico. Possuo experiência
              em desenvolvimento, além de habilidades em design gráfico, como
              criação de layouts e edição de imagens.
            </p>
            <button className={styles.btn}>
              <a
                href="https://www.linkedin.com/in/j%C3%BAnior-carlos-b22094240/"
                target="_blank"
              >
                <p>Linkedin</p>
              </a>
            </button>
            <button className={styles.btn}>
              <a href="https://github.com/carlosjr-dev" target="_blank">
                <p>GitHub</p>
              </a>
            </button>
            <button className={styles.btn}>
              <p>Contato</p>
            </button>
          </div>
        </div>
        <div className={styles.imgbo}></div>
      </section>
    </>
  );
};

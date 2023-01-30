import styles from "./HeaderMenu.module.css";

export const HeaderMenu = () => {
  return (
    <section className={styles.headerInicial}>
      <div className={styles.containerHeader}>
        <div className={styles.menuContainer}>
          <div className={styles.logo}> Junior Carlos</div>
          <div className={styles.contact}>
            <p>CONTACT</p>
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
            criação de layouts e edição de imagens.{" "}
          </p>
          <button className={styles.btn}>
            {" "}
            <p>Linkedin</p>
          </button>{" "}
          <button className={styles.btn}>
            {" "}
            <p>GitHub</p>
          </button>
          <button className={styles.btn}>
            {" "}
            <p>Contato</p>
          </button>
          <div></div>
        </div>
      </div>
    </section>
  );
};

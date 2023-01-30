import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skillsContainer}>
        <p className={styles.textDesc}>Minhas</p>
        <p className={styles.text}>Hábilidades</p>

        <div className={styles.skillItemContainer}>
          <div className={styles.skillsItem}>
            <div className={styles.yearLine}>
              <div className={styles.line1}> </div>
              <p className={styles.lineTextPrincipal}>1 Ano</p>

              <div className={styles.line2}></div>
              <p className={styles.lineText}>2 Anos</p>

              <div className={styles.line3}> </div>
              <p className={styles.lineText}>3 Anos +</p>
            </div>
            <p className={styles.textSkilContainerHtml}>HTML</p>
            <div className={styles.html}></div>
            <p className={styles.textSkilContainer}>CSS</p>
            <div className={styles.css}></div>
            <p className={styles.textSkilContainer}>Javascript</p>
            <div className={styles.js}></div>
            <p className={styles.textSkilContainer}>Php</p>
            <div className={styles.php}></div>
            <p className={styles.textSkilContainer}>UI/UX</p>
            <div className={styles.ui}></div>
            <p className={styles.textSkilContainer}>Joomla</p>
            <div className={styles.jom}></div>

            <div className={styles.skillLegend}>
              <div className={styles.legendTotal}></div>{" "}
              <p className={styles.legendText}>Total</p>
              <div className={styles.legendFav}></div>
              <p className={styles.legendText}>Favorita</p>
              <div className={styles.legendWork}></div>
              <p className={styles.legendText}>Trabalhando</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

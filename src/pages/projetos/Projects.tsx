import styles from "./Projects.module.css";
import { project } from "../../hooks/project";

export const Projetos = () => {
  return (
    <ul className={styles.test}>
      <section className={styles.projects}>
        <div className={styles.containerStyles}>
          <p className={styles.textDesc}>Um pouco dos</p>
          <p className={styles.text}>Meus Projetos</p>
          {project.map((item, index) => (
            <ul key={index}>
              <div className={styles.containerProjects}>
                <div className={styles.bodyProjectsLeft}>
                  <div className={styles.projectTest}>
                    <div
                      style={{
                        backgroundImage: `url(${item.img})`,
                      }}
                      className={styles.groundProjects}
                    ></div>
                    <div className={styles.title}>
                      <h3>{item.title}</h3>
                    </div>
                    <p className={styles.textoProjects}>{item.description}</p>
                  </div>
                </div>
              </div>
            </ul>
          ))}
        </div>
      </section>
    </ul>
  );
};

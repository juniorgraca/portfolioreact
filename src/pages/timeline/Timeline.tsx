import styles from "./Timeline.module.css";

export const Timeline = () => {
  return (
    <section className={styles.containerTimeline}>
      <div className={styles.timeline}>
        <div className={styles.timelineline}>
          <div className={styles.timelineText}>
            <p className={styles.startTimeline}>Start</p>
            <p className={styles.textInitialTimeline}>Minha carreira</p>
            <div className={styles.colorAwesome}>
              <div className="fa-3x">
                <i className="fa-solid fa-user-graduate"></i>
              </div>
            </div>
          </div>

          <div className={styles.initialTimeline}>
            <div className={styles.lefContainer}>
              <div className={styles.icon}>
                <p className="fa-3x">
                  <i className="fa-brands fa-blogger-b"></i>
                </p>
              </div>
              <div className={styles.titleTagL}>Blogger</div>
              <div className={styles.titleCommentL}>Um Garoto curioso </div>
              <div className={styles.circle}></div>
              <div className={styles.lefContainerGround}>
                <p className={styles.textContainer}>
                  Tudo que eu fazia antes voltado para "telas" era o que sabia
                  sobre o então blogger, apaixonado por Templates. Já fazia
                  minhas primeiras modificações no HTML e no CSS.
                </p>
              </div>
            </div>

            <div className={styles.rightContainer}>
              <div className={styles.iconRig}>
                <p className="fa-3x">
                  <i className="fa-brands fa-php"></i>
                </p>
              </div>
              <div className={styles.titleTagL}>PHP</div>
              <div className={styles.titleCommentL}>Primeiro Contato </div>
              <div className={styles.circle}></div>
              <div className={styles.lefContainerGround}>
                <p className={styles.textContainerRig}>
                  Com o conhecimento na criação de Bloggers, tive contato pela
                  primeira vez com ma linguagem de programação, o PHP, onde tive
                  pouco proveito, porém, foi uma experiência muito legal..
                </p>
              </div>
            </div>

            <div className={styles.lefContainer}>
              <div className={styles.icon}>
                <p className="fa-3x">
                  <i className="fa-solid fa-pen-nib"></i>
                </p>
              </div>
              <div className={styles.titleTagL}>Designer Gráfico</div>
              <div className={styles.titleCommentLDes}>O tão esperado </div>
              <div className={styles.circle}></div>
              <div className={styles.lefContainerGround}>
                <p className={styles.textContainer}>
                  O Exército Brasileiro me proporcionou um dos cursos que mais
                  queria, o curso de Designer Gráfico, concluindo o curso eu já
                  sábia o que queria fazer, então foi só começar a me dedicar..
                </p>
              </div>
            </div>

            <div className={styles.rightContainer}>
              <div className={styles.iconRigJoom}>
                <p className="fa-3x">
                  <i className="fa-brands fa-joomla"></i>
                </p>
              </div>
              <div className={styles.titleTagL}>Joomla</div>
              <div className={styles.titleCommentL}>Dinâmica </div>
              <div className={styles.circle}></div>
              <div className={styles.lefContainerGround}>
                <p className={styles.textContainerRig}>
                  O Exército Brasileiro novamente me proporcionou um curso
                  voltado para criação de site dinâmicos e responsivos, com o
                  curso de Designer Gráfico comecei a pôr em prática meus
                  conhecimentos..
                </p>
              </div>
            </div>

            <div className={styles.lefContainer}>
              <div className={styles.icon}>
                <p className="fa-3x">
                  <i className="fa-brands fa-square-js"></i>
                </p>
              </div>
              <div className={styles.titleTagL}>Javascript</div>
              <div className={styles.titleCommentL}>O queridinho </div>
              <div className={styles.circle}></div>
              <div className={styles.lefContainerGround}>
                <p className={styles.textContainer}>
                  Então cheguei ao tão esperado JavaScript, com um pouco de
                  dificuldade, porem nada que eu não pudesse aprender.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

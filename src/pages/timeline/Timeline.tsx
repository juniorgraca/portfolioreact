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
            <div className={styles.arrow}>
              <p className="fa-2x">
                <i className="fa-solid fa-angle-down"></i>
              </p>
            </div>
            <div className={styles.lefBlogger}>
              <div className={styles.dot}></div>
              <div className={styles.iconBlogger}>
                <p className="fa-3x">
                  <i className="fa-brands fa-blogger-b"></i>
                </p>
              </div>
              <div className={styles.lineBlogger}></div>
              <div className={styles.titleTagBlogger}>Blogger</div>
              <div className={styles.titleCommentBlogger}>
                Um Garoto curioso
              </div>
              <div className={styles.circleBlogger}></div>
              <div className={styles.lefContainerBlogger}>
                <p className={styles.textContainerBlogger}>
                  Tudo que eu fazia antes voltado para "telas" era o que sabia
                  sobre o então blogger, apaixonado por Templates. Já fazia
                  minhas primeiras modificações no HTML e no CSS.
                </p>
              </div>
            </div>

            <div className={styles.lefPhp}>
              <div className={styles.iconPhp}>
                <p className="fa-3x">
                  <i className="fa-regular fa-file-powerpoint"></i>
                </p>
              </div>
              <div className={styles.linePhp}></div>
              <div className={styles.titleTagPhp}>PHP</div>
              <div className={styles.titleCommentPhp}>Primeiro Contato </div>
              <div className={styles.circlePhp}></div>
              <div className={styles.lefContainerPhp}>
                <p className={styles.textContainerPhp}>
                  Com o conhecimento na criação de Bloggers, tive contato pela
                  primeira vez com ma linguagem de programação, o PHP, onde tive
                  pouco proveito, porém, foi uma experiência muito legal.
                </p>
              </div>
            </div>

            <div className={styles.lefContainerDsg}>
              <div className={styles.iconDsg}>
                <p className="fa-3x">
                  <i className="fa-solid fa-pen-nib"></i>
                </p>
              </div>
              <div className={styles.lineDsg}></div>
              <div className={styles.titleTagDsg}>Designer Gráfico</div>
              <div className={styles.titleCommentDsg}>O tão esperado </div>
              <div className={styles.circle}></div>
              <div className={styles.lefContainerGround}>
                <p className={styles.textContainerDsg}>
                  O Exército Brasileiro me proporcionou um dos cursos que mais
                  queria, o curso de Designer Gráfico, concluindo o curso eu já
                  sábia o que queria fazer, então foi só começar a me dedicar.
                </p>
              </div>
            </div>

            <div className={styles.lefJoom}>
              <div className={styles.iconJoom}>
                <p className="fa-3x">
                  <i className="fa-brands fa-joomla"></i>
                </p>
              </div>
              <div className={styles.lineJoom}></div>
              <div className={styles.titleTagJoom}>Joomla</div>
              <div className={styles.titleCommentJoom}>Dinâmica </div>
              <div className={styles.circle}></div>
              <div className={styles.lefContainerJoom}>
                <p className={styles.textContainerJoom}>
                  O Exército Brasileiro novamente me proporcionou um curso
                  voltado para criação de site dinâmicos e responsivos, com o
                  curso de Designer Gráfico comecei a pôr em prática meus
                  conhecimentos.
                </p>
              </div>
            </div>

            <div className={styles.lefContainer}>
              <div className={styles.iconJs}>
                <p className="fa-3x">
                  <i className="fa-brands fa-square-js"></i>
                </p>
              </div>
              <div className={styles.lineJs}></div>
              <div className={styles.titleTagJs}>Javascript</div>
              <div className={styles.titleCommentJs}>O queridinho </div>
              <div className={styles.circle}></div>
              <div className={styles.lefContainerJs}>
                <p className={styles.textContainerJs}>
                  Então cheguei ao tão esperado JavaScript, com um pouco de
                  dificuldade, porem nada que eu não pudesse aprender.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.timelineTextEnd}>Não é o Fim !</div>
      </div>
    </section>
  );
};

// Fichier de la page About
//
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import Icon from "../../components/Icon.jsx"
import about from "../../content/about.js"
import style from "./about.module.css"

export default function About() {
    return (
        <main className={style.about}>
            <header className={style.header}>
                <div>
                    <p className={style.eyebrow}>01 / À PROPOS</p>
                    <h1 className={style.title}>{about.title}</h1>
                    <p className={style.tagline}>{about.tagline}</p>
                </div>
                <div className={style.returnButton}>
                    <BtnRetour Label="Accueil" To="/" Compact />
                </div>
            </header>

            <section className={style.story} aria-label="Mon parcours">
                <article className={style.row}>
                    <div className={style.textBlock}>
                        <span className={style.rowIndex}>
                            <Icon name="code" set="gentle" size={16} />
                            01 / MES DÉBUTS
                        </span>
                        <p className={style.paragraph}>{about.paragraph["D'ou je viens"]}</p>
                    </div>
                    <div className={style.visualStage}>
                        <img
                            className={style.visualImage}
                            src="/assets/Images/Enfant_devant_PC.jpg"
                            alt="Enfant assis devant un ordinateur portable"
                        />
                        <span className={style.visualLabel}>MES DÉBUTS</span>
                    </div>
                </article>
                <article className={style.row}>
                    <div className={style.textBlock}>
                        <span className={style.rowIndex}>
                            <Icon name="book-open" set="gentle" size={16} />
                            02 / MA FORMATION
                        </span>
                        <p className={style.paragraph}>{about.paragraph["Ma situation actuelle"]}</p>
                    </div>
                    <div className={style.visualStage}>
                        <img
                            className={style.visualImage}
                            src="/assets/Images/Lucas_Shooting.jpg"
                            alt="Lucas lors d'une séance photo"
                        />
                        <span className={style.visualLabel}>MOI</span>
                    </div>
                </article>
                <article className={style.row}>
                    <div className={style.textBlock}>
                        <span className={style.rowIndex}>
                            <Icon name="target" set="gentle" size={16} />
                            03 / MES OBJECTIFS
                        </span>
                        <p className={style.paragraph}>{about.paragraph["Ce que je vise dans le futur"]}</p>
                    </div>
                    <div className={style.visualStage}>
                        <img
                            className={style.visualImage}
                            src="/assets/Images/Futur.jpg"
                            alt="Une personne avançant dans un rayon de lumière"
                        />
                        <span className={style.visualLabel}>AVENIR</span>
                    </div>
                </article>
                <article className={style.row}>
                    <div className={style.textBlock}>
                        <span className={style.rowIndex}>
                            <Icon name="heart" set="gentle" size={16} />
                            04 / MES PASSIONS
                        </span>
                        <p className={style.paragraph}>{about.paragraph["Mes autres passions que le code"]}</p>
                    </div>
                    <div className={style.visualStage}>
                        <img
                            className={style.visualImage}
                            src="/assets/Images/Passions.jpg"
                            alt="Illustration de mes passions en dehors du code"
                        />
                        <span className={style.visualLabel}>PASSIONS</span>
                    </div>
                </article>
            </section>
        </main>
    )
}

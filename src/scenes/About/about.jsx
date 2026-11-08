// Fichier de la page About
//
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import Icon from "../../components/Icon.jsx"
import about from "../../content/about.js"
import style from "./About.module.css"

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
                        <span className={style.visualLabel}>ZONE VISUELLE · 01</span>
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
                        <span className={style.visualLabel}>ZONE VISUELLE · 02</span>
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
                        <span className={style.visualLabel}>ZONE VISUELLE · 03</span>
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
                        <span className={style.visualLabel}>ZONE VISUELLE · 04</span>
                    </div>
                </article>
            </section>
        </main>
    )
}

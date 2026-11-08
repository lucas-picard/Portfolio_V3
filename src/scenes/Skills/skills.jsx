// Fichier de la page Skills
//
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import Icon from "../../components/Icon.jsx"
import skills from "../../content/skills.js"
import style from "./Skills.module.css"

export default function Skills() {
    return (
        <main className={style.skills}>
            {/* En-tête avec le titre, la description et le bouton d'accueil */}
            <header className={style.header}>
                <div>
                    <p className={style.eyebrow}>02 / SAVOIR-FAIRE</p>
                    <h1 className={style.title}>{skills.title}</h1>
                    <p className={style.tagline}>{skills.tagline}</p>
                </div>
                <div className={style.returnButton}>
                    <BtnRetour Label="Accueil" To="/" Compact />
                </div>
            </header>

            {/* Chaque carte regroupe une catégorie, sa zone 3D et ses compétences */}
            <section className={style.categoryGrid} aria-label="Compétences techniques">
                {/* Langages de programmation et technologies web */}
                <article className={style.card}>
                    <header className={style.cardHeader}>
                        <span className={style.cardEyebrow}>CATÉGORIE</span>
                        <h2><Icon name="code" set="gentle" />{skills.langages.title}</h2>
                    </header>
                    <div className={style.objectStage} aria-hidden="true" />
                    <ul className={style.skillList}>
                        <li>{skills.langages.cpp}</li>
                        <li>{skills.langages.python}</li>
                        <li>{skills.langages.csharp}</li>
                        <li>{skills.langages.bash}</li>
                        <li>{skills.langages.java}</li>
                        <li>{skills.langages.html}</li>
                        <li>{skills.langages.css}</li>
                        <li>{skills.langages.js}</li>
                    </ul>
                </article>

                {/* Électronique et matériel programmable */}
                <article className={style.card}>
                    <header className={style.cardHeader}>
                        <span className={style.cardEyebrow}>CATÉGORIE</span>
                        <h2><Icon name="cpu" set="gentle" />{skills.hardware.title}</h2>
                    </header>
                    <div className={style.objectStage} aria-hidden="true" />
                    <ul className={style.skillList}>
                        <li>{skills.hardware.arduino}</li>
                        <li>{skills.hardware.raspberry}</li>
                        <li>{skills.hardware.esp32}</li>
                        <li>{skills.hardware.electronique}</li>
                        <li>{skills.hardware.pcb_design}</li>
                    </ul>
                </article>

                {/* Protocoles, adressage et équipements réseau */}
                <article className={style.card}>
                    <header className={style.cardHeader}>
                        <span className={style.cardEyebrow}>CATÉGORIE</span>
                        <h2><Icon name="network" set="gentle" />{skills.systemes_reseau.title}</h2>
                    </header>
                    <div className={style.objectStage} aria-hidden="true" />
                    <ul className={style.skillList}>
                        <li>{skills.systemes_reseau.tcpip}</li>
                        <li>{skills.systemes_reseau.i2c}</li>
                        <li>{skills.systemes_reseau.adressageIP}</li>
                        <li>{skills.systemes_reseau.equipement}</li>
                        <li>{skills.systemes_reseau.virtualisation}</li>
                        <li>{skills.systemes_reseau.domotique}</li>
                    </ul>
                </article>

                {/* Logiciels et outils de développement */}
                <article className={style.card}>
                    <header className={style.cardHeader}>
                        <span className={style.cardEyebrow}>CATÉGORIE</span>
                        <h2><Icon name="terminal" set="gentle" />{skills.outils.title}</h2>
                    </header>
                    <div className={style.objectStage} aria-hidden="true" />
                    <ul className={style.skillList}>
                        <li>{skills.outils.git}</li>
                        <li>{skills.outils.linux}</li>
                        <li>{skills.outils.unity}</li>
                        <li>{skills.outils.godot}</li>
                        <li>{skills.outils.blender}</li>
                        <li>{skills.outils.maker}</li>
                    </ul>
                </article>
            </section>

            {/* Qualités personnelles présentées sous forme d'étiquettes */}
            <section className={style.softSkills} aria-labelledby="soft-skills-title">
                <h2 id="soft-skills-title">
                    <Icon name="heart" set="gentle" />
                    {skills.soft_skills.title}
                </h2>
                <ul>
                    <li>{skills.soft_skills.travail_equipe}</li>
                    <li>{skills.soft_skills.gestion_projet}</li>
                    <li>{skills.soft_skills.autonomie}</li>
                    <li>{skills.soft_skills.adaptabilite}</li>
                    <li>{skills.soft_skills.curiosite}</li>
                </ul>
            </section>
        </main>
    )
}

// Fichier de la page Journey
//
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import Icon from "../../components/Icon.jsx"
import journey from "../../content/journey.js"
import style from "./journey.module.css"

export default function Journey() {
    return (
        <main className={style.journey}>
            {/* En-tête de la page et navigation de retour */}
            <header className={style.header}>
                <div>
                    <p className={style.eyebrow}>03 / CHRONOLOGIE</p>
                    <h1 className={style.title}>{journey.title}</h1>
                    <p className={style.tagline}>{journey.tagline}</p>
                    <p className={style.command}>{journey.commande}</p>
                </div>

                <div className={style.returnButton}>
                    <BtnRetour Label="Accueil" To="/" Compact />
                </div>
            </header>

            {/* Recherche actuelle présentée en premier sur la chronologie */}
            <section
                className={`${style.timelineSection} ${style.searchSection}`}
                aria-labelledby="search-title"
            >
                <h2 className={style.sectionTitle} id="search-title">
                    <Icon name="briefcase" set="gentle" />
                    {journey.recherche.title}
                </h2>

                <div className={style.timeline}>
                    <article className={`${style.entry} ${style.searchEntry}`}>
                        <span className={style.entryType}>RECHERCHE · {journey.recherche.date}</span>
                        <h3>
                            {journey.recherche.actuel.subtitle} — {journey.recherche.actuel.lieu}
                        </h3>
                        <p className={style.entryDate}>{journey.recherche.actuel.Dates}</p>
                        <p className={style.description}>
                            {journey.recherche.actuel.description}
                        </p>
                        <p className={style.searchMore}>
                            {journey.recherche.actuel.plus}
                        </p>
                    </article>
                </div>
            </section>

            {/* Formations et diplômes */}
            <section className={style.timelineSection} aria-labelledby="education-title">
                <h2 className={style.sectionTitle} id="education-title">
                    <Icon name="book-open" set="gentle" />
                    {journey.formations.title}
                </h2>

                <div className={style.timeline}>
                    <article className={`${style.entry} ${style.educationEntry}`}>
                        <span className={style.entryType}>FORMATION</span>
                        <h3>
                            {journey.formations.actuel.subtitle} — {journey.formations.actuel.lieu}
                        </h3>
                        <p className={style.entryDate}>{journey.formations.actuel.Dates}</p>
                        <p className={style.description}>
                            {journey.formations.actuel.description}
                        </p>
                    </article>

                    <article className={`${style.entry} ${style.educationEntry}`}>
                        <span className={style.entryType}>DIPLÔME</span>
                        <h3>
                            {journey.formations.brevet.subtitle} — {journey.formations.brevet.lieu}
                        </h3>
                        <p className={style.entryDate}>{journey.formations.brevet.Dates}</p>
                        <p className={style.description}>
                            {journey.formations.brevet.description}
                        </p>
                    </article>

                    <article className={`${style.entry} ${style.educationEntry}`}>
                        <span className={style.entryType}>CERTIFICATION</span>
                        <h3>{journey.formations.psc1.subtitle} — {journey.formations.psc1.lieu}</h3>
                        <p className={style.entryDate}>{journey.formations.psc1.Dates}</p>
                        <p className={style.description}>
                            {journey.formations.psc1.description}
                        </p>
                    </article>
                </div>
            </section>

            {/* Expériences en entreprise */}
            <section className={style.timelineSection} aria-labelledby="internships-title">
                <h2 className={style.sectionTitle} id="internships-title">
                    <Icon name="briefcase" set="gentle" />
                    {journey.stages.title}
                </h2>

                <div className={style.timeline}>
                    <article className={`${style.entry} ${style.experienceEntry}`}>
                        <span className={style.entryType}>STAGE · {journey.stages.rsp.annee}</span>
                        <h3>
                            {journey.stages.rsp.poste} — {journey.stages.rsp.subtitle},{" "}
                            {journey.stages.rsp.lieu}
                        </h3>
                        <p className={style.entryDate}>{journey.stages.rsp.durer}</p>
                        <p className={style.description}>{journey.stages.rsp.description}</p>
                    </article>

                    <article className={`${style.entry} ${style.experienceEntry}`}>
                        <span className={style.entryType}>
                            STAGE · {journey.stages.sainte_marie.annee}
                        </span>
                        <h3>
                            {journey.stages.sainte_marie.poste} — {journey.stages.sainte_marie.subtitle},{" "}
                            {journey.stages.sainte_marie.lieu}
                        </h3>
                        <p className={style.entryDate}>{journey.stages.sainte_marie.durer}</p>
                        <p className={style.description}>
                            {journey.stages.sainte_marie.description}
                        </p>
                    </article>

                    <article className={`${style.entry} ${style.experienceEntry}`}>
                        <span className={style.entryType}>
                            STAGE · {journey.stages.distry_matic.annee}
                        </span>
                        <h3>
                            {journey.stages.distry_matic.poste} — {journey.stages.distry_matic.subtitle},{" "}
                            {journey.stages.distry_matic.lieu}
                        </h3>
                        <p className={style.entryDate}>{journey.stages.distry_matic.durer}</p>
                        <p className={style.description}>
                            {journey.stages.distry_matic.description}
                        </p>
                    </article>
                </div>
            </section>

            {/* Emplois saisonniers et expériences professionnelles */}
            <section className={style.timelineSection} aria-labelledby="jobs-title">
                <h2 className={style.sectionTitle} id="jobs-title">
                    <Icon name="user" set="gentle" />
                    {journey.jobs.title}
                </h2>

                <div className={style.timeline}>
                    <article className={`${style.entry} ${style.jobEntry}`}>
                        <span className={style.entryType}>EMPLOI · {journey.jobs.super_u.annee}</span>
                        <h3>
                            {journey.jobs.super_u.poste} — {journey.jobs.super_u.title},{" "}
                            {journey.jobs.super_u.lieu}
                        </h3>
                        <p className={style.entryDate}>{journey.jobs.super_u.durer}</p>
                        <p className={style.description}>{journey.jobs.super_u.description}</p>
                    </article>

                    <article className={`${style.entry} ${style.jobEntry}`}>
                        <span className={style.entryType}>EMPLOI</span>
                        <h3>
                            {journey.jobs.pharmacie.poste} — {journey.jobs.pharmacie.title},{" "}
                            {journey.jobs.pharmacie.lieu}
                        </h3>
                        <p className={style.entryDate}>{journey.jobs.pharmacie.durer}</p>
                        <p className={style.description}>{journey.jobs.pharmacie.description}</p>
                    </article>
                </div>
            </section>
        </main>
    )
}

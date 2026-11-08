// Fichier des détails des projets
//
// ========================================================================

import Icon from "../../components/Icon.jsx"
import ProjectModel from "./ProjectModel.jsx"
import style from "./Projects.module.css"

export default function ProjectDetail({ project, model, onBack }) {
    return (
        <div className={style.detailPage}>
            {/* Nom du projet et retour à la grille */}
            <header className={style.detailHeader}>
                <div>
                    <h1 className={style.detailTitle}>{project.title}</h1>
                    <p className={style.detailSubtitle}>{project.subtitle}</p>
                </div>
                <button className={style.backToProjects} type="button" onClick={onBack}>
                    <Icon name="arrow-left" size={16} />
                    PROJETS
                </button>
            </header>
            {/* Le modèle 3D accompagne les informations détaillées. */}
            <div className={style.detailLayout}>
                <div className={style.detailVisual}>
                    <ProjectModel file={model} />
                </div>

                <div className={style.detailContent}>
                    {/* Présentation du projet */}
                    <section className={style.detailSection}>
                        <h2>
                            <Icon name="book-open" set="gentle" size={16} />
                            CONTEXTE
                        </h2>
                        <p>{project.context}</p>
                    </section>

                    {/* Description technique et difficultés rencontrées */}
                    <section className={style.detailSection}>
                        <h2>
                            <Icon name="code" set="gentle" size={16} />
                            CE QUI A ÉTÉ CONSTRUIT
                        </h2>
                        <p>{project.built}</p>
                    </section>

                    <section className={style.detailSection}>
                        <h2>
                            <Icon name="target" set="gentle" size={16} />
                            DÉFIS &amp; SOLUTIONS
                        </h2>
                        <p>{project.problemSolution}</p>
                    </section>

                    {project.bug && project.bug !== "À définir." && (
                        <section className={style.detailSection}>
                            <h2>
                                <Icon name="terminal" set="gentle" size={16} />
                                BUG → CAUSE → CORRECTIF
                            </h2>
                            <p>{project.bug}</p>
                        </section>
                    )}

                    {/* Technologies, état du projet et liens */}
                    <section className={style.detailSection}>
                        <h2>
                            <Icon name="cpu" set="gentle" size={16} />
                            TECHNOLOGIES
                        </h2>
                        <ul className={style.detailStack}>
                            {project.stack.map((technology) => (
                                <li key={technology}>{technology}</li>
                            ))}
                        </ul>
                    </section>

                    <p className={style.detailStatus}>
                        <span aria-hidden="true" />
                        {project.status}
                    </p>

                    <div className={style.detailLinks}>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <Icon name="github" size={18} />
                                VOIR LE PROJET
                                <Icon name="arrow-right" size={16} />
                            </a>
                        )}
                        {project.codewars && (
                            <a href={project.codewars} target="_blank" rel="noreferrer">
                                <Icon name="globe" size={18} />
                                PROFIL CODEWARS
                                <Icon name="arrow-right" size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

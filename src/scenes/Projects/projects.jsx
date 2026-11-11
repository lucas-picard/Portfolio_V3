// Fichier de la page Projects
//
// ========================================================================

import { useEffect, useState } from "react"
import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import Icon from "../../components/Icon.jsx"
import projects from "../../content/project.js"
import ProjectDetail from "./ProjectDetail.jsx"
import ProjectModel from "./ProjectModel.jsx"
import style from "./projects.module.css"

// Les contenus viennent de project.js ; cette liste ajoute une catégorie d'affichage.
const projectList = [
    { data: projects.bladeclicker, category: "SYSTÈMES EMBARQUÉS", model: "calculatrice.glb" },
    { data: projects.codewars, category: "ALGORITHMES", model: "projet-codewars.glb" },
    { data: projects.iaNeuronal1, category: "INTELLIGENCE ARTIFICIELLE", model: "projet-ia-neuronal1.glb" },
    { data: projects.loginSecure, category: "DÉVELOPPEMENT WEB", model: "projet-login-secure.glb" },
    { data: projects.portfolioV3, category: "WEB & 3D", model: "projet-portfolio-v3.glb" },
    { data: projects.rubberDucky, category: "SYSTÈMES EMBARQUÉS", model: "projet-rubber-ducky.glb" },
]

// Choisit le nombre de cartes à afficher selon la largeur disponible.
function getProjectsPerPage() {
    if (window.innerWidth <= 560) return 1
    if (window.innerWidth <= 850) return 2
    return 3
}



export default function Projects() {
    // page : page active ; selectedProject : fiche ouverte, ou null dans la liste.
    const [page, setPage] = useState(0)
    const [selectedProject, setSelectedProject] = useState(null)
    const [projectsPerPage, setProjectsPerPage] = useState(getProjectsPerPage)

    // Recalcule la grille quand la largeur de la fenêtre ou de l'iframe change.
    useEffect(() => {
        function updatePageSize() {
            setProjectsPerPage(getProjectsPerPage())
            setPage(0)
        }

        window.addEventListener("resize", updatePageSize)
        return () => window.removeEventListener("resize", updatePageSize)
    }, [])

    // Calcule la portion de la liste visible sur cette page.
    const firstProject = page * projectsPerPage
    const pageCount = Math.ceil(projectList.length / projectsPerPage)
    const visibleProjects = projectList.slice(firstProject, firstProject + projectsPerPage)
    const lastProject = Math.min(firstProject + projectsPerPage, projectList.length)

    // Affiche la fiche sélectionnée à la place de la grille.
    if (selectedProject !== null) {
        return (
            <main className={style.projects}>
                <ProjectDetail
                    project={projectList[selectedProject].data}
                    model={projectList[selectedProject].model}
                    onBack={() => setSelectedProject(null)}
                />
            </main>
        )
    }

    return (
        <main className={style.projects}>
            {/* Titre de page et lien de retour à l'accueil */}
            <header className={style.header}>
                <div>
                    <h1 className={style.title}>{projects.title}</h1>
                    <p className={style.tagline}>{projects.description}</p>
                </div>
                <div className={style.returnButton}>
                    <BtnRetour Label="Retour" To="/" Compact />
                </div>
            </header>

            {/* Liste des projets */}
            <section className={style.projectGrid} aria-label="Choisir un projet">
                {visibleProjects.map(({ data, category, model }, index) => {
                    const projectIndex = firstProject + index

                    return (
                        <article className={style.projectCard} key={data.title}>
                            <span className={style.cardNumber}>
                                {projects.labels[projectIndex]}
                            </span>
                            <div className={style.projectVisual}>
                                <ProjectModel file={model} />
                            </div>
                            <div className={style.cardContent}>
                                <p className={style.cardCategory}>{category}</p>
                                <h2>{data.title}</h2>
                                <p className={style.cardDescription}>
                                    {data.text || data.subtitle}
                                </p>
                                {/* Quelques technologies en aperçu */}
                                <ul className={style.cardStack} aria-label="Technologies principales">
                                    {data.stack.slice(0, 3).map((technology) => (
                                        <li key={technology}>{technology}</li>
                                    ))}
                                </ul>
                                <button
                                    className={style.openProjectButton}
                                    type="button"
                                    onClick={() => setSelectedProject(projectIndex)}
                                >
                                    VOIR LE PROJET
                                    <Icon name="arrow-right" size={16} />
                                </button>
                            </div>
                        </article>
                    )
                })}
            </section>

            {/* Navigation entre les pages */}
            <nav className={style.pagination} aria-label="Navigation des projets">
                <button
                    className={style.paginationButton}
                    type="button"
                    onClick={() => setPage((current) => (current - 1 + pageCount) % pageCount)}
                >
                    <Icon name="arrow-left" size={16} />
                    PRÉC.
                </button>
                <span aria-live="polite">
                    {String(firstProject + 1).padStart(2, "0")}–
                    {String(lastProject).padStart(2, "0")}
                    {" / "}
                    {String(projectList.length).padStart(2, "0")}
                </span>
                <button
                    className={style.paginationButton}
                    type="button"
                    onClick={() => setPage((current) => (current + 1) % pageCount)}
                >
                    SUIV.
                    <Icon name="arrow-right" size={16} />
                </button>
            </nav>
        </main>
    )
}

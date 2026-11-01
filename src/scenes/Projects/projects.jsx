// Fichier de la page Projects
// 
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"

export default function Projects() {
    return (
        <main className="projects">
            <h1>Projets</h1>
            <BtnRetour Label={ "Retour à l'accueil" } To={ '/' }/>
        </main>
    )
}
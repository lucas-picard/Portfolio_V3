// Fichier de la page Projects
// 
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import Icon from "../../components/Icon.jsx"

export default function Projects() {
    return (
        <main className="projects">
            <h1><Icon name="code" set="gentle" />Projets</h1>
            <BtnRetour Label={ "Retour à l'accueil" } To={ '/' }/>
        </main>
    )
}
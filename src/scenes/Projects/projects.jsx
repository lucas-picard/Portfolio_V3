// Fichier de la page Projects
// 
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import { Externe } from "../../config/routes.jsx"

export default function Projects() {
    return (
        <main className="projects">
            <h1>Projets</h1>
            <BtnRetour Label={ Externe[0].label } To={ Externe[0].path }/>
        </main>
    )
}
// Fichier de la page Skills
// 
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import { Externe } from "../../config/routes.jsx"

export default function Skills() {
    return (
        <main className="skills">
            <h1>Compétences</h1>
            <BtnRetour Label={ Externe[0].label } To={ Externe[0].path }/>
        </main>
    )
}
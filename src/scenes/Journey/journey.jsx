// Fichier de la page Journey
// 
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import { Externe } from "../../config/routes.jsx"

export default function Journey() {
    return (
        <main className="journey">
            <h1>Parcours</h1>
            <BtnRetour Label={ Externe[0].label } To={ Externe[0].path }/>
        </main>
    )
}
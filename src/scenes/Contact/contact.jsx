// Fichier de la page Contact
// 
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import { Externe } from "../../config/routes.jsx"

export default function Contact() {
    return (
        <main className="contact">
            <h1>Contact</h1>
            <BtnRetour Label={ Externe[0].label } To={ Externe[0].path }/>
        </main>
    )
}
// Fichier de la page About
// 
// ========================================================================

import style from "./About.module.css"
import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import { Externe } from "../../config/routes.jsx"

export default function About() {
    return (
        <main className="about">
            <h1>À propos</h1>
            <BtnRetour Label={ Externe[0].label } To={ Externe[0].path }/>
          
        </main>
    )
}
// Fichier de la page About
// 
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"

export default function About() {
    return (
        <main className="about">
            <h1>À propos</h1>
            <BtnRetour Label={ "Retour à l'accueil" } To={ '/' }/>
          
        </main>
    )
}
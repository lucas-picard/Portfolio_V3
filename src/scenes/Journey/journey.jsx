// Fichier de la page Journey
// 
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"

export default function Journey() {
    return (
        <main className="journey">
            <h1>Parcours</h1>
            <BtnRetour Label={ "Retour à l'accueil" } To={ '/' }/>
        </main>
    )
}
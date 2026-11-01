// Fichier de la page Contact
// 
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"

export default function Contact() {
    return (
        <main className="contact">
            <h1>Contact</h1>
            <BtnRetour Label={ "Retour à l'accueil" } To={ '/' }/>
        </main>
    )
}
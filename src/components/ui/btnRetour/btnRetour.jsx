// Fichier du bouton de retour à la page d'accueil
// 
// ========================================================================

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import style from "./btnRetour.module.css"

export default function BtnRetour() {

    const handleClick = () => {
        // Redirige vers la page d'accueil
        window.location.href = "/";
    }

    return (
        <button className={style.btnRetour} onClick={handleClick}>
            Retour à l'accueil
        </button>
    )
}
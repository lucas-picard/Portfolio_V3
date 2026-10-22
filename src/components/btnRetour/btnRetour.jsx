// Fichier du bouton de retour à la page d'accueil
// 
// ========================================================================

import { Link } from "react-router-dom"
import { Externe } from "../../../config/routes.jsx"
import style from "./btnRetour.module.css"

export default function BtnRetour() {
  return (
    <div className={ style.btnRetour }>
      <Link className={ style.lien } to={Externe[0].path}>{Externe[0].label}</Link>
    </div>
  )
}
// Fichier du bouton de retour à la page d'accueil
// 
// ========================================================================

import { Link } from "react-router-dom"
import style from "./btnRetour.module.css"

export default function BtnRetour({ Label, To}) {
  return (
    <div className={ style.btnRetour }>
      {/*Lien vers accueil */}
      <Link className={ style.lien } to={ To }>{Label}</Link>
    </div>
  )
}
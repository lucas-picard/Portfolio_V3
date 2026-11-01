// Fichier du bouton de retour à la page d'accueil
// 
// ========================================================================

// btnRetour.jsx
import { Link } from "react-router-dom"
import style from "./btnRetour.module.css"
import { useSectionStore } from '../../store/useSectionStore.jsx'

export default function BtnRetour({ Label, To, Section = '' }) {
  const setSelectedSection = useSectionStore((s) => s.setSelectedSection)

  return (
    <div className={style.btnRetour}>
      <Link className={style.lien} to={To} onClick={() => setSelectedSection(Section)}>
        {Label}
      </Link>
    </div>
  )
}
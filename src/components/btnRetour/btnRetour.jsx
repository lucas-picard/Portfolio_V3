// Fichier du bouton de retour à la page d'accueil
// 
// ========================================================================

// btnRetour.jsx
import { Link } from "react-router-dom"
import style from "./btnRetour.module.css"
import { useSectionStore } from '../../store/useSectionStore.jsx'
import Icon from "../Icon.jsx"

// Revient à une page et rétablit la section 3D correspondante.
export default function BtnRetour({
  Label,
  To,
  Section = '',
  IconName = 'arrow-left',
  IconSet = 'gentle',
  Compact = false,
}) {
  const setSelectedSection = useSectionStore((s) => s.setSelectedSection)
  // La variante compacte est réservée aux en-têtes des pages intérieures.
  const linkClass = Compact ? `${style.lien} ${style.compact}` : style.lien

  return (
    <div className={style.btnRetour}>
      {/* La navigation et la sélection de section restent synchronisées. */}
      <Link className={linkClass} to={To} onClick={() => setSelectedSection(Section)}>
        <Icon name={IconName} set={IconSet} size={16} />
        {Label}
      </Link>
    </div>
  )
}
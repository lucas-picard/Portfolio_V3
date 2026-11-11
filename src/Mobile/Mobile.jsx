// Fichier qui affiche la navigation principale sur mobile
//
// ========================================================================

// Importation des composants nécessaires
import { Link, useLocation } from "react-router-dom"
import Icon from "../components/Icon.jsx"
import "./Mobile.css"

// Liens affichés dans la navigation mobile
const items = [
  { path: "/about", label: "À propos", icon: "user" },
  { path: "/projets", label: "Projets", icon: "code" },
  { path: "/skills", label: "Compétences", icon: "cpu" },
  { path: "/journey", label: "Parcours", icon: "briefcase" },
  { path: "/contact", label: "Contact", icon: "mail" },
]

// Affichage de la navigation et de la page active
export default function MobileNavigation() {
  const { pathname } = useLocation()
  const activePath = pathname.startsWith("/projets/") ? "/projets" : pathname

  return (
    <nav className="mobile-bottom-nav" aria-label="Navigation principale">
      {items.map(({ path, label, icon }) => (
        <Link
          className="mobile-bottom-nav-item"
          key={path}
          to={path}
          aria-current={activePath === path ? "page" : undefined}
        >
          <Icon name={icon} set="gentle" size={21} />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  )
}

// Écoute les demandes de navigation envoyées par les boutons de la scène 3D.

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function FrameNavigationListener() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleNavigation = (event) => {
      const path = event.detail?.path
      if (typeof path !== "string") {
        return
      }

      navigate(path)
    }

    // Supprime aussi l'écouteur au démontage pour éviter les doublons.
    window.addEventListener("portfolio:navigate", handleNavigation)
    return () => window.removeEventListener("portfolio:navigate", handleNavigation)
  }, [navigate])

  return null
}
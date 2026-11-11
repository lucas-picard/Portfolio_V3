// Fichier qui choisit la version mobile ou 3D du portfolio
//
// ========================================================================

// Importation des composants nécessaires
import { lazy, Suspense, useEffect, useState } from 'react'

// Chargement différé des deux versions du portfolio
const DesktopPortfolio = lazy(() => import('./APP/DesktopPortfolio.jsx'))
const App = lazy(() => import('./APP/App.jsx'))
const MOBILE_QUERY = '(max-width: 1024px)'

// Sélection de la version selon la largeur de l'écran
export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia(MOBILE_QUERY).matches
  )

  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY)
    const updateViewport = (event) => setIsMobile(event.matches)

    query.addEventListener('change', updateViewport)
    return () => query.removeEventListener('change', updateViewport)
  }, [])

  const PortfolioContent = isMobile ? App : DesktopPortfolio

  return (
    <Suspense fallback={null}>
      <PortfolioContent />
    </Suspense>
  )
}

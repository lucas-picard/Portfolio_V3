// Fichier qui affiche la progression du chargement de la scène 3D
//
// ========================================================================

// Importation des bibliothèques et des styles
import { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'
import './LoadingScreen.css'

// Gestion de l'état de chargement
export default function LoadingScreen({ canvasReady }) {
  const { active, loaded, progress, total } = useProgress()
  const hasStartedLoading = total > 0 || loaded > 0
  const isLoadingComplete = canvasReady && hasStartedLoading && !active
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!isLoadingComplete) {
      return
    }

    const timeout = window.setTimeout(() => setIsVisible(false), 450)
    return () => window.clearTimeout(timeout)
  }, [isLoadingComplete])

  if (!isVisible) {
    return null
  }

  const percentage = Math.round(progress)

  // Affichage de l'écran et de sa progression
  return (
    <div
      className={`loadingScreen${isLoadingComplete ? ' loadingScreen--complete' : ''}`}
      role="status"
      aria-live="polite"
      aria-label={`Chargement du portfolio : ${percentage}%`}
    >
      <div className="loadingPanel">
        <div className="loadingPixelScene" aria-hidden="true">
          <div className="loadingSun" />
          <div className="loadingVoxel loadingVoxel--back" />
          <div className="loadingVoxel loadingVoxel--front" />
          <div className="loadingGround" />
        </div>
        <p className="loadingEyebrow">PORTFOLIO // INITIALISATION</p>
        <h1 className="loadingTitle">LUCAS PICARD</h1>
        <p className="loadingMessage">Chargement de l'univers voxel...</p>
        <div
          className="loadingTrack"
          role="progressbar"
          aria-label="Chargement des ressources"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
        >
          <span className="loadingProgress" style={{ width: `${percentage}%` }} />
        </div>
        <p className="loadingPercentage">{String(percentage).padStart(2, '0')}%</p>
      </div>
    </div>
  )
}

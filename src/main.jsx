// Fichier principal du site web réunissant toutes les scènes et les routes
// des fichiers APP 2D, APP 3D et APP Arcades
// 
// ========================================================================

// Importation des bibliothèques et des composants nécessaires
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import Portfolio from './Portfolio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
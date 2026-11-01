// Fichier principal du site web réunissant toutes les scènes et les routes
// des fichiers APP 2D, APP 3D et APP Arcades
// 
// ========================================================================

// Importation des bibliothèques et des composants nécessaires
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js'
import './styles/global.css'


// Importation des composants et scènes
import Experience from './three/scenes/experience'
import Light from './three/Light/Light'
import RouteBTN from './three/scenes/RouteBTN'
import Camera from './three/camera/Camera'
import ScreenFrame from './three/scenes/Iframe/ScreenFrame'


// Initialisation des uniformes pour les lumières rectangulaires
RectAreaLightUniformsLib.init()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas>
      <Perf position="top-left" />

      {/* Intégration de la scène 3D, caméra et lumières */}
      <Camera />
      <Light />
      <Experience />
      <RouteBTN />

      {/* Intégration de l'application 2D dans la scène 3D via un iframe */}
      <ScreenFrame />
    </Canvas>
  </StrictMode>,
)
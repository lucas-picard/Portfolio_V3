// Fichier qui assemble la scène 3D et son interface intégrée
//
// ========================================================================

// Importation des bibliothèques nécessaires
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js'

// Importation des éléments de la scène
import Experience from '../three/scenes/experience.jsx'
import Light from '../three/Light/Light.jsx'
import RouteBTN from '../three/scenes/RouteBTN.jsx'
import Camera from '../three/camera/Camera.jsx'
import ScreenFrame from '../three/scenes/Iframe/ScreenFrame.jsx'
import LoadingScreen from '../components/LoadingScreen.jsx'

// Initialisation de l'éclairage Three.js
RectAreaLightUniformsLib.init()

// Assemblage de la scène
export default function DesktopPortfolio() {
  const [canvasReady, setCanvasReady] = useState(false)

  return (
    <>
      <Canvas dpr={[1, 1.5]} onCreated={() => setCanvasReady(true)}>
        {/* <Perf position="top-left" /> */}

        {/* Intégration de l'application 2D dans la scène 3D via un iframe */}
        <Camera />
        <Light />
        <Experience />
        <RouteBTN />
        <ScreenFrame />
      </Canvas>
      <LoadingScreen canvasReady={canvasReady} />
    </>
  )
}

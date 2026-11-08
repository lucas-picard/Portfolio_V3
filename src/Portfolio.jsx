import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js'

import Experience from './three/scenes/experience'
import Light from './three/Light/Light'
import RouteBTN from './three/scenes/RouteBTN'
import Camera from './three/camera/Camera'
import ScreenFrame from './three/scenes/Iframe/ScreenFrame'
import LoadingScreen from './components/LoadingScreen.jsx'

RectAreaLightUniformsLib.init()

export default function Portfolio() {
  const [canvasReady, setCanvasReady] = useState(false)

  return (
    <>
      <Canvas onCreated={() => setCanvasReady(true)}>
        <Perf position="top-left" />

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

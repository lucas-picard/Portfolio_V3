// Fichier principal de l'application 3D
// 
// ========================================================================

// Import de R3F et React
import { Canvas } from '@react-three/fiber'
import { Perf } from "r3f-perf"
import { OrbitControls } from '@react-three/drei'
import { Leva } from "leva"
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js'

// Import hooks de debugagej
import useViewPerf from './three/debug/useViewPerf'
import useObjects from './three/debug/useObjects'

import Light from './three/Light/Light'

// Import objet
import Experience from './three/scenes/experience'

RectAreaLightUniformsLib.init()

export default function App3D() {
  const { perfVisible } = useViewPerf("Performance")
  const ground = useObjects()

  return (
    <>
      <Leva />

      <Canvas shadows>
        { perfVisible ? <Perf position="top-left" /> : null }
        <OrbitControls makeDefault />

        <Light />
        <Experience ground={ground} />
      </Canvas>
    </>
  )
}
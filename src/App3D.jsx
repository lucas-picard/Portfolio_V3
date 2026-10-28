// Fichier principal de l'application 3D
// 
// ========================================================================

// Import de R3F et React
import { Canvas } from '@react-three/fiber'
import { Perf } from "r3f-perf"
import { Leva } from "leva"
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js'

// Import hooks de debugagej
import useViewPerf from './three/debug/useViewPerf'
import useObjects from './three/debug/useObjects'

// Import objet
import Experience from './three/scenes/experience'

// Import autre
import Light from './three/Light/Light'
import RouteBTN from './three/scenes/RouteBTN'
import Camera from './three/camera/Camera'


RectAreaLightUniformsLib.init()

export default function App3D() {
  const { perfVisible } = useViewPerf("Performance")
  const ground = useObjects()

  return (
    <>
      <Leva />

      <Canvas shadows>
        { perfVisible ? <Perf position="top-left" /> : null }

        <Camera />
        <Light />
        <Experience ground={ground} />
        <RouteBTN />
      </Canvas>
    </>
  )
}
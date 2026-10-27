// Fichier principal de l'application 3D
// 
// ========================================================================

// Import de R3F et React
import { Canvas } from '@react-three/fiber'
import { Perf } from "r3f-perf"
import { OrbitControls } from '@react-three/drei'
import { Leva } from "leva"

// Import hooks de debugagej
import useViewPerf from './three/debug/useViewPerf'

// Import objet
import Experience from './three/scenes/experience'


export default function App3D() {
  const { perfVisible } = useViewPerf("Performance")

  return (
    <>
      <Leva />

      <Canvas>
        { perfVisible ? <Perf position="top-left" /> : null }
        <OrbitControls makeDefault />

        <ambientLight intensity={1} />
        <Experience />
      </Canvas>
    </>
  )
}
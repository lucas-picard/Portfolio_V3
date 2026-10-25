// Fichier principal de l'application 3D
// 
// ========================================================================

// Import de R3F et React
import { Canvas } from '@react-three/fiber'
import { Perf } from "r3f-perf"
import { OrbitControls } from '@react-three/drei'
import { Leva } from "leva"

// Import hooks de debugage
import useViewPerf from './three/debug/useViewPerf'

// Import objet
import Panneau from './three/Objects/Loader/panneau'
import Encadre from './three/Objects/Loader/Encadre'
import Ground from './three/Objects/Mesh/Gound'
import Wall from './three/Objects/Loader/wall'


export default function App3D() {
  const { perfVisible } = useViewPerf("Performance")

  return (
    <>
      <Leva />

      <Canvas>
        { perfVisible ? <Perf position="top-left" /> : null }
        <OrbitControls makeDefault />

        <ambientLight intensity={1} />
        <Encadre />
        <Wall />
        <Ground />
        <Panneau />
      </Canvas>
    </>
  )
}
// Fichier camera et animation de la caméra selon la section sélectionnée
// 
// ========================================================================

import { PerspectiveCamera } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useSectionStore } from '../../store/useSectionStore.jsx'

// Définition des positions et paramètres de la caméra pour la section d'accueil
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'


const HOME = [-1, -1, 28]
const SECTION = [-1, -3, 18]
const SPEED = 0.4
const HOME_VIEW_WIDTH = 36
const SECTION_VIEW_WIDTH = 20
const CAMERA_FOV = 38

export default function Camera() {
  const isHome = useSectionStore((state) => state.selectedSection === '')
  const size = useThree((state) => state.size)
  const cam = useRef()

  useFrame((_, delta) => {
    const aspect = size.width > 0 && size.height > 0
      ? size.width / size.height
      : 1
    const homeDistance = Math.max(
      HOME[2],
      HOME_VIEW_WIDTH / (2 * Math.tan((CAMERA_FOV * Math.PI) / 360) * aspect),
    )
    const sectionDistance = Math.max(
      SECTION[2],
      SECTION_VIEW_WIDTH / (2 * Math.tan((CAMERA_FOV * Math.PI) / 360) * aspect),
    )
    const destination = isHome
      ? [HOME[0], HOME[1], homeDistance]
      : [SECTION[0], SECTION[1], sectionDistance]

    easing.damp3(cam.current.position, destination, SPEED, delta)
  })

  return (
    <PerspectiveCamera
      ref={cam}
      makeDefault
      position={HOME}
      fov={CAMERA_FOV}
      near={0.1}
      far={1000}
    />
  )
}

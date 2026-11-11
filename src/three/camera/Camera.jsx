// Fichier camera et animation de la caméra selon la section sélectionnée
// 
// ========================================================================

import { PerspectiveCamera } from '@react-three/drei'
import { useSectionStore } from '../../store/useSectionStore.jsx'

// Définition des positions et paramètres de la caméra pour la section d'accueil
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'


const HOME = [-1, -1, 28]
const SECTION = [-1, -3, 18]
const SPEED = 0.4

export default function Camera() {
  const isHome = useSectionStore((state) => state.selectedSection === '')
  const cam = useRef()

  useFrame((_, delta) => {
    // Anime la caméra vers HOME ou SECTION de façon fluide
     easing.damp3(cam.current.position, isHome ? HOME : SECTION, SPEED, delta)
  })

  return (
    <PerspectiveCamera
      ref={cam}
      makeDefault
      position={HOME}
      fov={38}
      near={0.1}
      far={1000}
    />
  )
}

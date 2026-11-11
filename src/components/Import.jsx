// Fichier qui charge et affiche un modèle 3D au format GLTF
//
// ========================================================================

// Importation des bibliothèques nécessaires
import { useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// Valeurs par défaut du modèle
const DEFAULT_POSITION = [0, 0, 0]
const DEFAULT_SCALE = 1

// Chargement et affichage du modèle
export default function Import({
  path,
  position = DEFAULT_POSITION,
  scale = DEFAULT_SCALE,
  onClick,
  onPointerEnter,
  onPointerLeave,
  ref,
}) {
  const gltf = useLoader(GLTFLoader, path)
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene])
  const resolvedPosition = Array.isArray(position)
    ? position
    : [position.x, position.y, position.z]

  return (
    <primitive
      object={scene}
      position={resolvedPosition}
      scale={scale}
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      ref={ref}
    />
  )
}
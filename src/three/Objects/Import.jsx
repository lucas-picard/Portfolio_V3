
import { useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const DEFAULT_POSITION = [0, 0, 0]
const DEFAULT_SCALE = 1

export default function Import({
    path,
    position = DEFAULT_POSITION,
    scale = DEFAULT_SCALE,
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
        />
    )
}
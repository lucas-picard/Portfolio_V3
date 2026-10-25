// Fichier pour importer model 3D: Le wall
// 
// ========================================================================

import { useEffect, useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import useObjects from '../../debug/useObjectsGLB'

export default function Wall() {
    const gltf = useLoader(GLTFLoader, '/models/Decors/wall.glb')

    const { 
            wallPosition: position, 
            wallScale: scale,
        } = useObjects()


    return <primitive 
    object={gltf.scene} 
    position={ [ position.x, position.y, position.z ] }
    scale={ scale }
    />
}

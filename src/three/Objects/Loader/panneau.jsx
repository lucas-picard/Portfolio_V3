// Fichier pour importer model 3D: Le panneau
// 
// ========================================================================

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import useObjects from '../../debug/useObjectsGLB'

export default function Panneau() {
    const gltf = useLoader(GLTFLoader, '/models/Fonctionnel/panneau.glb')

    const { 
            panneauPosition: position, 
            panneauScale: scale
        } = useObjects()


    return <primitive 
    object={gltf.scene} 
    position={ [ position.x, position.y, position.z ] }
    scale={ scale }
    />
}


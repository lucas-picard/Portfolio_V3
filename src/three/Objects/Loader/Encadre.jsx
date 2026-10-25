// Fichier pour importer model 3D: L'encadrement des bouttons
// 
// ========================================================================

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import useObjects from '../../debug/useObjectsGLB'

export default function Encadre() {
    const gltf = useLoader(GLTFLoader, '/models/Decors/Encadre.glb')

    const { 
            managementPosition: position, 
            managementScale: scale
        } = useObjects()


    return <primitive 
    object={gltf.scene} 
    position={ [ position.x, position.y, position.z ] }
    scale={ scale }
    />
}

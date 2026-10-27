// Fichier pour importer model 3D: L'arcade
// 
// ========================================================================

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import useObjects from '../../debug/useObjectsGLB'

export default function Arcade() {
    const gltf = useLoader(GLTFLoader, '/models/Fonctionnel/arcade.glb')

    const { 
            arcadePosition: position, 
            arcadeScale: scale
        } = useObjects()


    return <primitive 
    object={gltf.scene} 
    position={ [ position.x, position.y, position.z ] }
    scale={ scale }
    />
}

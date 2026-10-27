// Fichier pour importer model 3D: Boutton projets
// 
// ========================================================================

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import useObjectsBTN from '../../../debug/useObjectBTN'

export default function BTNproject() {
    const gltf = useLoader(GLTFLoader, '/models/Fonctionnel/BTNprojets.glb')
    
    const { 
            projectPosition: position, 
            projectScale: scale
        } = useObjectsBTN()

    return <primitive 
    object={gltf.scene} 
    position={ [ position.x, position.y, position.z ] }
    scale={ scale }
    />
}

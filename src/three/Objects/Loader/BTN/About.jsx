// Fichier pour importer model 3D: Boutton about
// 
// ========================================================================

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import useObjectsBTN from '../../../debug/useObjectBTN'

export default function BTNabout() {
    const gltf = useLoader(GLTFLoader, '/models/Fonctionnel/BTNabout.glb')
    
    const { 
            aboutPosition: position, 
            aboutScale: scale
        } = useObjectsBTN()

    return <primitive 
    object={gltf.scene} 
    position={ [ position.x, position.y, position.z ] }
    scale={ scale }
    />
}

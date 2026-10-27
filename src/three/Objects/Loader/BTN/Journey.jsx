// Fichier pour importer model 3D: Boutton parcours
// 
// ========================================================================

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import useObjectsBTN from '../../../debug/useObjectBTN'

export default function BTNjourney() {
    const gltf = useLoader(GLTFLoader, '/models/Fonctionnel/BTNparcours.glb')
    
    const { 
            journeyPosition: position, 
            journeyScale: scale
        } = useObjectsBTN()

    return <primitive 
    object={gltf.scene} 
    position={ [ position.x, position.y, position.z ] }
    scale={ scale }
    />
}

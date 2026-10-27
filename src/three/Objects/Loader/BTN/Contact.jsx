// Fichier pour importer model 3D: Boutton contact
// 
// ========================================================================

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import useObjectsBTN from '../../../debug/useObjectBTN'

export default function BTNcontact() {
    const gltf = useLoader(GLTFLoader, '/models/Fonctionnel/BTNcontact.glb')
    
    const { 
            contactPosition: position, 
            contactScale: scale
        } = useObjectsBTN()

    return <primitive 
    object={gltf.scene} 
    position={ [ position.x, position.y, position.z ] }
    scale={ scale }
    />
}

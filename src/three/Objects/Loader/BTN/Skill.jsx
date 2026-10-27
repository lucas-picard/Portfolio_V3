// Fichier pour importer model 3D: Boutton compétences
// 
// ========================================================================

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import useObjectsBTN from '../../../debug/useObjectBTN'

export default function BTNskill() {
    const gltf = useLoader(GLTFLoader, '/models/Fonctionnel/BTNcompetences.glb')
    
    const { 
            skillPosition: position, 
            skillScale: scale
        } = useObjectsBTN()

    return <primitive 
    object={gltf.scene} 
    position={ [ position.x, position.y, position.z ] }
    scale={ scale }
    />
}

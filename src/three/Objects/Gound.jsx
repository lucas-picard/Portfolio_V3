// Fichier création model 3D: Le sol
// 
// ========================================================================

import { useMemo } from 'react'
import { SRGBColorSpace, TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'


export default function Ground()
{

    const loadedTexture = useLoader(TextureLoader, '/assets/Texture_ground.jpg')
    const texture = useMemo(() => {
        const groundTexture = loadedTexture.clone()
        groundTexture.colorSpace = SRGBColorSpace
        return groundTexture
    }, [loadedTexture])

    return (
       
            <mesh 
            position={ [ 1, -10, 18 ] } 
            rotation-x={ Math.PI * -0.5 }
            scale={ 26 }
            receiveShadow
            >

                <planeGeometry args={ [ 3, 1.5 ] }/>
                <meshStandardMaterial
                    map={ texture }
                />
            </mesh>
    )
}
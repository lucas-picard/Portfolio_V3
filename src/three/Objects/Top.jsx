// Fichier création model 3D: Le plafond
// 
// ========================================================================

import { useMemo } from 'react'
import { SRGBColorSpace, TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'


export default function Top()
{

    const loadedTexture = useLoader(TextureLoader, '/assets/test.jpg')
    const texture = useMemo(() => {
        const ceilingTexture = loadedTexture.clone()
        ceilingTexture.colorSpace = SRGBColorSpace
        return ceilingTexture
    }, [loadedTexture])

    return (
       
            <mesh 
            position={ [ 1, 10, 10 ] } 
            rotation-x={ Math.PI * 0.5 }
            scale={ 15 }
            receiveShadow
            >

                <planeGeometry args={ [ 4, 1.5 ] }/>
                <meshStandardMaterial
                    map={ texture }
                />
            </mesh>
    )
}
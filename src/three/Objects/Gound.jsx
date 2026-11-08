// Fichier création model 3D: Le sol
// 
// ========================================================================

import { useMemo } from 'react'
import { CanvasTexture, NoColorSpace, RepeatWrapping, SRGBColorSpace } from 'three'

function createGroundTexture() {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512

    const context = canvas.getContext('2d')
    if (!context) {
        throw new Error('Unable to create the ground texture canvas context.')
    }

    const stoneColors = ['#292b27', '#30302a', '#262a26', '#353229', '#2b2d28']
    const tileSize = 64

    context.fillStyle = '#30342f'
    context.fillRect(0, 0, canvas.width, canvas.height)

    for (let row = 0; row < 8; row += 1) {
        for (let column = 0; column < 8; column += 1) {
            const seed = (row * 17 + column * 31 + row * column * 7) % 97
            const x = column * tileSize + 2 + (seed % 3)
            const y = row * tileSize + 2 + (seed % 4)
            const width = tileSize - 5 - (seed % 4)
            const height = tileSize - 5 - ((seed * 3) % 4)

            context.fillStyle = stoneColors[seed % stoneColors.length]
            context.fillRect(x, y, width, height)
            context.fillStyle = 'rgba(255, 255, 255, 0.07)'
            context.fillRect(x + 4, y + 4, width - 8, 2)
            context.fillStyle = 'rgba(0, 0, 0, 0.14)'
            context.fillRect(x + 4, y + height - 5, width - 8, 2)

            for (let speckle = 0; speckle < 12; speckle += 1) {
                const offsetX = (seed * (speckle + 3) * 13) % (width - 8)
                const offsetY = (seed * (speckle + 5) * 19) % (height - 8)
                context.fillStyle = speckle % 2 ? 'rgba(20, 24, 21, 0.16)' : 'rgba(220, 211, 183, 0.12)'
                context.fillRect(x + 4 + offsetX, y + 4 + offsetY, 2 + (speckle % 3), 2)
            }
        }
    }

    const texture = new CanvasTexture(canvas)
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(10, 5)
    texture.colorSpace = SRGBColorSpace
    return texture
}

export default function Ground()
{
    const { texture, bumpMap } = useMemo(() => {
        const colorTexture = createGroundTexture()
        const heightTexture = colorTexture.clone()
        heightTexture.colorSpace = NoColorSpace
        heightTexture.needsUpdate = true
        return { texture: colorTexture, bumpMap: heightTexture }
    }, [])

    return (
        <>
            <mesh
                position={[1, -10.4, 18]}
                receiveShadow
                castShadow
            >
                <boxGeometry args={[78, 0.8, 39]} />
                <meshStandardMaterial color="#20221f" roughness={0.96} />
            </mesh>

            <mesh
            position={ [ 1, -9.98, 18 ] }
            rotation-x={ Math.PI * -0.5 }
            scale={ 26 }
            receiveShadow
            >
                <planeGeometry args={ [ 3, 1.5 ] }/>
                <meshStandardMaterial
                    map={ texture }
                    bumpMap={bumpMap}
                    bumpScale={0.16}
                    roughness={0.9}
                />
            </mesh>
        </>
    )
}

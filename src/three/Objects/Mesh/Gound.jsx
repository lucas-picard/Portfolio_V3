// Fichier création model 3D: Le sol
// 
// ========================================================================

import useObjects from '../../debug/useObjects'

export default function Ground() {
    const { 
        groundPosition: position, 
        groundScale: scale, 
        groundColor: color,
        groundVisible: visible
    } = useObjects()

    return (
        <mesh 
            position={ [ position.x, position.y, position.z ] }
            scale={ scale }
            rotation={ [ Math.PI * -0.5, 0, 0 ] }
        >
            <planeGeometry args={ [ 5, 2, 1 ] }/>
            <meshStandardMaterial 
                color={ color }
                wireframe={ visible }
            />
        </mesh>
    )
}
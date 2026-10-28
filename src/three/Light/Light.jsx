// Fichier qui contient toute les lumières du site 3D
// 
// ========================================================================

export default function Light()
{

    return(
        <>
            <ambientLight intensity={1} />

        {/* Led au centre */}
            <rectAreaLight
                position={ [ 0, 3.65, 0.6 ] }
                rotation-x={Math.PI / 2}
                width={7.1}
                height={-0.35}
                color="#dad7cd"
                intensity={12}
            />
            <rectAreaLight
                position={ [ 0, 3.65, 0.6 ] }
                rotation-x={Math.PI / 2}
                width={-7.1}
                height={-0.35}
                color="#dad7cd"
                intensity={12}
            />

        {/* Eclairage de l'ecriture japonaise */}
            <rectAreaLight
                position={ [ 12, 3.46, 1.2 ] }
                rotation-x={-Math.PI / 3}
                width={2}
                height={15}
                color="#fc0000"
                intensity={7}
            />

        {/* Led plant */}
            <rectAreaLight
                position={ [ 15.5, -2.94, 1.2 ] }
                rotation-x={-Math.PI / 3}
                width={2.5}
                height={10}
                color="#a7ff02"
                intensity={1}
            />
    
        {/* Contour lumineux de l'ecran */}
            <mesh position={[0, 3.26, 0.4]}>
                <boxGeometry args={[19.9, 0.045, 0.025]} />
                <meshBasicMaterial color="#7ab8ff" toneMapped={false} />
            </mesh>
            <mesh position={[0, -8.86, 0.4]}>
                <boxGeometry args={[19.9, 0.045, 0.025]} />
                <meshBasicMaterial color="#7ab8ff" toneMapped={false} />
            </mesh>
            <mesh position={[-9.89, -2.8, 0.4]}>
                <boxGeometry args={[0.045, 12.2, 0.025]} />
                <meshBasicMaterial color="#7ab8ff" toneMapped={false} />
            </mesh>
            <mesh position={[9.89, -2.8, 0.4]}>
                <boxGeometry args={[0.045, 12.2, 0.025]} />
                <meshBasicMaterial color="#7ab8ff" toneMapped={false} />
            </mesh>


        
        </>
    )
}
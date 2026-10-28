// Fichier qui contient toute les lumières du site 3D
// 
// ========================================================================

export default function Light()
{

    return(
        <>
            <ambientLight intensity={0.7} />

        {/* Led au centre */}
            <rectAreaLight
                position={ [ 0, 3.65, 0.6 ] }
                rotation-x={Math.PI / 2}
                width={7.1}
                height={-0.35}
                color="#dad7cd"
                intensity={12}
                decay={2}
            />
            <rectAreaLight
                position={ [ 0, 3.65, 0.6 ] }
                rotation-x={Math.PI / 2}
                width={-7.1}
                height={-0.35}
                color="#dad7cd"
                intensity={12}
                decay={2}
            />

        {/* Eclairage de l'ecriture japonaise */}
            <rectAreaLight
                position={ [ 12, 3.46, 1.2 ] }
                rotation-x={-Math.PI / 3}
                width={2}
                height={15}
                color="#fc0000"
                intensity={8}
            />

       
        {/* Led plant */}
        <group position={ [ 15.5, -2.08, -0.2 ] }>
            <mesh>
                <boxGeometry args={ [ 3.7, 0.05, 0.05 ] } />
                <meshStandardMaterial
                color="#a7ff02"
                emissive="#a7ff02"
                emissiveIntensity={3}
                />
            </mesh>

            <rectAreaLight
                rotation-x={-Math.PI / 3}
                width={3.5}
                height={5}
                color="#a7ff02"
                intensity={1}
            />
        </group>
    
        {/* Eclairage bas panneau */}
            <rectAreaLight
                position={[0, -8.4, 1]}
                rotation-x={-2 * Math.PI / 3}
                width={19.5}
                height={15}
                color="#dad7cd"
                intensity={0.5}
            />

        {/* Led etagere */}
            <group position={[-15, 3.74, -0.3]}>
                <mesh>
                    <boxGeometry args={[3.5, 0.05, 0.05]} />
                    <meshStandardMaterial
                    color="#a7ff02"
                    emissive="#a7ff02"
                    emissiveIntensity={3}
                    />
                </mesh>

                <rectAreaLight
                   
                    rotation-x={-Math.PI / 3}
                    width={2.5}
                    height={10}
                    color="#a7ff02"
                    intensity={1}
                />
            </group>


        {/* Lampe*/}
            <pointLight
                position={ [ -12.8, -8.65, 1 ] }
                color="#fff7f7"
                intensity={3}
                distance={4}
                decay={2}
            />

        
        </>
    )
}
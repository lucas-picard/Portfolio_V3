// Fichier qui contient toute les lumières du site 3D
// 
// ========================================================================

import { useMemo, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export default function Light()
{
    const ledModel = useLoader(GLTFLoader, '/models/Decors/barre_led.glb')
    const ledMaterials = useMemo(() => {
        const materials = []
        ledModel.scene.traverse((object) => {
            if (object.isMesh && ['Diffuseur_lumineux', 'Noyau_LED'].includes(object.name)) {
                const objectMaterials = Array.isArray(object.material)
                    ? object.material
                    : [object.material]
                objectMaterials.forEach((material) => {
                    materials.push({ material, intensity: material.emissiveIntensity })
                })
            }
        })
        return materials
    }, [ledModel.scene])
    const ledLights = useRef([])
    const flicker = useRef({
        next: 6,
        until: 0,
        nextStep: 0,
        intensity: 12,
    })

    useFrame(({ clock }) => {
        const now = clock.elapsedTime
        const state = flicker.current

        if (now >= state.next && now >= state.until) {
            state.until = now + 0.2 + Math.random() * 0.2
            state.next = now + 7 + Math.random() * 12
            state.nextStep = now
        }

        if (now < state.until && now >= state.nextStep) {
            const levels = [0.05, 0.2, 0.7, 1, 0.1, 0.85]
            state.intensity = 12 * levels[Math.floor(Math.random() * levels.length)]
            state.nextStep = now + 0.03 + Math.random() * 0.05
        } else if (now >= state.until) {
            state.intensity = 12
        }

        ledLights.current.forEach((light) => {
            if (light) light.intensity = state.intensity
        })

        const brightness = state.intensity / 12
        ledMaterials.forEach(({ material, intensity }) => {
            material.emissiveIntensity = intensity * brightness
        })
    })

    return(
        <>
            <ambientLight intensity={0.6} />

        {/* Led au centre */}
            <rectAreaLight
                ref={(light) => { ledLights.current[0] = light }}
                position={ [ 0, 3.65, 0.6 ] }
                rotation-x={Math.PI / 2}
                width={7.1}
                height={-0.35}
                color="#dad7cd"
                intensity={12}
                decay={2}
            />
            <rectAreaLight
                ref={(light) => { ledLights.current[1] = light }}
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
                intensity={6}
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
                intensity={0.7}
            />
        </group>
    
        {/* Eclairage bas panneau */}
            <rectAreaLight
                position={[0, -8.4, 1]}
                rotation-x={-2 * Math.PI / 3}
                width={19.5}
                height={15}
                color="#dad7cd"
                intensity={1}
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
                    intensity={0.5}
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
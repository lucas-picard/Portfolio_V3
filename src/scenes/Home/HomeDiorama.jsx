// Fichier du diorama 3D de la page Home
//
// ========================================================================

import { Suspense, useEffect, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Bounds, ContactShadows, useGLTF } from "@react-three/drei"
import { FrameContextConsumer } from "react-frame-component"
import * as THREE from "three"

const PETAL_COUNT = 24

// Petals fall around the cherry tree and repeat from its canopy.
function FallingPetals() {
    const petalsRef = useRef(null)
    const helper = useRef(new THREE.Object3D())
    const seeds = useMemo(
        () => Array.from({ length: PETAL_COUNT }, (_, index) => ({
            offset: (index * 0.61803398875) % 1,
            speed: 0.12 + ((index * 37) % 100) / 100 * 0.12,
            phase: index * 2.399963,
            size: 0.65 + ((index * 53) % 100) / 100 * 0.55,
        })),
        [],
    )
    const geometry = useMemo(() => new THREE.BoxGeometry(0.055, 0.018, 0.04), [])
    const material = useMemo(
        () => new THREE.MeshStandardMaterial({
            color: "#f0a8d1",
            emissive: "#742b54",
            emissiveIntensity: 0.35,
            roughness: 0.75,
        }),
        [],
    )

    useFrame(({ clock }) => {
        const mesh = petalsRef.current
        if (!mesh) return

        const time = clock.elapsedTime
        seeds.forEach((seed, index) => {
            const fall = (time * seed.speed + seed.offset) % 1
            const sway = time * 0.8 + seed.phase

            helper.current.position.set(
                Math.sin(sway) * 0.78,
                2.15 - fall * 2.15,
                Math.cos(sway * 0.7) * 0.42,
            )
            helper.current.rotation.set(sway, sway * 0.6, Math.sin(sway) * 0.7)
            helper.current.scale.setScalar(seed.size)
            helper.current.updateMatrix()
            mesh.setMatrixAt(index, helper.current.matrix)
        })

        mesh.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh
            ref={petalsRef}
            args={[geometry, material, PETAL_COUNT]}
            castShadow
        />
    )
}

function DioramaModel({ pointer }) {
    const { scene: originalScene } = useGLTF("/models/Iframe/diorama-accueil.glb")
    const model = useMemo(() => {
        const scene = originalScene.clone(true)
        const transform = {
            position: scene.position.toArray(),
            rotation: scene.rotation.toArray().slice(0, 3),
            scale: scene.scale.toArray(),
        }

        // Keep the GLB's root transform on a wrapper so petals share it.
        scene.position.set(0, 0, 0)
        scene.rotation.set(0, 0, 0)
        scene.scale.set(1, 1, 1)
        scene.traverse((object) => {
            if (object instanceof THREE.Mesh) {
                object.castShadow = true
                object.receiveShadow = true
            }
        })

        return { scene, transform }
    }, [originalScene])
    const { scene, transform } = model
    const headState = useRef({ object: null, initialX: 0, initialY: 0 })

    useEffect(() => {
        const head = scene.getObjectByName("avatarHead")
        headState.current = {
            object: head,
            initialX: head?.rotation.x ?? 0,
            initialY: head?.rotation.y ?? 0,
        }
    }, [scene])

    // Oriente uniquement la tête du personnage vers la position de la souris.
    useFrame((_, delta) => {
        const { object: head, initialX, initialY } = headState.current
        if (!head) return

        const smoothness = 1 - Math.exp(-delta * 6)
        head.rotation.y += (initialY + pointer.current.x * 0.55 - head.rotation.y) * smoothness
        head.rotation.x += (initialX - pointer.current.y * 0.25 - head.rotation.x) * smoothness
    })

    return (
        <group
            position={transform.position}
            rotation={transform.rotation}
            scale={transform.scale}
        >
            <Bounds fit clip observe margin={0.9}>
                <primitive object={scene} />
            </Bounds>
            <ContactShadows
                position={[0, 0.12, 0]}
                scale={[4.5, 3.5]}
                opacity={0.45}
                blur={2.2}
                far={3}
                resolution={512}
            />
            {/* La chute commence au niveau du feuillage du sakura. */}
            <group position={[-1.2, 1.1, 0.15]}>
                <FallingPetals />
            </group>
        </group>
    )
}

function HomeDioramaScene({ frameDocument }) {
    const pointer = useRef({ x: 0, y: 0 })

    // Écoute les mouvements dans toute la fenêtre de l'iframe.
    useEffect(() => {
        const frameWindow = frameDocument?.defaultView
        if (!frameWindow) return

        function trackPointer(event) {
            pointer.current = {
                x: (event.clientX / frameWindow.innerWidth) * 2 - 1,
                y: 1 - (event.clientY / frameWindow.innerHeight) * 2,
            }
        }

        function resetPointer() {
            pointer.current = { x: 0, y: 0 }
        }

        frameWindow.addEventListener("pointermove", trackPointer)
        frameWindow.addEventListener("pointerleave", resetPointer)
        frameWindow.addEventListener("blur", resetPointer)
        return () => {
            frameWindow.removeEventListener("pointermove", trackPointer)
            frameWindow.removeEventListener("pointerleave", resetPointer)
            frameWindow.removeEventListener("blur", resetPointer)
        }
    }, [frameDocument])

    return (
        <div
            className="home-diorama"
            role="img"
            aria-label="Diorama 3D du portfolio"
        >
            <Canvas
                camera={{ position: [0, 0, 6], fov: 35 }}
                dpr={[1, 1.5]}
                gl={{ alpha: true, antialias: true }}
                shadows="soft"
            >
                {/* Lumière d'ambiance pour révéler les faces dans l'ombre. */}
                <hemisphereLight args={["#eef2ff", "#37251b", 2.2]} />

                {/* Lumière blanche au-dessus, comme la barre LED de l'écran. */}
                <directionalLight
                    position={[0, 6, 4]}
                    intensity={4.5}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                    shadow-camera-left={-4}
                    shadow-camera-right={4}
                    shadow-camera-top={4}
                    shadow-camera-bottom={-4}
                    shadow-bias={-0.0002}
                    shadow-radius={4}
                />

                {/* Remplissage frontal et lumière chaude près de la boutique. */}
                <directionalLight position={[-4, 2, 5]} intensity={2.5} color="#dce8ff" />
                <pointLight
                    position={[2, 2, 2]}
                    color="#ffc77a"
                    intensity={28}
                    distance={9}
                    decay={2}
                />
                <Suspense fallback={null}>
                    <DioramaModel pointer={pointer} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default function HomeDiorama() {
    return (
        <FrameContextConsumer>
            {({ document: frameDocument }) => {
                return <HomeDioramaScene frameDocument={frameDocument} />
            }}
        </FrameContextConsumer>
    )
}

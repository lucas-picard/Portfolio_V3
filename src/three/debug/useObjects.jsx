// Fichier pour le pannel de debug des objets CREER
// 
// ========================================================================

import { useControls, folder } from "leva"

export default function useObjects() {
    return useControls(
        'Objects',
        {

// === Ground ===
            Ground: folder({
                groundPosition: {
                    label: "position",
                    value: { x: 0, y: -10, z: 14 },
                    step: 0.01,
                },
                groundScale: {
                    label: "scale",
                    value: 16,
                    step: 0.01,
                },
                groundColor: {
                    label: "Couleur",
                    value: '#313131'
                },
                groundVisible: {
                    label: "Wireframe",
                    value: false
                },
            },
                {
            collapsed: true,
                }),

        },



// Ferme grand dossier      
        {
            collapsed: true,
        }
    )
}
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
                    value: { x: 0, y: -10, z: 12 },
                    step: 0.01,
                },
                groundScale: {
                    label: "scale",
                    value: 13,
                    step: 0.01,
                },
                groundColor: {
                    label: "Couleur",
                    value: '#252c36'
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
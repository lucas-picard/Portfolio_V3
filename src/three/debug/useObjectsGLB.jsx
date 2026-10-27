// Fichier pour le pannel de debug des objets IMPORTER
// 
// ========================================================================

import { useControls, folder } from "leva"

export default function useObjects() {
    return useControls(
        'Objects',
        {

// === Panneau ===      
            Panneau: folder({
                panneauPosition: {
                    label: "position",
                    value: { x: 0, y: -2.8, z: 0.2 },
                    step: 0.01,
                },
                panneauScale: {
                    label: "scale",
                    value: 2,
                    step: 0.01,
                },
            },
                {
            collapsed: true,
                }),


// === Wall ===   
            Wall: folder({
                wallPosition: {
                    label: "position",
                    value: { x: 0, y: 0, z: 0 },
                    step: 0.01,
                },
                wallScale: {
                    label: "scale",
                    value: 1,
                    step: 0.01,
                },
            },
                {
            collapsed: true,
                }),

// === ManagementBTN === 
            management: folder({
                managementPosition: {
                    label: "position",
                    value: { x: -11.5, y: -2.8, z: 0 },
                    step: 0.01,
                },
                managementScale: {
                    label: "scale",
                    value: 2.233,
                    step: 0.01,
                },
            },
                {
            collapsed: true,
                }),


// === Arcade === 
            arcade: folder({
                arcadePosition: {
                    label: "position",
                    value: { x: -16.9, y: -10.2, z: 1.15 },
                    step: 0.01,
                },
                arcadeScale: {
                    label: "scale",
                    value: 2.233,
                    step: 0.01,
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
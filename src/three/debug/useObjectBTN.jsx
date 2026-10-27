// Fichier pour le pannel de debug des BOUTONS
// 
// ========================================================================

import { useControls, folder } from "leva"

export default function useObjects() {
    return useControls(
        'ObjectsBTN',
        {
// === About ===      
            about: folder({
                aboutPosition: {
                    label: "position",
                    value: { x: -1.07, y: -4.11, z: 0.02 },
                    step: 0.01,
                },
                aboutScale: {
                    label: "scale",
                    value: 2.38,
                    step: 0.01,
                },
            },
                {
            collapsed: true,
                }),

// === Projets ===      
            project: folder({
                projectPosition: {
                    label: "position",
                    value: { x: -1.07, y: -3.96, z: 0.02 },
                    step: 0.01,
                },
                projectScale: {
                    label: "scale",
                    value: 2.38,
                    step: 0.01,
                },
            },
                {
            collapsed: true,
                }),

// === Skill ===      
            skill: folder({
                skillPosition: {
                    label: "position",
                    value: { x: -1.07, y: -3.82, z: 0.02 },
                    step: 0.01,
                },
                skillScale: {
                    label: "scale",
                    value: 2.38,
                    step: 0.01,
                },
            },
                {
            collapsed: true,
                }),

// === Journey ===      
            journey: folder({
                journeyPosition: {
                    label: "position",
                    value: { x: -1.07, y: -3.67, z: 0.02 },
                    step: 0.01,
                },
                journeyScale: {
                    label: "scale",
                    value: 2.38,
                    step: 0.01,
                },
            },
                {
            collapsed: true,
                }),

// === Contact ===      
            contact: folder({
                contactPosition: {
                    label: "position",
                    value: { x: -1.07, y: -3.52, z: 0.02 },
                    step: 0.01,
                },
                contactScale: {
                    label: "scale",
                    value: 2.38,
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
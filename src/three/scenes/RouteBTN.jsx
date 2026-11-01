// Fichier qui gere le visuel des bouttons celon endroit ou l'on est
// 
// ========================================================================

// Importation des bibliothèques et des composants nécessaires
import { useRef } from 'react'
import Import from '../../components/Import'

// Importation du store
import { useSectionStore } from '../../store/useSectionStore.jsx'



function BTN_select(y) 
{
    return (
        <>
        <mesh position={[-12.05, y, 0.1]}>
            <boxGeometry args={[0.07, 1.8, 0.1]} />
            <meshStandardMaterial
                color="#a7ff02"
                emissive="#a7ff02"
                emissiveIntensity={3}
            />
        </mesh>

        </>
    )
}

export default function RouteBTN() 
{
// -- Variables et constantes --    
    const selectedSection = useSectionStore((state) => state.selectedSection)
    const setSelectedSection = useSectionStore((state) => state.setSelectedSection)

    const selectSection = (section, path) => {
        setSelectedSection(section)

        // Demande au routeur de l'écran intégré d'afficher la page du bouton cliqué.
        window.dispatchEvent(
            new CustomEvent('portfolio:navigate', { detail: { path } }),
        )
    }

// Position des boutons sur l'axe X et Z
    const BTN_x = -0.77
    

// Référence pour le bouton sélectionné
    const about = useRef()
    const projets = useRef()
    const skill = useRef()
    const journey = useRef()
    const contact = useRef()


// -- Fonctions --
// Fonction pour créer un indicateur visuel sur le bouton sélectionné


// Fonction pour changer le curseur en pointeur lorsque la souris survole le bouton
    const PointerEnter = (e) => {
        document.body.style.cursor = 'pointer'
        e.current.position.z = 0.2 // Agrandir le bouton survolé
    }

// Fonction pour réinitialiser le curseur lorsque la souris quitte le bouton
    const PointerLeave = (e) => {
        document.body.style.cursor = 'default'
        e.current.position.z = 0.02 // Réinitialiser la taille du bouton
    }
  

// -- Rendu du composant --
  return (
    <>
        {/*==== BOUTONS ==== */}

            {/* ABOUT */}
            <Import
                key="about"
                path="/models/Fonctionnel/BTNabout.glb"
                position={{ x: BTN_x, y: -4.11, z: 0.02 }}
                scale={2.38}
                onClick={() => selectSection('about', '/about')}
                onPointerEnter={() => PointerEnter(about)}
                onPointerLeave={() => PointerLeave(about)}
                ref={about}
            />
            
            {/* PROJECT */}
            <Import
                key="projets"
                path="/models/Fonctionnel/BTNprojets.glb"
                position={{ x: BTN_x, y: -3.96, z: 0.02 }}
                scale={2.38}
                onClick={() => selectSection('project', '/projets')}
                onPointerEnter={() => PointerEnter(projets)}
                onPointerLeave={() => PointerLeave(projets)}
                ref={projets}
            />


            {/* SKILL */}
            <Import
                key="competences"
                path="/models/Fonctionnel/BTNcompetences.glb"
                position={{ x: BTN_x, y: -3.82, z: 0.02 }}
                scale={2.38}
                onClick={() => selectSection('skill', '/skills')}
                onPointerEnter={() => PointerEnter(skill)}
                onPointerLeave={() => PointerLeave(skill)}
                ref={skill}
            />



            {/* JOURNEY */}
            <Import
                key="parcours"
                path="/models/Fonctionnel/BTNparcours.glb"
                position={{ x: BTN_x, y: -3.67, z: 0.02 }}
                scale={2.38}
                onClick={() => selectSection('journey', '/journey')}
                onPointerEnter={() => PointerEnter(journey)}
                onPointerLeave={() => PointerLeave(journey)}
                ref={journey}
            />



            {/* CONTACT */}
            <Import
                key="contact"
                path="/models/Fonctionnel/BTNcontact.glb"
                position={{ x: BTN_x, y: -3.52, z: 0.02 }}
                scale={2.38}
                onClick={() => selectSection('contact', '/contact')}
                onPointerEnter={() => PointerEnter(contact)}
                onPointerLeave={() => PointerLeave(contact)}
                ref={contact}
            />

            {selectedSection === 'about' && BTN_select(2)}
            {selectedSection === 'project' && BTN_select(-0.5)}
            {selectedSection === 'skill' && BTN_select(-2.8)}
            {selectedSection === 'journey' && BTN_select(-5.2)}
            {selectedSection === 'contact' && BTN_select(-7.5)}
    </>
  )
}

export { BTN_select }
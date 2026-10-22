// Fichier de contenu de la page Credits : presentation et inspirations
// 
// ========================================================================

import links from './lien.js';

const credit = {
    title: 'CRÉDITS',
    createur: 'Lucas Picard - ALL',
    description:
        "Ce site internet a entièrement été conçu et développé par mes soins. Il a été réalisé dans le but de présenter mes compétences, mes projets et mon parcours professionnel. " +
        "Il est le fruit de mon travail acharné et de ma passion pour le développement web. J'ai mis tout mon savoir-faire et ma créativité pour créer une expérience utilisateur agréable et intuitive. " +
        "J'espère que vous apprécierez votre visite sur mon site et que vous trouverez toutes les informations que vous cherchez.",

    inspirations: [
        {
            name: 'Bruno Simon',
            portfolio: links.brunoSimon,
            formation: links.brunoSimonFormation
        },
        {
            name: 'Jesse Zhou',
            portfolio: links.jesseZhou
        },
        {
            name: 'Antonin Picard',
            portfolio: links.antoninPicard
        }
    ]
};

export default credit;
const journey = {
  title: 'PARCOURS',
  tagline: 'Formations & expériences',
  commande: "$ cat /var/log/parcours.log",

  recherche: {
    title: 'RECHERCHE',
    date: '2027',
    actuel: {
        subtitle: 'Stage en développement',
        lieu: 'Lons-le-Saunier / Lyon',
        Dates: "25/01/2027 - 13/02/2027",
        description: "Je suis ouvert a tout les domaines du développement" +
                    "(IA, Web, Cyber, devops, embarqué, logiciel, etc...)" 
      },
  },

    formations: {
        title: 'FORMATIONS',
        actuel: {
            subtitle: 'BAC PRO CIEL',
            lieu: 'Sainte-Marie, Lons-le-Saunier',
            Dates: "Septembre 2024 – En cours",
            description: "Dans cette formation en plus des matières général " + 
                        "j'apprend le réseau, l'électronique, la domotique, " +
                        "l'hardware, un peu de developpement et cybersécurité"
        },
        
        brevet: {
            subtitle: 'BREVET DES COLLEGES',
            lieu: 'Collège Rouget de Lisle, Lons-le-Saunier',
            Dates: "2020 – 2024",
            description: "Obtention du brevet des collèges avec mention bien."
        },

        psc1: {
            subtitle: 'PSC1',
            lieu: 'Collège Rouget de Lisle, Lons-le-Saunier',
            Dates: "2024",
            description: "Obtention du PSC1 (Prévention et Secours Civiques de niveau 1)"
        }
    },

    stages: {
        title: 'STAGES',
        rsp: {
            annee: "2026",
            subtitle: 'RSP intelligence collective',
            lieu: 'Lons-le-Saunier',    
            poste: "Développeur",
            durer: "3 semaines (Septembre - Octobre)",
            description: "Développement web sur un CRM, avec participation à son " +
                        "amélioration et utilisation de PHP, HTML, CSS, JavaScript, SQL, Git et WAMP."
        },
     
        sainte_marie: {
            annee: "2026",
            subtitle: 'Sainte-Marie',
            lieu: 'Lons-le-Saunier',
            poste: "Développeur",
            durer: "4 semaines (Mars - Avril)",
            description: "Conception et développement de plusieurs projets en développement " +
                         "web, logiciel, intelligence artificielle et systèmes embarqués. Technologies " + 
                         "utilisées : HTML, CSS, JavaScript, C++, Python et Git."
        },

         distry_matic: {
            annee: "2025",
            subtitle: 'Distry-Matic FC',
            lieu: 'Lons-le-Saunier',
            poste: "Technicien réseau",
            durer: "4 semaines  (Juin)",
            description: "Remplacement de composants informatiques, installation de réseaux " +
                        "et configuration d’équipements réseau. "
        },
    },

    jobs: {
        title: 'JOBS',
        super_u: {
            annee: "2026",
            title: 'Super U',
            lieu: 'Cuiseaux',
            poste: "Employé commercial polyvalent", 
            durer: "5 semaines (Juillet - Aout)",  
            description: "Mise en rayon, encaissement des clients et aide à la gestion " +
                        "des caisses. Sérieux, polyvalence, travail d’équipe et bon relationnel."
        },
        pharmacie: {
            annee: "été 2024, 2025, week-end 05/2025 - 07/2025",
            title: 'Pharmacie',
            lieu: 'Cuiseaux',
            poste: "Employé polyvalent en pharmacie", 
            durer: "10 semaines (été 2024, 2025, week-end 05/2025 - 07/2025)",  
            description: "Réception et rangement des commandes, mise en rayon, " +
                        "gestion des stocks à l’aide d’un ordinateur et d’un scanner, " +
                        "préparation des ordonnances."
        }
    }
};

export default journey;

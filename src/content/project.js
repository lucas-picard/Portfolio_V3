import links from './lien.js';

const projects = {
    title: 'PROJETS',
    description: 'Explorations techniques et projets divers',
    precedents: '< PRECEDENT',
    suivants: 'SUIVANT >',
    voir: 'VOIR LE PROJET →',
    labels: ['01', '02', '03', '04', '05', '06'],

    bladeclicker: {
        title: 'APP NUMWORKS',
        subtitle: 'Jeu clicker sur calculatrice numworks',
        text: 'Jeu vidéo de type clicker pour calculatrice NumWorks.',
        context:
            "Application de jeu vidéo de type clicker développée pour la calculatrice NumWorks, " +
            "dans le but de découvrir et d’approfondir l’apprentissage du C++ à travers un projet " +
            'concret, tout en mettant en pratique les connaissances acquises en situation réelle.',
        built:
            "Développement d'un jeu vidéo de type clicker en C++ pour calculatrice NumWorks. " +
            "Mise en place d'un système de clics permettant au joueur d'accumuler des points et " +
            "de progresser dans le jeu. Gestion des interactions avec le clavier et de l'affichage " +
            'des informations du jeu sur l’écran de la calculatrice.',
        problemSolution:
            "Le développement sur NumWorks impose de fortes contraintes matérielles : la RAM est " +
            "limitée, le stockage est difficile d'accès et certaines bibliothèques habituelles du " +
            "C++ ne sont pas prises en charge. L'EADK permet de gérer les interactions avec les " +
            "périphériques, tandis que la bibliothèque storage.h et storage.c facilite la lecture " +
            "et l'écriture dans le stockage. Le code doit également être optimisé pour utiliser " +
            'peu de mémoire.',
        bug:
            "Un appui prolongé sur une touche peut déclencher plusieurs actions, car le clavier " +
            "est détecté en continu tant que la touche reste enfoncée. Il faut détecter le nouvel " +
            'appui plutôt que répéter l’action pendant toute la pression.',
        stack: [
            'C++',
            'NumWorks',
            'Shell',
            'EADK',
            'Programmation embarquée',
            'Développement logiciel'
        ],
        status:
            "Le jeu n'est pas terminé et le code n'est pas encore très propre. " +
            "Aucune suite n'est prévue pour le moment.",
        github: links.appNumworks
    },

    codewars: {
        title: 'CodeWars',
        subtitle: 'Adaptation kata CodeWars',
        context:
            "Dépôt regroupant une sélection de mes solutions aux exercices (kata) de Codewars, " +
            "développées en C++ et en Python. Seuls les exercices adaptés pour être compilés ou " +
            "exécutés dans un terminal sont présents ; certains de mes kata n'ont pas encore été " +
            'adaptés à cet environnement.',
        built:
            "Adaptation de solutions Codewars pour les compiler et les exécuter en dehors de la " +
            "plateforme. Réalisation de kata de tout niveau, jusqu'à mon meilleur résultat : un " +
            'kata de niveau 6. Organisation des solutions en programmes autonomes afin de faciliter ' +
            'les tests et la vérification des algorithmes.',
        problemSolution:
            "Les kata Codewars sont exécutés dans un environnement qui fournit des tests et un " +
            "cadre prédéfini. Pour les lancer localement, les solutions doivent parfois être " +
            "adaptées afin de gérer les entrées, les appels de fonctions et l'affichage des " +
            "résultats. Un point d'entrée adapté et des tests permettent de vérifier les solutions " +
            'tout en conservant leur logique algorithmique.',
        stack: [
            'C++',
            'Python',
            'Codewars',
            'Algorithmes',
            'Structures de données',
            'Résolution de problèmes',
            'Logique de programmation',
            'Débogage'
        ],
        status: 'Entraînement continu.',
        github: links.adaptationCodeWars,
        codewars: links.codewars
    },

    iaNeuronal1: {
        title: 'IA_neuronal1',
        subtitle: 'Réseau neuronne double entrer',
        context:
            "Je me suis fixé comme objectif de créer une intelligence artificielle basée sur un " +
            "réseau de neurones artificiels capable d'apprendre à doubler un nombre à partir " +
            "d'exemples. Ce projet m'a permis de découvrir les principes de l'apprentissage " +
            'automatique et de comprendre comment un réseau ajuste ses paramètres pour produire ' +
            'le résultat attendu.',
        built:
            "Création d'un réseau de neurones artificiels en Python capable d'associer un nombre " +
            "en entrée à son double en sortie. Préparation des données d'entraînement et utilisation " +
            'de Keras et NumPy pour construire le modèle, manipuler les données et expérimenter ' +
            'son apprentissage.',
        problemSolution:
            "Le réseau devait apprendre correctement la relation entre une valeur d'entrée et son " +
            "double. Pour cela, j'ai défini des exemples d'entraînement cohérents, configuré le " +
            "modèle et ajusté ses paramètres afin de réduire l'écart entre les prédictions et les " +
            'résultats attendus.',
        bug:
            "Les prédictions du réseau manquaient de précision, car le nombre de neurones, la " +
            "quantité de données et le nombre d'époques n'étaient pas adaptés. J'ai ajusté les " +
            "données d'entraînement et le nombre de neurones pour améliorer les résultats.",
        stack: [
            'Keras',
            'NumPy',
            'Intelligence artificielle',
            'Réseaux de neurones',
            'Machine learning'
        ],
        status:
            "Le projet est terminé et je ne prévois pas de l'améliorer pour le moment.",
        github: links.iaNeuronal1
    },

    loginSecure: {
        title: 'Login_Secure',
        subtitle: 'Serveur sécurisé en C++ permettant de se connecter à un site web.',
        context:
            "Dans le cadre d'un projet de groupe, je devais développer un système de connexion " +
            "sécurisé et concevoir moi-même le serveur. Les performances étant importantes, j'ai " +
            "choisi le C++ plutôt que le Python pour privilégier l'efficacité et la maîtrise des " +
            'ressources du serveur.',
        built:
            "Développement d'un serveur HTTP en C++ pour gérer les requêtes d'authentification. " +
            "Mise en place d'une gestion des comptes utilisateurs avec SQLite3 et protection des " +
            'mots de passe avec Argon2.',
        problemSolution:
            "La création d'un système d'authentification nécessitait une gestion fiable des " +
            "requêtes HTTP et des données utilisateurs. J'ai utilisé httplib pour les requêtes, " +
            "SQLite3 pour le stockage et Argon2 pour protéger les mots de passe, en séparant les " +
            'responsabilités du code pour faciliter sa maintenance.',
        bug:
            "La récupération des données envoyées par le client posait problème, notamment en " +
            "raison des différences entre les langages côté client et serveur. J'ai développé une " +
            "API pour traiter correctement ces données et configuré un certificat SSL/TLS afin de " +
            'chiffrer les échanges en HTTPS.',
        stack: [
            'C++',
            'SQLite3',
            'Argon2',
            'cpp-httplib',
            'HTTP',
            'HTTPS',
            'TCP/IP',
            'Cybersécurité',
            'Authentification',
            'Hachage de mots de passe',
            'Base de données',
            'Sécurité web',
            'Gestion des requêtes HTTP'
        ],
        status:
            "Le projet est toujours en cours. N'utilisez pas ce code pour un projet sécurisé " +
            'pour le moment.',
        github: links.loginSecure
    },

    portfolioV3: {
        title: 'Portfolio_V3',
        subtitle: 'Création de mon portefolio en 3D',
        context:
            "Portfolio_V3 est la nouvelle version de mon portfolio, actuellement en cours de " +
            "développement, qui succède à la V2. Le design a été repensé pour passer d'un site " +
            "vitrine à un portfolio interactif en 3D, plus complet et immersif, qui présente mon " +
            'profil, mes compétences et mes projets.',
        built:
            "Création de plusieurs sections pour présenter mon profil, mon parcours, mes " +
            "compétences et mes projets. Développement d'une interface interactive avec des " +
            "animations 3D grâce à Three.js et React Three Fiber, et mise en place d'une " +
            'architecture facilitant les évolutions du site.',
        problemSolution:
            "La création d'un portfolio en 3D était un défi, car je devais apprendre de nouvelles " +
            "techniques tout en concevant un site complet. J'ai commencé par définir son " +
            "architecture et ses sections, puis suivi la formation de Bruno Simon pour apprendre " +
            'à développer des expériences web interactives en trois dimensions.',
        bug: 'À définir.',
        stack: [
            'React',
            'JavaScript',
            'GLB',
            'Git',
            'R3F',
            'Three.js',
            'WebGL',
            'HTML',
            'CSS',
            'Vite',
            'Blender',
            'Modélisation 3D',
            'Développement web',
            'Design 3D',
            'UI/UX',
            'Animation 3D',
            'Web interactif'
        ],
        status:
            'Ce site est en cours de développement et évoluera pour refléter mes progrès, mes ' +
            'compétences et mes projets. Plusieurs mises à jour sont en préparation, sans date ' +
            'de publication définie.',
        github: links.portfolioV3
    },

    rubberDucky: {
        title: 'rubber_ducky',
        subtitle: "Création d'une clé USB de hacking",
        context:
            "Ce projet étudie les effets d'un code potentiellement malveillant dans un " +
            "environnement contrôlé conçu pour les tests, et non pour infecter des ordinateurs. " +
            "Il s'inscrit dans une démarche d'apprentissage et d'expérimentation en cybersécurité. " +
            "Je décline toute responsabilité quant à l'utilisation de ce code en dehors du cadre prévu.",
        built:
            "Adaptation et téléversement du code C++ sur un Arduino Nano utilisé comme périphérique. " +
            "Création de scripts exécutant automatiquement des séquences d'actions et mise en " +
            "place de tests pour observer le comportement de l'ordinateur.",
        problemSolution:
            "Le périphérique devait communiquer correctement avec l'ordinateur et exécuter les " +
            "instructions dans le bon ordre, malgré les différences de configuration entre les " +
            "machines. J'ai structuré les séquences, testé leur exécution progressivement et " +
            'ajusté le programme pour améliorer sa fiabilité.',
        bug:
            "Certaines instructions exécutées trop rapidement étaient manquées, car le temps de " +
            "détection du périphérique et de traitement des entrées varie selon la machine. " +
            "J'ai ajusté l'enchaînement des instructions et ajouté des délais pour laisser à " +
            "l'ordinateur le temps de traiter chaque action.",
        stack: [
            'C++',
            'Arduino Nano',
            'USB HID',
            'Git',
            'Programmation embarquée',
            'Automatisation',
            'Arduino IDE'
        ],
        status:
            "Le projet est terminé et le script est fonctionnel. Il reste à indiquer l'exécution " +
            "dont on a besoin.",
        github: links.rubberDucky
    }
};

export default projects;

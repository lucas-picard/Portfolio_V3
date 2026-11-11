# Architecture de mon projet

## Arborescence

```text
Portfolio_V3/
├── Documentation/             # Ma documentation du site et du projet
├── src/
│   ├── APP/
│   │   ├── App.jsx             # Routeur et assemblage des pages 2D
│   │   ├── AppArcade.jsx       # Écran d’arcade non intégré à la navigation
│   │   └── DesktopPortfolio.jsx # Assemblage de la scène 3D sur ordinateur
│   ├── components/             # Composants communs
│   ├── content/                # Textes et données des pages
│   │   └── Brouillon_txt/      # Brouillons de contenu
│   ├── Mobile/                 # Navigation mobile et styles associés
│   ├── scenes/                 # Pages React et styles de chaque page
│   ├── store/                  # État partagé de la section 3D
│   ├── styles/                 # Styles globaux et variables CSS
│   ├── three/                  # Caméra, lumières, objets et navigation 3D
│   ├── Portfolio.jsx           # Choix entre la version mobile et la version 3D
│   └── main.jsx                # Point d’entrée React
├── static/
│   ├── assets/                 # Images, logos, CV et ressources statiques
│   ├── font/                   # Police utilisée par les textes 3D
│   ├── Liscences/              # Licences de ressources tierces
│   └── models/                 # Modèles 3D
├── index.html                  # Document HTML et métadonnées
├── package.json                # Dépendances et commandes du projet
└── vite.config.js              # Configuration de Vite
```

## Comment j’organise mes dossiers

- **`src/APP/`** me sert à assembler mes routes 2D et ma scène 3D pour les grands écrans.
- **`src/scenes/`** contient mes pages. J’accompagne généralement chaque page React de son fichier CSS Module.
- **`src/content/`** me permet de séparer mes textes des éléments d’interface.
- **`src/components/`** regroupe mes éléments réutilisés : icônes, bouton de retour, écran de chargement et synchronisation des styles de l’iframe.
- **`src/Mobile/`** contient ma navigation pour petit écran.
- **`src/store/`** me permet de partager l’état de la section sélectionnée entre mes composants 3D.
- **`src/styles/`** rassemble mes styles globaux et mes variables communes.
- **`src/three/`** regroupe mes composants Three.js : caméra, lumières, modèles et boutons.
- **`static/`** contient mes ressources que Vite sert telles quelles.

## Comment mon application démarre

Dans `index.html`, je fournis l’élément HTML `#root`. Avec `src/main.jsx`, je crée le point d’entrée React et j’affiche `src/Portfolio.jsx`. Grâce à ce composant, je choisis ma version mobile ou ordinateur et je charge celle qui convient.

Dans `src/APP/App.jsx`, ma route `*` affiche ma page 404 lorsqu’aucune route ne correspond.

## Comment j’intègre mon interface dans la scène

Dans `src/APP/DesktopPortfolio.jsx`, je compose le Canvas React Three Fiber avec ma caméra, mon éclairage, mon décor, mes boutons et mon écran HTML. Avec `src/three/scenes/Iframe/ScreenFrame.jsx`, je place mon application 2D dans un iframe de la scène.

Dans `src/components/CopieStyles.jsx`, je surveille les styles du document principal et je les synchronise avec ceux de l’iframe. Je garde ma navigation dans l’application intégrée grâce au `MemoryRouter` et à l’événement `portfolio:navigate`.

## Ce que je n’ai pas encore intégré

- J’ai commencé `src/APP/AppArcade.jsx`, mais je ne l’utilise pas dans le choix d’écran de `src/Portfolio.jsx` et je n’y ai pas encore créé d’interface.
- J’ai des données de crédits dans `src/content/credit.js`, mais je n’ai pas encore déclaré de route de crédits dans `src/APP/App.jsx`.

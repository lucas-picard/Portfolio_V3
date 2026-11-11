# Architecture de mon projet

## Arborescence

```text
Portfolio_V3/
├── Documentation/             # Documentation du site et du projet
├── src/
│   ├── APP/
│   │   ├── App.jsx             # Routeur et assemblage des pages 2D
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

## Rôle des dossiers

- **`src/APP/`** assemble les routes 2D et la scène 3D destinée aux grands écrans.
- **`src/scenes/`** contient les pages. Chaque page React est généralement accompagnée de son fichier CSS Module.
- **`src/content/`** sépare les textes des éléments d’interface.
- **`src/components/`** regroupe les éléments réutilisés : icônes, bouton de retour, écran de chargement et synchronisation des styles de l’iframe.
- **`src/Mobile/`** contient la navigation pour petit écran.
- **`src/store/`** partage l’état de la section sélectionnée entre les composants 3D.
- **`src/styles/`** rassemble les styles globaux et les variables communes.
- **`src/three/`** regroupe les composants Three.js : caméra, lumières, modèles et boutons.
- **`static/`** contient les ressources servies telles quelles par Vite.

## Démarrage de l’application

`index.html` fournit l’élément HTML `#root`. `src/main.jsx` crée le point d’entrée React et affiche `src/Portfolio.jsx`, qui choisit et charge la version mobile ou ordinateur.

La route `*` de `src/APP/App.jsx` affiche la page 404 lorsqu’aucune route ne correspond.

## Intégration de l’interface dans la scène

`src/APP/DesktopPortfolio.jsx` compose le Canvas React Three Fiber avec la caméra, l’éclairage, le décor, les boutons et l’écran HTML. `src/three/scenes/Iframe/ScreenFrame.jsx` place l’application 2D dans un iframe de la scène.

`src/components/CopieStyles.jsx` observe les styles du document principal et les synchronise avec ceux de l’iframe. Le `MemoryRouter` et l’événement `portfolio:navigate` assurent la navigation dans l’application intégrée.

## Éléments non intégrés

- `src/APP/AppArcade.jsx` existe, mais il n’est pas utilisé dans le choix d’écran de `src/Portfolio.jsx` et ne contient pas encore d’interface.
- `src/content/credit.js` contient des données de crédits, mais aucune route de crédits n’est déclarée dans `src/APP/App.jsx`.

# Portfolio — React & 3D

## 📌 Présentation

Ce projet est un portfolio personnel développé avec **React, JavaScript, HTML et CSS**, avec pour objectif d'intégrer un environnement 3D interactif.

Le projet est construit progressivement :
- **2D :** création de l'interface du portfolio.
- **3D :** ajout d'un environnement en trois dimensions.
- **Intégration :** connexion entre l'interface React et la scène 3D.

La 2D et la 3D sont développées dans le même projet.

## 📁 Arborescence du projet

```text
portfolio/
│
├── public/
│   └── assets/              # Ressources statiques accessibles directement
│
├── src/
│   │
│   ├── components/          # Composants réutilisables de l'interface
│   │   ├── Header.jsx       # En-tête et navigation
│   │   ├── Button.jsx       # Boutons réutilisables
│   │   └── ...
│   │
│   ├── pages/               # Pages ou grandes sections du portfolio
│   │   ├── Home.jsx         # Accueil
│   │   ├── Projects.jsx     # Projets
│   │   └── About.jsx        # À propos
│   │
│   ├── scene3D/             # Éléments de l'environnement 3D
│   │   ├── Scene.jsx        # Scène principale
│   │   ├── Camera.jsx       # Configuration de la caméra
│   │   ├── Objects.jsx      # Objets 3D
│   │   └── ...
│   │
│   ├── styles/              # Feuilles de style CSS
│   │   ├── tokens.css       # Variables de couleurs et de polices
│   │   ├── global.css       # Styles globaux
│   │   └── App.css          # Styles de l'application
│   │
│   ├── App.jsx              # Assemble les différentes parties du site
│   ├── main.jsx             # Point d'entrée de React
│   └── ...
│
├── index.html               # Document HTML principal
├── package.json             # Dépendances et scripts du projet
├── package-lock.json        # Versions exactes des dépendances
├── vite.config.js           # Configuration de Vite
└── README.md                # Documentation du projet
```

*Remarque : certains fichiers et dossiers seront à créer au fur et à mesure du développement.*

## 🧩 Rôle des dossiers

### `public/`

Contient les ressources statiques accessibles directement, comme certaines images, icônes ou fichiers à télécharger.

### `src/components/`

Contient les composants React réutilisables : boutons, menus, cartes de projets et autres éléments de l'interface.

### `src/pages/`

Contient les pages ou les grandes sections du portfolio. Chaque fichier peut regrouper les composants nécessaires à une partie du site.

### `src/scene3D/`

Contient la logique de l'environnement 3D : objets, caméra, éclairage, animations et interactions.

La scène 3D pourra être développée séparément à l'intérieur du projet, sans créer un deuxième projet React.

### `src/styles/`

Contient les fichiers CSS.

- `tokens.css` : couleurs, polices et variables partagées.
- `global.css` : styles généraux et réinitialisation CSS.
- `App.css` : mise en page principale de l'application.

### `App.jsx`

C'est le composant principal. Il assemble l'interface 2D et, lorsque celle-ci sera ajoutée, la scène 3D.

### `main.jsx`

C'est le point d'entrée de React. Il charge l'application, les polices et les styles globaux.

### `index.html`

C'est le document HTML de base dans lequel React affiche l'application.

## 🎨 Organisation entre la 2D et la 3D

L'interface et l'environnement 3D ont des rôles différents.

| Partie | Technologie | Rôle |
|---|---|---|
| Interface 2D | React + CSS | Textes, navigation, boutons et projets |
| Environnement 3D | Three.js / React Three Fiber | Monde 3D, objets, caméra et animations |
| Assemblage | React | Affichage et communication entre les deux |

Les deux parties peuvent être affichées ensemble. Par exemple, l'environnement 3D peut servir d'arrière-plan, tandis que les éléments HTML restent interactifs au-dessus.

## 🛠️ Technologies prévues

- **React** — création de l'interface.
- **JavaScript** — logique et interactions.
- **HTML / CSS** — structure et apparence du site.
- **Vite** — serveur de développement et compilation.
- **Three.js** — rendu 3D.
- **React Three Fiber** — utilisation de Three.js avec React.

## 🚀 Lancer le projet

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Vite affichera une adresse locale dans le terminal. Ouvre cette adresse dans ton navigateur pour voir le portfolio.

## 📍 État du projet

- [x] Création du projet React avec Vite
- [x] Installation des polices
- [x] Mise en place des premiers styles globaux
- [ ] Création de l'interface 2D
- [ ] Création des composants du portfolio
- [ ] Intégration de la scène 3D
- [ ] Ajout des animations et des interactions
- [ ] Optimisation et mise en ligne

## 🎯 Objectif final

Créer un portfolio original qui associe une interface web classique à un univers 3D interactif, tout en conservant un code organisé, évolutif et facile à maintenir.

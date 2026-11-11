# Contenus et ressources

## Modifier les textes

Les données affichées par les pages sont regroupées dans `src/content/` :

| Fichier | Contenu |
|---|---|
| `home.js` | Titre, accroche et texte de l’accueil |
| `about.js` | Présentation personnelle |
| `project.js` | Descriptions et informations des projets |
| `skills.js` | Compétences techniques et personnelles |
| `journey.js` | Formations, stages, emplois et recherche actuelle |
| `contact.js` | Coordonnées affichées et libellés du formulaire |
| `lien.js` | Liens vers les profils et projets |
| `notFound.js` | Données de la page 404 |

Les fichiers `src/content/Brouillon_txt/` sont des brouillons en Markdown. Ils ne remplacent pas les données JavaScript utilisées par les pages.

Pour modifier la mise en page ou le comportement d’une page, travaille dans son composant sous `src/scenes/`. Pour ses couleurs et son apparence, consulte le fichier CSS Module associé.

## Images et icônes

- Les images des pages sont rangées sous `static/assets/Images/`.
- Les fichiers SVG des icônes sont rangés sous `static/assets/Logos/`.
- Le CV téléchargeable est `static/assets/CV.pdf`.

Le composant `src/components/Icon.jsx` construit les chemins des icônes depuis le nom et le jeu fournis.

## Modèles 3D

- `static/models/Decors/` contient les modèles décoratifs.
- `static/models/Fonctionnel/` contient notamment le panneau, l’enseigne et les boutons 3D.
- `static/models/Iframe/` contient le diorama d’accueil ainsi que les modèles des projets et des catégories de compétences.
- `static/font/VT323_Regular.json` fournit la police utilisée pour le texte 3D.

Les modèles sont chargés par `src/components/Import.jsx` ou par les composants de modèle propres aux pages. Les chemins déclarés dans le code utilisent l’URL publique de Vite, par exemple `/models/Fonctionnel/arcade.glb`.

## Styles partagés

- `src/styles/global.css` définit les styles globaux.
- `src/styles/tokens.css` regroupe les couleurs, la typographie, les espacements et autres variables communes.
- `src/styles/App.module.css` contient les styles de l’application.
- Les fichiers `.module.css` placés à côté des pages définissent les styles propres à ces pages.

Les licences des ressources tierces se trouvent dans `static/Liscences/`.

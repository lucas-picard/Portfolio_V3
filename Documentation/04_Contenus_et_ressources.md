# Mes contenus et mes ressources

## Où modifier les textes

Les données affichées par les pages se trouvent dans `src/content/` :

| Fichier | Contenu |
|---|---|
| `home.js` | Titre, accroche et texte de l’accueil. |
| `about.js` | Textes de ma présentation. |
| `project.js` | Descriptions et informations de mes projets. |
| `skills.js` | Mes compétences techniques et personnelles. |
| `journey.js` | Mes formations, stages, emplois et recherche actuelle. |
| `contact.js` | Mes coordonnées affichées et libellés du formulaire. |
| `lien.js` | Liens vers mes profils et mes projets. |
| `notFound.js` | Données de la page 404. |

Les fichiers de `src/content/Brouillon_txt/` sont des brouillons au format Markdown. Les pages utilisent les données JavaScript, et non ces brouillons.

Pour modifier la mise en page ou le comportement d’une page, consultez son composant sous `src/scenes/`. Son apparence est définie dans le fichier CSS Module associé.

## Images et icônes

- Les images des pages se trouvent dans `static/assets/Images/`.
- Les icônes SVG se trouvent dans `static/assets/Logos/`.
- Le CV téléchargeable se trouve dans `static/assets/CV.pdf`.

`src/components/Icon.jsx` construit le chemin d’une icône à partir de son nom et de sa collection.

## Modèles 3D

- `static/models/Decors/` contient les modèles décoratifs.
- `static/models/Fonctionnel/` contient notamment le panneau, l’enseigne et les boutons 3D.
- `static/models/Iframe/` contient le diorama d’accueil ainsi que les modèles des projets et des catégories de compétences.
- `static/font/VT323_Regular.json` fournit la police utilisée pour le texte 3D.

Les modèles sont chargés par `src/components/Import.jsx` ou par les composants de modèle propres aux pages. Le code utilise leur URL publique Vite, par exemple `/models/Fonctionnel/arcade.glb`.

## Styles partagés

- `src/styles/global.css` définit les styles globaux.
- `src/styles/tokens.css` regroupe les couleurs, la typographie, les espacements et les variables communes.
- `src/styles/App.module.css` contient les styles de l’application.
- Les fichiers `.module.css` placés à côté des pages définissent les styles propres à ces pages.

Les licences des ressources tierces se trouvent dans `static/Liscences/`.

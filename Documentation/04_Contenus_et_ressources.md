# Mes contenus et mes ressources

## Où je modifie mes textes

Je regroupe les données affichées par mes pages dans `src/content/` :

| Fichier | Ce que j’y modifie |
|---|---|
| `home.js` | Je modifie le titre, l’accroche et le texte de mon accueil. |
| `about.js` | Je modifie les textes de ma présentation. |
| `project.js` | Je modifie les descriptions et les informations de mes projets. |
| `skills.js` | Je modifie mes compétences techniques et personnelles. |
| `journey.js` | Je modifie mes formations, stages, emplois et ma recherche actuelle. |
| `contact.js` | Je modifie mes coordonnées affichées et les libellés de mon formulaire. |
| `lien.js` | Je modifie les liens vers mes profils et mes projets. |
| `notFound.js` | Je modifie les données de ma page 404. |

Je conserve mes brouillons au format Markdown dans `src/content/Brouillon_txt/`. Mes pages utilisent toutefois les données JavaScript, et non ces brouillons.

Pour modifier la mise en page ou le comportement d’une page, je travaille dans son composant sous `src/scenes/`. Pour son apparence, je modifie le fichier CSS Module associé.

## Mes images et mes icônes

- Je range les images de mes pages dans `static/assets/Images/`.
- Je range mes icônes SVG dans `static/assets/Logos/`.
- Je fournis mon CV à télécharger dans `static/assets/CV.pdf`.

Avec `src/components/Icon.jsx`, je construis le chemin d’une icône à partir de son nom et de sa collection.

## Mes modèles 3D

- Je range mes modèles décoratifs dans `static/models/Decors/`.
- Je place notamment mon panneau, mon enseigne et mes boutons 3D dans `static/models/Fonctionnel/`.
- Je range mon diorama d’accueil et les modèles de mes projets et catégories de compétences dans `static/models/Iframe/`.
- J’utilise `static/font/VT323_Regular.json` pour le texte 3D.

Je charge mes modèles avec `src/components/Import.jsx` ou avec les composants de modèle de mes pages. Dans le code, j’utilise l’URL publique de Vite, par exemple `/models/Fonctionnel/arcade.glb`.

## Mes styles partagés

- Dans `src/styles/global.css`, je définis mes styles globaux.
- Dans `src/styles/tokens.css`, je regroupe mes couleurs, ma typographie, mes espacements et mes variables communes.
- Dans `src/styles/App.module.css`, je définis les styles de mon application.
- À côté de mes pages, j’utilise des fichiers `.module.css` pour leurs styles propres.

Je conserve les licences des ressources tierces dans `static/Liscences/`.

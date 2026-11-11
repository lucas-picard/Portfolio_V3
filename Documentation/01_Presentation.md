# Présentation de mon site

## Mon objectif

J’ai créé ce site pour présenter mon profil, mes compétences, mon parcours et mes projets. J’y réunis deux expériences dans la même application :

- **Sur ordinateur :** je propose une scène 3D interactive qui intègre mon portfolio 2D dans un écran.
- **Sur mobile et petit écran :** je propose une version 2D adaptée à la navigation tactile.

J’utilise React pour l’interface, Vite pour le développement et la compilation, et Three.js avec React Three Fiber pour le rendu 3D.

## Mes deux versions selon l’écran

Dans `src/Portfolio.jsx`, je choisis la présentation selon la largeur de la fenêtre :

- à **1024 px ou moins**, je charge mon application 2D et sa navigation mobile ;
- au-dessus de **1024 px**, je charge ma scène 3D.

Je charge chaque version uniquement lorsqu’elle est nécessaire. Sur ordinateur, j’affiche ma page 2D dans un iframe placé sur un panneau du décor. Sur mobile, mon application 2D occupe directement l’écran.

## Mon expérience sur ordinateur

J’ai composé ma scène d’un panneau, de modèles décoratifs, de lumières et de boutons de navigation. Mes boutons réagissent au survol et déplacent l’indicateur de la section sélectionnée.

Je conserve mon interface 2D comme contenu du site : je l’affiche dans l’écran 3D et elle garde ses propres pages. J’affiche un écran de chargement pendant la préparation de mes ressources 3D.

## Mon expérience sur mobile

Je ne charge pas ma scène Three.js principale sur mobile. J’affiche une barre fixe au bas de l’écran pour ouvrir mes pages À propos, Projets, Compétences, Parcours et Contact. Je permets d’accéder à l’accueil avec mon bouton d’entrée et les boutons de retour des pages.

Je détaille mes pages et leurs interactions dans [Pages et navigation](./02_Pages_et_navigation.md).

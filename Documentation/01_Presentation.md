# Présentation du site

## Objectif

Ce site présente le profil, les compétences, le parcours et les projets de Lucas Picard. Il réunit deux expériences dans la même application :

- **Sur ordinateur :** une scène 3D interactive qui intègre le portfolio 2D dans un écran.
- **Sur mobile et petit écran :** une version 2D adaptée à la navigation tactile.

Le projet utilise React pour l’interface, Vite pour le développement et la compilation, et Three.js avec React Three Fiber pour le rendu 3D.

## Deux versions selon l’écran

Le composant `src/Portfolio.jsx` choisit la présentation selon la largeur de la fenêtre :

- à **1024 px ou moins**, le site charge l’application 2D et sa navigation mobile ;
- au-dessus de **1024 px**, le site charge la scène 3D.

Les deux versions sont chargées à la demande. Sur ordinateur, la page 2D est affichée dans un iframe placé sur un panneau du décor. Sur mobile, l’application 2D occupe directement l’écran.

## Sur ordinateur

La scène représente un espace de portfolio composé d’un panneau, de modèles décoratifs, de lumières et de boutons de navigation. Les boutons réagissent au survol et déplacent l’indicateur de section sélectionnée.

L’interface 2D reste le contenu du site : elle est affichée dans l’écran 3D et conserve ses propres pages. Un écran de chargement indique la progression des ressources 3D.

## Sur mobile

La scène Three.js principale n’est pas chargée. Une barre fixe au bas de l’écran permet d’ouvrir les pages À propos, Projets, Compétences, Parcours et Contact. La page d’accueil est accessible depuis le bouton d’entrée et les boutons de retour des pages.

Pour le détail des pages et de leurs interactions, voir [Pages et navigation](./02_Pages_et_navigation.md).

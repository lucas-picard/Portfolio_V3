# Présentation de mon site

## Mon objectif

J’ai créé ce site pour présenter mon profil, mes compétences, mon parcours et mes projets. J’y réunis deux expériences dans la même application :

- **Sur ordinateur :** je propose une scène 3D interactive qui intègre mon portfolio 2D dans un écran.
- **Sur mobile et petit écran :** je propose une version 2D adaptée à la navigation tactile.

J’utilise React pour l’interface, Vite pour le développement et la compilation, et Three.js avec React Three Fiber pour le rendu 3D.

## Deux versions selon l’écran

Dans `src/Portfolio.jsx`, la présentation est choisie selon la largeur de la fenêtre :

- à **1024 px ou moins**, l’application 2D et la navigation mobile sont chargées ;
- au-dessus de **1024 px**, la scène 3D est chargée.

Chaque version est chargée uniquement lorsqu’elle est nécessaire. Sur ordinateur, la page 2D s’affiche dans un iframe placé sur un panneau du décor. Sur mobile, l’application 2D occupe directement l’écran.

## Expérience sur ordinateur

J’ai composé ma scène 3D d’un panneau, de modèles décoratifs, de lumières et de boutons de navigation. Ces boutons réagissent au survol et déplacent l’indicateur de la section sélectionnée.

L’interface 2D reste le contenu du site : elle s’affiche dans l’écran 3D et conserve ses propres pages. Un écran de chargement indique la progression des ressources 3D.

## Expérience sur mobile

La scène Three.js principale n’est pas chargée sur mobile. Une barre fixe au bas de l’écran permet d’ouvrir les pages À propos, Projets, Compétences, Parcours et Contact. L’accueil est accessible depuis le bouton d’entrée et les boutons de retour des pages.

Le détail des pages et de leurs interactions est présenté dans [Pages et navigation](./02_Pages_et_navigation.md).

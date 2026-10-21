Titre : App NumWorks
Sous-titre : Jeu clicker sur calculatrice numworks
Commande : $ cat /home/lucas/projets/bladeclicker.md
texte (résumé carte) : Jeu vidéo de type clicker pour calculatrice NumWorks.


BLOC 1 : CONTEXTE

Paragraphe : Application de jeu vidéo de type *clicker* développée pour la calculatrice NumWorks, dans le but de découvrir et d’approfondir l’apprentissage du C++ à travers un projet concret, tout en mettant en pratique les connaissances acquises en situation réelle de développement.


BLOC 2 : CE QUE J'AI CONSTRUIT

Liste : Développement d'un jeu vidéo de type *clicker* pour calculatrice NumWorks en C++.

Liste : Mise en place d'un système de clics permettant au joueur d'accumuler des points et de progresser dans le jeu.

Liste : Gestion des interactions avec le clavier et de l'affichage des informations du jeu sur l'écran de la calculatrice.


BLOC 3 : PROBLÈMES RENCONTRÉS

Problème : Le développement sur NumWorks impose de fortes contraintes matérielles, avec une RAM limitée et un stockage difficile d'accès. De plus, l'environnement de développement ne prend pas en charge l'ensemble des bibliothèques habituelles du C++, comme iostream ou certaines fonctionnalités de string. La gestion des périphériques, notamment le clavier, l'écran et la mémoire, nécessite également une approche spécifique.

Solution : S'appuyer sur l'EADK pour gérer les interactions avec les périphériques et adapter le code aux bibliothèques disponibles. Pour contourner les limitations du stockage, la communauté NumWorks a développé une bibliothèque spécifique, composée des fichiers storage.h et storage.c, permettant de faciliter les opérations de lecture et d'écriture dans la mémoire de stockage. Enfin, optimiser l'utilisation de la RAM et privilégier des solutions légères compatibles avec l'environnement de la calculatrice.


BLOC 4 : UN BUG CONCRET

Bug : Un appui prolongé sur une touche peut déclencher plusieurs actions successives au lieu d'une seule.

Cause : La détection continue de l'état du clavier peut provoquer plusieurs déclenchements tant que la touche reste enfoncée.

Correctif : Détecter le nouvel appui sur la touche afin d'éviter de répéter l'action involontairement.


BLOC 5 : STACK TECHNIQUE

Tag : C++
Tag : NumWorks
Tag : Shell
Tag : EADK
Tag : Programmation embarquée
Tag : Développement logiciel


BLOC 6 : STATUT

Paragraphe : Le jeu n'est pas du tout fini et le code n'est pas très propre.
Texte : Une suite n'est pas encore prévu


BLOC 7 : LIENS

Bouton : GitHub → https://github.com/lucas-picard/BladeClicker
Boutton: < PRECEDENT
Boutton: SUIVANT >

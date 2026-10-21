Titre : rubber_ducky
Sous-titre : Création d'une clé USB de hacking
Commande : $ cat /home/lucas/projets/rubber_ducky.md


BLOC 1 : CONTEXTE

Paragraphe : Ce projet a pour objectif d'étudier les effets et les impacts réels d'un code potentiellement malveillant dans un environnement contrôlé et spécialement conçu pour les tests, et non d'infecter des ordinateurs. Il s'inscrit dans une démarche d'apprentissage et d'expérimentation en cybersécurité. Attention : je décline toute responsabilité quant à l'utilisation de ce code en dehors du cadre prévu.


BLOC 2 : CE QUE J'AI CONSTRUIT

Liste : Adaptation et téléversement du code C++ sur un Arduino Nano afin d'utiliser la carte comme périphérique matériel pour exécuter les fonctionnalités du projet.

Liste : Création de scripts permettant d'exécuter automatiquement une séquence d'actions sur la machine cible.

Liste : Mise en place d'un système permettant de tester différents scénarios et d'observer le comportement de l'ordinateur lors de l'exécution des scripts.


BLOC 3 : PROBLÈMES RENCONTRÉS

Problème : Faire communiquer correctement le périphérique avec l'ordinateur et assurer l'exécution des instructions dans le bon ordre, en tenant compte des différences de configuration entre les machines.

Solution : Organiser les instructions en séquences structurées, tester progressivement leur exécution et ajuster le programme pour améliorer sa fiabilité.


BLOC 4 : UN BUG CONCRET

Bug : Certaines instructions pouvaient être exécutées trop rapidement, entraînant des actions manquantes ou un résultat différent de celui attendu.

Cause : Le temps nécessaire à l'ordinateur pour détecter le périphérique et traiter les entrées pouvait varier selon sa configuration et sa charge.

Correctif : Ajuster l'enchaînement des instructions et intégrer des délais lorsque cela était nécessaire afin de laisser à l'ordinateur le temps de traiter chaque action.


BLOC 5 : STACK TECHNIQUE

Tag : C++
Tag : Arduino Nano
Tag : USB HID
Tag : Git
Tag : Programmation embarquée
Tag : Automatisation
Tag : Arduino IDE


BLOC 6 : STATUT

Texte : Ce projet est terminé le script est fonctionnel il n'y a plus que indiqué l'execution dont ont a besoin


BLOC 7 : LIENS

Bouton : GitHub → https://github.com/lucas-picard/BladeClicker
Boutton: < PRECEDENT
Boutton: SUIVANT >

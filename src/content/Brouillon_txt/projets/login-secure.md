Titre : Login_Secure
Sous-titre : Serveur sécurisé en C++ permettant de se connecter à un site web.
Commande : $ cat /home/lucas/projets/login_secure.md


BLOC 1 : CONTEXTE

Dans le cadre d'un projet de groupe, je devais développer un système de connexion sécurisé, avec pour contrainte de concevoir moi-même le serveur pour répondre aux exigences du projet. Les performances étant un critère important, j'ai choisi le C++ plutôt que le Python afin de privilégier l'efficacité et la maîtrise des ressources du serveur.

BLOC 2 : CE QUE J'AI CONSTRUIT

Liste : Développement d'un serveur HTTP en C++ permettant de gérer les requêtes liées au système d'authentification.

Liste : Mise en place d'un système de gestion des comptes utilisateurs avec stockage des données dans une base SQLite3.

Liste : Protection des mots de passe à l'aide d'Argon2, un algorithme de hachage conçu pour sécuriser les mots de passe.


BLOC 3 : PROBLÈMES RENCONTRÉS

Problème : Concevoir un système d'authentification sécurisé tout en développant son propre serveur en C++, avec une gestion fiable des requêtes HTTP et des données utilisateurs.

Solution : Utiliser httplib pour gérer les requêtes HTTP, SQLite3 pour stocker les informations des utilisateurs et Argon2 pour protéger les mots de passe. Séparer les différentes responsabilités du code afin de faciliter la maintenance et de limiter les risques d'erreurs.

BLOC 4 : UN BUG CONCRET

Bug : J'ai rencontré de nombreux bugs, notamment lors de la récupération des données envoyées par le client vers le serveur.

Cause : Les différences entre les langages utilisés côté client et côté serveur compliquaient le traitement des données transmises. Il fallait également sécuriser les échanges grâce au chiffrement HTTPS pour protéger les informations en transit.

Correctif : J'ai donc développé une API permettant au serveur de récupérer et de traiter correctement les données envoyées par le client. J'ai également configuré un certificat SSL/TLS pour permettre les communications en HTTPS et chiffrer les échanges entre le client et le serveur.


BLOC 5 : STACK TECHNIQUE

Tag : C++
Tag : SQLite3
Tag : Argon2
Tag : cpp-httplib
Tag : HTTP
Tag : HTTPS
Tag : TCP/IP
Tag : Cybersécurité
Tag : Authentification
Tag : Hachage de mots de passe
Tag : Base de données
Tag : Sécurité web
Tag : Gestion des requêtes HTTP


BLOC 6 : STATUT

Le projet n'est pas encore terminé et est en cours, je travail actuellement dessus, donc n'utiliser pas 
ce code pour un projet securisé pour le moment.


BLOC 7 : LIENS

Bouton : GitHub → https://github.com/lucas-picard/BladeClicker
Boutton: < PRECEDENT
Boutton: SUIVANT >

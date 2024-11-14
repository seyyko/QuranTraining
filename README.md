# QuranTraining

## Description

**QuranTraining** est une application web conçue pour faciliter la mémorisation des versets du Coran. Son objectif principal est de rendre l'expérience de révision agréable et accessible, en permettant aux utilisateurs de réviser les versets du Coran de manière dynamique et personnalisée.

### Concept de l'application :

L'application fonctionne de la manière suivante :
1. **Sélectionner la sourate la plus petite que tu connaisses** : L'utilisateur choisit la sourate la plus petite qu'il connaisse (par exemple, Sourate Al-Baqara, numéro 002).
2. **Sélectionner la sourate la plus grande que tu connaisses** : L'utilisateur choisit ensuite la sourate la plus grande qu'il connaisse (par exemple, Sourate Al-Fatiha, numéro 001).
3. **Choisir le nombre de "manches"** : L'utilisateur définit combien de "manches" (sessions de révision) il souhaite pour sa session.
4. **Révision aléatoire de versets** : L'application choisit une sourate au hasard dans la plage définie et sélectionne un verset aléatoire. L'utilisateur peut choisir si ce verset se trouve au début, au milieu ou à la fin de la sourate. Le but est de continuer à réviser la sourate à partir du verset affiché.

L'accent est mis sur l'expérience utilisateur pour rendre la révision agréable, flexible et adaptée à chaque utilisateur. L'application n'impose pas de méthode rigide et permet à l'utilisateur de choisir la révision de manière interactive.

### Objectif supplémentaire :

Bien que la fonctionnalité de **page de connexion** soit **optionnelle**, elle sera ajoutée à l'avenir pour permettre aux utilisateurs de sauvegarder leur progression et de reprendre là où ils se sont arrêtés. L'objectif est de rendre l'application aussi accessible et agréable que possible, avec une attention particulière portée à la simplicité d'utilisation.

## Structure du Projet

Le projet est organisé comme suit :
- **app.py** : Le fichier principal de l'application Flask, qui contient la logique des routes.
- **templates/** : Dossier contenant les fichiers HTML (base.html, index.html, about.html, signup.html).
- **static/css/** : Dossier contenant les fichiers CSS pour le style de l'application.
- **data.json** : Fichier JSON contenant toutes les sourates du Coran.
- **.env** : Fichier de configuration pour gérer les variables d'environnement sensibles (par exemple, des clés API).

## Installation

1. Clonez le projet depuis GitHub :

   ```bash
   git clone https://github.com/ton_utilisateur/QuranTraining.git
   cd QuranTraining

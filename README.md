# Mon portefolio

[<img src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png">](https://angular.io/)
[<img src="https://material.angular.io/assets/img/homepage/angular-white-transparent.svg">](https://material.angular.io/)
[<img src="https://www.emailjs.com/logo.png">](https://www.emailjs.com/)

Projet qui regroupe des pojets, mon portefolio.

## Pour commencer

1. Cloner le repo :

https://github.com/yohannBernard411/PorteFolioAngular.git

```bash
npm install
```
2. Nécessite une clef d'api pour emailJS

Dans le fichier: src > app > formulaire-contact > formulaire-contact.component.ts

A la ligne 12:

```typescript
emailjs.sendForm('contact_service', 'contact_form', e.target as HTMLFormElement, 'ICI-VOTRE-CLEF')
```


### En ligne

Ce portefolio est également consultable à l'adresse:

```link
https://www.bernardyohann.fr
```

## Démarrage

Aprés clonage du repo, mettre à jour les librairies avec:
```bash
npm install
```

Puis lancer le serveur en local avec:
```bash
ng serve
```

Le site sera alors consultable dans le navigateur à l'adresse localhost://4200


## Fabriqué avec

Liste des programmes/logiciels/ressources que j'ai utilisé pour développer ce projet
* [AngularMaterial](https://material.angular.io/) - Material Design components for Angular
* [FontawesomeAngular](https://fontawesome.com/v5/docs/web/use-with/angular) - Font Awesome now has an official Angular component that’s available for all who want to to easily use our icons in projects.
* [EmailJS](https://www.emailjs.com/) - Send Email Directly From Your Code

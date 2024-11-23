/************************ Le BOM
Le BOM (Browser Object Model) est un ensemble d'objets fournis par le navigateur pour interagir avec l'environnement dans lequel une page web est exécutée. 
Il permet de manipuler tout ce qui concerne le navigateur, en dehors du contenu spécifique de la page (DOM).

Structure du BOM
    Le BOM est représenté par l'objet global window, qui contient :
        •	Des propriétés et méthodes pour interagir avec le navigateur.
        •	D'autres objets utiles pour gérer les éléments externes à la page (comme l'URL, les cookies, ou la taille de la fenêtre).

Schéma simplifié du BOM
    window
    ├── document (DOM)
    ├── location
    ├── navigator
    ├── screen
    ├── history
    ├── alert, confirm, prompt (méthodes)
    ├── setTimeout, setInterval (méthodes)
    
            
    2. Les principaux objets du BOM

a. window
    L'objet window est l'objet global. 
    Toutes les fonctions ou propriétés du BOM font partie de window. 
    Vous pouvez l'utiliser directement ou omettre window
    // Accès à une propriété directement via window
    console.log(window.innerWidth); // Largeur de la fenêtre
    // Sans préciser window (équivalent)
    console.log(innerWidth);
b. location
    L'objet location contient des informations sur l’URL de la page courante. Il permet également de rediriger l'utilisateur
    console.log(location.href); // URL complète
    console.log(location.hostname); // Nom de domaine
    console.log(location.pathname); // Chemin de la page
    // Rediriger l'utilisateur
    location.href = 'https://www.example.com';

c. navigator
    L'objet navigator fournit des informations sur le navigateur de l'utilisateur (type, version, système d'exploitation, etc.).
    console.log(navigator.userAgent); // Chaîne descriptive du navigateur
    console.log(navigator.language); // Langue préférée
    console.log(navigator.onLine); // Indique si l'utilisateur est en ligne (true/false)

d. screen
    L'objet screen donne des informations sur l'écran de l'utilisateur.
    console.log(screen.width); // Largeur de l'écran en pixels
    console.log(screen.height); // Hauteur de l'écran en pixels
    console.log(screen.availWidth); // Largeur disponible (sans la barre des tâches)

e. history
    L'objet history permet de naviguer dans l'historique du navigateur.
    history.back(); // Retour à la page précédente
    history.forward(); // Aller à la page suivante
    console.log(history.length); // Nombre de pages dans l'historique

3.  Méthodes utiles du BOM:  alert, confirm, prompt, setTimeout et setInterval, 

*/

/*
developer.mozilla.org
Pour approfondir vos connaissances sur le Browser Object Model (BOM), 
vous pouvez consulter la documentation de l'objet window sur MDN. 
Cette ressource offre une vue d'ensemble complète des propriétés et méthodes disponibles 
pour interagir avec le navigateur.*/



/* 1)
Affichez la largeur et la hauteur de la fenêtre

*/
console.log("Largeur : " + window.innerWidth);
console.log("Hauteur : " + window.innerHeight);

/* 2)
Rediriger l'utilisateur vers https://www.google.com
*/
location.href = 'https://www.google.com';

/* 3)
Affichez l'URL actuelle dans la console.
*/
console.log("URL actuelle : " + location.href);

/* 4)
Affichez la langue préférée de l'utilisateur dans la console.
*/
console.log("Langue préférée : " + navigator.language);

/* 5)
Affichez si l'utilisateur est en ligne ou hors ligne dans la console.
*/
if (navigator.onLine) {
    console.log("Vous êtes en ligne.");
} else {
    console.log("Vous êtes hors ligne.");
}

/* 6)
Affichez combien de pages sont disponibles dans l'historique de navigation.
*/
console.log("Nombre de pages dans l'historique : " + history.length);
/* 7)
Écrire un code qui ramène l'utilisateur à la page précédente
*/
history.back();

/* 8)
Affichez la largeur et la hauteur de l'écran de l'utilisateur dans la console.
*/
console.log("Largeur de l'écran : " + screen.width);
console.log("Hauteur de l'écran : " + screen.height);

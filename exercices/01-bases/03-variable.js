/**
var : Utilisé pour déclarer des variables dans les anciennes versions de JavaScript. 
    Les variables déclarées avec var sont globales ou fonctionnelles (elles ignorent les blocs comme les boucles et conditions). 
    Aujourd'hui, let et const sont préférés pour une meilleure gestion des variables.

let : 
    Permet de déclarer une variable qui est limitée à son bloc de code (par exemple, dans une boucle ou une condition). 
    On peut changer la valeur d'une variable let après l'avoir déclarée.

const :     
    Utilisé pour déclarer une constante, 
    c'est-à-dire une variable dont la valeur ne peut pas être modifiée après l'initialisation.
    Comme let, elle est aussi limitée à son bloc.

Ces trois types de déclaration aident à mieux gérer les variables et éviter les erreurs.
 */

/*1
 Déclare une variable nom avec var et assigne-lui ton prénom. 
Ensuite, modifie la valeur de nom avec ton nom de famille 
et affiche la phrase "Mon nom est maintenant : [valeur de nom]" dans la console.
*/
var nom = "TonPrénom";
nom = "TonNomDeFamille";
console.log(nom);
// ------------------------------------

/*2 
 Déclare une variable nom avec let et assigne-lui ton age. 
Ensuite, modifie la valeur 
et affiche la dans la console.

*/
let age = 20;
age = age + 1;
console.log("Mon âge est maintenant : " + age);

/**
Déclare une constante PI avec const et assigne-lui la valeur 3.14159. 
Affiche la phrase "La valeur de PI est : [valeur de PI]" dans la console. 
Essaye de modifier PI et observe le message d’erreur.

 */
const PI = 3.14159;
console.log("La valeur de PI est : " + PI);
// PI = 3.14; // Ceci provoquera une erreur

/* 3
Déclare les variables (let) suivantes avec des valeurs appropriées en une seule ligne: 
    prenom (un prénom en texte), 
    monAge (un âge en nombre), 
    estInscrit (une valeur booléenne true ou false pour indiquer si la personne est inscrite) 
    et une variable vide :

Affiche toutes les variables 
*/
// Déclaration des variables en une seule ligne
let prenom = "Alice", monAge = 30, estInscrit = true, adresse;

// Affichage de toutes les variables
console.log(prenom);     // Affiche le prénom
console.log(monAge);        // Affiche l'âge
console.log(estInscrit); // Affiche si la personne est inscrite
console.log(adresse);    // Affiche undefined, car adresse est vide

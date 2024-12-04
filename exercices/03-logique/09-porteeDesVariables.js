/*

portée des variables
La portée des variables détermine où une variable est accessible et dans quel contexte elle existe.
Comprendre la portée est essentiel pour éviter les erreurs et structurer le code de manière efficace.
Il y a trois niveaux de portée pour les variables : la portée globale, la portée de fonction, et la portée de bloc.
La Portée Globale
Une variable définie en dehors de toute fonction ou bloc de code est dite globale. Elle est accessible partout dans le code.
let variableGlobale = "Je suis global";
function afficherVariableGlobale() {
    console.log(variableGlobale); // Accès à la variable globale
}
afficherVariableGlobale(); // Affiche "Je suis global"
console.log(variableGlobale); // Affiche "Je suis global"

La Portée de Fonction
Une variable définie à l'intérieur d'une fonction est accessible uniquement dans cette fonction.
Elle est locale à cette fonction et n'est pas accessible en dehors.
function afficherMessage() {
    let message = "Bonjour !";
    console.log(message); // Affiche "Bonjour !"
}
afficherMessage();
console.log(message); // Erreur : "message" n'est pas défini en dehors de la fonction

La Portée de Bloc
La portée de bloc concerne les variables déclarées avec let et const dans des blocs de code, comme des boucles (for, while) ou des conditions (if).
      Une variable déclarée avec let ou const dans un bloc { ... } est accessible uniquement à l'intérieur de ce bloc.
    if (true) {
                 let blocVariable = "Je suis dans un bloc";
                 console.log(blocVariable); // Affiche "Je suis dans un bloc"
}
console.log(blocVariable); // Erreur : "blocVariable" n'est pas défini en dehors du bloc

Différences entre var, let, et const
var : A une portée de fonction ou de global.
Elle ignore la portée de bloc, donc une variable déclarée avec var dans un bloc de code (if, for, etc.) reste accessible en dehors de ce bloc.
let et const : Respectent la portée de bloc. Une variable définie avec let ou const n'est accessible que dans le bloc où elle est déclarée.
if (true) {
    var variableVar = "Je suis avec var";
    let variableLet = "Je suis avec let";
}
console.log(variableVar); //
console.log(variableLet); //

La principale différence entre let et const est que const crée une variable qui ne peut pas être réassignée, tandis que let permet de réassigner la variable.
Voici les différences clés :
1. Réassignation
•	let : La valeur d'une variable déclarée avec let peut être réassignée. Cela permet de changer la valeur de la variable après sa déclaration.
•	const : La valeur d'une variable déclarée avec const ne peut pas être réassignée après la déclaration. Une tentative de réassignation déclenchera une erreur.

•	let age = 25;
•	age = 26; // Pas d'erreur, `age` est réassigné
•	const nom = "Alice";
•	nom = "Bob"; // Erreur ! `nom` ne peut pas être réassigné
2. Nécessité d'Initialisation
•	let : Une variable déclarée avec let peut être déclarée sans valeur initiale, elle sera alors initialisée avec undefined.
•	const : Une variable déclarée avec const doit être initialisée lors de sa déclaration. L'absence d'initialisation déclenche une erreur.


*/

/*
Déclare une variable (let) messageGlobal dans la portée globale avec la valeur "Je suis global".
Crée une fonction afficherMessage qui déclare une variable messageLocal avec la valeur "Je suis local".
Dans cette fonction, affiche messageGlobal et messageLocal avec console.log.
En dehors de la fonction, affiche messageGlobal et messageLocal avec console.log.
*/
// let messageGlobal = "Je suis global";

// function afficherMessage() {
//     let messageLocal = "Je suis local";
//     console.log(messageGlobal); // Affiche "Je suis global"
//     console.log(messageLocal); // Affiche "Je suis local"
// }

// afficherMessage();

// console.log(messageGlobal); // Affiche "Je suis global"


//     console.log(messageLocal); // Erreur : messageLocal n'est pas défini en dehors de la fonction


/*
Crée un bloc if qui vérifie si true est vrai.
Dans ce bloc, déclare une variable x avec let et donne-lui la valeur 10.
Affiche x dans le bloc et ensuite en dehors du bloc.
*/
if (true) {
    let x = 10;
    console.log(x); // Affiche 10, car x est accessible dans le bloc
}
console.log(x); // Erreur : x n'est pas défini en dehors du bloc


/*
Crée une boucle for avec var i = 0; i < 3; i++ et affiche i dans la boucle.
Après la boucle, affiche i en dehors de la boucle.
Refais la même boucle mais avec let i = 0.

*/
// for (var i = 0; i < 3; i++) {
//     console.log(i); // Affiche 0, 1, 2
// }
// console.log(i); // Affiche 3, car var ignore la portée de bloc

// for (let j = 0; j < 3; j++) {
//     console.log(j); // Affiche 0, 1, 2
// }
// console.log(j); // Erreur : j n'est pas défini en dehors de la boucle

/*
Déclare une variable nom avec la valeur "Alice" dans la portée globale.
Crée une fonction saluer qui déclare une variable prenom avec la valeur "Bob".
Dans saluer, crée une fonction interne direBonjour qui affiche nom et prenom.
Appelle direBonjour dans saluer, puis appelle saluer.
*/
// let nom = "Alice";

// function saluer() {
//     let prenom = "Bob";

//     function direBonjour() {
//         console.log("Bonjour " + prenom + " et " + nom); // Affiche "Bonjour Bob et Alice"
//     }

//     direBonjour();
// }

// saluer();

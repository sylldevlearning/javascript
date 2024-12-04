/*
La Boucle for
La boucle for est utilisée quand on sait à l'avance combien de fois on veut répéter un bloc de code. Elle est composée de trois parties :
•	Initialisation : On définit une variable de compteur (généralement i).
•	Condition : La boucle s'exécute tant que cette condition est vraie.
•	Incrémentation : À la fin de chaque itération, la variable de compteur est modifiée (généralement augmentée de 1).
for (initialisation; condition; incrémentation) {
    // Code à exécuter à chaque itération
}
for (let i = 0; i < 5; i++) {
    console.log("Itération n°", i); // Affiche chaque numéro d'itération de 0 à 4
}
*/

/* 1)
Utilise une boucle for pour afficher chaque nombre de 1 à 10 dans la console.
Objectif : Comprendre la structure de base de la boucle for avec un compteur.
*/
// for (let i = 1; i <= 10; i++) {
//     console.log(i); // Affiche les nombres de 1 à 10
// }

/* 2)
Demande à l'utilisateur de saisir un nombre avec prompt.
Utilise une boucle for pour afficher la table de multiplication de ce nombre (par exemple, pour un nombre 5, affiche 5 x 1 = 5, 5 x 2 = 10, etc., jusqu'à 5 x 10 = 50).
*/
let nombre = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication :"));
for (let i = 1; i <= 10; i++) {

    console.log(nombre + ""); // Affiche la table de multiplication du nombre
    console.log(`${nombre} x ${i} = ${nombre * i}`); // Affiche la table de multiplication du nombre
}

/* 3
Demande à l'utilisateur de saisir un nombre N.
Utilise une boucle for pour calculer la somme de tous les nombres de 1 à N.
Affiche le résultat final dans la console.
*/
let N = parseInt(prompt("Entrez un nombre pour calculer la somme de 1 à ce nombre :"), 10);
let somme = 0;
for (let i = 1; i <= N; i++) {
    somme += i; // Ajoute chaque nombre à la somme
}
console.log(`La somme des nombres de 1 à ${N} est : ${somme}`);

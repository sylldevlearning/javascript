/*
La boucle for...of est utilisée pour parcourir facilement les éléments d'une collection
Sa syntaxe est concise et lisible

            for (const element of iterable) {
            // Code à exécuter pour chaque élément
            }
            iterable : Un objet qui peut être itéré (Array, String ).
            element : La valeur courante de l'itération.
*/

/* 1)
Afficher chaque élément d’un tableau en majuscule.
['chat', 'chien', 'lapin', 'oiseau'];
*/
// const animaux = ['chat', 'chien', 'lapin', 'oiseau'];

// for (const animal of animaux) {
//     console.log(animal.toUpperCase());
// }

/* 2)
 Calcule la somme des nombres d’un tableau.
 [5, 10, 15, 20]
*/
// const nombres = [5, 10, 15, 20];
// let somme = 0;

// for (const nombre of nombres) {
//     somme += nombre;
// }

// console.log(somme); // Résultat : 50

/* 3)
La méthode includes() est utilisée pour vérifier si une valeur donnée est présente dans un tableau ou une chaîne de caractères
Parcourir une chaîne et afficher uniquement les voyelles.
const phrase = 'Bonjour tout le monde';

*/
// const phrase = 'Bonjour tout le monde';
// const voyelles = 'aeiouyAEIOUY';

// for (const lettre of phrase) {
//     if (voyelles.includes(lettre)) {
//         console.log(lettre);
//     }
// }

/* 4)
À partir d’un tableau de mots, créer un nouveau tableau contenant la longueur de chaque mot
const mots = ['pomme', 'banane', 'cerise', 'abricot'];
*/
const mots = ['pomme', 'banane', 'cerise', 'abricot'];
const longueurs = [];

for (const mot of mots) {
    longueurs.push(mot.length);
}

console.log(longueurs);

/* 5)
Créer un nouveau tableau contenant uniquement les nombres pairs d’un tableau donné.
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
*/
// const lesNombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const pairs = [];

// for (const nombre of lesNombres) {
//     if (nombre % 2 === 0) {
//         pairs.push(nombre);
//     }
// }

// console.log(pairs); 

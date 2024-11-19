/* 1)
Crée un tableau nommé fruits contenant trois fruits, puis affiche le premier et le dernier élément avec console.log.
*/
// let fruits = ["pomme", "banane", "orange"];
// console.log(fruits[0]); // Affiche "pomme"
// console.log(fruits[fruits.length - 1]); // Affiche "orange"

/* 2)

Déclare un tableau nombres avec [1, 2, 3, 4].
Change le deuxième élément en 10 et affiche le tableau.
*/
// let nombres = [1, 2, 3, 4];
// nombres[1] = 10;
// console.log(nombres); // Affiche [1, 10, 3, 4]

/* 3)
Crée un tableau vide. Ajoute trois éléments au début et deux à la fin en utilisant push et unshift, puis affiche le tableau.
*/
// let tableau = [];
// tableau.push("fin1", "fin2");
// tableau.unshift("debut1", "debut2", "debut3");
// console.log(tableau); // Affiche ["debut3", "debut2", "debut1", "fin1", "fin2"]

/* 4)
Déclare un tableau ["A", "B", "C", "D"]. Supprime le premier élément avec shift et le dernier avec pop, puis affiche le tableau.
*/
// let lettres = ["A", "B", "C", "D"];
// lettres.shift(); // Supprime "A"
// lettres.pop();   // Supprime "D"
// console.log(lettres); // Affiche ["B", "C"]

/* 5)
Crée un tableau avec cinq éléments et utilise la propriété length pour afficher le nombre d'éléments.
*/
// let couleurs = ["rouge", "bleu", "vert", "jaune", "noir"];
// console.log(couleurs.length); // Affiche 5

/* 6)
Crée un tableau ["pomme", "banane", "poire"] et utilise une boucle for pour afficher chaque élément.
*/
// let fruits = ["pomme", "banane", "poire"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// Affiche : "pomme", "banane", "poire"

/* 7)
Doubler les nombres avec map
Déclare un tableau [1, 2, 3, 4]. Utilise map pour créer un nouveau tableau contenant les doubles des nombres et affiche le résultat.
*/
// let nombres = [1, 2, 3, 4];
// let doubles = nombres.map((x) => x * 2);
// console.log(doubles); // Affiche [2, 4, 6, 8]

/* 8)
Voici un tableau imbriqué représentant une grille :
    let grille = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
Affiche l’élément de la deuxième ligne et troisième colonne (6).
*/
// let grille = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(grille[1][2]); // Affiche 6

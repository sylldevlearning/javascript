/*
for...in
Itère sur les clés ou indices des propriétés énumérables d’un objet.
S’applique aussi bien aux objets classiques qu’aux tableaux, 
mais il ne retourne pas les valeurs, seulement les clés ou indices.

    const fruits = ['pomme', 'banane', 'cerise'];

    for (const index in fruits) {
        console.log(index); // Affiche les indices : "0", "1", "2"
        console.log(fruits[index]); // Accède aux valeurs : "pomme", "banane", "cerise"
    }

*/

/* 1)
    Affiche les indices de chaque élément d’un tableau.

*/
const couleurs = ['rouge', 'vert', 'bleu'];

for (const index in couleurs) {
    console.log(index);
}

/* 2)
Affiche chaque indice et la valeur correspondante d’un tableau.
*/
const fruits = ['pomme', 'banane', 'cerise'];

for (const index in fruits) {
    console.log(`Indice : ${index}, Valeur : ${fruits[index]}`);
}
/* 3)

Modifie chaque valeur d’un tableau en ajoutant un suffixe -OK
const vehicules = ['voiture', 'moto', 'vélo'];
// Résultat : [ 'voiture-OK', 'moto-OK', 'vélo-OK' ]

*/
const vehicules = ['voiture', 'moto', 'vélo'];

for (const index in vehicules) {
    vehicules[index] = vehicules[index] + "-OK";
}

console.log(vehicules);


/* 4)
Compter combien d’éléments sont présents dans un tableau sans utiliser .length
const lesCouleurs = ['rouge', 'bleu', 'vert', 'jaune'];
*/
const lesCouleurs = ['rouge', 'bleu', 'vert', 'jaune'];
let total = 0;

for (const clé in lesCouleurs) {
    total++;
}

console.log("Nombre total : " + total);
// Résultat : Nombre total : 4



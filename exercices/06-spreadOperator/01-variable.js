/*
Tu as un tableau contenant des fruits. 
Fais une copie en utilisant une variable. 
Ensuite, ajoute un nouvel élément à la "copie". 
Observe si cela affecte également le tableau original.
*/
const fruits = ['pomme', 'banane', 'cerise'];
const copieFruits = fruits;

// Ajoute un fruit à la "copie"
copieFruits.push('mangue');

console.log(fruits); // Que contient `fruits` ?
console.log(copieFruits); // Que contient `copieFruits` ?

/*
Conclusion :
Une simple affectation de variable ne crée pas une copie indépendante, 
mais lie les variables à la même référence mémoire. 
Ce comportement s’applique aux tableaux et objets en JavaScript.
*/
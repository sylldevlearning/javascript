/* 1)
Tu as un tableau fruits. 
    const fruits = ['pomme', 'banane', 'cerise'];
Fais une copie indépendante de ce tableau .
*/
const fruits = ['pomme', 'banane', 'cerise'];
const copieFruits = [...fruits];

console.log(copieFruits); // Résultat : ['pomme', 'banane', 'cerise']

/* 2)
Fusionne les tableaux legumes et fruits en un seul tableau aliments en utilisant le spread operator.
const fruits = ['pomme', 'banane'];
const legumes = ['carotte', 'brocoli'];
*/
// const fruits = ['pomme', 'banane'];
// const legumes = ['carotte', 'brocoli'];
// const aliments = [...fruits, ...legumes];

// console.log(aliments); // Résultat : ['pomme', 'banane', 'carotte', 'brocoli']

/* 3)
const fruits = ['pomme', 'banane'];
Ajoute le fruit 'mangue' au début et 'raisin' à la fin du tableau fruits sans modifier l’original.
*/
// const fruits = ['pomme', 'banane'];
// const nouveauxFruits = ['mangue', ...fruits, 'raisin'];

// console.log(nouveauxFruits); // Résultat : ['mangue', 'pomme', 'banane', 'raisin']

/*4)
const base = [1, 4];
const extras = [2, 3];
Ajoute les éléments du tableau extras entre les deux éléments du tableau base
*/
const base = [1, 4];
const extras = [2, 3];
const resultat = [base[0], ...extras, base[1]];
console.log(resultat); // Résultat : [1, 2, 3, 4]

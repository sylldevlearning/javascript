
/* 1)
const utilisateur = { nom: 'Alice', age: 25 };
Fais une copie indépendante de cet objet
*/
const utilisateur = { nom: 'Alice', age: 25 };
const copieUtilisateur = { ...utilisateur };

console.log(copieUtilisateur); // Résultat : { nom: 'Alice', age: 25 }


/* 2)
const utilisateur = { nom: 'Alice', age: 25 };
Ajoute une propriété ville: 'Paris' à l'objet utilisateur sans modifier l'original.

*/
// const utilisateur = { nom: 'Alice', age: 25 };
// const utilisateurMisAJour = { ...utilisateur, ville: 'Paris' };

// console.log(utilisateurMisAJour); // Résultat : { nom: 'Alice', age: 25, ville: 'Paris' }

/* 3)
const profil = { nom: 'Alice', age: 25 };
const adresse = { ville: 'Paris', codePostal: 75001 };
Fusionne les objets profil et adresse en un seul objet utilisateur
*/
// const profil = { nom: 'Alice', age: 25 };
// const adresse = { ville: 'Paris', codePostal: 75001 };
// const utilisateur = { ...profil, ...adresse };

// console.log(utilisateur); // Résultat : { nom: 'Alice', age: 25, ville: 'Paris', codePostal: 75001 }

/* 4)
const profil = { nom: 'Alice', age: 25 };
const miseAJour = { age: 30, ville: 'Paris' };
Fusionne les objets profil et miseAJour, mais fais en sorte que les valeurs de miseAJour écrasent celles de profil
*/
// const profil = { nom: 'Alice', age: 25 };
// const miseAJour = { age: 30, ville: 'Paris' };
// const utilisateur = { ...profil, ...miseAJour };

// console.log(utilisateur); // Résultat : { nom: 'Alice', age: 30, ville: 'Paris' }

/* 4)

*/

/* 2)

*/


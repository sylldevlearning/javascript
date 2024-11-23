/* 1)
const utilisateur = {
    nom: 'Alice',
    adresse: {
        ville: 'Paris',
        codePostal: 75001
    }
};
Fais une copie avec le spread operator, puis modifie la propriété ville dans la copie. 
*/
const utilisateur = {
    nom: 'Alice',
    adresse: {
        ville: 'Paris',
        codePostal: 75001
    }
};

const copieUtilisateur = { ...utilisateur };

copieUtilisateur.adresse.ville = 'Lyon';

console.log(utilisateur.adresse.ville); // Résultat : 'Lyon'

/*
Le spread operator ne fait qu'un clonage superficiel. 
Les objets et les tableaux imbriqués restent partagés entre l'original et la copie
utiliser JSON.stringify() pour une copie profonde 

const utilisateur = {
    nom: 'Alice',
    age: 25,
    adresse: {
        ville: 'Paris',
        codePostal: 75001
    }
};
const utilisateurClone = JSON.parse(JSON.stringify(utilisateur));

// Modifie l'adresse dans la copie
utilisateurClone.adresse.ville = 'Lyon';

console.log(utilisateur.adresse.ville); // Résultat : 'Paris'
console.log(utilisateurClone.adresse.ville); // Résultat : 'Lyon'
.*/
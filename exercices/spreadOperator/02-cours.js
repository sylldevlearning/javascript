/***************** Spread Operator (...) ********************
 
Le spread operator (...) est une fonctionnalité puissante introduite avec ES6 (ECMAScript 2015). 
Il permet de décomposer des éléments d'un tableau, d'un objet ou d'une structure itérable.

-----------Utilisation avec les tableaux---------
a. Copier un tableau
    Le spread operator permet de créer une copie indépendante d'un tableau.
    const fruits = ['pomme', 'banane', 'cerise'];
    const copieFruits = [...fruits];
    console.log(copieFruits); // Résultat : ['pomme', 'banane', 'cerise']
    // Modifications sur la copie n'affectent pas l'original
    copieFruits.push('mangue');
    console.log(copieFruits); // ['pomme', 'banane', 'cerise', 'mangue']
    console.log(fruits); // ['pomme', 'banane', 'cerise']

b. Fusionner des tableaux
    Le spread operator permet de fusionner plusieurs tableaux en un seul.
    const nombres1 = [1, 2, 3];
    const nombres2 = [4, 5, 6];
    const fusion = [...nombres1, ...nombres2];
    console.log(fusion); // Résultat : [1, 2, 3, 4, 5, 6]

c. Ajouter ou insérer des éléments
    Le spread operator facilite l'ajout d'éléments au début, au milieu ou à la fin d'un tableau.
    const lettres = ['b', 'c', 'd'];
    const alphabet = ['a', ...lettres, 'e'];
    console.log(alphabet); // Résultat : ['a', 'b', 'c', 'd', 'e']

Utilisation avec les objets
a. Copier un objet
    Comme pour les tableaux, le spread operator permet de créer une copie superficielle d'un objet.
    const utilisateur = { nom: 'Alice', age: 25 };
    const copieUtilisateur = { ...utilisateur };
    console.log(copieUtilisateur); // Résultat : { nom: 'Alice', age: 25 }
    // Modifications sur la copie n'affectent pas l'original
    copieUtilisateur.age = 30;
    console.log(copieUtilisateur); // { nom: 'Alice', age: 30 }
    console.log(utilisateur); // { nom: 'Alice', age: 25 }

b. Fusionner des objets
    Le spread operator peut être utilisé pour fusionner ou étendre des objets.
    const infosBase = { nom: 'Alice', age: 25 };
    const infosSupp = { ville: 'Paris', profession: 'Développeuse' };
    const utilisateur = { ...infosBase, ...infosSupp };
    console.log(utilisateur);
    // Résultat : { nom: 'Alice', age: 25, ville: 'Paris', profession: 'Développeuse' }
    ⚠️ Attention : Si deux objets ont des clés identiques, la dernière écrase la précédente.
    const objet1 = { nom: 'Alice', age: 25 };
    const objet2 = { age: 30, ville: 'Paris' };
    const fusion = { ...objet1, ...objet2 };
    console.log(fusion); // Résultat : { nom: 'Alice', age: 30, ville: 'Paris' }

*/
/*

La boucle while est utilisée quand le nombre d’itérations n’est pas connu à l’avance. 
Elle continue de s’exécuter tant qu’une condition est vraie.
    while (condition) {
        // Code à exécuter tant que la condition est vraie
    }

let compteur = 0;
    while (compteur < 5) {
        console.log("Compteur : ", compteur);
        compteur++; // Incrémente le compteur pour éviter une boucle infinie
    }

*/

/* 1)
Crée une variable compteur et initialise-la à 1.
Utilise une boucle while pour afficher chaque nombre de 1 à 10.
Incrémente compteur à chaque itération pour éviter une boucle infinie
*/
let compteur = 1;
while (compteur <= 10) {
    console.log(compteur);
    compteur++; // Incrémente le compteur pour éviter une boucle infinie
}


/* 2)
Demande à l’utilisateur de saisir un mot de passe en utilisant prompt.
Continue de demander le mot de passe tant que l’utilisateur ne saisit pas "secret".
Une fois le bon mot de passe saisi, affiche un message "Accès autorisé".

*/
let motDePasse;
while (motDePasse !== "secret") {
    motDePasse = prompt("Entrez le mot de passe :");
}
console.log("Accès autorisé");


/* 3)
Demande à l’utilisateur de saisir des nombres à additionner (utilise prompt pour chaque nombre).
Continue d’additionner les nombres tant que l’utilisateur ne saisit pas 0.
Une fois 0 saisi, affiche le résultat total de l’addition.
*/
// let total = 0;
// let nombre;
// while (nombre !== 0) {
//     nombre = parseInt(prompt("Entrez un nombre à additionner (0 pour arrêter) :"))
//     total += nombre;
// }

// console.log("Le total est : " + total);


/* 4)

Crée une variable nombre et initialise-la à 0.
Utilise une boucle while pour afficher les nombres pairs entre 0 et 20.
Incrémente nombre de 2 à chaque itération pour ne prendre que les nombres pairs.
*/
let leNombre = 0;
while (leNombre <= 20) {
    console.log(leNombre);
    leNombre += 2; // Incrémente de 2 pour obtenir les nombres pairs
}


/* 5)
Générez un nombre aléatoire entre 1 et 10 (en utilisant Math.floor(Math.random() * 10) + 1).
Demande à l’utilisateur de deviner le nombre en utilisant prompt.
Continue de demander jusqu'à ce que l’utilisateur devine correctement le nombre.
Affiche le nombre de tentatives nécessaires.
*/
let nombreAleatoire = Math.floor(Math.random() * 10) + 1;
console.log(nombreAleatoire)
let tentative;
let leCompteur = 0;

while (tentative !== nombreAleatoire) {
    tentative = parseInt(prompt("Devinez le nombre entre 1 et 10 :"), 10);
    leCompteur++;
}

console.log("Bravo ! Vous avez trouvé le nombre " + nombreAleatoire + " en " + leCompteur + " tentatives.");



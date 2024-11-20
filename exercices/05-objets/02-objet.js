/* 1)
Créez un objet utilisateur avec les propriétés suivantes :
    nom : "Alice"
    age : 25
    email : "alice@example.com"
Affichez ensuite chaque propriété dans la console.
*/
const utilisateur = {
    nom: "Alice",
    age: 25,
    email: "alice@example.com"
};

console.log(utilisateur.nom); // "Alice"
console.log(utilisateur.age); // 25
console.log(utilisateur.email); // "alice@example.com"

/* 2)
À partir de l’objet utilisateur ci-dessus :
Changez la valeur de nom pour "Bob".
Affichez l'objet mis à jour dans la console.
*/
utilisateur.nom = "Bob";
console.log(utilisateur); // { nom: "Bob", age: 25, email: "alice@example.com" }

/* 3)
Ajoutez une propriété adresse avec la valeur "Paris" à l’objet utilisateur.
*/
utilisateur.adresse = "Paris";
console.log(utilisateur); // { nom: "Bob", age: 25, email: "alice@example.com", adresse: "Paris" }


/* 4)
    Supprimez la propriété email de l’objet utilisateur.
*/
delete utilisateur.email;
console.log(utilisateur); // { nom: "Bob", age: 25, adresse: "Paris" }


/* 5)
Créez un objet produit contenant les propriétés suivantes :

nom : "Ordinateur"
prix : 1500
quantite : 3
Parcourez cet objet avec une boucle for...in pour afficher chaque clé et valeur.


*/
const produit = {
    nom: "Ordinateur",
    prix: 1500,
    quantite: 3
};

for (const clé in produit) {
    console.log(`${clé}: ${produit[clé]}`);
}

/* 6)
Créez un objet livre avec les propriétés suivantes :

titre : "JavaScript pour les débutants"
auteur : un objet avec deux propriétés :
nom : "Jean Dupont"
age : 45
Affichez le nom de l’auteur et l’âge de l’auteur.
*/
const livre = {
    titre: "JavaScript pour les débutants",
    auteur: {
        nom: "Jean Dupont",
        age: 45
    }
};

console.log(livre.auteur.nom); // "Jean Dupont"
console.log(livre.auteur.age); // 45

/* 7)
Créez un tableau nommé utilisateurs contenant trois objets représentant des personnes. Chaque objet doit avoir les propriétés :

nom : chaîne de caractères
age : nombre
Parcourez le tableau pour afficher le nom de chaque utilisateu
*/
const utilisateurs = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Charlie", age: 35 }
];

for (const utilisateur of utilisateurs) {
    console.log(utilisateur.nom);
}

/*
les Objets
Les objets sont une structure de données essentielle permettant de stocker des collections de données et de fonctionnalités. 
Ils sont constitués de paires clé-valeur et sont très flexibles.

Création d’un objet :
    const utilisateur = {
        nom: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    console.log(utilisateur); // { nom: "Alice", age: 25, email: "alice@example.com" }

Accéder aux propriétés : 
    console.log(utilisateur.nom); // "Alice"

Ajouter, modifier et supprimer des propriétés :
    utilisateur.adresse = "Paris";
    utilisateur.age = 30; // Modification
    console.log(utilisateur);
    // { nom: "Alice", age: 30, email: "alice@example.com", adresse: "Paris" }

Supprimer une propriété :
    delete utilisateur.email;
    console.log(utilisateur); // { nom: "Alice", age: 30, adresse: "Paris" }
 **

Une méthode est une fonction définie comme une propriété d’un objet.
    const utilisateur = {
        nom: "Alice",
        age: 25,
        saluer: function() {
            console.log(`Bonjour, je suis ${this.nom} et j'ai ${this.age} ans.`);
        }
    };
    utilisateur.saluer(); // "Bonjour, je suis Alice et j'ai 25 ans."
    
Object.keys() : Retourne un tableau des clés.
Object.values() : Retourne un tableau des valeurs.
Object.entries() : Retourne un tableau de paires [clé, valeur]


*/
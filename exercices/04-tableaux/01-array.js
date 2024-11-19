
// *******************************Array**********************


/*
Les tableaux sont des structures de données permettant de stocker une liste ordonnée de valeurs. 
Ils sont très utiles pour organiser et manipuler des collections de données, comme des listes de noms, des nombres, ou des objets. 

Les tableaux peuvent contenir des types de données différents, comme des nombres, des chaînes de caractères, et même d'autres tableaux.
    let fruits = ["pomme", "banane", "orange"]; // Création avec des crochets
    let nombres = new Array(1, 2, 3, 4); // Création avec le constructeur Array

2. Accéder aux Éléments d’un Tableau:
    Les éléments d'un tableau sont indexés à partir de 0. 
    On accède à un élément en utilisant son indice.
        console.log(fruits[0]); // Affiche "pomme"
        console.log(fruits[2]); // Affiche "orange"
    On peut également modifier un élément en accédant à son indice :
        fruits[1] = "poire";    
        console.log(fruits); // Affiche ["pomme", "poire", "orange"]

Les Méthodes Utiles pour Manipuler les Tableaux
JavaScript propose de nombreuses méthodes pour manipuler les tableaux. Voici les principales :

Ajouter des éléments :
        push() : Ajoute un élément à la fin du tableau.
o	unshift() : Ajoute un élément au début du tableau.
fruits.push("mangue"); // Ajoute "mangue" à la fin
fruits.unshift("kiwi"); // Ajoute "kiwi" au début
Supprimer des éléments :
•	pop() : Supprime le dernier élément du tableau.
•	shift() : Supprime le premier élément du tableau.

Trouver la longueur d'un tableau :
•	length : Propriété qui donne le nombre d'éléments dans le tableau. console.log(fruits.length); // Affiche la longueur du tableau
•	
4. Parcourir un Tableau
Il est fréquent de parcourir un tableau pour accéder ou manipuler ses éléments. Voici quelques méthodes pour le faire :
•	Boucle for : La boucle for classique est utile pour parcourir un tableau et accéder à chaque élément.
for (let i = 0; i < fruits.length; i++) {   console.log(fruits[i]); // Affiche chaque fruit du tableau }
map() : Applique une fonction à chaque élément et retourne un nouveau tableau avec les résultats.
        let nombres = [1, 2, 3];
        et doubles = nombres.map((x) => x * 2); // [2, 4, 6]
Tableaux a 2 dimensions :
        Les tableaux peuvent contenir d'autres tableaux, ce qui est utile pour organiser des données multidimensionnelles. 
let tableau2D = [ [1, 2, 3],  [4, 5, 6],  [7, 8, 9] ];
console.log( tableau2D[1][2] ); // Accède au 3ème élément du 2ème tableau, affiche 6

*/
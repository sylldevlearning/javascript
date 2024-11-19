/** 
Les types primitifs en JavaScript sont les types de données les plus simples et de base. 
Ils représentent des valeurs immuables 
En JavaScript, ils incluent : Number, String, Boolean, Undefined, Null

Number : 
    Ce type représente tous les nombres, 
    qu’ils soient entiers (comme 1, 2, 100) ou décimaux (comme 3.14, 0.5). 
    il n'y a pas de distinction entre les entiers et les nombres à virgule flottante ; 
    ils sont tous considérés comme des Number.

String : 
    Ce type est utilisé pour représenter des chaînes de caractères, 
    c’est-à-dire du texte. 
    Une chaîne peut contenir des lettres, des chiffres, des symboles et même des espaces. 
    Les chaînes sont délimitées par des guillemets simples ou doubles.

Boolean : 
    Ce type représente une valeur logique et ne peut prendre que deux valeurs : 
        true (vrai) ou false (faux). 
    Il est souvent utilisé pour indiquer 
    des conditions, des états ou des résultats de comparaison.

Undefined : 
    Ce type est attribué automatiquement à une variable lorsqu’elle est déclarée, 
    mais qu'aucune valeur ne lui est assignée. 
    C’est une façon de dire que la variable existe, 
    mais qu'elle n'a encore aucune valeur définie.

Null : 
    Ce type représente une valeur vide ou intentionnellement absente. 
    Contrairement à undefined, qui indique une absence de valeur définie, 
    null signifie qu'une variable est explicitement vide.

 */
/** 
1. Number
Déclare une variable age avec une valeur numérique, par exemple 25. 
Utilise console.log(typeof age); pour afficher le type de age.

2. String
Déclare une variable prenom avec une valeur de texte, comme "Alice". 
Utilise console.log(typeof prenom); pour afficher le type de prenom.

3. Boolean
Déclare une variable isStudent avec une valeur booléenne (true ou false). 
Utilise console.log(typeof isStudent); pour afficher le type de isStudent.

4. Undefined
Déclare une variable resultat sans lui attribuer de valeur. 
Utilise console.log(typeof resultat); pour afficher le type de resultat.

5. Null
Déclare une variable reponse avec la valeur null. 
Utilise console.log(typeof reponse); pour afficher le type de reponse.
 */

// 1. Number
let age = 25;
console.log(typeof age); // Affiche "number"

// 2. String
let prenom = "Alice";
console.log(typeof prenom); // Affiche "string"

// 3. Boolean
let isStudent = true;
console.log(typeof isStudent); // Affiche "boolean"

// 4. Undefined
let resultat;
console.log(typeof resultat); // Affiche "undefined"

// 5. Null
let reponse = null;
console.log(typeof reponse); // Affiche "object" (en JavaScript, typeof null retourne "object" pour des raisons historiques)

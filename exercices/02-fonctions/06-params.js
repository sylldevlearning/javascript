/*
Les paramètres par défaut dans les fonctions permettent de donner une valeur initiale à un paramètre si aucun argument n'est passé lors de l'appel de la fonction. 
Cela rend les fonctions plus flexibles et évite les erreurs en l’absence de certains arguments.
On définit des paramètres par défaut en assignant une valeur directement dans la définition des paramètres de la fonction. 
Si la fonction est appelée sans cet argument, la valeur par défaut sera utilisée.
function saluer(nom = "inconnu") {
    console.log("Bonjour, " + nom + " !");
}
Si un argument est passé, il remplace la valeur par défaut.
 Si aucun argument n'est passé, la valeur par défaut est utilisée.
*/

/*
Crée une fonction presentation qui prend deux paramètres : prenom et age, avec une valeur par défaut de 18 pour age. 
La fonction doit afficher une phrase comme "Je m'appelle [prenom] et j'ai [age] ans.".
Objectif : Utiliser un paramètre par défaut pour une donnée optionnelle (l'âge).

Crée une fonction calculerAireRectangle qui prend deux paramètres : longueur et largeur, avec une valeur par défaut de 1 pour largeur. 
La fonction doit retourner l'aire du rectangle calculée 

Crée une fonction creerPhrase qui prend deux paramètres : mot1 et mot2, avec une valeur par défaut de "génial" pour mot2. 
La fonction doit retourner une phrase formée en combinant les deux mots.

*/

function presentation(prenom, age = 18) {
    console.log("Je m'appelle " + prenom + " et j'ai " + age + " ans.");
}

// appels
presentation("Alice", 25); // Affiche : "Je m'appelle Alice et j'ai 25 ans."
presentation("Bob");        // Affiche : "Je m'appelle Bob et j'ai 18 ans."
/////////////////////////////////////
function calculerAireRectangle(longueur, largeur = 1) {
    return longueur * largeur + " mètre carré";
}

// appels
console.log(calculerAireRectangle(5, 3)); // Retourne : 15
console.log(calculerAireRectangle(5));    // Retourne : 5 (puisque largeur est 1 par défaut)


///////////////////////////
function creerPhrase(mot1, mot2 = "génial") {
    return mot1 + " est " + mot2 + " !";
}

// appels
console.log(creerPhrase("JavaScript", "puissant")); // Retourne : "JavaScript est puissant !"
console.log(creerPhrase("Ce cours"));               // Retourne : "Ce cours est génial !"

/**
les opérations mathématiques de base permettent de manipuler et de calculer des valeurs numériques.

Voici les principales opérations :
1. Addition (+)
    L’addition est utilisée pour additionner deux nombres ou plus.
    Elle permet d'obtenir la somme de plusieurs valeurs numériques.

2. Soustraction (-)
    La soustraction permet de retirer une valeur d’une autre,
    en calculant la différence entre deux nombres.

3. Multiplication (*)
    La multiplication est utilisée pour calculer le produit de deux nombres ou plus.
    Elle permet de multiplier des valeurs ensemble.

4. Division (/)
    La division divise un nombre par un autre, produisant un quotient.
    Si le diviseur est zéro, JavaScript renverra Infinity ou NaN (Not a Number) selon les cas.

5. Modulo (%)
    Le modulo retourne le reste d’une division entre deux nombres.
    C’est une opération utile pour déterminer si un nombre est pair, impair, ou pour obtenir le reste d'une division.

6. Exponentiation (**)
    L’exponentiation permet d'élever un nombre à une puissance spécifique.
    Par exemple, pour calculer le carré ou le cube d'un nombre.

7. Incrémentation et Décrémentation (++ et --)
    L'incrémentation (++) augmente la valeur d’une variable de 1,
    tandis que la décrémentation (--) la diminue de 1.
    Ces opérations sont souvent utilisées dans les boucles et les itérations.

8. Opérateurs d’affectation avec des opérations (+=, -=, *=, /=)
    Ces opérateurs combinent l’affectation avec une opération mathématique.
    Par exemple, += additionne une valeur à une variable existante et assigne le résultat à cette variable.

Ces opérations mathématiques permettent d’effectuer des calculs et sont essentielles pour manipuler des valeurs numériques dans le code.
 */

/* 1

Addition (+)
Addition de nombres simples :
Déclare deux variables avec des valeurs numériques, additionne-les, et affiche le résultat.

*/

/* 2
Addition de chaîne et nombre :
 Déclare une variable contenant un nombre et une autre contenant une chaîne de caractères. Additionne-les et observe le résultat .
*/

/*3
Soustraction (-)
Soustraction simple :
    Déclare deux variables avec des valeurs numériques, soustrais-les, et affiche le résultat.

4
Soustraction avec une chaîne vide :
    Soustrais une chaîne vide "" d'un nombre, et observe le résultat.
Contrairement à l'addition, la soustraction avec des chaînes vides convertit la chaîne en Number, donc "10" - "" donne 10 et non une string.
*/
// console.log(1 + ("20" - 0))

/* 5
Multiplication (*)
    Multiplie deux nombres et affiche le résultat.
    Multiplie une chaîne numérique comme "5" par un nombre.
    Multiplie une chaîne numérique comme "5ok" par un nombre.
*/

/* 6
Division (/)
Divise deux nombres et affiche le résultat.
Divise un nombre par 0 et observe le résultat. 
Divise 0 par un nombre non nul pour observer le résultat.
*/

/* 7
Modulo (%)

--------
Utilise le modulo pour vérifier si un nombre est pair ou impair.


let nombre = 8;
console.log(nombre % 2); // Affiche 0 pour un nombre pair

Pour un nombre impair, l'opération nombre % 2 renverra 1, car il reste 1 lorsqu'on divise un nombre impair par 2.
-----

8 Utilise le modulo avec un nombre négatif pour voir comment JavaScript gère le signe du résultat.
let negatif = -7;
console.log(negatif % 3); // Affiche -1

Tente d'utiliser le modulo avec 0 comme diviseur et observe le résultat (NaN).
let negatif = -7;
console.log(negatif % 3); // Affiche -1

Le signe du résultat dépend du signe du premier opérande.
le modulo avec 0 est indéfini et renvoie NaN. 
*/
/* 9
Exponentiation (**)
Calcule une puissance comme 5 ** 2 et affiche le résultat.
Observe le résultat d’une valeur élevée à 0.
Utilise une base négative et une puissance pour observer le résultat.

**Toute valeur (sauf NaN) élevée à la une puissance 0 donne 1. 
**Les puissances négatives fonctionnent, mais nécessitent des parenthèses autour de la base si elle est négative, par exemple (-3) ** 2.
*/
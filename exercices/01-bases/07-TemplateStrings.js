/*
Les Template Strings (ou Template Literals) sont une fonctionnalité introduite avec ES6 
(ECMAScript 2015) qui facilite la manipulation des chaînes de caractères. 
Elles permettent de créer des chaînes multi-lignes, de faire de l'interpolation de variables, 
et d'inclure des expressions de manière lisible et concise.

Les Template Strings utilisent des backticks (`) au lieu des guillemets simples (') ou doubles (")
Windows et Linux : Alt Gr + 7
macOS : Alt + 7 (ou parfois Option + 7 ).

Avec les Template Strings, vous pouvez inclure des variables directement dans une chaîne grâce à la syntaxe ${expression}.
    Exemple :   
        const nom = "Alice";
        const age = 25;
        const message = `Je m'appelle ${nom} et j'ai ${age} ans.`;
        console.log(message); // Affiche : Je m'appelle Alice et j'ai 25 ans.
Vous pouvez inclure des calculs ou des appels de fonctions dans les Template Strings.

Les Template Strings permettent de créer des chaînes sur plusieurs lignes sans utiliser de caractères spéciaux comme \n
*/

/*1 
Utilisez deux variables a et b contenant respectivement 10 et 20, et affichez "La somme de 10 et 20 est 30" en utilisant une Template String.
*/
const a = 10;
const b = 20;
const message = `La somme de ${a} et ${b} est ${a + b}.`;
console.log(message); // La somme de 10 et 20 est 30.
/*2

*/
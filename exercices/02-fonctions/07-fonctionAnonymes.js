/*

Les fonctions anonymes sont des fonctions sans nom. 
Elles sont couramment utilisées lorsqu'une fonction n'a pas besoin d'être réutilisée ailleurs dans le code ou quand elle est définie directement dans une expression, comme une variable ou un argument. 
Une fonction anonyme est définie sans nom. Elle peut être assignée à une variable pour pouvoir l’appeler plus tard. La syntaxe est la même que pour une fonction classique, sauf que le nom est omis.
let saluer = function() {
    console.log("Bonjour !");
};
saluer(); // Appelle la fonction et affiche "Bonjour !"

Contrairement aux fonctions nommées :
•	Les fonctions anonymes ne sont pas levées (hoistées). Elles ne peuvent pas être appelées avant d'être définies.

Les fonctions auto-invoquées 
(aussi appelées IIFE, pour Immediately Invoked Function Expression) sont des fonctions qui s'exécutent automatiquement dès qu'elles sont définies. 
*/
// auto invocation
(function ok() {
    console.log("Bonjour !");
})();
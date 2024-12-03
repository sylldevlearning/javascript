/*

Les exceptions en JavaScript sont des erreurs qui surviennent pendant l'exécution d'un programme. 
Ces erreurs peuvent interrompre le programme, mais grâce aux structures d’exception, on peut les gérer proprement pour éviter un arrêt brutal. 
JavaScript propose des outils pour détecter, capturer, et traiter ces erreurs.

Le Bloc try...catch
    La structure de base pour gérer les exceptions en JavaScript est le bloc try...catch. 
    Le code susceptible de générer une erreur est placé dans le bloc try. Si une erreur survient, elle est capturée et gérée par le bloc catch.
        try {
            // Code qui peut générer une exception
        } catch (erreur) {
            // Code pour gérer l'erreur
        }
        •  try : Contient le code susceptible de générer une erreur.
        •  catch : Récupère l’erreur, et on peut accéder aux détails de l’erreur à l’aide de la variable erreur.

    try {
        let x = y + 1; // Erreur : y n'est pas défini
    } catch (erreur) {
        console.log("Une erreur s'est produite : " + erreur.message); // Affiche le message d'erreur
    }
    Dans cet exemple, y n'est pas défini, donc une erreur est générée dans le bloc try. Le bloc catch capture l’erreur et affiche un message d'erreur dans la console.

Le Bloc finally
    En plus de try et catch, il existe un bloc finally qui s'exécute toujours, que l'erreur se produise ou non. Il est utile pour exécuter du code de "nettoyage" (comme fermer une connexion, libérer des ressources, etc.).
        try {
            // Code qui peut générer une exception
        } catch (erreur) {
            // Code pour gérer l'erreur
        } finally {
            // Code qui s'exécute toujours
        }

        try {
            let resultat = 10 / 0; // Erreur mathématique potentielle
        } catch (erreur) {
            console.log("Erreur : " + erreur.message);
        } finally {
            console.log("Bloc finally exécuté");
        }

Lever une Exception avec throw
    Avec throw, on peut générer (lever) une exception manuellement. 
    Cela est utile pour signaler des erreurs spécifiques selon des conditions précises.
        throw new Error("Message d'erreur");

    function verifierAge(age) {
        if (age < 18) {
            throw new Error("L'âge doit être de 18 ans ou plus.");
        }
        console.log("Âge vérifié : " + age);
    }

    try {
        verifierAge(16);
    } catch (erreur) {
        console.log("Erreur : " + erreur.message);
    }
Ici, si age est inférieur à 18, throw déclenche une erreur avec le message "L'âge doit être de 18 ans ou plus.". 
Le bloc catch capture cette erreur et affiche le message.
*/

/* 1)
Écris un code qui tente d'accéder à une variable non définie (x).
Place ce code dans un bloc try.
Utilise un bloc catch pour capturer l’erreur et afficher "Erreur : Variable non définie" dans la console.
*/
try {
    console.log(x); // Erreur : la variable x n'est pas définie
} catch (erreur) {
    console.log("Erreur : Variable non définie"); // Affiche le message d'erreur
}

/* 2)
Crée une fonction verifierNombrePositif qui prend un paramètre nombre.
Dans cette fonction, utilise throw pour lever une erreur avec le message "Le nombre doit être positif" si nombre est inférieur à 0.
Utilise un bloc try...catch pour appeler cette fonction avec un nombre négatif et afficher le message d’erreur capturé.

*/
function verifierNombrePositif(nombre) {
    if (nombre < 0) {
        throw new Error("Le nombre doit être positif");
    }
    console.log("Nombre vérifié : " + nombre);
}

try {
    verifierNombrePositif(-5); // Appel avec un nombre négatif pour générer une exception
} catch (erreur) {
    console.log("Erreur : " + erreur.message); // Affiche "Erreur : Le nombre doit être positif"
}

/* 3)

Crée une fonction additionner qui prend deux paramètres a et b.
Si l’un des deux paramètres n’est pas de type number, utilise throw pour lever une erreur avec le message "Les deux paramètres doivent être des nombres".
Utilise un bloc try...catch pour capturer cette erreur si les paramètres fournis ne sont pas du bon type.
*/
function additionner(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Les deux paramètres doivent être des nombres");
    }
    return a + b;
}

try {
    console.log(additionner(5, "dix")); // Teste avec un paramètre incorrect
} catch (erreur) {
    console.log("Erreur : " + erreur.message); // Affiche "Erreur : Les deux paramètres doivent être des nombres"
}

/* 4)
Simule l’ouverture d'une "connexion" en affichant "Connexion ouverte" dans la console.
Dans le bloc try, essaie d’exécuter une opération qui génère une erreur, comme 10 / 0.
Utilise catch pour capturer l'erreur.
Dans le bloc finally, affiche "Connexion fermée", ce qui doit se produire même si une erreur survient.
*/
console.log("Connexion ouverte");

try {
    let resultat = 10 / 0; // Génère une erreur mathématique potentielle
    console.log("Résultat : " + resultat);
} catch (erreur) {
    console.log("Erreur : Division par zéro détectée");
} finally {
    console.log("Connexion fermée"); // S'exécute toujours
}

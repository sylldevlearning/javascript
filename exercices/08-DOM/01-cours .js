/****************le DOM (Document Object Model)

Le Document Object Model (DOM) est une interface de programmation qui permet aux développeurs de manipuler les documents HTML comme des objets. 
Grâce au DOM, vous pouvez modifier dynamiquement le contenu, la structure, et le style d’une page web.

Définition
Le DOM est une représentation en arbre des documents HTML (ou XML). 
Chaque élément HTML est un nœud dans cet arbre. 
Le DOM fournit des méthodes et propriétés pour interagir avec ces nœuds.
Exemple : HTML et DOM
    <!DOCTYPE html>
    <html>
    <head>
        <title>Exemple</title>
    </head>
    <body>
        <h1>Bonjour, monde !</h1>
        <p>Paragraphe.</p>
    </body>
    </html>
DOM (représentation en arbre) :
    html
    ├── head
    │   ├── title
    │       └── "Exemple"
    ├── body
        ├── h1
        │   └── "Bonjour, monde !"
        └── p
            └── "Paragraphe."

Accéder aux éléments du DOM
a. Par id
    La méthode getElementById permet de sélectionner un élément par son identifiant.
    HTML :
        <p id="monParagraphe">Ceci est un paragraphe.</p>
    JavaScript :	
        const paragraphe = document.getElementById('monParagraphe');
        console.log(paragraphe.textContent); // Résultat : "Ceci est un paragraphe."
b. Par balise (tag)
    La méthode getElementsByTagName sélectionne tous les éléments d'une certaine balise.
    HTML :
        <h1>Titre 1</h1>
        <h1>Titre 2</h1>
    JavaScript :	
        const titres = document.getElementsByTagName('h1');
        console.log(titres[0].textContent); // Résultat : "Titre 1"
        console.log(titres[1].textContent); // Résultat : "Titre 2"

c. Par classe
    La méthode getElementsByClassName permet de sélectionner des éléments par leur classe.
    HTML :
        <p class="texte">Paragraphe 1</p>
        <p class="texte">Paragraphe 2</p>
    JavaScript :	
        const paragraphes = document.getElementsByClassName('texte');
        console.log(paragraphes[0].textContent); // Résultat : "Paragraphe 1"

d. Par sélecteur CSS
    La méthode querySelector (ou querySelectorAll) utilise des sélecteurs CSS pour sélectionner un ou plusieurs éléments.
    HTML :
        <div class="conteneur">
            <p id="texte">Paragraphe 1</p>
        </div>
    JavaScript :	
        const paragraphe = document.querySelector('.conteneur #texte');
        console.log(paragraphe.textContent); // Résultat : "Paragraphe 1"

3. Modifier le DOM

a. Modifier le texte
    Vous pouvez modifier le contenu d'un élément avec textContent ou innerHTML.
    HTML :
        <p id="monParagraphe">Ceci est un paragraphe.</p>
    JavaScript :	
        const paragraphe = document.getElementById('monParagraphe');
        paragraphe.textContent = "Texte modifié."; // Change le texte

b. Modifier les styles
    Les styles peuvent être modifiés via la propriété style
    HTML :
        <p id="monParagraphe">Ceci est un paragraphe.</p>
    JavaScript :
        const paragraphe = document.getElementById('monParagraphe');
        paragraphe.style.color = 'red'; // Change la couleur du texte
        paragraphe.style.fontSize = '20px'; // Change la taille du texte

c. Ajouter ou supprimer des éléments
    Ajouter un élément :
        const liste = document.createElement('ul'); // crée dynamiquement un élément HTML <ul>
        const item = document.createElement('li');// crée dynamiquement un élément HTML <li>
        item.textContent = "Nouvel élément"; // définit le contenu textuel de l'élément <li>
        liste.append (item); // insère l’élément <li> (enfant) dans l’élément <ul> (parent).
        document.body.append (liste);// insère la liste <ul> (avec son <li> enfant) comme dernier élément de <body>

    Supprimer un élément : 
        const item = document.querySelector('li');
        item.remove(); // Supprime l'élément, Si plusieurs <li> existent, seul le premier sera ciblé. 

/////////////////////////5. Méthodes importantes du DOM	////////////////////////
getElementById	Sélectionne un élément par son id.
getElementsByTagName	Sélectionne tous les éléments d'une balise.
getElementsByClassName	Sélectionne tous les éléments d'une classe.
querySelector	Sélectionne le premier élément correspondant au sélecteur CSS.
querySelectorAll	Sélectionne tous les éléments correspondant au sélecteur CSS.
createElement	Crée un nouvel élément HTML.
appendChild	Ajoute un élément enfant à un élément existant.
remove	Supprime un élément du DOM.
/////////////////////////////////

*/
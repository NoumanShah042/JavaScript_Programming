console.log("this is tut 16");
//  run with dom.html
// Creating, Removing & Replacing Elements
// ********************************************************

//  add or append child   (  IN this section we just add newly created li element to list(ul))

let element = document.createElement("li");                 //  it create <li></li>
let text = document.createTextNode("I am a text node");    //    "I am a text node"
element.appendChild(text);                                 //   now   element =   <li>I am a text node</li>

// Add a class name to the li element
element.className = "childul";
element.id = "createdLi";
element.setAttribute("title", "mytitle");       //   <li class="childul" id="createdLi" title="mytitle">I am a text node</li>

// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';

let ul = document.querySelector("ul.this");
ul.appendChild(element);                          //  add   newly created li element to list(ul)
// console.log(ul)
// console.log(element)


// ********************************************************
// replace child      ()

let elem2 = document.createElement("h3");
elem2.id = "elem2";
elem2.className = "elem2Class";
let tnode = document.createTextNode("This is a created node for elem2");
elem2.appendChild(tnode);

element.replaceWith(elem2);      //  replace our element with elem2

// ********************************************************

let myul = document.getElementById("myul"); //  here we get element to replace its child

// myul.replaceChild(element, document.getElementById("fui"));  //   ( replace With this new element     , replace this old element )
// myul.removeChild(document.getElementById("lui"));

// *********************

let pr = elem2.getAttribute("id"); //  get id of elem2
pr = elem2.getAttribute("class"); //  get class of elem2
pr = elem2.hasAttribute("href"); //  is elem2 has href attribute
elem2.removeAttribute("id");
elem2.setAttribute("title", "myelem2title");

console.log(elem2, pr);  //  <h3 class="elem2Class" title="myelem2title">This is a created node for elem2</h3>     false

// *********************


// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"


/*
 
JavaScript comes with a lot of different ways to create and manipulate HTML elements (called nodes).

cont = document.querySelector('.container');

console.log(cont.childNodes);    //  accept and show all nodes like newLine , comment and elements(tags)
console.log(cont.children);      //  only accept  element(tags like div, li)


attributes — Returns a live collection of all attributes registered to an element
baseURI — Provides the absolute base URL of an HTML element
childNodes — Gives a collection of an element’s child nodes
firstChild — Returns the first child node of an element
lastChild — The last child node of an element
nextSibling — Gives you the next node at the same node tree level
nodeName —Returns the name of a node
nodeType —  Returns the type of a node
nodeValue — Sets or returns the value of a node
ownerDocument — The top-level document object for this node
parentNode — Returns the parent node of an element
previousSibling — Returns the node immediately preceding the current one
textContent — Sets or returns the textual content of a node and its descendants
appendChild() — Adds a new child node to an element as the last child node
cloneNode() — Clones an HTML element
compareDocumentPosition() — Compares the document position of two elements
getFeature() — Returns an object which implements the APIs of a specified feature
hasAttributes() — Returns true if an element has any attributes, otherwise false
hasChildNodes() — Returns true if an element has any child nodes, otherwise false
insertBefore() — Inserts a new child node before a specified, existing child node
isDefaultNamespace() — Returns true if a specified namespaceURI is the default, otherwise false
isEqualNode() — Checks if two elements are equal
isSameNode() — Checks if two elements are the same node
isSupported() — Returns true if a specified feature is supported on the element
lookupNamespaceURI() — Returns the namespace URI associated with a given node
lookupPrefix() — Returns a DOMString containing the prefix for a given namespace URI if present
normalize() — Joins adjacent text nodes and removes empty text nodes in an element
removeChild() — Removes a child node from an element
replaceChild() — Replaces a child node in an element




*/
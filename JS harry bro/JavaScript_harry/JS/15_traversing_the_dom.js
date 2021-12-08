//    run in dom.html file
console.log('Welcome to tutorial 15');

// HTML elements are also called nodes.
// *******************************

// let cont = document.querySelector('.no');
cont = document.querySelector('.container');   //  run directly on console of dom.html file for better understanding

//  see all properties at the end of this page

console.log(cont.childNodes);    //  accept and show all nodes like newLine , comment and elements(tags)
console.log(cont.children);    //  only accept  element(tags like div, li)

let nodeName = cont.children[1].nodeName;     //  get chilren at index =  1 and show its Name ( tag name )
let nodeType = cont.children[1].nodeType;

// let nodeName = cont.childNodes[1].nodeName;    
// let nodeType = cont.childNodes[1].nodeType;

console.log(nodeName)     //  div  
console.log(nodeType)   //   show the below listed int value for each nodetype

// Node types
// 1 -> Element               nodeType will give 1 for all element nodes
// 2 -> Attribute
// 3 -> Text Node
// 8 -> Comment             nodeType will give 8 for all comments nodes
// 9 -> document
// 10 -> docType


 
// *******************************

let container = document.querySelector('div.container');  // select div with container class

// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);





/*

The DOM is the Document Object Model of a page. It is the code of the structure of a webpage. JavaScript comes with a lot of
different ways to create and manipulate HTML elements (called nodes).

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


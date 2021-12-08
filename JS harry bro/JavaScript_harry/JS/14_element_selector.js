console.log('Welcome to tutorial 14');
/*
// run on dom.html

element selectors:
1. Single element selector
2. Multi element selector

*****************

Gets               Selector Syntax 	 Method

ID     		        #name            getElementById('myfirst')
Class  		       .name             getElementsByClassName('child')
Tag    		        name             getElementsByTagName('div')
Selector(single)           	         querySelector("#id")   , querySelector(".class") , querySelector("div")          
Selector(all)            	         querySelectorAll()

****************** 

use these attributes with selected elements:

className: The className property sets or returns the class name of an element
childNodes: The childNodes property returns a collection of a node's child nodes.
parentNode: The parentNode property returns the parent node of the specified node.
innerText: The innerText property sets or returns the text content of the specified node.
innerHTML: The innerHTML property sets or returns the HTML content of an element.

******************

querySelector;-
It will return the first element that matches the specified CSS selector in the document.
The querySelector() method only returns the first element that matches the specified selectors.


******************

*/

// 1. Single element selector
let element = document.getElementById('myfirst');
// element = element.className;          //  return all inheritted classes of selected element
// element = element.childNodes;         //  return all nodes/tags inside this element ( in this case it give text node child1)
// element = element.parentNode;
element.style.color = 'red';              //  we can set CSS  properties  of selected element
element.innerText = 'Nouman is a good boy';   //  we can set inner text  of selected element
element.innerHTML = '<b>Nouman is a good boy</b>';
// console.log(element.innerText);


let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';
sel.style.backgroundColor = 'red'
console.log(sel)

// 2. Multi element selector
let elems = document.getElementsByClassName('child');
 
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div'); 
console.log(elems)

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
   element.style.color = 'blue'; 
}
// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'blue'; 
// });
// console.log(elems[0].getElementsByClassName('child'))


/*

The DOM is the Document Object Model of a page. It is the code of the structure of a webpage. 

JavaScript comes with a lot of different ways to create and manipulate HTML elements (called nodes).

cont = document.querySelector('.container');

console.log(cont.childNodes);    //  accept and show all nodes like newLine , comment and elements(tags)
console.log(cont.children);      //  only accept  element(tags like div, li)

*****  Node Properties  ****** 

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

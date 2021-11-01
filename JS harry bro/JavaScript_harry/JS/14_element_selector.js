console.log('Welcome to tutorial 14');
/*
// run on index2.html

element selectors:
1. Single element selector
2. Multi element selector
*****************
Gets            Selector Syntax 	 Method

ID     		    #name           getElementById()
Class  		    .name           getElementsByClassName()
Tag    		     name           getElementsByTagName()
Selector(single)           	    querySelector()    
Selector(all)            	    querySelectorAll()
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
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';              //  we can set CSS  properties  of selected element
element.innerText = 'Nouman is a good boy';   //  we can set inner text  of selected element
element.innerHTML = '<b>Nouman is a good boy</b>';
// console.log(element.innerText);


let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';
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

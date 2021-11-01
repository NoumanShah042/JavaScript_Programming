console.log('this is tut 16'); 
//  run with website.html
// Creating, Removing & Replacing Elements
// ********************************************************

//  add or append child 

let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text)

// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul)
// console.log(element)

// ********************************************************
// replace child

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2Class';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);

// ********************************************************

let myul = document.getElementById('myul');  //  here we get element to replace its child

myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.getAttribute('id');   //  get id of elem2  
let pr = elem2.getAttribute('class');   //  get class of elem2  
let pr = elem2.hasAttribute('href');     //  is elem2 has href attribute
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"

console.log('This is tutorial 25')
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// Create a new element
let divElem = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val == null) {   //  if local storage is empty or we are visiting this page for the first time
    text = document.createTextNode('This is my element. click to edit it');
}
else {               //  if we already have text item in localStorage 
    text = document.createTextNode(val);
}
divElem.appendChild(text);

// Give element id, style and class to that created element
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');


// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');



// Insert the element before element with id first
container.insertBefore(divElem, first);     //  it will insert divElem(newly created) before first(myfirst class) element

// console.log(divElem )
// console.log(container )
// console.log(first)

// add event listener to the divElem
divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    console.log(noTextAreas )
    if (noTextAreas == 0) {
        let html = divElem.innerHTML;
        console.log(elem.innerHTML )
        divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }

    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});


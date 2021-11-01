console.log("This is tutorial 17 on events");
// run on index2.html
// https://www.w3schools.com/jsref/obj_mouseevent.asp
// www.w3schools.com/tags/ref_eventattributes.asp    // best
// https://eloquentjavascript.net/15_event.html
/*
Event listener and event handler are two terms that cause confusion. ...
  A listener watches for an event to be fired.
  The handler is responsible for dealing with the event.

***************************
Event Handler: 
We can set a handler in HTML with an attribute named on<event>. For example, to assign a click handler for
 an input, we can use onclick, here is an example:

<input value="Click here" onclick="alert('Click here!')" type="button">


***************************
addEventListener():-
The JavaScript addEventListener() method allows the programmer to set up functions to be called when
a specified event happens, such as when a user clicks a button.


document.getElementById("myFrame").addEventListener("click", myFunction);  //  1 
or
document.getElementById("myFrame").onclick = function() { myFunction() };  // 2 

function myFunction() {
  document.getElementById("demo").innerHTML = "Iframe is loaded.";
}


*/

// In HTML:
// <element onclick="myScript">

// In JavaScript:
// object.onclick = function(){myScript};

// In JavaScript, using the addEventListener() method:
// object.addEventListener("click", myScript);

https: document
	.getElementById("heading")
	.addEventListener("click", click_handler);


function click_handler(e) {
  let variable;
  console.log("You have clicked the heading");

  variable = e.target;                 //  get <h1 id="heading"> Welcome to Code With Harry</h1>
  // variable = e.target.className;    //  get class names
  // variable = Array.from(e.target.classList);    // return list of class names

  // variable = e.target.id;
  // variable = e.offsetX;
  // variable = e.offsetY;
  variable = e.clientX;
  // variable = e.clientY;
  console.log(variable);
  // location.href = '//codewithharry.com'
}


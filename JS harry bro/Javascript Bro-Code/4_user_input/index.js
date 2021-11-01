
// simple way
// var foodcost = prompt("What is the total amount");
// var nop = prompt("No of people");
// document.write("The total cost of food was ", foodcost, "<br>");
// document.write("Each one of you has to pay ", (foodcost/nop).toFixed(2),"<br>");



// EASY WAY
// var myName = window.prompt("What's your name?");
// console.log("Hello",myName);



//HARD WAY
document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    console.log("Hello",myName);
}

/*
https://www.w3schools.com/whatis/whatis_htmldom.asp

Finding HTML Elements
When you want to access HTML elements with JavaScript, you have to find the elements first.

There are a couple of ways to do this:

Finding HTML elements by id
Finding HTML elements by tag name
Finding HTML elements by class name
Finding HTML elements by CSS selectors
Finding HTML elements by HTML object collections
*/



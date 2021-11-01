/*
create a variablel:
declaration + assignment 

*/


var age = 21;
var firstName = "Bro";   // use camel notation for naming variables
var lastName = "Code";
var online = true;
var chair ;              // undefined
var whatever = null;     //  nothing
var char='a';



age = age + 1;
var fullName = firstName +" "+lastName;

//limited to the scope of a block statement
let mySweetVariable = 420;

//const = constant reference to a value that cannot be changed
const pi = 3.14159;
// pi=4;


console.log("Your age is",age); //  , will insert space before variable but + don't 
console.log("Hello",fullName);
console.log("Are you online?:",online);
console.log(whatever);
console.log(pi);

console.log(typeof(age))   //  see type of any variable
console.log(typeof(fullName))  
console.log(typeof(online))  
console.log(typeof(whatever))  
console.log(typeof(chair))  
console.log(typeof(pi))  

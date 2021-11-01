/*
 hoisting = JS's default behavior of moving declarations,
            to the top of the current scope.
            A variable can be used before it has been declared.
            Beneficial to understand to help avoid bugs.

            Good practice to declare all variables,
            at the top of every scope.
*/

// ******************
// Declaration
// ******************

myName = "Bro";

console.log(myName);

var myName;      // hoisting works only with var keyword 
//let myName;
//const myName;



// ******************
// Initialize
// ******************
/*
var firstName = "Bro";

console.log(firstName, lastName);   //  lastName is undefines

var lastName = "Code";

// if we initialize variable and use it before it , it is legal but it is undefined
*/
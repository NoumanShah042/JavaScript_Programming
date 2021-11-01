// function expression =  
//                        A function can also be defined using an expression.
//                        Function expressions can be stored in a variable.
//                        The variable can be used as a function.
//                        They can be invoked by adding ()
//
//                        1. Useful as closures
//                        2. Used in IIFE (funcs that runs as soon as it's defined)
//                                      (immediately invoked function expression)
//                        3. Can be passed as arguments to other functions

// ********************
// function declaration
// ********************

sayHello();

function sayHello() {

    // console.log("Hello");
}

// ********************
// function expression
// ********************

let greeting = function () { console.log("Hello") };
// let greeting = function () { document.getElementById("myH1").innerHTML = "Hello" };

output(greeting);

function output(func) {
    // now this output function can do whatever it wants with the received function
    func();
}


//  if we use function declaration to do the same task we use 
// two separate function 
//   1) output to console and 2)  output to dom
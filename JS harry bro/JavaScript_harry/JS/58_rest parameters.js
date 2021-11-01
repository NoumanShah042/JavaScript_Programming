// rest parameter = ...
//                  Condenses an indefinite number
//                  of arguments into a type of array.
//                  Similar to spread operator, but used
//                  within a function's parameters



function checkOut(...args){
    let total = 0;

    for(let i in args){
        total += args[i];
    }
    return total;
}

console.log("The total is: $"+checkOut(10, 20, 30));

// ******************

//  rest parameter needs to be at the end
function displayName(first, last, ...middle){
    console.log(first, middle.join(' '), last);
}

displayName("Smitty", "Jensen", "Werben", "Jager", "Man");

 
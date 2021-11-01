
// forEach() =  Performs a function for each 
//              element in an array.

let total = 0;
let cart = [5, 6, 7, 8, 9];

// for each provide 3 arguments to our function for each call
// ( value: number, index: number, array: number[])  , we can rename them

function checkOut(element, index, array) {
    console.log(element, index, array)
    total += element;
}


cart.forEach(checkOut); // forEach calls the callbackfn function one time for each element in the array.

console.log("Your total is: $" + total);
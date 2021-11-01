// map() =  Performs a function for each 
//          element in an array, then stores
//          the returned values in a new array
//          and return that array.
 
let storeUSD = [5, 6, 7, 8, 9];

function toEuros(value){

    value *= 0.85;
    return value;
}

let storeEUR = storeUSD.map(toEuros);

console.log(storeUSD);
console.log(storeEUR);

/*
output:

[ 5, 6, 7, 8, 9 ]
[ 4.25, 5.1, 5.95, 6.8, 7.6499999999999995 ]

*/
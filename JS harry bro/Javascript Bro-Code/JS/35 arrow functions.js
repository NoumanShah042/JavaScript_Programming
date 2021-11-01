// arrow function =>
// shortcut for a function expression

// (args) => statment ;

// (args) => {
//     block of statment;
// };

// *********************

let hello;
let x = "Yo";
let y = "bro!";

// *********************
// function expression
// *********************

hello = function () {
    return "Hello World!";
}
console.log(hello());

// *********************
// arrow function
// *********************

hello = () =>  "Hello World!";    //  return automatically in case of single line arrow function
console.log(hello());

// *********************
// arrow function with 1 argument
// *********************

hello = x => x + "World!";       // no need to write arg in brackets
console.log(hello(x));

// *********************
// arrow function w/ multiple arguments
// *********************

hello = (x, y) =>  x + y; 
console.log(hello(x, y));

// *********************
// arrow function w/ multiple lines
// *********************

hello = (x, y) => {
     
    console.log("x:"+x);
    console.log("y:"+y);
    // return 10    //  we explicitly return in multiple lines
};
hello(x, y);
// console.log(hello(x, y));

// *********************
// MAP
// *********************

let storeUSD = [5, 6, 7, 8, 9];
let storeEUR;

// function toEuros(value){

//     value *= 0.85;
//     return value;
// }

storeEUR = storeUSD.map(value => value *= 0.84);
console.log(storeEUR);

// *********************
// FILTER
// *********************

let students = [16, 17, 18, 19, 20];
let adultStudents;

// function checkAge(age, index, array){
//     if(age >= 18){
//         return true;
//     }
// }

adultStudents = students.filter(age => age >= 18);    // age >= 18  expression will return true or false 
console.log(adultStudents);

// *********************
// REDUCE
// *********************

let letters = ["H", "E", "L", "P"];
let word;

word = letters.reduce((total, nextLetter) => total + nextLetter);
console.log(word);
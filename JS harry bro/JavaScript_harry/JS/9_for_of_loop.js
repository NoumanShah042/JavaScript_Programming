// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, 
//  array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a
//  custom iteration hook with statements to be executed for the value of each distinct property of the object.

// syntax:

// for (variable of iterable) {
//     statement
//   }

// variable
// On each iteration a value of a different property is assigned to variable. variable may be declared with const, let, or var.
// iterable
// Object whose iterable properties are iterated.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

//************************* 
// const iterable = [10, 20, 30];

// for (const value of iterable) {
//   console.log(value);
// }
// 10
// 20
// 30


//************************* 
const iterable = [10, 20, 30];
for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31

//************************* 

// Iterating over a String
const iterable = 'boo';

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"

//************************* 
// Iterating over a TypedArray
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255

//************************* 

// Iterating over a Map
const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3

//************************* 
// Iterating over a Set
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3

//************************* 

//************************* 

//************************* 

//************************* 

//************************* 

//************************* 


//************************* 


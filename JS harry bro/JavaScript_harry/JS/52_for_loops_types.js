console.log("This is tutorial 56 on for-in and for-of loops");
// **************************
// The for..in loop:-
// The for..in loop is an iteration method for iterating over "enumerable" properties 
// of an object. This loop applies to all objects that have these properties. 
// Here enumerable means an array or object or strings. If we are using a for…in loop over 
// an object, it will give us the value to each key in the object. Here is the syntax of the
// for..in loop:
// for (variable in enumerable) {
//         // do stuff
// }
// **************************
// For…Of Loop:-
// To iterate over objects like arrays and strings, we can use the for...of statement.
// This statement is a newer feature of ECMAScript 6. The for..of loop does not work with 
// objects because they are not "iterable". This iteration method is a more reliable way 
// of looping through an Array in sequence.

// arrays , strings , node-lists , sets , maps have built-in iterators
// objects by default do no have iterators  
// https://www.youtube.com/watch?v=HZjvoftRvGE

// String, Array, TypedArray, Map, and Set are all built-in iterables, 
// because each of their prototype objects implements an @@iterator method.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#built-in_iterables

// **************************
// Which loop should we use? and When?
// Each type of loop is useful in a different scenario:

// If indexes are needed while accessing an array of indexes related logical stuff are there, the for loop is a good choice.
// If there is a need to access keys/properties regardless of the sequence, use a for-in loop.
// If there is a need to iterate through items of an iterable, then the for-ofloop is the right choice.
// **************************



let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];
  
// **********For in loop*******
//  for in loop give  
// * the key of string type when iterating object
// * the index of each item when iterating array
// * the index when iterating string

// Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);   
// }


// 1. ITERATING AN OBJECT
let obj = {
    name: "Harry",
    language: "JavaScript",
    hobbies: "Android app development"
}
// console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }

// 1.2 Iterating an object using for-in loop:
for (let key in obj){
    console.log( key,":", obj[key]);  // key is a string so cannot do like --  obj.key
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = "This is my string";
for (let char in myString){  
    console.log(myString[char] , char);
}

// Quiz: Use traditional for loop to iterate through the same string


// **********For of loop***********
console.log("*****************For of loop starts here**************")
// for of loop give the value of each item
people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}


// allDivs= document.getElementsByTagName("div");
// for (let item of allDivs){
//     console.log(item);
// }
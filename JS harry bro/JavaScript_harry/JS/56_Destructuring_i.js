console.log('This is tutorial 60');
// https://codewithharry.com/videos/javascript-tutorials-in-hindi-60
/*
Destructuring in JavaScript
Destructuring is breaking down a complex structure into simpler parts. 
In JavaScript, the complex structure is usually an array or an object. 
With the destructuring syntax, we can extract smaller fragments from arrays and objects. 
The destructuring syntax is also used for variable declaration or variable assignment. 
we can declare variable before or declare using ( let var const in same lime)


For destructuring name of variable should match.
By using the rest operator (…) in array destructuring, we can put all the remaining elements of an array in a new array. Here is an example.

 */


let a, b;
[a , b] = [34, 564];
console.log(a, b);  //    34 564

let [c , d] = [34, 564];
console.log(c, d);  //    34 564

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(a)  // 1
// console.log(b)   // 2 
// console.log(c)   //  3 
// console.log(d) // Array(10) [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


// Array Destructuring
({ a, b, c, ...d } = { a: 34, b: 345, c: 67, d: 45, e: 34 })
// console.log(a)   // 34
// console.log(b)   // 345 
// console.log(c)   // 67 
// console.log(d)   // {d: 45, e: 34}  -- object

const fruits = ['Apple', 'Bananas', 'Mangoes'];
[a, b, c] = fruits;
// console.log(a, b, c)
 

// Object Destructuring
const laptop = {
    model: "HP Pavilion",
    age: "23 days",
    gender: "Male",
    net: 1233,
    start: function () { console.log('started'); }
}

const { model, age, gender, net, start } = laptop;
console.log(model, age, gender, net, start);  // HP Pavilion 23 days Male 1233 ƒ () { console.log('started'); }
start()
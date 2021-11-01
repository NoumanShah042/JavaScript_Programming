/*Arrays in JavaScript:-
Arrays are the objects in which we can store multiple values in a single variable. 
An array stores a sequential collection of elements of fix sizes. There are two syntaxes used for creating an empty array:  


There are two syntaxes used for creating an empty array:
let arr = new Array();
let arr = [];

*/

console.log('We are in tut7.js and lets discuss about arrays');
let marks = [34, 23, 24, 93 ,73, 25];
const fruit_arr = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const array = new Array(23,123,21, 'Orange');
// console.log(marks);
// console.log(mixed);
// console.log(fruit_arr[1]);
// console.log(array.length);

// console.log(Array.isArray(array));
// console.log(Array.isArray("idk"));





/*Accessing array elements:- */
let arr = ['first element', 'second element', 'last element']
// console.log(arr[0]) // output ' first element'
// console.log(arr[1]) //  output ' second element'
// console.log(arr[arr.length - 1]) //  output ' last element'



arr[0] = 'change element';    
let arrelement = arr[0];
// console.log('element :', arrelement);
// console.log(arr);




// Following are some arrays method:
// methods which are used to modify an array.
// Remember that, when we modify an array, we are modifying the original array.

let age = [33,55,67,18]
// console.log(age.length)

let std = ["Mark", "John", "Jonas", "Jack"];
let a = std.indexOf("Jonas");
// console.log(a)  // 2

let age1 = [33,55,67,18]
let s_age = age1.sort()
// console.log(s_age , age1)   // both are same    
//18,33,55,67

let age2 = [33,55,67,18]
let r_age= age2.reverse(age2)
// console.log(r_age,age2)  //  both are same 
//18,67,55,33

let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric); // a,b,c,1,2,3
// console.log(alphaNumeric)



let fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.length,fruits)

let len = fruits.push('Mango')                             //  add at end
console.log(len ,fruits)
// ["Banana", "Orange", "Apple", "Mango"]

let newLength = fruits.unshift('Strawberry')                 // add to the front
console.log(newLength , fruits)
// ["Strawberry", "Banana", "Orange", "Apple", "Mango"]

let last = fruits.pop()                                 // remove Mango (from the end)
console.log(last ,fruits)
// ["Strawberry", "Banana", "Orange", "Apple"]

let first = fruits.shift()                           // remove Strawberry from the front
console.log(first ,fruits)
// ["Banana", "Orange", "Apple"]


let age3 = [33,55,67,18,59,30]
let removedItem = age3.splice(2, 3);    //  remove elements start from index 2 and remove 3 element total
console.log(len)
// [33,55,30]




console.log('This is tutorial 58');
/* 

What is set in JavaScript?
A set is a  unique, non-repeating , ordered collection of elements. 
Elements of the set can be iterated in the insertion order. The power of the set is that it can store 
any types of values, whether primitive or objects.

Syntax: ----------------
let myset=new Set([iterable]);

In the syntax, iterable is an object whose all elements are added to the new set created. 
In set, the parameter is optional. If the parameter is not specified or null is passed then a 
new set created is empty. It returns a new set object.

Set Object:----------------------------
__proto__: Set
add: ƒ add()
clear: ƒ clear()
constructor: ƒ Set()
delete: ƒ delete()
entries: ƒ entries()
forEach: ƒ forEach()
has: ƒ has()
keys: ƒ values()
size: number
values: ƒ values()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.toStringTag): "Set"
get size: ƒ size()

  ----------------------------

chrome feature:
  chrome shows the updated value of set even we print set before changing the set .

*/

// Set stores unique values
const mySet = new Set();  // Initialize an empty set
console.log('The set looks like :', mySet);

// Adding values to this set
mySet.add('this');
mySet.add('My name');
mySet.add('this');
mySet.add('that');
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add('that2');
console.log('The set looks like this now:', mySet);

// Use a constructor to initialize the set
// if you want unique values from an array, just makes a set from it like this
let mySet2 = new Set([1, 45, 'this', false, { a: 4, b: 8 }, 'this']);
// console.log('New set:', mySet2);


console.log(mySet.size); // Get the size of the set

console.log(mySet.has(346)); // Check whether set has 346 or not

console.log('Before removal', mySet.has('that2'));
mySet.delete('that2'); // Remove an element from the set
console.log('After removal', mySet.has('that2'));


// Iterating a set using for-of
console.log('Iterating a set using for-of:');
for (let item of mySet) {
    console.log('Item is  :', item);
}

// Iterating a set using forEach
// mySet.forEach((item) => {
//     console.log('Item is  :', item);
// })


// Quiz: Can you use Array.from(mySet) to convert set into an array?
arrayFromSet = Array.from(mySet) 
console.log (arrayFromSet)
// for (i of arrayFromSet) {
//     console.log(i);
// }



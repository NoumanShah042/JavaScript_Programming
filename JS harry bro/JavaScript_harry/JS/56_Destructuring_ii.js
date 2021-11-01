// Object destructuring
// The destructuring assignment also works with objects.
// The basic syntax is:

// let {var1, var2} = {var1:…, var2:…}


// Array destructuring

// The basic syntax is:

// let arr = ["John", "Smith"]
// let [firstName, surname] = arr;


// https://javascript.info/destructuring-assignment

// Here’s an example of how an array is destructured into variables:

// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith


[firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith


// Works with any iterable on the right-side
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// ******************
// Ignore elements using commas
// Unwanted elements of the array can also be thrown away via an extra comma:
// In the code above, the second element of the array is skipped, the third one is assigned to title, and the rest of the array items is also skipped (as there are no variables for them).

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(title); // Consul

// ******************
// Assign to anything at the left-side
// We can use any “assignables” at the left side.

// For instance, an object property:

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith
// ******************

// Looping with .entries()
// In the previous chapter we saw the Object.entries(obj) method.

// We can use it with destructuring to loop over keys-and-values of an object:

let user = {
    name: "John",
    age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, then age:30
}

// The similar code for a Map is simpler, as it’s iterable:

let user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user) {
    alert(`${key}:${value}`); // name:John, then age:30
}

// ******************

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, width, height } = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

//   Properties options.title, options.width and options.height are assigned to the corresponding variables.

//   The order does not matter. This works too:

// changed the order in let {...}
let { height, width, title } = { title: "Menu", height: 200, width: 100 }

//   The pattern on the left side may be more complex and specify the mapping between properties and variables.

// If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon:

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// { sourceProperty: targetVariable }
let { width: w, height: h, title } = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
// ******************
// ******************
// ******************
// ******************

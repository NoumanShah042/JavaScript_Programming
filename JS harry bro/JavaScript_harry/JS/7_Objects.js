
/*
In JavaScript, Object is a non-primitive data type. The object is like other variables,
but the only difference is that an object holds multiple values, arrays, functions etc.
We create an object with figure brackets {…} with an optional list of properties. 
A property is a "key: value" pair, where the key is a string/ property name, and value can be anything. 

Creating JavaScript Objects ways:
1) Create Object using create object literal
2) Create Object using new keyword
3) Create Constructor using constructor create object


The syntaxs of creating object are following:-

let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax

*/

let myobj = {
    'first name': 'harry',    // // by key "name" store value "Harry"
     age : 25 ,             // by key "age" store value 25
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1,5,3,6]
}

console.log(myobj)
console.log(myobj['channel']) // obj["property"]
console.log(myobj.channel)    // obj.property

x="property";
console.log(myobj[x]) // obj[expression]


//   myobj.attribute is same as we are giving attribute
//   as a string in index like myobj['attribute']
           
//   so do not use dot notation with a variable as a key to access values from object

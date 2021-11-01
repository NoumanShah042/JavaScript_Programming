console.log('tut3');
// Variables in js
// var, let, const
var name1 = 'harry';
var name2 = `Nou"ma\n`;  // we can add add special char

var channel;
var marks = 3454;
marks = 0;
channel = 'CodeWithHarry'
console.log(name1, channel, marks);

// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/
var city = 'Delhi';
console.log(city);

const ownersName = 'Afridi shah';
// ownersName = 'Harry'; // Cannot do this (error)
console.log(ownersName);
const fruit = 'Orange';

{
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);


const arr1 = [12,23,12,53, 3];
// arr1 = [1,2,3,4]                // error
// arr1.push(45);                 // can do this
console.log(arr1)

/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 


*/


let key =80;
let a =[1,2,3];
console.log(`The ${key} of object is ${a[0]}`)   // this is template string
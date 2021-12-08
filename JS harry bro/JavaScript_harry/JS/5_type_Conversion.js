// Type Conversion:
//     Explicit Conversion:-
//     Implicit Conversion

//******************************************* 
// Explicit Conversion:-     (that we manually do )
// Number Conversion            Number()
// Boolean Conversion           Boolean()
// String Conversion            String()   and  obj.toString() 
// parseInt and parseFloat:     parseInt() and parseFloat()


// Number Conversion  ********************
let xyz;
xyz = Number('100');   // 100
xyz = Number('2.345');   // 2.345 "number"
xyz = Number(false);    // 0
xyz = Number(' ')       // 0
xyz = Number('hello');  // // NaN "number" 
xyz = Number('123d45');  // NaN  
xyz = Number(undefined);  // NaN  
// console.log(xyz, typeof (xyz));



// Boolean Conversion   ********************
//   NaN, 0, undefined, null, "" are converting to false
//   everything else, including objects, to true
xyz = Boolean(1);  // true
xyz = Boolean(0); // false
xyz = Boolean("hello"); // true
xyz = Boolean(""); // false

// console.log(xyz, typeof (xyz));

// String Conversion   ********************

let myVar;
myVar = String(34);       // returns a string from a number variable 
myVar = String(true);
myVar = String(new Date());
myVar = String([1, 2, 3, 4, 5]);

// console.log(myVar, myVar.length, (typeof myVar));


//   we can also use toString() ****

let abc = 90
abc = abc.toString()
abc = (378009).toString()
abc = (new Date()).toString()
abc = ([1, 2, 3, 4, 5]).toString()

// console.log(abc, abc.length, (typeof abc));



// parseInt and parseFloat:   ***************
let number
number = parseFloat('34.098');  // 34.098 "number"
number = number.toFixed(2);  // 34.10 string
number = parseInt('$100 dollars'); // NaN
number = parseInt('+10.25990 kg'); // 10 
number = parseFloat(' +10.25 kg'); // 10.25
number = parseFloat('ABC');     //   NaN
number = parseFloat('1a');     //   1
number = parseFloat('abc123');     //   NaN

// console.log(number, (typeof number));


//  **********************************************************************

// Implicit Conversion    (  automatically converts one data type to another  )
// Conversion To String
// Conversion To Number
// Boolean Conversion to Number


// Conversion To String ----      
// When we add a number into a string, JavaScript converts the number to a string before concatenation.
let res;
res = '3' + 4; // "34"
res = '9' + true;  // "9true"
res = '0' + null;  // "0null"

// console.log(res, typeof(res)); 



// Conversion To Number ----  
// Numeric string used with operators like  - , / , * returns number type

res = '4' - '4';  // 0   ( type = number ) 
res = '4' * 5;   // 20    ( type = number ) 

// console.log(res, typeof(res)); 



// Boolean Conversion to Number        
// If we use Boolean, true is considered as 1 and false is considered as 0.
let res1;
res1 = '5' - true; // 4 "number"
res1 = 10 + false;  // 10 "number"
res1 = 4 + null; //   4 "number"  (Null is considered as 0 when used with numbers)
res1 = 4 - undefined;// NaN "number"

console.log(res1, typeof(res1)); 



/*

In JavaScript, there are two ways to check if a variable is a number :

isNaN() – Stands for “is Not a Number”, if variable is not a number, it return true, else return false.
typeof – If variable is a number, it will returns a string named “number”.
 */


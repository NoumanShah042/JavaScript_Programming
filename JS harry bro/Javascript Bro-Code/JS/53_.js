
// New feature as of (ES6)

// template literals = another way of formatting output,
//                     can contain placeholders for
//                     formatting and inserting: 
//                     strings/values/variables/etc.

//                     ` backticks
//                     ${} placeholder

//                     Can use multiple lines
//                     embed expressions

let firstName = "Bro";
let lastName = "Code";
let price = 10;
let taxRate = 0.05;
let total;

//console.log("Hello "+firstName+" "+lastName+"!");
console.log(`Hello ${firstName} ${lastName}!`);

console.log(`The price is: $${price}`);
console.log(`tax rate: ${taxRate}`);
console.log(`tax is: $${price * taxRate}`);
console.log(`Total is: $${total = price + (price * taxRate)}`);
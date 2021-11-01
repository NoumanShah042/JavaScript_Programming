console.log("This is tutorial 46");
//  https://regexr.com/    very helpful
// https://www.youtube.com/watch?v=rhzKDrUiJVk    (one video)

// re 1   -- Functions to match expressions
// re 2   --  meta characters(^ , $ , . , * , ? , \*)
// re 3   --  meta characters( [] , {} , () )
// re 4   --  Character classes(\w , \W , ...) , 
//            Assertions (?=y)(?!y)


//  we want to find our regular expression in the input string

let reg = /harry/; // This is a regular expression literal in js
reg = /harry/g; // g means global (flag)(   effect all occurrence   )
// reg = /harry/i; // i means case insensitive ( ignore case)



// console.log(reg);
// console.log(reg.source);  // inner text of regular expression

let s = "This is great code with harry and also harry bhai";

// Functions to match expressions


// 1. exec() - This function will return an array for match or null for no match ( one match at a time)  ***************

let result = reg.exec(s);   //   24 wala
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);       //  39 wala
// console.log(result); // ---> We can use multiple exec with global flag (for next match of occurrence  )

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }


// 2. test() - Returns true or false   ***************
let result2 = reg.test(s);
// console.log(result2); //--> This will only print true if the "reg" is there in the string "s"


// 3. match() - It will return an array of results or null    ***************

// let result3 = reg.match(s) ---> This is wrong!!
let result3 = s.match(reg) // ---> This is right   ( yaha pr ulta syntax ha = string.match(regular expression)  )
console.log(result3);


// 4. search() - Returns index of first match else -1         ***************
// let result4 = reg.search(s) ---> This is wrong!!
let result4 = s.search(reg) // ---> This is right
// console.log(result4);



// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)   ***************
// Similar to the .match() method, .replace() will only replace the first matched pattern it finds unless you use regex with the g flag:

let result5 = s.replace(reg, 'SHUBHAM');     //   example 1 
// console.log(result5);

const campString = 'paidCodeCamp';                         //   example 2
const fCCString1 = campString.replace('paid', 'free');
const fCCString2 = campString.replace(/paid/, 'free');

console.log(campString); // "paidCodeCamp"
console.log(fCCString1); // "freeCodeCamp"
console.log(fCCString2); // "freeCodeCamp"

campString = 'paidCodeCamp is awesome. You should check out paidCodeCamp.';     //   example 3
fCCString1 = campString.replace('paid', 'free');
fCCString2 = campString.replace(/paid/g, 'free');

console.log(fCCString1); // "freeCodeCamp is awesome. You should check out paidCodeCamp."
console.log(fCCString2); // "freeCodeCamp is awesome. You should check out freeCodeCamp."


// https://www.freecodecamp.org/news/javascript-regex-match-example-how-to-use-the-js-replace-method-on-a-string/

// 6. matchAll() - returns either an iterator or an empty array  ***************
//            ( requires the global search flag (g))
const csLewisQuote = 'We are what we believe we are.';
const regex1 = /we/gi;
const regex2 = /eat/gi;

let result6 = [...csLewisQuote.matchAll(regex1)]
// console.log(result6);

// result6 = [...csLewisQuote.matchAll(regex2)];
// console.log(result6);


// [
//   ["We", index: 0, input: "We are what we believe we are.", groups: undefined],
//   ["we", index: 12, input: "We are what we believe we are.", groups: undefined]
//   ["we", index: 23, input: "We are what we believe we are.", groups: undefined]
// ]


// 7  replaceAll() - .replaceAll() is a bit more readable, and replaces all matched patterns when you pass it a string as the first argument. ***************
//  The only real difference between .replace() and .replaceAll() is that you need to use the global search flag if you use a regular expression with .replaceAll():
// ( requires the global search flag (g))

  campString = 'paidCodeCamp is awesome. You should check out paidCodeCamp.';
  fCCString1 = campString.replaceAll('paid', 'free');
  fCCString2 = campString.replaceAll(/paid/g, 'free');

console.log(fCCString1); // "freeCodeCamp is awesome. You should check out freeCodeCamp."
console.log(fCCString2); // "freeCodeCamp is awesome. You should check out freeCodeCamp."
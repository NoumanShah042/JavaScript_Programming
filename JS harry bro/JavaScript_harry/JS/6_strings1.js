/* 20 String Methods */

var stringOne = "freeCodeCamp is the best place to learn"
var stringTwo = "frontend and backend development"

// charAt()
console.log(stringOne.charAt(1))  // r

// charCodeAt()
console.log(stringOne.charCodeAt(1))  // 114 ascii of r

// concat()
console.log(stringOne.concat(stringTwo))

// endsWith()
console.log(stringOne.endsWith("to")) // false

// fromCharCode()
console.log(String.fromCharCode(114))  //  "r"


// includes()
console.log(stringTwo.includes("end"))  //  true


// indexOf()        give first occurrence
console.log(stringTwo.indexOf("end"))   //   5

// lastIndexOf()
console.log(stringTwo.lastIndexOf("end"))  // 17

// match()         match for regular expression
console.log(stringTwo.match(/end/g))  //  

// repeat()
console.log(stringOne.repeat(3)) //  give string with 3 time repeat


// replace()
console.log(stringTwo.replace(/end/g, "END"))

// search()
console.log(stringTwo.search("end"))   //  5

// slice()
console.log(stringTwo.slice(2, 4))   //  "on"

// split()
console.log(stringOne.split(" ")) //  return list of words separated with with given character

// startsWith()
console.log(stringOne.startsWith("free")) // true

// substr()
console.log(stringTwo.substr(2, 4))  //"onte"

// substring()
console.log(stringTwo.substring(2, 4))  //  "on"

// toLowerCase()
console.log(stringOne.toLowerCase())  

// toUpperCase()
console.log(stringOne.toUpperCase())

// trim()
var stringThree = "     Subscribe now!      ";
console.log(stringThree.trim())
 


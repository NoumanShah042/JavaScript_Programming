console.log("This is tutorial 59")

// Symbols  = used to create a primitive that is unique
// before introducing symbols  , making a unique key is very difficult from primitive types
// Symbol generate a new unique primitive for us
// Upon creation, we can give symbol a description (also called a symbol name), mostly useful for debugging purposes:


const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');
// console.log('Symbol is ', sym1);
console.log(sym1.toString());    // "Symbol(My identifier)"
console.log(sym1.description);  // "My identifier"
console.log(typeof sym1);   // "symbol"
console.log(sym1 === sym2);  //  false

const a = "this is";
const b = "this is";

console.log(a === b);      //  true
console.log(null === null);   //  true
console.log(undefined === undefined);   //  true

const k1 = Symbol('identifier for k1');
const k2 = Symbol('for k2');

myObj = {};
myObj[k1] = "ALI";
myObj[k2] = "Humza";
myObj["name"] = "Good boy"
myObj[4] = "Good int"


console.log(myObj);
console.log(myObj[k1]);   //  must use index notation to get value against symbol
console.log(myObj[k2]);
console.log(myObj.k2); // !! ALERT !!: cannot do this to get Humza because it is same as myObj["k2"]

// myObj[k2] is same as myObj["k2"]

// Symbols are ignored in for-in loop
for (key in myObj) {
    console.log(key, myObj[key])
}


console.log(JSON.stringify(myObj));  //  JSON.stringify also ignres Symbols 
console.log(Object.keys(myObj));  //  Object.keys(user) also ignores them

// That’s a part of the general “hiding symbolic properties” principle.
//  If another script or a library loops over our object, it won’t unexpectedly access a symbolic property.


// ************************

let id = Symbol("id");

// alert(id); // TypeError: Cannot convert a Symbol value to a string
// alert(id.toString()); // Symbol(id), now it works
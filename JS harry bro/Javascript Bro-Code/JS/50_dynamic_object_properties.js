/* 
Dynamic Object properties using square brackets

**************************************************
In object a key used, can have 3 types of syntax:
1) without quote  --   name:"Nouman"
2) with single quote   --  "name":"Nouman"
3) with double quote   --  'name':"Nouman"

all works the same

*/
let beverage = "Beer";

const myObj = {
	a: 1,
	b: 2,
	c: 3,
	food: "cheese",
	propName: "cheese",
	beverage: "Heineken", // beverage: 'Heineken' ( here beverage itself is the key )
	[beverage]: "corona", // Beer: 'corona'  (here beverage is the variable whose value will be used as a key)
};

// if we put variable inside [] , it's the value inside that variable
// that we want to use as a key to set up a property of object
// so the square brackets , let us dynamically create the property name inside of our objects

let addProp = (obj, propName, propValue) => {
	// obj.food = 'cheese';
	obj[propName] = propValue;
	obj.propName = propValue;
};

addProp(myObj, "food", "cheese");
console.log(myObj);

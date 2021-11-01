// Maps are a new object type that allows us to store collections of key-value pairs.
// Map keys can be of any type, even objects or functions.
// In the case of maps, it is also easy to get the size of a map,
// whereas, it is not as straightforward in case of objects.
// Along with that, in maps, we can iterate in the order in which the values were added.
// Here is the syntax of maps in JavaScript:

// Syntax:
// let mymap= new Map([iterable])

// Parameter: iterable  
// It is any iterable object whose values are stored as key, value pair. i.e.  [[1 , 2], [2 ,3 ] ,[4, 5]]
// Providing parameters is optional. If the parameter is not specified, 
// then a new map is created Empty.

// set(): This method adds the key and value to the Map Object. 
// It returns a Map object 

// has(): This method returns a boolean value depending on whether the specified key is present or not.  
// It will return true if the element with the specified key is present or else returns false. 

// get(): This method returns the value of the corresponding key. 
// It will return the value associated with the key if it is present in Map, otherwise returns undefined

// delete(): This method deletes both the key as well as a value from the map.  
// It will return true if the value is found and deleted from the map; otherwise, it returns false

// clear(): This method will remove all the elements from the Map object.
// It requires no parameters and return undefined. 

// entries(): It returns an iterator object that contains key/value pair for each element present in the Map object.

const students = [
    ['1', 'Harry'],
    ['2', 'Joe'],
    ['3', 'Peter'],
];
let myMap = new Map(students);
console.log(myMap.get('2'));  //Output: "Joe"


const mymap1 = new Map();
mymap1.set('x', 'y');  //  'x' is key , 'y' is value  , this is one key, value pair
mymap1.set('k', 'l');  //  this is another key, value pair

console.log(mymap1.has('x'))  //  true
console.log(mymap1.get('x'))  // 'y'  
console.log(mymap1.delete('k')) // true
console.log(mymap1.delete('g')) // false
console.log(mymap1.clear())  //  undefined



// Now lets create some Map using the Map object

//  https://www.geeksforgeeks.org/map-in-javascript/#:~:text=Map%20is%20a%20collection%20of,the%20same%20order%20as%20inserted.
// map1 contains
// 1 => 2
// 2 => 3
// 4 -> 5
var map1 = new Map([[1, 2], [2, 3], [4, 5]]);

console.log("Map1");
console.log(map1); //   Map(3) {1 => 2, 2 => 3, 4 => 5}

// map2 contains
// firstname => sumit
// lastname => ghosh
// website => geeksforgeeks
var map2 = new Map([["firstname", "sumit"],
["lastname", "ghosh"], ["website", "geeksforgeeks"]]);

console.log("Map2");
console.log(map2); //   Map(3) {"firstname" => "sumit", "lastname" => "ghosh", "website" => "geeksforgeeks"}


// map3 contains
// Whole number => [1, 2, 3, 4]
// Decimal number => [1.1, 1.2, 1.3, 1.4]
// Negative number => [-1, -2, -3, -4]
var map3 = new Map([["whole numbers", [1, 2, 3, 4]],
["Decimal numbers", [1.1, 1.2, 1.3, 1.4]],
["negative numbers", [-1, -2, -3, -4]]]);

console.log("Map3");
console.log(map3);


// map 4 contains
// storing arrays both as key and value
// "first name ", "Last name" => "sumit", "ghosh"
// "friend 1", "sourav" => "friend 2", "gourav"
var map4 = new Map([
    [["first name", "last name"], ["sumit", "ghosh"]],  //  1st key value pair 
    [["friend 1", "friend 2"], ["sourav", "gourav"]]    //  2nd key value pair  
]);

console.log("Map4");
console.log(map4);  // Map(2) {Array(2) => Array(2), Array(2) => Array(2)}

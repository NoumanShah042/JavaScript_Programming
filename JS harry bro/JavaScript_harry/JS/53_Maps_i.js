console.log("This is tutorial 57");
// https://codewithharry.com/videos/javascript-tutorials-in-hindi-57
// https://www.geeksforgeeks.org/map-in-javascript/#:~:text=Map%20is%20a%20collection%20of,the%20same%20order%20as%20inserted.

// Map is a collection of elements where each element is stored as a Key, value pair. 
// Map object can hold both objects and primitive values as either key or value. 
// When we iterate over the map object it returns the key,value pair in the same order as inserted.
// Maps in JavaScript: We can use any type of key or value

const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function () { };
// const key1 = 'myStr', key2 = { name="nouman"}, key3 = function () { console.log("this is func");};

// Setting map values
myMap.set(key1, 'This is a string');  //  we can directly add keys in set as args
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');
console.log(myMap);

// Getting the values from a Map 
let value1 = myMap.get(key3);
console.log(value1);

// Get the size of the map
console.log(myMap.size);

// You can loop over Map using for..of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);
}

// Get only keys
for (let key of myMap.keys()) {
    console.log('key is ', key);
}
// Get only values
for (let value of myMap.values()) {
    console.log('value is ', value);
}

// You can loop through a map using for each loop
myMap.forEach((value, key)=>{   //  order matter
    console.log('Key is ', key);
    console.log('Value is ', value);
})

// Converting map to an array
let myArray = Array.from(myMap);
console.log('Map to array is ', myArray);

// Converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log('Map to keys array is ', myKeysArray);

// Converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is ', myValuesArray);

console.log('This is tut 20');

// application -> localstorage
/*
********************************
Both localstorage and sessionstorage have same set, get and other methods 
********************************
 localstorage -> data remain saved after we close chrome
 sessionstorage  -> data will be removed if we close chrome
********************************
JSON.stringify  ->     convert an object or an array into a string (JavaScript Object Notation (JSON) string)
JSON.parse      ->   Converts a  string (JavaScript Object Notation (JSON) string) into an object or array.

simply:
JSON.stringify  ->   array or object to string
JSON.parse  ->   string to  array or object
 
*********************************/

let impArray = ['adrak', 'pyaz', 'bhindi'];   

// // Add a key-value pair inside local Storage
// localStorage.setItem('Name', 'Harry');
// localStorage.setItem('Name2', 'Rohan');
// localStorage.setItem('Sabzi',  impArray);       //  this will store array as string
// localStorage.setItem('Sabzi', JSON.stringify(impArray));   //  this will store array as JASON string

// window.localStorage.Name      //  use in console to get localStorage

// ********************************

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');

// ********************************

// Retrieve an item from the local Storage

// let name =  window.localStorage.Name
let name = localStorage.getItem('Name');
// name1 =  localStorage.getItem('Sabzi');    //return a string
name1 = JSON.parse(localStorage.getItem('Sabzi'));  //  return an array
console.log(name1)

// ********************************

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));
// sessionStorage.clear()
/*
    A function is a block of code designed to perform, a particular task/procedure. 
    We invoke "call" the function whenever we want it to do something. 
    However, we need to define what the task the function should do
*/
 
// arguments = values that are sent
// parameters = values that are received

// *************************************

function hello(){
    console.log("hello ")
};

hello();

// *************************************

function greeting(name,age){
    document.write("hello "+name+"<br>");  // <br> for new line
    document.write("you are "+age+" years old")
};


greeting("Nouman",21);

// *************************************


function toCelsius(f){
    return (f-32) * (5/9);
};

function toFarenheit(c){
    return (c * 9/5) + 32;
};

var myTemp = toCelsius(100);
var myTemp = toFarenheit(37.7);

console.log("My temp in C is",myTemp,"degrees");
console.log("My temp in F is",myTemp,"degrees");
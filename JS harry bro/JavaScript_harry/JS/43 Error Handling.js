console.log("This is tutorial 44");
// throw: This is a block of code nested within the try statement and 
//    allows the programmer to write their own error that they want to handle
// finally: This block of code runs once all the other statements have run

// Types of error in try catch block:
// EvalError : error in eval() function
// RangeError: a number "out of range occurred"
// Reference Error
// TypeError
// SyntaxError
// URIError


// Pretend this is coming from a server as response
let a = "Harry bhai";
a = undefined;
if (a != undefined) {
    throw new Error('This is not undefined');
}
else {
    console.log('This is undefined');
}

// ***************

try {
    console.log("We are inside try block");
    functionHarry();
} catch (error) {
    console.log(error)  //  show error
    console.log("Are you okay?");
    console.log(error.name);
    console.log(error.message);

} finally {
    console.log("Finally we will run this ")
}

// ***************

try {
    console.log("This statement works")
    throw new Error('This statement throws an error')
}
catch (error) {
    console.log("Error has been handled")
}
finally {
    console.log("Everything has been handled")
}
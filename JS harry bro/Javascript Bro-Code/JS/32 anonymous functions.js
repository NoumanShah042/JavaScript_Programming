// ********* index.js *********

// anonymous function = 
//              Function without a name. 
//              Often not accessible after  its initial creation.

// benefits =  
//              Doesn't clutter global namespace
//              Usable once
//              Can be passed as arguments

// ****************************
// IIFE = (immediately invoked function expression)
// A JS function that runs as soon as it is defined
// we place it within grouping operator = ( )
// ****************************

(function () {
    document.getElementById("myH1").innerHTML = "hey!";
})();

// ****************************


// setTimeout(function, milliseconds);

setTimeout(function () {
    document.getElementById("myH1").innerHTML = "sup?";
}, 1000);
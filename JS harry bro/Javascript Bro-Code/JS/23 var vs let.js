// ******* index.js *******

// scope = where a variable is accessible

// let = declare variables with a block scoped {}
// var = declare variables with a function scoped () 
// *********
// If we declare variable using var, it is available throughout the program
//  unless it's with-in a function 
// If it is in the function we cannot access it outside of that function
// *********
// Try to declare variables using let keyword
// because if we use var keyword to declare variables this may override the 
// the variable of the global object
// like windows object have variable 'name', and ( var name="Nouman" ) override it.
//  **************


for (let i = 1; i <= 3; i++) {
    console.log(i);
}


// console.log(i);   //  not accessible

//  **************



for (var index = 1; index <= 3; index++) {
    console.log(index);
    var key = 10;
}

console.log(index, key);   //  both  accessible  


//  **************


function doSomething() {
    for (var j = 1; j <= 3; j++) {
        console.log(j);
    }

    console.log("J = "+j);  //  accessible
}
doSomething();
       // console.log(j);   // not accessible
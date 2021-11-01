
// closure =  
//            A function with preserved data.
//            Give you access to an outer function’s scope,
//            from an inner function.

//            State of variables in outer scope are "saved".
//            Variables in outer scope are considered "private".

//     Main benefit of closure is that a closure retain the data or variables 
//        stored within

// **************************

//  we saved the function in variable 

let score = function(){      
    // lexical scope
    
    let points = 0;    // this variable state will be saved
    // console.log("inside lexical scope :",points)

    return function(){
        // console.log("inside inner func :",points)
        points += 1;   //  accesss outer function variable
        return points;
    }
}();

//points += 100; //ERROR
// console.log(score);
console.log(score());
console.log(score());
console.log(score());
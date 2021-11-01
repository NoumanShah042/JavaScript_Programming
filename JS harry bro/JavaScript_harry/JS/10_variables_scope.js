// let / const -----> block level scope.

// var   ----->    function level or global scope.
//                 i.e. if we define var inside a function, we can still use it 
//                       ouside this function because it has global scope


if(1){
    let i =234;
    console.log(i)
}

console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}


console.log(ui("harry"), i)
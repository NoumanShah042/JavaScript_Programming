console.log('this is tut 10');

/*

Function Declaration:

function name(parameters){
   //statements
 }

     
Function Expressions:-

 let variable_name = function(parameters){
  // statements;
} 
*/


// Function Declaration:

function sayHello(){
    console.log("Hello!");
}
sayHello();

// ***** 

function get_Distance(speed, time) {
    let dist = speed * time;
    return dist;
}
val = get_Distance(10,10);
print(val);



// Function Expressions:-   **********************

let add = function(a, b) {
    return a + b;
}
console.log(add(4,3));

//  *******

const mygreet = function(name, thank='Thank You'){
    let msg = `Happy Birthday ${name}  ${thank}!`;
    return msg;

};

let name1 = "Ali";
let val = mygreet(name1, 'Thanks a lot');
console.log(val);

//  *******

const myobj = {
    name: "SkillF",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game())


//  *******

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
});         

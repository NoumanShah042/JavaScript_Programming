// array of functions

function jump() {
    console.log("You jump!");
}

function punch() {
    console.log("You punch!");
}

function kick() {
    console.log("You kick!");
}

function block() {
    console.log("You block!");
}

let actions = [];

actions = [kick, block, jump, punch]


// for (let i = 0; i < actions.length; i++) {
//     actions[i]();
// }

actions.forEach(func => func());

// getting all elements of forEach loop
// actions.forEach((func, index, array1) => {
//     console.log(index, array1);
//     func();
// });
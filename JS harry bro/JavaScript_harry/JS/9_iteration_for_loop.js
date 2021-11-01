// JavaScript has many built-in tools developed specifically for the problem of
//  looping over enumerable data sets, both arrays, and objects, 
// including for…of, for…in, forEach, Object.keys, and object .entries.

// https://medium.com/chingu/looping-over-arrays-and-objects-in-javascript-57e1188c1ba2

messageArray = ["hello", "how are you?",
    "how's the weather",
    "how's the family?",
    "Where do you live?"];

//************************* 

let index = 0;
while (index < messageArray.length) {
    console.log(messageArray[index]);
    index += 1;
}
//************************* 

// loop over the array and operate on each of its elements”
for (let i = 0; i < messageArray.length; i++) {
    console.log(messageArray[i]);
}

// we don’t need to explicitly initialize the variable, calculate the array length, or increment the variable.
// In truth, the counter variable itself is unnecessary.These things may be necessary for the mechanics of 
// executing the loop.They are, however, unnecessary details if we are focusing on higher - level programming.

//************************* 
// To solve precisely this problem, Javascript developed the for..of loop. Let’s rewrite the problem above using it.

for (let message of messageArray) {

    console.log(message, typeof (message));
}

//*************************
// 1
messageArray.forEach(function (message) {
    console.log(message);
});

// 2
messageArray.forEach(message => console.log(message));

// 3
messageArray.forEach((message, index) =>
    console.log(`${index}. ${message}`));

//*************************

// OBJECTS

storeItems = {
    eggs: { price: 3.77, quantity: 30 },
    milk: { price: 2.22, quantity: 23 },
    butter: { price: 2.00, quantity: 22 },
    carrots: { price: 3.00, quantity: 11 },
    beef: { price: 6.18, quantity: 34 },
    chicken: { price: 5.44, quantity: 34 }
};

// for… in
// Amongst the most common and straightforward tools for iterating over objects is for…in.
//  It is the object equivalent of for…of. It simply iterates over an object by property names.  

for (let item in storeItems) {
    //  item will be the key(like "eggs") of type string 
    console.log(`${storeItems[item].quantity} ${item}s each cost ${storeItems[item].price}`);
}


// Object.keys(myObj)
Object.keys(storeItems).forEach(item =>
    console.log(`${storeItems[item].quantity} ${item}s each cost 
    ${storeItems[item].price}`
    ));


//Object.entries(myObj)
Object.entries(storeItems).forEach(item =>
    console.log(`${item[1].quantity} ${item[0]}s each cost
     ${item[1].price}`));

// output
// "30 eggss each cost 3.77"
// "23 milks each cost 2.22"
// "22 butters each cost 2"
// "11 carrotss each cost 3"
// "34 beefs each cost 6.18"
// "34 chickens each cost 5.44"
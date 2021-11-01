console.log("We are at tutorial 9");
// console.log(1)
// console.log(2)
// console.log(3)

// General Loops: for, while, do-while
 
// for(let i=0; i<100;i++){
//     console.log(i);
// }

// let j = 110;
// while (j < 10) {
//   console.log(j + 1);
//   j += 1;
// }

// let k = 0;
// do {
//     if(k===5){
//         k +=1;
//         continue;
//     }
//   console.log(k + 1);
//   k +=1;
// } while (k < 10);

let arr = [2,5,6,4,2,3];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

// arr.forEach(function(element, index, array){
//     console.log(element, index, array);
// });


let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}
 


//  *******

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
});         



console.log('done');         

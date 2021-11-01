// ******* index.js *******

let numbers = [3, 14, 1, 2, 5];
console.log(numbers);

//numbers.sort(); //ASCII character order



//  sort in ascending order
numbers.sort(function (x, y) {
    return x - y;
});


// sort in descending order
// numbers.sort(function(x, y){
//   return y - x;
// });


//  sort in ascending order using arrow function
// numbers.sort((x, y) => x - y);

//  sort in desscending order using arrow function
// numbers.sort((x, y) => y - x);

console.log(numbers);
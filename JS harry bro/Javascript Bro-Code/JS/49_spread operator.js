
// ES6 feature

// spread operator = ...
//                   Expands "spreads" an array or iterable
//                   into many arguments needed for a function.



function sum(a, b, c){
    return a + b + c;
}

let numbers = [1, 2, 3];

console.log(...numbers);  // 1 2 3

console.log(sum(...numbers));  //  6
// spread array into many arguments


// ******************

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Math.max(...numbers2));  // 10



// ***********************************

// spread operator with objects

book = {
	id:1,
	img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
	title: "Our Class is a Family",
	author: "Shannon Olsen",
};


let { id, img, title, author } =  {  ...book };
console.log(id, img, title, author);
// 1 https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg Our Class is a Family Shannon Olsen


let {   img, title, author } = { ...book };
console.log(  img, title, author);
// https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg Our Class is a Family Shannon Olsen



// const a = { ...book };
// console.log(a); 
// {
//   img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
//   title: 'Our Class is a Family',
//   author: 'Shannon Olsen'
// }
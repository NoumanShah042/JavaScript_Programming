console.log('This is tut 11');
let a = window ;
// let a = window.alert ;
// let a = window.alert.name ;
// let a = window.document;
// alert('hello harry');
// a = prompt('This will destroy your computer. Type your name');

// a = confirm('Are you sure you want to delete this page?');
// a = window.innerHeight;
// a = innerWidth;
// a = scrollY;
// a = location.toString();
// a = window.history;


// The Location Object
a = window.location.href  // get the entire URL of the current page.


// location.reload()    //  reload the page   ***

 // Prints complete URL                      //  paste all these in a web inspect to see properties
console.log(window.location.href  );
  
// Prints protocol like http: or https:
console.log(window.location.protocol); 
 
// Prints hostname with port like localhost or localhost:3000
console.log(window.location.host);
  
// Prints hostname like localhost or www.example.com
console.log(window.location.hostname);
 
// Prints port number like 3000
console.log(window.location.port);
  
// Prints pathname like /products/search.php
console.log(window.location.pathname); 
 
// Prints query string like ?q=ipad
console.log(window.location.search);
 
// Prints fragment identifier like #featured
console.log(window.location.hash);


console.log(window.location.toString());  //  file:///D:/Javascript%20Programming/JS%20harry%20bro/JavaScript_harry/index.html


 


//  ************************

// window.location.assign("https://www.google.com/");  //  load another resource from a URL provided as parameter
//  window.location.replace("https://www.google.com/");
//  window.location.href = "https://www.google.com/";

// console.log(a);          



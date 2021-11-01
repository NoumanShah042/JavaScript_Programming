
/*
anchorsdocument.	It will return all <a> elements that have a name attribute
document.baseURI	It will return the absolute base URI of the document
document.body	    It will return the <body> element
document.cookie	    It will return the document's cookie
document.doctype	It will return the document's doctype
document.documentElement	It will return the <html> element
document.documentMode	It will return the mode used by the browser
document.documentURI	It will return the URI of the document
document.embeds 	It will return all HTML <embed> elements
document.forms	    It will return all HTML <form> elements
document.head	    It will return the HTML <head> element
document.images	    It will return all HTML <img> elements
document.implementation	It will return the DOM implementation
document.links	    It will return all HTML <area> and <a> elements that have a href attribute
document.scripts	It will return all HTML <script> elements
document.title	    It will return the <title> element
document.URL	    It will return the complete URL of the document    */



console.log('Welcome to tut 12.js');
// let a = document;
// a = document.all;
// a = document.body;
// a = document.forms[0];

// Array.from(a).forEach(function(element) {
//     console.log(element);
// });

// ***********************

// a = document.links[0];
// use document.images and document.scripts and print the list of images and 
// scripts on an html page


// ***********************

// let a = document.links;
// Array.from(a).forEach(function (element) {
//     console.log(element);
//     console.log("element=");
// });
// console.log(a);

// ***********************

//  find print all images tags 
// let image1=document.images
// Array.from(image1).forEach(function(elements) {
//     console.log(elements);
    
// })

//  ***********************


//  show all  scripts tags on console 

// let image1=document.scripts
// Array.from(image1).forEach(function(elements) {
//     console.log("hello",typeof elements)
//     console.log(elements);
    
// })

//  ***********************


//  find all links which contain a string nouman

// let t = document.links;
// Array.from(t).forEach(function (element) {
//     let m = element.href;
//     if (m.includes("nouman"))
//         console.log(m);
// });

//  ***********************
//  find all links which contain a string python
// let str = "python";
// let links = document.links;
// console.log(links);
// let href;
// Array.from(links).forEach(function(element) {
//   href = element.href;
//   if (href.includes(str)) {
//     console.log(href);
//   }
// });



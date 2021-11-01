console.log('We are at tut 6');
const name1 = 'Nouman';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading</h1>" + "<p> this is My para</p>";

//  these function do not hange my autual string

// console.log(html.length, html);
// html = html.concat(' this', ' str2');
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));
// console.log(html.substring(1,6));
// console.log(html.substring(-4));  // we cannot use -ve value here (give full string)
// console.log(html.slice(0, 4))     //  slice is almost same as substring
// console.log(html.slice(-4))      // give last 4 elements of string (diff from substring)
// console.log(html.split(' '));   // split elements, by char and return all these, in an array
// console.log(html.replace('this', 'it' ));  // replace only first occurrence


// Template Literals  *******
let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name1}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;   // this will show in html document     

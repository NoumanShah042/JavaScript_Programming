/*

Creating Date Objects  ( https://www.w3schools.com/js/js_dates.asp )
Date objects are created with the new Date() constructor.

There are 4 ways to create a new date object:

new Date()     |  set to curent date
new Date(year, month, day, hours, minutes, seconds, milliseconds)  | ordre matters |  we can reduce arguments upto  (year, month)|
new Date(milliseconds)
new Date(date string)

****************************

JavaScript Date Input
There are generally 3 types of JavaScript date input formats:

Type	    Example
 
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"   

****************************

// Get Date Methods

These methods can be used for getting information from a date object:

Method	        Description
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	    Get the month as a number (0-11)
getDate()	    Get the day as a number (1-31)
getHours()	    Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	    Get the time (milliseconds since January 1, 1970)
getDay()	    Get the weekday as a number (0-6)
Date.now()	    Get the time. ECMAScript 5.    

****************************

// Set Date Methods

Set Date methods are used for setting a part of a date:

Method	            Description
setDate()	        Set the day as a number (1-31)
setFullYear()	    Set the year (optionally month and day)
setHours()	        Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	    Set the minutes (0-59)
setMonth()	        Set the month (0-11)
setSeconds()	    Set the seconds (0-59)
setTime()	        Set the time (milliseconds since January 1, 1970)

****************************

sun  mon tues  wed  thurs  fri sat
0     1    2    3     4     5   6

jan  feb  mar  ---   dec
 0    1    2   ---    11


*/
console.log("Welcome to tutorial 24");

let today = new Date();
// console.log(typeof today);

let otherDate = new Date('8-4-2003 04:54:08');  // ('month-day-year hour:minutes:seconds')
// otherDate = new Date('2003-8-4 04:54:08');  //  ('year-month-day hour:minutes:seconds')
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/16/1976');
console.log(otherDate);

 

let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);

otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);


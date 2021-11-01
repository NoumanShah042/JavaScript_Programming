

// Math Object Methods
/*
Method	    Description
abs(x)	    Returns the absolute value of x
acos(x)	    Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	    Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	    Returns the arctangent of x as a numeric value between - PI / 2 and PI / 2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	    Returns the cubic root of x
ceil(x)	    Returns x, rounded upwards to the nearest integer
clz32(x)	Returns the number of leading zeros in a 32 - bit binary representation of x
cos(x)	    Returns the cosine of x(x is in radians)
cosh(x)	    Returns the hyperbolic cosine of x
exp(x)	    Returns the value of Ex
expm1(x)	Returns the value of Ex minus 1
floor(x)	Returns x, rounded downwards to the nearest integer
fround(x)	Returns the nearest(32 - bit single precision) float representation of a number
log(x)	    Returns the natural logarithmof x
log10(x)	Returns the base - 10 logarithm of x
log1p(x)	Returns the natural logarithm of 1 + x
log2(x) 	Returns the base - 2 logarithm of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sign(x)	    Returns the sign of a number(checks whether it is positive, negative or zero)
sin(x)	    Returns the sine of x(x is in radians)
sinh(x)	    Returns the hyperbolic sine of x
sqrt(x)	    Returns the square root of x
tan(x)	    Returns the tangent of an angle
tanh(x)	    Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number(x)

 */
console.log("Welcome to tutorial number 23");
let x = 3;
let y = 6;
let z;
z = x + y;
z = x - y;
z = x * y;
z = x / y;

// Exploring the Math object
z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(5.4);
z = Math.ceil(5.3);
z = Math.floor(-5.3);
z = Math.abs(5);
z = Math.sqrt(64);
z = Math.pow(2, 3);
z = Math.min(2, 3, 34, 234, 2342, 34);
z = Math.max(2, 3, 34, 234, 34);

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
};


function radToDeg(rad) {
    return rad / (Math.PI / 180);
};

// *****************************************

//  Random number
//  Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)

z = Math.random();
z = 100 * Math.random()
z = Math.ceil(50 + (100 - 50) * Math.random())
// a = (0, 1)
// a100 = a*100 = (0, 100)
// a10_100 = 10+a*(100 - 10)

// console.log(z);

// *****************************************

Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10
Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99

Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100


// This JavaScript function always returns a random number between min (included) and max (excluded):
function getRndInteger_1(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let index = 0; index < 500; index++) {
    console.log(getRndInteger_1(50, 101))
}

// ***********

// This JavaScript function always returns a random number between min and max (both included)
function getRndInteger_2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// for (let index = 0; index < 100; index++) {
//     console.log(getRndInteger_2(50,101))
//  }
// *****************************************


//  heloo comment
/*
multiline comments

*/

//document.write("external js");
//document.getElementById('th').innerHTML="this is a para";

//var a1=23;
//var a2=5;
//var a3="this is string";

//document.write(a1+a2,"<br>"); //  write in document
//document.write(a1,a2,"<br>"); // comma concatenate things
//document.write(a1+a3);
//console.log("this is console");
//console.log is used for debugging purposes

//var age=prompt("what is your age");
//document.write("your age is ",age);
//alert("your age is ",age);

/*
document.write("5 + 9 = ", 5+9,"<br>");
document.write("5 - 9 = ", 5-9,"<br>");
document.write("5 * 9 = ", 5*9,"<br>");
document.write("5 / 9 = ", 5/9,"<br>");
document.write("5 % 9 = ", 5%9,"<br>");

*/

/*
var foodcost = prompt("What is the total amount");
var no = prompt("No of people");
document.write("The total cost of food was ", foodcost, "<br>");
document.write("Each one of you has to pay ", (foodcost/no).toFixed(2),"<br>");
*/
/*
document.write("2^2 = ", Math.pow(2,2) ,"<br>");
document.write("Math.abs(-34) = ", Math.abs(-34) ,"<br>");
document.write("sqrt(36) = ", Math.sqrt(36),"<br>");
*/

/*
//String Functions

var str1 = "hello world!";
document.write(str1.length,"<br>" );  
document.write(str1.indexOf("lo"),"<br>" );    // index start with 0
document.write(str1.toLowerCase(),"<br>" );
document.write(str1.slice(2,4),"<br>" ); //  show 2 and 3 index value i.e ll

*/

//Relational Operators : ==, !=, <, >, >=
//Logical Operators : &&, || , !

/*
var age = prompt("What is your age");

if (age<20 && age>=10)
{

	document.write("You go to the school");
}

else if(age<10 && age>3)
{
	document.write("You also go to the school");
}

else
{
	document.write("Do whatever you want");
}

*/


// make functions
/*
var x = myFunction(4, 3);   // Function is called, return value will end up in x
document.write("function return = " , x);


function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
*/



// switch statements
/*
var age = prompt("What is your age?");
switch(age)
{

	case "22":
		document.write("22 years old.. okay");
		break;

	case "21":
		document.write("21 years old.. okay");
		break;
		

	case "12":
		document.write("12 years old.. okay");
		break;
		

	default:
		document.write("default years old.. okay");
		break;			

}

*/

/*
var i =0;
while(i<100)
{
	document.write(i,"<br>");
	i++;
}
*/

/*
var i =101;
do
{
	document.write(i,"<br>");
	i++;
} while(i<=100)
*/


/*
for (var i = 0; i < 2; i++) {
	document.write(i,"<br>");
}

*/


/*
var books = ["Harry potter", "ncert", "ctci", 65];

for (var i = 0; i < books.length; i++) {
	document.write(books[i],"<br>");
}

*/


function nomi(){

	document.write("We are calling nomi");
	console.log("We have executed nomi function");


}

nomi();
var n=document.getElementsByClassName("lister-item-header");
for( i=0;i<n.length;i++)
{
console.log(n[i].innerText);


}



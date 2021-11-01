//  run javascript file without cmd line arguments using
// node test.js

// function hello(n) {
// 	let a = 24;
// 	console.log(a);

// 	for (let index = 0; index < n; index++) {
// 		console.log("hello World");
// 		// process.stdout.write("hello world\n");
// 	}
// }

// hello(5);

// ***********************
// run javascript file with cmd line arguments using
// node test.js 10

function hello(n) {
	let a = 24;
	console.log(a);

	for (let index = 0; index < n; index++) {
		console.log("hello World");
		// process.stdout.write("hello world\n");
	}
}

console.log(process.argv); //  return array of command line arguments
const args = process.argv.slice(2); //  remove first two arguments
hello(args[0]);

/*

node test.js 2
process.argv  returns an array for above command =

[
	'C:\\Program Files\\nodejs\\node.exe',
	'C:\\Users\\Syed Numan Rehman\\Desktop\\testing\\6_functions.js',
	'2'
]

*/

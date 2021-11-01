console.log("Ajax tutorial in one video");
/*
Asynchronous JavaScript and XML
AJAX = Asynchronous JavaScript and XML. AJAX is a technique for creating fast and dynamic web pages. AJAX allows
 web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. 
This means that it is possible to update parts of a web page, without reloading the whole page.
*/

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
	console.log("You have clicked the fetchBtn");

	// Instantiate an xhr object
	const xhr = new XMLHttpRequest();

	// Open the object
	xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
	// xhr.open('GET', 'cmd.txt', true);

	// What to do on progress (optional)
	xhr.onprogress = function () {
		console.log("On progress");
	};

	xhr.onreadystatechange = function () {
		console.log("ready state is ", xhr.readyState);
		console.log("status ", xhr.status);
	};

	// What to do when response is ready
	xhr.onload = function () {
		if (this.status === 200) {
			console.log(this.responseText);
		} else {
			console.log("Some error occured");
		}
	};

	// send the get  request
	xhr.send();

	console.log("We are done!");
}

let fetchBtn_2 = document.getElementById("fetchBtn_2");
fetchBtn_2.addEventListener("click", buttonClickHandler_2);

function buttonClickHandler_2() {
	console.log("You have clicked the fetchBtn_2");

	// Instantiate an xhr object
	const xhr = new XMLHttpRequest();

	// USE THIS FOR POST REQUEST
	xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
	xhr.getResponseHeader("Content-type", "application/json");

	// What to do on progress (optional)
	xhr.onprogress = function () {
		console.log("On progress");
	};

	// xhr.onreadystatechange = function () {
	//     console.log('ready state is ', xhr.readyState);

	// }

	// What to do when response is ready
	xhr.onload = function () {
		if (this.status === 200) {
			console.log(this.responseText);
		} else {
			console.log("Some error occured");
		}
	};

	// send the post request
	params = `{"name":"test34sad545","salary":"123","age":"23"}`;
	xhr.send(params);

	console.log("We are done!");
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
	console.log("You have clicked the pop handler");

	// Instantiate an xhr object
	const xhr = new XMLHttpRequest();

	// Open the object
	xhr.open("GET", "https://api.github.com/users", true);

	// What to do when response is ready
	xhr.onload = function () {
		if (this.status === 200) {
			let obj = JSON.parse(this.responseText);
			console.log(obj);
			let list = document.getElementById("list");
			str = "";
			for (key in obj) {
				str += `<li>${obj[key].login} </li>`;
			}
			list.innerHTML = str;
		} else {
			console.log("Some error occured");
		}
	};

	// send the request
	xhr.send();
	console.log("We are done fetching employees!");
}

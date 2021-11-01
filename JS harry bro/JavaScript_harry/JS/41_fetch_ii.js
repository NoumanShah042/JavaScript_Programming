// simple fetch api

// function getData() {
// 	// url = "https://api.github.com/users";  //  get 30 users
// 	url = "https://api.github.com/users/QuincyLarson"; // get one user with login: "QuincyLarson"

// 	fetch(url)
// 		.then((response) => response.json()) //  getting promise
// 		.then((user) => console.log(user))
// 		.catch((error) => console.log(error)); //  can get error from both promises

// }

// **********************************
//  handling 404 ( user not found ) error

function getData() {
	url = "https://api.github.com/users/QuincyLarson"; // get valid user 
	url = "https://api.github.com/users/QuincyLarson042"; // invalid user 

	fetch(url)
		.then((resp) => {
            // if status is between 200 and 300 , then everything is correct
			if (resp.status >= 200 && resp.status <= 299) {
				return resp.json();
			} else {
				console.log("Error : User Not found");
				throw new Error(resp.statusText);
			}
		})
		.then((user) => {
			const { login } = user; // just destructuring object
			console.log("User:", login);
		})
		.catch((error) => console.log(error));
}

getData();

// the catch at the end can just handle network error, it will not catch 404 error ( user not found error)
// so you need to handle it manually by checkig the status of the response

//  see file
// D:\React Programming\react-advanced-2020-master\src\tutorial\3-conditional-rendering\final\1-multiple-returns.js

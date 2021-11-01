console.log('This is my tutorial 42');

// fetch return a promise
// fetch is asynchronous run in background


// Button with id myBtn
// let myBtn = document.getElementById("myBtn");

// div with id content 
// let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url = "harry.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }


function getData() {
    console.log("Started getData")
    url = "https://api.github.com/users";

    // fetch return a promise
    // fetch is asynchronous run in background
    fetch(url).then((response) => {
        console.log("Inside first then",response)
        return response.json();    // also return promise so we use another .then
        // if we use text it will show plain text without parse to jason
    }).then((data) => {
        console.log("Inside second then")
        console.log(data);
    })
}


function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create";  // url -> where to post request
    data = '{"name":"nouman","salary":"123","age":"23"}'
    // if data is js object string no need to json.stringfy()
    // if our data is js object we will use  json.stringfy()
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data   //  as data is jason string , no need of json.stringfy()
    }
    fetch(url, params)
        .then(response => response.json()) //  no need of return in arrow function
        .then(data => console.log(data))
}

console.log("Before running getData")
getData()
console.log("After running getData")
// postData()
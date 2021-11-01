console.log("This is tutorial 43");


// async keyword with a function -> represent that the function is asynchronous.
// The async function always returns a promise. we can use the chaining method .then().catch()

// The await keyword is used to wait for the asynchronous operation. This keyword is used inside
//  the async function.Here is the syntax to use await is:

// let result = await promise;       

// The await pauses the async function until the promise returns a result value
// ( until the promise is resolved or rejected )


// async -> whatever return is a promise  so we can use ---  func().then(resolve).catch(reject)
// await -> tell that go to other task , i am still doing my task
//          await do its work in background( asnchronously ) 

//************************

// async function func() {
//     console.log('Async/Await tutorial.');
//     return 1; // or    return  Promise.resolve(1)
// }
// console.log("start")
// func().then(function (res) {   // as aync return promise, at resolve method inside .then will execute 
//     console.log(res)
// });
// console.log("end")

//************************

async function func1() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("Done with Async/Await!")  
            // reject("Done with Async/Await!")    
        }, 1000)

    });
    //  await pauses the async function until the promise returns a result value
    // let result = await promise.then(data => console.log("he",data)).catch(data => console.log("she",data)); 
    let result = await promise     // await can only return resolve value
    console.log("result : ", result);
}
console.log("start");
func1()
console.log("end");

//************************

// async function harry() {
//     console.log('Inside harry function');
//     const response = await fetch('https://api.github.com/users');  //  fetch return a promise
//     console.log('before response');
//     const users = await response.json();
//     console.log('users resolved')

//     return users;
//     // at return the promise of async has resolved and
//     // the  statement that get response (.then ) will execute

// }

// console.log("Before calling harry")
// let a = harry();
// console.log("After calling harry")
// console.log(a);
// a.then(data => console.log(data))
// //  as it is pending, this will execute at last
// //  it will execute when async function return something
// console.log("Last line of this js file")


// setTimeout

function myMessage(str) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`${str}`);
    }, 5000);
}

myMessage("Hello")

// There is a built -in method called “setTimeout”, which calls a function after 
// a given period of time.So here, the myMessage function is being called after 5 seconds.
// (1 second = 1000 milliseconds).In other words, the myMessage function is being called after
// something happened(after 5 seconds passed for this example),
// but not before.So, the myMessage function is an example of a callback function.
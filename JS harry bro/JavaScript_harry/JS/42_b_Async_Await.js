function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`making request to ${location}`)
        if (location === 'Google') {
            resolve('Google Says hi')
        }
        else {
            reject('we can only talk to google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
			console.log("Processing Response");
			resolve(`Extra Info + ${response}`); //  Extra Info + Google Says hi
			// reject('error Occurred')
		})
}

// makeRequest("Google")
// 	.then((response) => {
// 		// console.log("response:", response); //response: Google Says hi

// 		console.log("Response Received");
// 		return processRequest(response);
// 	})
// 	.then((processedResponse) => {
// 		//  this .then to get promise of processRequest()
// 		console.log(processedResponse);
// 	})
// 	.catch((err) => {
// 		//  this can take rejects from both promises
// 		console.log("err: ", err);
// 	});

// ************************************

// this is the async/await version of above code which works the same.
// async/await make it easy to write promises and work with promises. 
// One thing to do is to wrap the code inside async function.
// use await keyword befor asynchronous operation 
//    otherwise it will return the promise and not the result of that promise. 

async function doWork() {
    try {
        const response = await makeRequest('Google')   //  await can only return resolved output
        console.log("Response Received: ", response );
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err) {          //  this can take rejects from both promises   
        console.log("error: ", err)
    }
}

doWork()


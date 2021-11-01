console.log("This is tutorial 37");

// callback   = A callback is a function that is executed after another function has finished executing

// Callbacks are used to make sure that a function is not going to execute before a task is completed 
// but will execute right after the task has completed. It helps us develop asynchronous JavaScript code
//  and keeps us safe from future errors.

// https://codewithharry.com/videos/javascript-tutorials-in-hindi-37

// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student, callback) { //  enroll krne k bad getStudents(callback) call kre
    setTimeout(function () {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 5000);
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 1000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent, getStudents);
// getStudents();




//  ***************************************************
//  ***************************************************
// another example

// function addition(x, y, callback) {
//     setTimeout(() => {
//         document.write(`The sum of ${x} and ${y} is ${x + y}.`);
//         callback();
//     }, 5000);
// }
// // display() function is called just after the ending of addition() function
// function display() {
//     document.write('Numbers added!');
// }
// // Calling addition() function
// addition(5, 5, display);

// here are the two functions – addition(x, y, callback) and display(). Here addition() is called after 5 
// seconds with the display() function, i.e. passed in as the third argument to the addition function along 
// with two numbers x and y. As a result, the addition() is invoked with 1, 2 and the display() which is the
//  callback. The addition() prints the addition of the two numbers(x+y), and as soon as that is done, the callback
//   function is executed. 
console.log('This is tut 18');
//  run on index2.html


let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
// btn.addEventListener('mousedown', func3);
// btn.addEventListener('dblclick', func2);

function func1(e) {
    console.log("you click Button Click", e);
    e.preventDefault();
}

function func2(e) {
    console.log("Thanks its a double click", e);
    e.preventDefault(); 
    //  by default page reload everry time we submit form or press button
    //  to prevent it from reloading  we use e.preventDefault(); 

}

function func3(e) {
    console.log("Thanks its a mouse down ", e);
    e.preventDefault();
}

//*****************************************************
//     mouse_enter   and   mouse_leave event  ( on first element of 'no' class)
document.querySelector('.no').addEventListener('mouseenter', function () {

    console.log('You entered no')
})

document.querySelector('.no').addEventListener('mouseleave', function () {
    console.log('You exited no')
})

//*****************************************************

document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})

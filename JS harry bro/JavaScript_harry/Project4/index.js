console.log("This is project 4");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;

// console.log(name, email, phone);
name.addEventListener('blur', () => {
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
    //  first char must be an alphabet
    //  then there may be number or alphabet between 2 - 10
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');  // add class in 
        validUser = false;

    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    //           /^(accept _ , - , . , ... )@( )\.( )$/   
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);

    let failure = document.getElementById('failure');
    let success = document.getElementById('success');

    // Submit your form here
    if (validEmail && validUser && validPhone) {

        console.log('Phone, email and user are valid. Submitting the form');
        success.innerHTML = `<div   class="alert show alert-success alert-dismissible fade" role="alert">
                                <strong>Success!</strong> Your travel request has been successfully submitted
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>`
        setTimeout(function () {

            success.innerHTML = ""
        }, 3000);

    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        failure.innerHTML = `<div  class="alert show alert-danger alert-dismissible fade" role="alert">
                                    <strong>Error!</strong> Your travel request has not been sent due to errors
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                            </div>`

        setTimeout(function () {
            failure.innerHTML = ""
        }, 3000);
    }
})

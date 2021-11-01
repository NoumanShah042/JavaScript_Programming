 
// filter() = Returns the elements of an array
//            that meets a condition specified
//            in a function. 

let students = [16, 17, 18, 19, 20];

function checkAge(age, index, array){

    if(age >= 18){
        return true;   //  return true or false
        // return age;
    }
}

let adultStudents = students.filter(checkAge);
// let adultStudents = students.map(checkAge);  // not good to use here

console.log(adultStudents);
// Why use getters & setters?

// A way to get/set the properties of an object
// Secures better data quality
// Does extra things behind-the-scenes



// let user = {

//     firstName: "",
//     lastName: "",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };

// user.firstName="Syed";
// user.lastName="Nouman"
// console.log(user.fullName()); 



let user = {

    firstName: "",
    lastName: "",

    set first(value) {
        // we can format here
        this.firstName = value.toUpperCase();
    },
      
    set last(value) {
        this.lastName = value.toUpperCase();
    },

    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    get getFirstName() {
        return this.firstName  ;
    },
    get getLastName() {
        return this.lastName  ;
    }
};
 
user.first = "Syed";
user.last = "Nouman"

console.log(user.fullName);
console.log(user.getFirstName);
console.log(user.getLastName);
 

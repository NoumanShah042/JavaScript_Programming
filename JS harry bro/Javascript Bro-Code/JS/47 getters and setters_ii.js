// Why use getters & setters?

// A way to get/set the properties of an object
// Secures better data quality
// Does extra things behind-the-scenes
 

class User {
 
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    set first(value){
        this.firstName = value.toUpperCase();
    }
    set last(value){
        this.lastName = value.toUpperCase();
    }
    get fullName() {
      return this.firstName+" "+this.lastName;
    }
    get getFirstName() {
        return this.firstName  ;
    }
    get getLastName() {
        return this.lastName  ;
    }
};

let user1 = new User("Syed", "Nouman");
let user2 = new User("Syed", "Farhan");

console.log(user1.fullName);  
console.log(user1.getFirstName);
console.log(user1.getLastName);


console.log(user2.fullName);
console.log(user2.getFirstName);
console.log(user2.getLastName);




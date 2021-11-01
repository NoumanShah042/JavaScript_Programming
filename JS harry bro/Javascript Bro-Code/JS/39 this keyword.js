// this = A reference to the object that
//        we're currently working with

class Car {

    constructor(make, model, year, color) {
        this.make = make;  //  if car1 is using the constructor replace("this" with "car1")
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        //  if car1 is driving replace("this" with "car1")
        console.log("You drive the", this.model);
    }
    brake() {
        console.log("You step on the", this.model + "'s brakes!");
    }
    whatIsThis() {
        return this;
    }
}

let car1 = new Car("Ford", "Mustang", 2022, "red");
let car2 = new Car("Chevy", "Corvette", 2021, "blue");

// console.log(car1.whatIsThis());
// console.log(car1);

// car1.drive();
// car2.brake();

console.log(this);  //  reference to the global window object that we are currently working with
// static = a method or property that belongs to a class
//               and not any one object

class Car {

    static numberOfCars = 0;

    static beginRace() {
        console.log("The race has begun!");
    }

    constructor(model) {
        this.model = model;
        Car.numberOfCars += 1;
    }
}

let car1 = new Car("Mustang");
let car2 = new Car("Corvette");
let car3 = new Car("Challenger");

console.log(Car.numberOfCars);
Car.beginRace();

// console.log(car3.numberOfCars);  //  undefined
// car3.beginRace();  // Uncaught TypeError: car3.beginRace is not a function


console.log(Math.PI )  // static property of Math class
console.log(Math.sqrt(64) )  // static method of Math class
                            //  we don't need Math class object
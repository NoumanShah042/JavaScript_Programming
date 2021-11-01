console.log("This is tut 27");

// Object Literal for creating objects
// let car = {
//   name: "Maruti 800",
//   topSpeed: 89,
//   run: function() {
//     console.log(this.name+" car is running");
//   }
// };

// console.log(car.name);
// console.log(car.topSpeed);
// car.run();

// ************************

// we have already seen constructors like these:
// new Date();

// ************************
// Creating a constructor function for cars 
function GeneralCar(givenName, givenSpeed) {

    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} Is Running`);
    };
    this.analyze = function () {
        console.log(
             
            `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
        );
    };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Marutu Alto", 80);
car3 = new GeneralCar("Mercedes", 200);

console.log(car1.name)
console.log(car1.topSpeed)
console.log(car1.run())
console.log(car1.analyze())


// console.log(car1);
// console.log(car2);
// console.log(car3);


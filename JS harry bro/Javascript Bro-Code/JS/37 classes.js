//  class = A "blueprint" for creating objects.
//               Define properties and/or methods.

class Car{

  drive(){
    console.log("You drive the car!");
  }
  brake(){
    console.log("You step on the brakes!");
  }
}

let car1 = new Car();
let car2 = new Car();

car1.drive();
car2.brake();
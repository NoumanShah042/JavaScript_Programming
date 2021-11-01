
// Objects as arguments

class Car {

    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
}

function changeColor(car, newColor) {

    car.color = newColor;
}

let car1 = new Car("Corvette", "blue");
let car2 = new Car("Mustang", "red");

changeColor(car1, "purple");
changeColor(car2, "pink");

console.log(car1.model, car1.color);
console.log(car2.model, car2.color);
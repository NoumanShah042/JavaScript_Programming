// array of objects

class Car {

    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
    drive() {
        console.log("You drive the", this.model);
    }
}

let garage = [];

let car1 = new Car("Corvette", "blue");
let car2 = new Car("Mustang", "red");
let car3 = new Car("Lambo", "yellow");

garage = [car1, car2, car3];

//console.log(garage[0]);
//console.log(garage[0].model);
//console.log(garage[1].model);
//console.log(garage[2].model);

for (let i = 0; i < garage.length; i++) {

    console.log(garage[i].model);
    garage[i].drive();
}



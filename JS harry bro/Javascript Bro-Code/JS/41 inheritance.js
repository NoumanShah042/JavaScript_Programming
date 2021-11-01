// inheritance = Useful for code reusability. 
//                         Reuse properties and methods of an existing class.
//                         Children classes inherit from parent classes.

class Animal {

    constructor() {
        this.alive = true;
    }
    eat() {
        console.log("This creature is eating");
    }
}

class Rabbit extends Animal {

    run() {
        console.log("This rabbit is running");
    }
}
class Fish extends Animal {

    swim() {
        console.log("This fish is swimming");
    }
}
class Hawk extends Animal {

    fly() {
        console.log("This hawk is flying");
    }
}

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

console.log(rabbit.alive);
console.log(fish.alive);
console.log(hawk.alive);

rabbit.eat();
fish.eat();
hawk.eat();

rabbit.run();
fish.swim();
hawk.fly();
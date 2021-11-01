console.log("This is tutorial 28");

// Object literal : Object.prototype
let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "Mars"
}

//  do not change Object.prototype (not good practice )
// Object.prototype.getName = function (){
//     return this.name;
// }

// **********************************************

// Object constructor  ()   
function Obj(givenName){
    this.name = givenName;
    // this.nouman ="nouman";
}

Obj.prototype.getName = function (){
    // this.nouman="nomi";
    return this.name;

}

Obj.prototype.setName = function (newName){
  this.name = newName;
}

let obj2 = new Obj("Nouman");
console.log(obj2);
obj2.setName("Farhan")
console.log(obj2); 
console.log(obj2.getName()); 
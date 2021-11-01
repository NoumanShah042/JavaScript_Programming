// https://javascript.info/symbol

let user2 = { name: "John" };

// Our script uses "id" property
user2.id = "Our id value";

// ...Another script also wants "id" for its purposes...
user2.id = "Their id value"

// Boom! overwritten by another script!
console.log(user2);  // {name: "John", id: "Their id value"}

// *******************
// solution

let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123   // do not write as "id": 123
  // That’s because we need the value from the variable id as the key, not the string “id”.
};

user.id = "Our id value";  //   Another script also wants "id" for its purposes...

console.log(user);  // {name: "John", id: "Our id value", Symbol(id): 123}
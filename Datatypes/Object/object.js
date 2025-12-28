// An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

let person = {
  name: "Vítor",
  age: 22
}

// An empty object (“empty cabinet”) can be created using one of two syntaxes:

object1 = new Object(); // "object constructor" syntax
object2 = {};  // "object literal" syntax

// get property values of the object:
console.log(`Hi Laura! Nice to meet you, I'm ${person.name} and I'm ${person.age} years old.\n`)

// The value can be of any type. Let’s add a boolean one:

person.isInLove = true;

// To remove a property, we can use the delete operator:

delete person.age;

// We can also use multiword property names, but then they must be quoted:

person = {
  "likes you": true  // multiword property name must be quoted
};

console.log(`I have to say something you know? You asked if I really like you... And I was think about it and the anwser is ${person["likes you"]}.\n`);

// For instance, a number 0 becomes a string "0" when used as a property key:

let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
console.log(obj["0"]);
console.log(obj[0]);

// To walk over all keys of an object, there exists a special form of the loop: for..in.

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

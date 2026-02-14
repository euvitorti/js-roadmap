// ## 📌 Type Casting in JavaScript

// **Type casting** is the **explicit conversion** of a value from one data type to another.

// JavaScript is **dynamically typed**, so values can change type automatically (implicit coercion).
// When we force the conversion ourselves, we call it **explicit type casting**.

String(value)
Number(value)
Boolean(value)

// These functions make the conversion ** predictable and intentional **, which is why they are preferred in production code.


// ## 🔎 Boolean Conversion(`Boolean()`)

// Used to check whether a value is ** truthy ** or ** falsy **.

console.log(Boolean("0"))  // true
console.log(Boolean("1"))  // true
console.log(Boolean(""))   // false
console.log(Boolean(" "))  // true

// JavaScript does ** not ** evaluate the content of a string — only whether it is empty.

// ### Falsy values(only these become`false`):

// ```
// false
// 0
// ""
// null
// undefined
// NaN
// ```

// Everything else is`true`.

// ✅ ** Common use case: validation **


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "brown",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

if (!Boolean(person.firstName)) {
    throw new Error("Name is required")
}

// ## 🔎 Number Conversion(`Number()`)

// Converts a value into a numeric type.

console.log(Number("10"))     // 10
console.log(Number("10.5"))   // 10.5
console.log(Number(""))       // 0
console.log(Number("abc"))    // NaN

// If conversion fails, JavaScript returns`NaN`(* Not a Number *).

console.log(Number.isNaN(Number("abc"))) // true

// The `/` operator already forces numeric conversion:

console.log("2" / "2") // 1

// ## 🔎 String Conversion(`String()`)

// Turns any value into text.

console.log(String(123))       // "123"
console.log(String(true))      // "true"
console.log(String(null))      // "null"

// ## ⚠️ Explicit vs Implicit Conversion

// JavaScript sometimes converts types automatically(coercion):

console.log("5" + 1)  // "51"  (string concatenation)
console.log("5" - 1)  // 4     (numeric conversion)

// This behavior can cause hidden bugs.

// 👉 Best practice: ** always cast explicitly when handling external data.**

// ## 📌 `Number()` vs`parseInt()`

// They are not the same:
console.log()
console.log(Number("10px"))   // NaN
console.log(parseInt("10px")) // 10

//     | Use Case | Method |
// | ---------------------- | ------------ |
// | Strict conversion | `Number()` |
// | Extract numeric prefix | `parseInt()` |


// ## 🧠 Where Type Casting Is Commonly Used

// * Handling ** API responses **
// * Processing ** form inputs ** (always strings)
// * Validating ** query parameters **
// * Preparing data for ** databases **
// * Avoiding ** logic bypass bugs **

// ## ✔ Key Takeaway
// Type casting in JavaScript is about ** control and predictability **.
// This prevents unexpected behavior and makes your code safer and easier to reason about.

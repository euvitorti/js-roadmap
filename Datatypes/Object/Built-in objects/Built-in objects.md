# Built-in objects

## Introduction

Imagine you just bought a new smartphone. It comes with factory-installed apps like a calculator, a clock, and a photo gallery. You didn’t have to program these apps yourself; they are already there to make your life easier. In JavaScript, Built-in Objects are exactly that: tools that are already part of the language, ready for you to use so you don't have to "reinvent the wheel."

## Concept

Built-in Objects are standard objects provided by JavaScript (ECMAScript) by default. They are available globally in any environment where JS runs (like a web browser or Node.js). Think of them as "blueprints" or templates that allow you to manipulate data or perform complex operations without writing everything from scratch.

## Development (How they work & Examples)

These objects are usually categorized based on what they do. Here are the most common ones:

- Data Objects: Used to handle text, numbers, and lists.
- String: For text manipulation.
- Number: For numeric operations.
- Array: For managing lists of items.
- Utility Objects: Used for calculations or time.
- Math: For mathematical functions (PI, rounding, square roots).
- Date: For working with days, months, and years.
- Control/Logic Objects:
  - JSON: For converting data between a server and a client.
  - Error: For handling problems within the code.

### Practical Example

Without built-in objects, calculating a square root or formatting a date would require hundreds of lines of logic. With them, it's simple:

```javascript
// Using the Math built-in object to find a square root
let number = 49;
let result = Math.sqrt(number);

console.log(result); // Output: 7

// Using the Date built-in object to get the current year
let today = new Date();
console.log(today.getFullYear());
```

## Why use them?

- Efficiency: You write much less code. Instead of creating a logic to validate a date, you simply use the Date object.
- Performance: Because they are native to the language, these objects are highly optimized by browsers to run as fast as possible.
- Standardization: Every JavaScript developer in the world uses these same objects, making your code easier for others to understand.

---

### Conclusion

Built-in Objects are the foundation of JavaScript. They provide the basic infrastructure to handle information, from simple strings to advanced mathematical calculations. Mastering them is the first step toward moving beyond the basics and building real, efficient applications.

> To learn more: [Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

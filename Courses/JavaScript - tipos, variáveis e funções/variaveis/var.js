// ===========================
// 📌 Variable Declarations in JavaScript: var, let, const
// ===========================

// === var ===
// Declares a variable with *function scope* (or global if outside a function)
// Can be re-declared and updated
var heightVar = 3;
var widthVar = 5;

// No 'var', 'let' or 'const' here: becomes a global variable (not recommended)
area = heightVar * widthVar;
console.log(`📏 Area using var: ${area}`);  // Outputs: 15

// === let ===
// Declares a block-scoped variable (recommended for most cases)
let heightLet = 7;
let widthLet = 4;

let areaLet = heightLet * widthLet;
console.log(`📐 Area using let: ${areaLet}`);  // Outputs: 28

// === const ===
// Must be initialized immediately, cannot be reassigned
// const message; // ❌ This throws an error: Missing initializer in const declaration

// === Block Scope Example ===
if (area === 15) {
    // This variable only exists *inside* the if block
    let message = `✅ The area using var is exactly: ${area}.\n`;
    console.log(message);
}

// ❌ This will cause ReferenceError because 'message' is block-scoped
// console.log(message); // Uncommenting this line will break the code

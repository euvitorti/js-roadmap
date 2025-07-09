// ===========================
// 📌 Type: number
// ===========================
// In JavaScript, both integers (e.g., 22) and floating-point numbers (e.g., 22.5) are of type "number"

// Declaring whole numbers (integers)
const ageAtBirth = 22;
const currentYear = 2025;

// Subtracting values
const birthYear = currentYear - ageAtBirth;

// Using template literals (backticks) to embed values in a string
const birthMessage = `📅 I was born in ${birthYear}. 😊`;
console.log(birthMessage);  // Outputs: I was born in 2003. 😊 (if ageAtBirth is 22)

// Working with floating-point numbers (decimals)
console.log(`✅ Example with decimal (0.5):`, 20 + 0.5);   // 20.5
console.log(`✅ Example with shorthand decimal (.5):`, 20 + .5); // 20.5

// NaN (Not a Number)
// Occurs when doing math with incompatible types
console.log(`❌ Invalid operation result:`, "Alura" * 5);  // Outputs: NaN

// ===========================
// 📌 Type: string
// ===========================
// Strings can be defined with "", '', or `` (backticks)
const greeting = "Hi! I'm Vítor.";
console.log(greeting);

// Strings that *look like* numbers are still strings
const numericString = '12345';
console.log(`🔠 This is a string, not a number:`, numericString);

// String concatenation (joining strings)
const fullGreeting = greeting + ' ' + birthMessage;
console.log(fullGreeting);  // Outputs both strings combined

// ===========================
// 📌 Type: boolean
// ===========================
// Booleans represent true or false
// Comparison operators: != (not equal), == (equal)

if (ageAtBirth !== currentYear) {
    console.log("✅ The numbers are different: true");
}

console.log(`Is ageAtBirth equal to currentYear?`, ageAtBirth == currentYear);  // false
console.log(`Is 5 equal to 5?`, 5 == 5);  // true

// ===========================
// ⚠️ Why understanding types is important
// ===========================
// JavaScript uses dynamic typing:
// - The type of each variable is determined at runtime
// - You can accidentally mix types (e.g., number + string)
// - That may cause bugs or unexpected behavior

// Always be aware of:
// - What type a variable holds
// - What type a function or operation expects
// - Use tools like typeof to debug if needed

// In older JavaScript, numbers starting with "0" (e.g., 012) were treated as octal (base 8).
// However, this syntax is **deprecated** and throws an error in strict mode ('use strict').

// The modern way to define octal literals is by prefixing the number with "0o".
console.log(0o12 + 2); // 10 (octal) + 2 = 12
console.log(0o12); // 10 (decimal equivalent of octal 12)
console.log(0o237); // 159 (decimal equivalent of octal 237)
console.log(0o4527); // 2391 (decimal equivalent of octal 4527)

// If a digit outside the octal range (0-7) is used, it is **treated as a decimal number**.
// console.log(0o18); // Invalid octal (8 is not valid in octal), but interpreted as decimal 18.

// Using `parseInt()` for base conversion
console.log(parseInt(0o12)); // 10 (parseInt automatically converts the octal to decimal)
console.log(parseInt(12, 8)); // 10 (explicitly converting decimal 12 to octal representation)
console.log(parseInt('06565')); // 6565 (leading zeros don't mean octal in string form)

// Converting a decimal number to a string representation in a different radix (base)
const num = 123;
console.log(num.toString(8)); // "173" (123 in decimal is 173 in octal)

// Function to convert an array of digits from a specific radix (base) to decimal
console.log(digitsToNumber([7, 3, 2], 8)); // Expected output: 7*64 + 3*8 + 2*1 = 7*8^2 + 3*8^1 + 2*8^0 = 474

function digitsToNumber(digits, radix = 10) {
    // Converts an array of digits in the given radix to its decimal equivalent
    return digits.reduce((acc, curr) => acc * radix + curr, 0);
}


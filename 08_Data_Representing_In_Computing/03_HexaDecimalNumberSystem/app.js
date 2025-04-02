// Hexadecimal numbers are prefixed with "0x" in JavaScript.
// This prints the decimal equivalent of the hexadecimal number 0x843.
console.log(0x843); // Output: 2115 (decimal equivalent of 0x843)

// Convert a decimal number to a hexadecimal string representation.
const a = 2115; // Decimal number
console.log(a.toString(16)); // Output: "843" (converts 2115 to hexadecimal)

// Parsing a hexadecimal string back to a decimal number.
console.log(parseInt('0x843', 16)); // Output: 2115 (interprets '0x843' as base 16)

// Another example of hexadecimal to decimal conversion.
console.log(0x845a); // Output: 33882 (decimal equivalent of 0x845a)

// Converting an array of hexadecimal digits to decimal using a custom function.
console.log(digitsToNumber([8, 4, 3], 16)); // Output: 2115 (8*16^2 + 4*16^1 + 3*16^0)
console.log(digitsToNumber([8, 4, 5, 'a'], 16)); // Output: 33882 (8*16^3 + 4*16^2 + 5*16^1 + 10*16^0)

// Function to convert an array of digits from a given base (radix) to a decimal number.
function digitsToNumber(digits, radix = 10) {
    let ans = 0; // Initialize result variable
    
    // Object to map hexadecimal characters to their decimal values.
    let hexadecimalObj = {
        "a": 10,
        "b": 11,
        "c": 12,
        "d": 13,
        "e": 14,
        "f": 15
    };

    // Iterate through the array and calculate the decimal equivalent.
    digits.forEach((ele, i) => {
        // Convert a hexadecimal letter to its decimal value if it's not a number.
        let value = (isNaN(ele)) ? hexadecimalObj[ele.toLowerCase()] : ele;

        // Multiply each digit by its respective power of the base (radix).
        ans += value * Math.pow(radix, digits.length - 1 - i);
    });

    return ans; // Return the computed decimal value.
}

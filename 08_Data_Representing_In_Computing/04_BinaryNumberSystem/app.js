// Binary numbers in JavaScript use the prefix `0b` (e.g., 0b0111).
console.log(0b0111); // Output: 7 (Binary 0111 is decimal 7)

// Using `parseInt` to convert a binary string to a decimal number.
console.log(parseInt('0111', 2)); // Output: 7 (Binary 0111 to decimal)

// JavaScript implicitly converts the number 1101 to a string and then parses it as binary.
console.log(parseInt(1101, 2)); // Output: 13 (Binary 1101 to decimal)

// If a number starts with `0b`, JavaScript automatically treats it as binary.
console.log(parseInt(0b1111)); // Output: 15 (Binary 1111 to decimal)

// Using a custom function to convert an array of binary digits to a decimal number.
console.log(digitsToNumber([1,1,1,1], 2)); // Output: 15 (Binary 1111 to decimal)

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
        // If `ele` is not a number (hex character), get its decimal value from `hexadecimalObj`.
        let value = (isNaN(ele)) ? hexadecimalObj[ele.toLowerCase()] : ele;

        // Multiply each digit by its respective power of the base (radix).
        ans += value * Math.pow(radix, digits.length - 1 - i);
    });

    return ans; // Return the computed decimal value.
}

// Import the 'fs/promises' module to use promise-based file system operations
import fs from "fs/promises";

// Read the contents of 'text.txt' as a buffer (asynchronously)
const contentBuffer = await fs.readFile('./text.txt');

// Print the buffer content using Node.js's built-in toString() method (UTF-8 by default)
console.log(contentBuffer.toString());

// Print the buffer content using a custom bufferToString function
console.log(bufferToString(contentBuffer));

/**
 * Converts a buffer (or Uint8Array) to a string by manually
 * converting each byte to a character using String.fromCharCode().
 * 
 * Note: This approach works best for ASCII or ISO-8859-1 encoded data.
 * It will not correctly decode multi-byte UTF-8 characters (like emojis or non-English characters).
 */
function bufferToString(contentBuffer) {
    let str = "";

    // Iterate over each byte in the buffer
    contentBuffer.forEach((ele) => {
        // Convert the byte to a character and append it to the result string
        str += String.fromCharCode(ele);
    });

    // Return the final assembled string
    return str;
}

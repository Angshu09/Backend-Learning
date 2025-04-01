import fs from "fs/promises"; // Importing the 'fs' module with Promises support for reading files asynchronously

// Extracting command-line arguments
const filePath = process.argv[2]; // The third argument (index 2) is the file path provided by the user
const query = process.argv[3]; // The fourth argument (index 3) is the word to search for (optional)

// Reading the file asynchronously and storing its content as a string
const a = await fs.readFile(filePath, "utf-8");

// Splitting the content into an array of words using non-word characters (\W) as delimiters
// The filter method removes any empty values (falsy values like empty strings)
let arr = a.split(/[\W]/).filter((w) => w);

let obj = {}; // Object to store word counts

if (query) {
  // If a specific word (query) is provided, count only its occurrences
  const queryCount = arr.filter((word) => word === query); // Filter words that match the query
  obj[query] = queryCount.length; // Store the count of the queried word
} else {
  // If no specific word is queried, count occurrences of all words
  arr.forEach((ele) => {
    if (ele in obj) {
      obj[ele] += 1; // If the word exists in the object, increment its count
    } else {
      obj[ele] = 1; // If the word is not in the object, add it with a count of 1
    }
  });
}

// Print the word count object
console.log(obj);

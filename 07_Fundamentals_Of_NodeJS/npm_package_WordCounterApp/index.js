#!/usr/bin/env node

import fs from "fs/promises";

// Extracting command-line arguments
const filePath = process.argv[2]; // The third argument (index 2) is the file path
const query = process.argv[3]; // The fourth argument (index 3) is the word to search for (optional)

// Ensure a file path is provided
if (!filePath) {
  console.error("Usage: word-counter <file-path> [word-to-search]");
  process.exit(1);
}

try {
  // Reading the file asynchronously
  const a = await fs.readFile(filePath, "utf-8");

  // Splitting the content into words, removing empty values
  let arr = a.split(/[\W]/).filter((w) => w);

  let obj = {}; // Object to store word counts

  if (query) {
    // Count occurrences of the specific word
    const queryCount = arr.filter((word) => word === query);
    obj[query] = queryCount.length;
  } else {
    // Count occurrences of all words
    arr.forEach((ele) => {
      obj[ele] = (obj[ele] || 0) + 1;
    });
  }

  console.log(obj);
} catch (error) {
  console.error("Error reading file:", error.message);
  process.exit(1);
}

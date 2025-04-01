#!/usr/bin/env node

// Importing readFile and writeFile methods from the 'fs/promises' module to handle file operations asynchronously
import { readFile, writeFile } from "fs/promises";

// Retrieving command-line arguments for source and destination file paths
const source = process.argv[2];       // The file to be copied
const destination = process.argv[3];  // The new file where the copied content will be saved

// Checking if both source and destination file paths are provided
if (!source || !destination) {
    console.error("Usage: copy <source-file> <destination-file>"); // Informing the user about correct usage
    process.exit(1); // Exiting the script with a failure status (1)
}

try {
    // Reading the content of the source file asynchronously
    const contentBuffer = await readFile(source);

    // Writing the content to the destination file
    await writeFile(destination, contentBuffer); // 'await' ensures the operation completes before continuing

} catch (error) {
    // Handling errors that may occur during file reading or writing
    console.error("Error:", error.message); // Displaying a user-friendly error message
    process.exit(1); // Exiting with a failure status (1)
}

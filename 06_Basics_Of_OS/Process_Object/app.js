console.log(process.argv.slice(3))

const fs = require('fs');
const path = require('path');

process.chdir("./tmp");

// Get the current working directory
const currentDir = process.cwd();

console.log(`Current Directory: ${currentDir}`);

// Read the contents of the current directory
fs.readdir(currentDir, (err, items) => {
  if (err) {
    console.error(`Error reading directory: ${err.message}`);
    return;
  }

  console.log('Files and Folders:');
  items.forEach(item => {
    const fullPath = path.join(currentDir, item);

    // Check if the item is a file or directory
    fs.stat(fullPath, (err, stats) => {
      if (err) {
        console.error(`Error getting stats for ${item}: ${err.message}`);
        return;
      }

      if (stats.isDirectory()) {
        console.log(`Directory: ${item}`);
      } else {
        console.log(`File: ${item}`);
      }
    });
  });
});

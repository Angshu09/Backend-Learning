import { watch } from "node:fs"; // Importing fs.watch to monitor file changes
import { rename, copyFile, cp, unlink, rmdir, rm, appendFile, stat, readFile } from "node:fs/promises"; // Importing various fs methods for file operations

// await rename('./anime.png', 'yourname.png') // Renames 'anime.png' to 'yourname.png' and optionally moves it
// copyFile('./yourname.png', 'yournameanime.png') // Copies 'yourname.png' to 'yournameanime.png'
// cp('./src', 'src2', {"recursive" : true}) // Copies the entire 'src' directory to 'src2' recursively
// unlink('./yournameanime.png') // Deletes the file 'yournameanime.png'
// rmdir('./test2') // Deletes the empty directory 'test2' (fails if directory is not empty)
// rm('test', {recursive: true}) // Deletes the directory 'test' and its contents recursively
// appendFile('index.html', '') // Appends data to 'index.html'; if the file does not exist, it creates it

// const stats = await stat('src') // Retrieves and logs stats (e.g., size, modification time) of the 'src' file or directory
// console.log(stats) // Logs the stats to the console

// Setting up a watcher to monitor 'file.txt' for changes
watch('file.txt', async (eventType, fileName) => {
    if (eventType === 'change') { // If the file is changed
        console.log(await readFile('file.txt', 'utf-8')); // Read and log the content of 'file.txt'
    }
});

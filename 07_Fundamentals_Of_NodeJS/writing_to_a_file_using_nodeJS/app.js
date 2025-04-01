
import fs from "node:fs/promises"

// fs.writeFile('file-1.txt', "hello world")


// fs.appendFile('file-1.txt', "\nhello duniya")


// const contentBuffer = await fs.readFile('C:\\Users\\angsh\\OneDrive\\Desktop\\Backend-Learning\\07_Fundamentals_Of_NodeJS\\Word_Count_App\\file-1.txt')
// fs.writeFile('file-2.txt', contentBuffer)


// const imgContentBuffer = await fs.readFile('./anime.png')
// fs.writeFile('C:\\Users\\angsh\\OneDrive\\Desktop\\loveAnime.png', imgContentBuffer)


// setInterval(() => {
//     fs.writeFile('time.txt', new Date().toLocaleTimeString())
// }, 500)


try {
    const contentBuffer = await fs.readFile('nodejs.js')
    fs.writeFile('newNodejs.js', contentBuffer)
} catch (error) {
    fs.writeFile('error.log', `\n\n${new Date().toLocaleTimeString()}\n${error.message}\n${error.stack}`)
    console.log('To see the full error fo to ./error.log file')
}
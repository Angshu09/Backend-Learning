// const fs = require("fs")

// fs.renameSync("C:\\Users\\angsh\\OneDrive\\Desktop\\Backend-Learning\\04_Why_Do_We_Need_NodeJS\\text.txt", "C:\\Users\\angsh\\OneDrive\\Desktop\\Backend-Learning\\04_Why_Do_We_Need_NodeJS\\hello.txt") //This is how we can rename the file 


// fs.unlinkSync("C:\\Users\\angsh\\OneDrive\\Desktop\\Backend-Learning\\04_Why_Do_We_Need_NodeJS\\hello.txt") //This is used to delete the file from the system 


// fs.writeFileSync("C:\\Users\\angsh\\OneDrive\\Desktop\\Backend-Learning\\04_Why_Do_We_Need_NodeJS\\text.txt", "Hii this is Hello World") //This is how we can write in the file 


// const text = fs.readFileSync("C:\\Users\\angsh\\OneDrive\\Desktop\\Backend-Learning\\04_Why_Do_We_Need_NodeJS\\text.txt") //here we read that file contents


// console.log(text.toString())







//How to start any appliaction using NodeJS
const {exec} = require('child_process')
exec('start brave') //short step
exec('"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Brave.lnk"') //long step by entering the full path 
const fs = require('fs');

// const text = fs.readFileSync("./text.txt")
const text = fs.readFileSync("C:\\Users\\angsh\\OneDrive\\Desktop\\Backend-Learning\\03_Running_Our_First_NodeJS_Code\\text.txt")
// here we are using \\ instead of the real window path \ 

console.log(text.toString())


console.log(global) // this is global object of nodeJS
//if we log window here then it will produce error and if we log global in browser then browser console will produce an error


console.log(globalThis) // globalThis presents in both nodeJS and browser. Here it represents global object and in browser it represents window object 


console.log("End")

//In node js we have the global object similar to the window object of the browser

// const timer  = require("./timer.js")
//Common JS 
// Synchronous loading of the file
// File extension is optional
//If we give full file path then we can load any file using cjs
//It is a convention to add cjs as file extension
//it is optional to set "type" : "commonjs" in package.json, because common js is the default module system of nodejs
//in commonJS this points to module.exports by default 
//cjs imports are not hoisted
//top level await is not allowed
//only one value can be exported inn cjs
//By default the strict mode is not enabled
//Here we are access the directory and file name from __dirname & __filename 




// import timer from "./timer.js"
// ES6 Modules
// Asynchronous Loading of the file
// File extension is mandatory 
// we can't load all the files, only js and mjs is allowed
//It is a convention to add mjs as file extension
// we have to set "type" : "module" in package.json
//here this keyword is undefined 
//mjs imports are hoisted
//top level await is allowed
//multiples values can be exported in mjs
//By default the strict mode is enabled
//here we access the directory and file path from the import.meta 
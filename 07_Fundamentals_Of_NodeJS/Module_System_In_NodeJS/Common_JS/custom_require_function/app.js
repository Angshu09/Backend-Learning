// "use strict"
// const vm = require("vm")
// const n = 78
// vm.runInThisContext('var a = 89') //It runs the code in global context 
// vm.runInNewContext("console.log(n)", {n, console})


//Tip: if we use "use strict" then it will not all the eval function to run


const b = loadModule("./math.js"); // we store the return value of this function to this b variable
b.c = 89
console.log(b) //{ a: 78, c: 89 }

const {sum} = loadModule("./sum")
console.log(sum(4, 5, 6, 7))


function loadModule(path) {
  const fs = require("fs"); //This is the only way to read the file, so we have to use this require function
  const vm = require("vm")
  let fileContent;

  if (path.endsWith(".js")) {
    fileContent = fs.readFileSync(path).toString();
  } else {
    path = path + ".js";
    fileContent = fs.readFileSync(path).toString();
  } //This is else checks whether the user put .js in the last or not

  //   (function (exports, require, module, __filename, __dirname) {
  //     eval(fileContent);

  //     //The eval() function in JavaScript is a built-in function that evaluates or executes a string of JavaScript code
  //   })(); //This is an immediately invoked function

  return (function (send) {
    //Module code goes here
    // eval(fileContent);
    vm.runInNewContext(fileContent, {send, console, loadModule})

    // console.log(send) //{ a: 78 }
    return send;
  })({});
}

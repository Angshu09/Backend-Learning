const {sum} = loadModule("./math.js");
// const vm = require('vm')

// vm.runInThisContext('var b = "Angshu Das"') //Run in global

console.log(sum(6, 7)); // Prints the file content


function loadModule(path) {
    const fs = require("fs");
    const vm = require('vm')
    const fileContent = fs.readFileSync(path, "utf-8");

    return (function(send) {
        // eval(fileContent)
        vm.runInNewContext(fileContent, {send, loadModule, console})
        return send
    })({});
}

console.log('complete')


/*Module Wrapper Function in Node.js - 
The Module Wrapper Function in Node.js is a hidden function that wraps every module file before it is executed. This function ensures that variables and functions defined in a module do not pollute the global scope.

Syntax of the Module Wrapper Function
Every module in Node.js is internally wrapped in the following function:
(function(exports, require, module, __filename, __dirname) {
    // Your module code here
});

Key Parameters - 
exports – A reference to module.exports, used for exporting functions and variables.
require – The function to import other modules.
module – An object representing the current module.
__filename – The absolute path of the file being executed.
__dirname – The directory name of the file being executed.*/


/*VM Module in node js - 
The vm module in Node.js provides an API to run JavaScript code inside a separate, isolated V8 Virtual Machine (VM) context. This is useful for executing untrusted code securely or running scripts in a sandboxed environment.

Why Use the vm Module?
Sandboxing: It isolates JavaScript execution to prevent interference with the main application.
Running Untrusted Code: Securely execute user-generated or external scripts.
Custom Execution Context: Run code with specific global variables without affecting the actual global scope.

Core Features of the vm Module
The vm module provides several key methods:

1. vm.runInThisContext(code[, options])
Runs the JavaScript code in the current global context but still within the VM.
Does not have access to local variables.
Example:
const vm = require('vm');
const code = `console.log("Hello from VM")`;
vm.runInThisContext(code);

2. vm.runInNewContext(code, sandbox[, options])
Runs the JavaScript code inside a new isolated context.
The sandbox is an object that acts as a global scope for the executed script.
Example:
const vm = require('vm');
const sandbox = { name: "Alice" };
vm.runInNewContext(`name = "Bob"; console.log(name);`, sandbox);
console.log(sandbox.name); // Output: Bob
Note: The sandbox object is modified by the script.

3. vm.createContext(sandbox)
Explicitly creates a new context for executing scripts.
Used with vm.runInContext(code, context[, options]).
Example:
const vm = require('vm');
const sandbox = { name: "Charlie" };
const context = vm.createContext(sandbox);
vm.runInContext(`name = "David"; console.log(name);`, context);
console.log(sandbox.name); // Output: David

4. vm.Script(code)
Compiles JavaScript code for later execution using script.runInNewContext() or script.runInThisContext().
Example:
const vm = require('vm');
const script = new vm.Script(`count += 1; console.log(count);`);
const sandbox = { count: 0 };
const context = vm.createContext(sandbox);
script.runInContext(context);
script.runInContext(context);
console.log(sandbox.count); // Output: 2
Use Case: Precompile scripts and execute them multiple times for better performance.


Use Cases of the vm Module
Executing User-Provided Code: Run code submitted by users in a controlled environment.
Testing & Debugging: Run isolated pieces of code without affecting the main app.
Sandboxing: Prevent access to system resources by executing code in a restricted environment.
Security Concerns
The vm module isolates code execution but does not fully prevent security risks.
Running untrusted code still requires additional security measures.
Avoid passing sensitive data to the sandbox.
Consider using worker threads or other sandboxing solutions for better isolation.*/
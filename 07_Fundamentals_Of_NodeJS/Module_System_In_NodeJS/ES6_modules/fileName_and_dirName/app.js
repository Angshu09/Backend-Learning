// console.log(import.meta)

import {num} from "./math.js"
// console.log(num);


const meta = import.meta
// console.log(meta)

meta.name = "Angshu"; //adding properties 


const {filename, dirname, name} = meta //destructure the filename and the dirname
console.log(filename)
console.log(name)

console.log(dirname)

// console.log(process.cwd()) //it showing me the directory from where we start the node js

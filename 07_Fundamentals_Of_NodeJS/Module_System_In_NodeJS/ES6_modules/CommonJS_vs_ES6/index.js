// console.log(this) // in commonjs module the value of this is {}

// module.exports.num = 78 //assigning 

// console.log(this) // here the value of this is - { num: 78 }




// console.log(this) //in es6 module the value of this is undefined


// import myOwnObj, {str, obj, sum, num} from "./timer.js" //but here this is not an object it is just the syntax 
// console.log(myOwnObj, {str, obj, sum, num}) // here this is logged as object




const timer = require("./timer")
Object.values(timer).map((value) => {
    console.log(value)
})
// const {exec} = require('child_process')
// exec(`powershell -Command "setx VARIABLE_NAME 'nodejs' /M"`) // This is how we edit the variables using node js 


// const environmentVariables = process.env;
// console.log(environmentVariables)


// const environmentVariables2 = process.env
// console.log(environmentVariables2.name)


// setInterval(() => {
//     console.log(environmentVariables2)
// }, 1000)

// const num = process.env.num
// console.log(num)
// process.env.num = 7893 //Here it changes the copy of the num variable not the actual num of the parent 
// console.log(process.env.num)

const fs = require('fs')
const fileData = fs.readFileSync('./.env').toString() 
fileData.split(/\r?\n/).forEach((variable) => {
   const [key, value] = variable.split('=')
   process.env[key] = value 
   //[] It allows you to dynamically set or access properties when the property name is not known in advance or when it is stored in a variable.
})

setInterval(() => {
   const a = process.env
   console.log("hi")
}, 1000)
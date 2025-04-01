import fs from 'node:fs/promises'

// console.log(fs)

// const a = fs.readFileSync('./index.html') //It returns a buffer, it is one type of 0s and 1s
// console.log(a.toString()) //if we want see the same details as index.html then convert it to string

// const b = fs.readFileSync('./index.html', 'utf-8') //When we are passing the second argument then it will return in a string format
// console.log(b)

////it asynchronously read the file without interrupt the main thread, it does not return anything 
// fs.readFile('./index.html', (err, data) => { 
//     console.log(data) // this is a buffer
//     const content = data.toString()
//     console.log(content) //print the actual data
// })

// console.log('the end')

let count = 0
const intervalId = setInterval(() => {
    console.log(count++)
    if(count == 70){
        clearInterval(intervalId)
    }
}, 5)


const data = await fs.readFile('./index.html') //This readfile is from fs/promises, it is an asynchronous function 
console.log('read complete')
console.log('end')





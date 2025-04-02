const digitList = [2, 4, 6, 5]
const digitList2 = [7, 8, 9]

console.log(decimal(digitList))
console.log(decimal(digitList2))

function decimal(arr){
    let ans = 0
    for(let i=0; i<arr.length; i++){
        ans += arr[i] * Math.pow(10, i)
    }
    return ans 
}
const {subtract} = loadModule('./subtract.js')

console.log(subtract(8, 4))

send.sum = (...nums) => {
    return nums.reduce((acc, n) => acc + n, 0); // Added initial value `0`
};


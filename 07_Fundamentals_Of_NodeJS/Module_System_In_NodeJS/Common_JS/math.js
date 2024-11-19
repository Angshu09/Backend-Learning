function product(...nums) {
  //nums is an array that contains the passed arguments
  return nums.reduce((total, num) => total * num, 1);
}

function sum(...nums) {
  //nums is an array that contains the passed arguments
  return nums.reduce((total, num) => total + num, 0);
}

// console.log(module.exports === exports )



// const send = module.exports
// send.sum = sum;
// send.product = product 



// exports.sum = sum;
// exports.product = product ;



// module.exports.sum =sum;
// module.exports.product = product 



module.exports = {
    product,
    sum
} //we are exports an object that contains these two functions

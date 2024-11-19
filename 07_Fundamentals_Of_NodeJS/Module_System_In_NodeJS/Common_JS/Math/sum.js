function sum(...nums) {
  //nums is an array that contains the passed arguments
  return nums.reduce((total, num) => total + num, 0);
}

module.exports =  sum

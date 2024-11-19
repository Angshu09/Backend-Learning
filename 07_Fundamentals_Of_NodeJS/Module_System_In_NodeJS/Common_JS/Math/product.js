function product(...nums) {
  //nums is an array that contains the passed arguments
  return nums.reduce((total, num) => total * num, 1);
}

module.exports = product

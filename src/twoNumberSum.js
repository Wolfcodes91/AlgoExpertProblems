function twoNumberSum(array, targetSum) {
  let sum = 0;
  let adder = 0;
  let counter = 0;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    counter = array[i];
    for (let j = i + 1; j < array.length; j++) {
      adder = array[j];
      sum = counter + adder;
      if (sum === targetSum) {
        result = [counter, adder];
      } else {
        result;
      }
    }
  }
  return result;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

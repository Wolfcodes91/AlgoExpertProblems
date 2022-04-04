function sortedSquaredArray(array) {
  let newArr = array.map((num) => num * num);
  newArr.sort((a, b) => a - b);
  return newArr;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;

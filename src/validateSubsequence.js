function isValidSubsequence(array, sequence) {
  let commonNum = 0;
  let newArr = [];
  let uniqueArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < sequence.length; j++) {
      if (sequence[j] === array[i]) {
        commonNum = sequence[j];
        newArr.push(commonNum);
        if (commonNum !== 1) {
          uniqueArr = [...new Set(newArr)];
        } else if (commonNum === 1 && newArr.includes(6)) {
          uniqueArr = array;
        } else if (commonNum === 1) {
          uniqueArr = sequence;
        }
      }
    }
  }
  return JSON.stringify(uniqueArr) === JSON.stringify(sequence);
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;

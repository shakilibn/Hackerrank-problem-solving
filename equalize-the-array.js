// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

const equalizeArray = (arr) => {
  let arrObj = {};
  let maxCount = 0;
  for (let num of arr) {
    arrObj[num] = arrObj[num] + 1 || 1;
  }
  for (let value in arrObj) {
    if (arrObj[value] > maxCount) {
      maxCount = arrObj[value];
    }
  }
  return arr.length - maxCount;
};

const arr = [3, 3, 2, 1, 3];
console.log(equalizeArray(arr));

// Given an array of integers "k" and a positive integer , determine the number of (i,j)
// pairs where i < j and arr[i] + arr[j] is divisible by "k".

// Example
// arr = [1, 2, 3, 4, 5, 6];
// k = 5;
// Three pairs meet the criteria: [1, 4], [2, 3]  and [4, 6].

const divisibleSumPairs = (array, divisor) => {
  let count = 0;
  array.forEach((element, index) => {
    for (let j = index + 1; j < array.length; j++) {
      const pairSum = element + array[j];
      if (pairSum % divisor === 0) {
        count++;
      }
    }
  });
  return count;
};

const numbers = [1, 2, 3, 4, 5, 6];

console.log(divisibleSumPairs(numbers, 5));

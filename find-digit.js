// An integer d is a divisor of an integer n if the remainder of n/d=0.

// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

const findDigit = (n) => {
  const arr = n.toString().split("");
  let count = 0;
  arr.forEach((element) => {
    if (n % element === 0) count++;
  });
  return count;
};

console.log(findDigit(124));

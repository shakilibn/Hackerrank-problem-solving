// The distance between two array values is the number of indices between them. Given a, find the minimum
// distance between any pair of equal elements in the array. If no such value exists,return .

const minimumDistances = (a) => {
  const distances = [];
  a.forEach((element, i) => {
    for (let j = i + 1; j < a.length; j++) {
      if (element === a[j]) {
        const distance = Math.abs(i - j);
        distances.push(distance);
      }
    }
  });
  if (distances.length === 0) return -1;
  const minimumDistance = Math.min(...distances);
  return minimumDistance;
};
const array = [2, 1, 3, 4, 15, 6];
console.log(minimumDistances(array));

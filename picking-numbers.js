const pickingNumbers = (a) => {
  let mySet = new Set();
  let maxCount = 0;
  for (let i = 0; i < a.length; i++) {
    let count = 0;
    if (!mySet.has(a[i])) {
      mySet.add(a[i]);
      for (let j = 0; j < a.length; j++) {
        if (a[j] == a[i] || a[j] == a[i] + 1) {
          count++;
        }
      }
      maxCount = Math.max(maxCount, count);
    }
  }
  console.log(maxCount);
};

const arr = [1, 1, 2, 2, 4, 4, 5, 5, 5];
pickingNumbers(arr);

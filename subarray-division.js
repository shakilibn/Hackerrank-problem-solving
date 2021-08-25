function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let slice = s.slice(i, i + m);
    let sum = slice.reduce((acc, cur) => acc + cur, 0);

    if (sum === d && slice.length === m) count++;
  }
  console.log(count);
}
const arr = [2, 2, 1, 3, 2];

birthday(arr, 4, 2);

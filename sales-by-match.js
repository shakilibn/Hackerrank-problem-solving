function sockMerchant(n, ar) {
  let count = 0;
  ar.sort();

  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i + 1]) {
      count++;
      i++;
    }
  }
  return count;
}
const numbers = [1, 2, 1, 2, 1, 3, 2]; // [1,1,1,2,2,2,3]
console.log(sockMerchant(7, numbers));

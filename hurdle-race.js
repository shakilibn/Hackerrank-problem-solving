const hurdleRace = (k, height) => {
  const maxHeight = Math.max(...height);
  if (k < maxHeight) return maxHeight - k;
  if (k > maxHeight) return 0;
};

const numbers = [1, 6, 3, 5, 2];
console.log(hurdleRace(7, numbers));

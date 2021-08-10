const howManyGames = (p, d, m, s) => {
  let count = 0;
  let sum = p;

  while (sum <= s) {
    p -= d;
    if (p <= m) {
      sum += m;
      count++;
    } else {
      sum += p;
      count++;
    }
  }
  return count;
};
console.log(howManyGames(20, 3, 6, 70));

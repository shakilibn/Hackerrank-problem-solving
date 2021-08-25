function pageCount(n, p) {
  const frontFlip = Math.floor(p / 2);
  const backFlip = Math.floor(n / 2 - frontFlip);

  const result = Math.min(frontFlip, backFlip);
  return result;
}

console.log(pageCount(5, 4));

const jumpingOnClouds = (c) => {
  const jumps = [];
  for (let i = 0; i < c.length + 1; i += 2) {
    if (c[i] === 1) {
      i -= 1;
    }
    jumps.push(c[i]);
  }
  return jumps.length - 1;
};

const arr = [0, 1, 0, 0, 1, 0, 0];
console.log(jumpingOnClouds(arr));

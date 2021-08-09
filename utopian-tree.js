// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in
// height. Each summer, its height increases by 1 meter.

// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall
// will the tree be after  growth cycles?

// For example, if the number of growth cycles is , the calculations are as follows:

// Period  Height
// 0          1
// 1          2
// 2          3
// 3          6
// 4          7
// 5          14

const utopianTree = (n) => {
  let period = 0;
  let height = 1;
  for (let i = 0; i < n; i++) {
    period++;
    if (period % 2 === 0) {
      height++;
    } else {
      height *= 2;
    }
  }
  return height;
};

console.log(utopianTree(6));

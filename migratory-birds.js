const migratoryBirds = (arr) => {
  const allBirds = {};
  const mostSighted = [];
  let mostCommon = [0, 0];

  arr.forEach((bird) => {
    if (!allBirds[bird]) {
      allBirds[bird] = 1;
    } else {
      allBirds[bird] = allBirds[bird] + 1;
    }
    if (allBirds[bird] > mostCommon[1]) {
      mostCommon[0] = bird;
      mostCommon[1] = allBirds[bird];
    }
  });

  Object.keys(allBirds).forEach((key) => {
    if (allBirds[key] === mostCommon[1]) {
      mostSighted.push(key);
    }
  });

  mostSighted.sort();
  return mostSighted[0];
};

const array = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
migratoryBirds(array);

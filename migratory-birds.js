const migratoryBirds = (arr) => {
  let arrObj = {};
  for (let num of arr) {
    arrObj[num] = arrObj[num] + 1 || 1;
  }
  console.log(arrObj);
};

const array = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
migratoryBirds(array);

const beautifulTriplets = (d, arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const numb1 = arr[i] - d;
    const numb2 = numb1 - d;
    if (arr.includes(numb1) && arr.includes(numb2)) {
      result += 1;
    }
  }
  console.log(result);
};

const array = [1, 6, 7, 7, 8, 10, 12, 13, 14, 19];

beautifulTriplets(3, array);

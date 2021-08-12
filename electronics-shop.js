const getMoneySpent = (keyboards, drives, b) => {
  const spent = [];
  keyboards.forEach((element) => {
    drives.forEach((drive) => {
      const price = element + drive;
      if (price <= b) spent.push(price);
    });
  });
  const maxSpent = Math.max(...spent);
  if (spent.length) {
    return maxSpent;
  } else {
    return -1;
  }
};

const k = [4];
const d = [5];
const b = 5;
console.log(getMoneySpent(k, d, b));

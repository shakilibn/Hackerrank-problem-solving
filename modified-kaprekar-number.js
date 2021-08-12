// A modified Kaprekar number is a positive whole number with a special property. If you square it, then split the number into two integers and sum those integers, you have the same value you started with.

const kaprekarNumbers = (p, q) => {
  let result = [];
  for (let i = p; i <= q; i++) {
    const squareString = (i * i).toString();
    const num1 = squareString.substring(0, squareString.length / 2);
    const num2 = squareString.substring(
      squareString.length / 2,
      squareString.length
    );

    if (Number(num1) + Number(num2) === i) {
      result = result.concat(i);
    }
  }
  if (!result.length) {
    console.log("INVALID RANGE");
  } else {
    console.log(...result);
  }
};

// console.log(kaprekarNumbers(400, 700));
kaprekarNumbers(400, 700);

// Maria plays college basketball and wants to go pro. Each season she maintains a record of
// her play. She tabulates the number of times she breaks her season record for most points and
// least points in a game. Points scored in the first game establish her record for the season,
// and she begins counting from there.

//  sample input
//  9
//  10 5 20 20 4 5 2 25 1
//  sample output = 2 4

const breakingTheRecords = (array) => {
  let initMin = array[0];
  let initMax = array[0];
  let max = 0;
  let min = 0;
  array.forEach((element) => {
    if (element > initMax) {
      initMax = element;
      max++;
    }
    if (element < initMin) {
      initMin = element;
      min++;
    }
  });
  return [max, min];
};

console.log(breakingTheRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

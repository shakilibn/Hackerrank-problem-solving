// Two cats and a mouse are at various positions on a line. You will be given their starting
// positions. Your task is to determine which cat will reach the mouse first, assuming the
// mouse does not move and the cats travel at equal speed. If the cats arrive at the same time,
// the mouse will be allowed to move and it will escape while they fight.

const catAndMouse = (x, y, z) => {
  const xDistance = z - x;
  const yDistance = z - y;

  if (xDistance < yDistance) {
    return "Cat A";
  } else if (yDistance < xDistance) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
};

console.log(catAndMouse(1, 3, 2));

const viralAdvertising = (n) => {
  let reached = 2;
  let sharing = 2;
  for (let day = 1; day < n; day++) {
    reached += Math.floor((sharing * 3) / 2);
    sharing = Math.floor((sharing * 3) / 2);
  }
  return reached;
};

console.log(viralAdvertising(5));

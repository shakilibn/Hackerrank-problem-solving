// A Discrete Mathematics professor has a class of students. Frustrated with their lack of
// discipline, the professor decides to cancel class if fewer than some number of students
// are present when class starts. Arrival times go from on time (arrivalTime <= 0) to arrived
// late (arrivalTime > 0).

// Given the arrival time of each student and a threshhold number of attendees, determine if
// the class is cancelled.

// Example
// n = 5;
// k = 3
// a = [-2, -1, 0, 1,2]
// The first  students arrived on. The last  were late. The threshold is  students, so class will go on. Return YES.

const angryProfessor = (k, a) => {
  let count = 0;
  a.forEach((element) => {
    if (element <= 0) {
      count++;
    }
  });
  if (count >= k) return "NO";
  if (count < k) return "YES";
};

const time = [0, -1, 4, 2];
console.log(angryProfessor(2, time));

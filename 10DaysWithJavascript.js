// const s = 'javascriptloops';
// function vowelsAndConsonants(s) {
//     for(let i=0; i<s.length; i++) {
//         if ( s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' ){
//             console.log(s[i]);
//         }
//     }
//     for(let i=0; i<s.length; i++) {
//         if ( s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' ){
//             continue;
//         }
//         console.log(s[i]);
//     }
// }

// vowelsAndConsonants(s);

// const nums = [1, 15, 2, 3, 4, 5, 6, 7, 8,8 ,8 , 9, 10];

// function getSecondLargest(nums) {
//     const newArray = [];
//     nums.sort(function(a, b) {
//         return a - b;
//     })
//     for (let i = 0; i < nums.length; i++) {
//         let element = nums[i];
//         let isExist = newArray.indexOf(element);
//         if (isExist == -1){
//             newArray.push(element)
//         }
//     }
//     return (newArray[newArray.length - 2]);
// }

// getSecondLargest(nums);

// const s = Number(1234);
// function reverseString(s) {
//     try {
//         const newS = s.split('');
//         const reverseS = newS.reverse();
//         const joinS = reverseS.join('');
//         console.log(joinS);
//     } catch (e) {
//         console.log(e.message);
//         console.log(s);
//     }
// }

// reverseString(s);

// function isPositive(a) {
//   if (a === 0) {
//     throw new Error("Zero Error");
//   }
//   if (a < 0) {
//     throw new Error("Negative Error");
//   }
//   return "YES";
// }

// console.log(isPositive(0));

//day 4

// function Rectangle(a, b) {
//   const length = a;
//   const width = b;
//   const perimeter = 2 * (a + b);
//   const area = a * b;

//   const obj = { length, width, perimeter, area };
//   return obj;
// }

// console.log(Rectangle(4, 5));

// function getCount(objects) {
//   let count = 0;
//   objects.forEach((element) => {
//     if (element.x === element.y) {
//       count++;
//     }
//   });
//   return count;
// }

// const o = [
//   { x: 1, y: 1 },
//   { x: 2, y: 3 },
//   { x: 3, y: 3 },
//   { x: 3, y: 4 },
// ];

// console.log(getCount(o));

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(this.name, "speak");
//   }
// }
// class Dog extends Animal {
//   speak() {
//     console.log(this.name, "barks");
//   }
// }
// let spot = new Dog("spot");
// spot.speak();
// let Spot = new Animal("spot");
// Spot.speak();

// class Polygon {
//   constructor(a) {
//     this.a = a;
//   }
//   perimeter() {
//     let pm = 0;
//     this.a.forEach((element) => {
//       pm += element;
//     });
//     return pm;
//   }
// }

// let triangle = new Polygon([3, 4, 5]);
// console.log(triangle.perimeter());

// function sides(literals, ...expressions) {
//   var area = expressions[0];
//   var perimeter = expressions[1];

//   var s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
//   //console.log("s1: " + s1);
//   var s2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
//   //console.log("s2: " + s2);
//   var array = [s1, s2];
//   array = array.sort(function (a, b) {
//     return a - b;
//   });
//   return array;
// }

// function modifyArray(nums) {
//   const newNums = nums.map((item) => {
//     if (item % 2 === 0) {
//       return item * 2;
//     } else {
//       return item * 3;
//     }
//   });
//   return newNums;
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(modifyArray(arr));

// Rectangle.prototype.area = function () {
//   return this.w * this.h;
// };

// class Square extends Rectangle {
//   constructor(s) {
//     super();
//     this.h = s;
//     this.w = s;
//   }
// }

// function maxLessThanK(n, k) {
//   let max = 0;
//   let current = -1;
//   for (let i = 1; i < k; i++) {
//     for (let j = i + 1; j <= n; j++) {
//       current = i & j;
//       if (current < k && current > max) {
//         max = current;
//       }
//     }
//   }
//   return max;
// }

// console.log(maxLessThanK(5, 2));

function getDayNames(dateString) {
  let dayName;

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);

  dayName = dayNames[date.getDay()];

  return dayName;
}

console.log(getDayNames("10 / 11 / 2009"));

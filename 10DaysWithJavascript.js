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

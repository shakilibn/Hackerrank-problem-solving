const arr = [5, 4, 4, 2, 2, 8];

function cutTheSticks(arr) {
   const result = [];
   let zero = 0;

   while(zero < arr.length) {
       result.push(arr.length - zero);
       let min = 10001;

       for (let i = 0; i < arr.length; i++) {
           if(arr[i] > 0 && arr[i] < min) {
               min = arr[i];
           }
       }

       for (let i = 0; i < arr.length; i++) {
           arr[i] = arr[i] - min;
           if(arr[i] == 0) {
               zero++;
           }
       }
   }
   return result;
}

console.log(cutTheSticks(arr));
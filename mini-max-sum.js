const arr = [1,2,3,4,5];
// 1+2+3+4 = 10
// 2+3+4+5 = 14
// 1+3+4+5 = 13
// 1+2+4+5 = 12
// 1+2+3+5 = 11

function miniMaxSum(array){
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        const workArray = [...array];
        let sum = 0;
        workArray.splice(index,1);
        for (let j = 0; j < workArray.length; j++) {
            const element = workArray[j];
            sum = sum + element;        
        }
        newArray.push(sum);
    }
    console.log(Math.min(...newArray), Math.max(...newArray));
    
}

miniMaxSum(arr)

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
    
// }


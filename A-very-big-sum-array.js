const numbers = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar){
    let sum = 0;
    ar.map(item => {
        sum = sum + item;
    })
    console.log(sum);
}

aVeryBigSum(numbers);

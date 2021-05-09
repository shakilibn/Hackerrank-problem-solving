const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr){
    let zeroCount = 0;
    let positiveCount = 0;
    let negativeCount = 0;

    const ratios = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            negativeCount++;
        }else if(arr[i] > 0){
            positiveCount++;
        }else{
            zeroCount++;
        }
    }

    const positiveRatio = Number((positiveCount / arr.length).toFixed(6));
    const negativeRatio = Number((negativeCount / arr.length).toFixed(6));
    const zeroRatio = Number((zeroCount / arr.length).toFixed(6));

    ratios.push(positiveRatio)
    ratios.push(negativeRatio)
    ratios.push(zeroRatio)
    
    ratios.map(item => console.log(item))
}

plusMinus(arr);
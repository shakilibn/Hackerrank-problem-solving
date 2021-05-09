const candles = [3,2,1,3];

function birthdayCakeCandles(candles){
    const highestValue = (Math.max(...candles));
    let count = 0;
    candles.map(item => {
        if(item === highestValue){
            count++;
        }
    })
    return(count);
}

const result = birthdayCakeCandles(candles);
console.log(result);
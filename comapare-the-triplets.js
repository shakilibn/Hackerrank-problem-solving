a = [17, 28, 30]
b = [99, 16, 8]

function compareTriplets(a, b){
    let alice = 0;
    let bob = 0;
    const result
    for (let i = 0; i < a.length; i++) {
        if(a[i] > b[i]){
            alice++;
        }
        if(a[i] < b[i]){
            bob++;
        }
    }
    return [alice, bob];
}

const result = compareTriplets(a, b);
console.log(result);
const string = 'oneTwoThree';

function camelCase(s) {
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if(element == element.toUpperCase()){
            count++;
        }       
    }
    return count;
}

camelCase(string);

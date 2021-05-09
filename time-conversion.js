const time = '06:40:03AM';

function timeConversion(time) {
    const amPm = time.charAt(8)
    const hours = time.slice(0, 2);
    let modifiedHours = null;
    const splitTime = time.split('');


    if (amPm === 'A') {
        if (hours == 12) {
            const newTime = time.replace('12', '00');
            return newTime.slice(0,8);
        }
        return time.slice(0,8);
    }

    if (amPm === 'P') {
        if (hours == 12) {
            return time.slice(0,8);
        } else {

            modifiedHours = 12 + parseInt(hours);
            const newModifiedHours = String(modifiedHours);
            const newSplitTime = newModifiedHours.split('');

            splitTime[0] = newSplitTime[0];
            splitTime[1] = newSplitTime[1];

            const resultTime = splitTime.join('');
            return resultTime.slice(0,8);
        }
    }
}

console.log(timeConversion(time));
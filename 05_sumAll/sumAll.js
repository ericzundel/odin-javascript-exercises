const sumAll = function (start, end) {
    if (start < 0 || end < 0) {
        return 'ERROR';
    }
    if (Math.floor(start) != start || Math.floor(end) != end) {
        return 'ERROR';
    }
    console.log (`Type of start is ${typeof (start)}`);

    if (typeof(start) != 'number' || typeof(end) != 'number') {
        return 'ERROR';
    }
    let result = start;
    if (start < end) {
        for (let i = start + 1; i <= end; i++) {
            result += i;
        }
    } else {
        for (let i = start  -1; i >= end; i--) {
            result += i;
        } 
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

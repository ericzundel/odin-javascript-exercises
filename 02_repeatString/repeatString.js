const repeatString = function (val, times = 3) {
    if (times < 0) {
        return 'ERROR';
    }
    let result = ''
    for (let i = 0; i < times; i++) {
        result += String(val);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;

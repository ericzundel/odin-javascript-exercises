const reverseString = function (val) {
    let result = '';
    let length = val.length;
    for (let i = -1; i >= -length; i--) {
        result += val.at(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;

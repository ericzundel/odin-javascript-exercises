const removeFromArray = function (array_val, ...remove_vals) {
    let result = [];
    for (let i = 0; i < array_val.length; i++) {
        let found = false;
        for (let j = 0; j < remove_vals.length; j++) {
            if (array_val[i] === remove_vals[j]) {
                found = true;
                break;
            }
        }
        if (found == false) {
            result.push(array_val[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

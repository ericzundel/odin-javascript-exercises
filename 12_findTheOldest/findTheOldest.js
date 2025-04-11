
function getYearOfDeath(obj) {
    let yod = 2025;
    if ('yearOfDeath' in obj) {
        yod = obj.yearOfDeath;
    }
    return yod;
}

const findTheOldest = function(objArray) {
  objArray.sort((a, b)=> {
    let aAge = getYearOfDeath(a) - a.yearOfBirth;
    let bAge = getYearOfDeath(b) - b.yearOfBirth;
    return bAge - aAge;
  })
  return objArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;

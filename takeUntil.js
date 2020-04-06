//TAKE UNTIL FUNCTION
const takeUntil = function(array, callback) {
  const resultingArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      resultingArray.push(array[i]);
    } else {
      return resultingArray;
    }
  }
};

module.exports = takeUntil;
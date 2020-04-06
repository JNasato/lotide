// MIDDLE FUNCTION
const middle = function (array) {
  let middleArray = [];
  let middleValue = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      middleArray.push(array[middleValue]);
    } else {
      middleArray.push(array[middleValue - 1], array[middleValue]);

    }
  }
  return middleArray;
};

module.exports = middle;



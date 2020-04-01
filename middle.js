//ASSERT FUNCTION
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🤗  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬  Assertion Failed: ${actual} !== ${expected}`);
  }
};

//EQARRAYS FUNCTION
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i of array1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

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

console.log(middle([1, 2]));
console.log(middle([3, 4, 5, 6, 7]));
console.log(middle([8, 9, 10, 11, 12, 13, 14, 15]));
console.log(middle(["Tape Measure", "Pen", "Knife", "Marker"]));



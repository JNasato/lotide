//FLATTEN FUNCTION
const flatten = function(array) {
  let flatArray = [];
  for (let x of array) {
    if (Array.isArray(x)) {
      for (let y of x) {
        flatArray.push(y);
      }
    } else {
      flatArray.push(x);
    }
  }
  console.log(assertArraysEqual(flatArray, [1, 2, 3, 4, "five", 6]));
  return flatArray;
};

//ASSERT FUNCTION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🤗  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬  Assertion Failed: ${actual} !== ${expected}`);
  }
};

//EQARRAYS FUNCTION
const eqArrays = function(array1, array2) {
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

const test = [1, 2, [3, 4], "five", 6];
console.log(flatten(test));

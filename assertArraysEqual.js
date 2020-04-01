//ASSERT FUNCTION
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🤗  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬  Assertion Failed: ${actual} !== ${expected}`);
  }
}

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
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
assertArraysEqual(arr1, arr2);
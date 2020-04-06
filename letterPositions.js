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

//LETTER POSITIONS FUNCTION
const letterPositions = function(string) {
  let results = {};
  for (i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if (results[string[i]]) {
        results[string[i]].push(i);
      } else {
        results[string[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));

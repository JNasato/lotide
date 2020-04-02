//ASSERT FUNCTION
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🤗  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬  Assertion Failed: ${actual} !== ${expected}`);
  }
};

//EQ ARRAYS FUNCTION
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

//MAP FUNCTION
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const nums = [2, 4, 6, 8, 10, 12];

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])

const results2 = map(words, word => word.toUpperCase());
console.log(results2);
assertArraysEqual(results2, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'])

const results3 = map(nums, num => num / 2);
console.log(results3);
assertArraysEqual(results3, [1, 2, 3, 4, 5, 6])

const results4 = map(nums, num => Math.floor(num * num / (num - 1)));
console.log(results4);
assertArraysEqual(results4, [4, 5, 7, 9, 11, 13])


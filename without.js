//WITHOUT FUNCTION
const without = function (source, itemsToRemove) {
  let subset = source.slice(0);
  let newArray = [];
  for (let value of subset) {
    if (!itemsToRemove.includes(value)) {
      newArray.push(value);
    }
  }
  return newArray;
}

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

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([99, "bottles", "on", "the", "wall"], ["on", "the"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
//ASSERT FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤗  Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬  Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FIND KEY FUNCTION
const findKey = function(object, callback) {
  for (let val in object) {
    if (callback(object[val])) {
      return val;
    }
  }
};

//TEST CODE
const starsObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(starsObject, x => x.stars === 2), "noma");


//ASSERT FUNCTION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🙌  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (actual !== expected) {
    console.log(`🤬  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//EQ ARRAYS
const eqArrays = function (array1, array2) {
  console.log(array1);
  console.log(array2);
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

//EQ OBJECTS
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));
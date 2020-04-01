// ASSERT FUNCTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🤗  Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬  Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FIND KEY BY VALUE
const findKeyByValue = function (object, value) {
  for (let show in object) {
    if (object[show] === value) {
      return show;
    }
  }
}

//TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
console.log("\nSHOULD FAIL:");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "sci-fi");
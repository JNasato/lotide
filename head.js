//Assert Function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🤗 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//HEAD FUNCTION
const head = function (array) {
  let shift = array.shift();
  return shift;
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Just This"]), "Just This");
assertEqual(head([]), undefined);
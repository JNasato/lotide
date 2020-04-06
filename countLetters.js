//ASSERT FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤗  Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬  Assertion Failed: ${actual} !== ${expected}`);
  }
};

//COUNT LETTERS FUNCTION

const countLetters = function(string) {
  let lettersCounted = {};
  const letters = string.split(" ").join("");
  for (let letter of letters) {
    if (lettersCounted[letter]) {
      lettersCounted[letter] += 1;
    } else {
      lettersCounted[letter] = 1;
    }
  }
  return lettersCounted;
};

console.log(countLetters("lighthouse in the house"));
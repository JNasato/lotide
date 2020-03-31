//Assert Function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🤗  Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬  Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TAIL FUNCTION
const tail = function (array) {
  let newArray = array.slice(0);
  newArray.shift();
  return newArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const one = ["WOW WOW"];
tail(one);
assertEqual(one.length, 0);

const empty = [];
tail(empty);
assertEqual(empty.length, 0);




const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TEST CODE
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([3, 4, 5, 6, 7]), [5]);
assertArraysEqual(middle([8, 9, 10, 11, 12, 13, 14, 15]), [11, 12]);
assertArraysEqual(middle(["Tape Measure", "Pen", "Knife", "Marker"]), ["Pen", "Knife"]);
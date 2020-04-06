const assert = require('chai').assert;
const middle = require('../middle');

//TEST CODE
describe('#middle', () => {

  it('returns empty array for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns [5] for [3, 4, 5, 6, 7]', () => {
    assert.deepEqual(middle([3, 4, 5, 6, 7]), [5]);
  });

  it('returns [11, 12] for [8, 9, 10, 11, 12, 13, 14, 15]', () => {
    assert.deepEqual(middle([8, 9, 10, 11, 12, 13, 14, 15]), [11, 12]);
  });

  it('returns ["Pen", "Knife" for ["Tape Measure", "Pen", "Knife", "Marker"]', () => {
    assert.deepEqual(middle(["Tape Measure", "Pen", "Knife", "Marker"]), ["Pen", "Knife"]);
  });
});
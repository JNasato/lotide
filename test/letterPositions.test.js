const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

//TEST CODE
describe('#letterPositions', () => {
  it('returns correct letter positions for "lighthouse in the house"', () => {
    const results1 = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };
    assert.deepEqual(letterPositions("lighthouse in the house"), results1);
  });

  it('returns { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for "hello"', () => {
    const results2 = { h: [0], e: [1], l: [2, 3], o: [4] };
    assert.deepEqual(letterPositions("hello"), results2);
  });

  it('returns index value of [1] when given ("hello").e', () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});
const assert = require('chai').assert;
const without = require('../without');

//TEST CODE
describe('#without', () => {

  it('returns [2, 3] when given [1, 2, 3], [1]', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('returns ["1", "2"] when given ["1", "2", "3"], [1, 2, "3"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it('returns ["1", "2"] when given [99, "bottles", "on", "the", "wall"], ["on", "the"]', () => {
    assert.deepEqual(without([99, "bottles", "on", "the", "wall"], ["on", "the"]), [99, "bottles", "wall"]);
  });

  it('does not modify the original array', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});
const assert = require('chai').assert;
const flatten = require('../flatten');

//TEST CODE
describe('#flatten', () => {
  it('returns [1, 2, 3, 4, "five", 6] when given [1, 2, [3, 4], "five", 6]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], "five", 6]), [1, 2, 3, 4, "five", 6]);
  });
});
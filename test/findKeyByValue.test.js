const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

//TEST CODE
describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  it('returns "drama" for "The Wire" in bestTVShowsByGenre', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('returns undefined for "That 70s Show" in bestTVShowsByGenre', () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });
});
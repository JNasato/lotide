const assert = require('chai').assert;
const tail = require('../tail');

//TEST CODE
describe('#tail', () => {

  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns empty array when given an array with one element', () => {
    assert.deepEqual(tail(["Just This"]), []);
  });

  it('does not modify the original array'), () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  };
});
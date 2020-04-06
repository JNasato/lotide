const assert = require('chai').assert;
const countOnly = require('../countOnly');

//TEST CODE
describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

  it('returns 1 when "Jason" is passed into function', () => {
    assert.deepEqual(result["Jason"], 1);
  });

  it('returns 2 when "Fang" is passed into function', () => {
    assert.deepEqual(result["Fang"], 2);
  });

  it('returns undefined when "Karima" is passed into function', () => {
    assert.isUndefined(result["Karima"]);
  });
});
//WITHOUT FUNCTION
const without = function(source, itemsToRemove) {
  let subset = source.slice(0);
  let newArray = [];
  for (let value of subset) {
    if (!itemsToRemove.includes(value)) {
      newArray.push(value);
    }
  }
  return newArray;
};

module.exports = without;
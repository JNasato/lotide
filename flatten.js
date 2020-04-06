//FLATTEN FUNCTION
const flatten = function(array) {
  let flatArray = [];
  for (let x of array) {
    if (Array.isArray(x)) {
      for (let y of x) {
        flatArray.push(y);
      }
    } else {
      flatArray.push(x);
    }
  }
  return flatArray;
};

module.exports = flatten;
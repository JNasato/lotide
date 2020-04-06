//FIND KEY FUNCTION
const findKey = function(object, callback) {
  for (let val in object) {
    if (callback(object[val])) {
      return val;
    }
  }
};

module.exports = findKey;

//TEST CODE
// const starsObject = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// };

// assertEqual(findKey(starsObject, x => x.stars === 2), "noma");


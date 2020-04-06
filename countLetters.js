//COUNT LETTERS FUNCTION

const countLetters = function(string) {
  let lettersCounted = {};
  const letters = string.split(" ").join("");
  for (let letter of letters) {
    if (lettersCounted[letter]) {
      lettersCounted[letter] += 1;
    } else {
      lettersCounted[letter] = 1;
    }
  }
  return lettersCounted;
};

module.exports = countLetters;

// console.log(countLetters("lighthouse in the house"));
//TAIL FUNCTION
const tail = function(array) {
  let newArray = array.slice(0);
  newArray.shift();
  return newArray;
};

module.exports = tail;




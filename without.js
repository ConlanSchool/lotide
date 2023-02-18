const eqArrays = require("./eqArrays");

const without = function (source, itemsToRemove) {
  let removedArray = [];
  if (!eqArrays(source, itemsToRemove)) {
    for (let i = 0; i < source.length; i++) {
      if (source[i] !== itemsToRemove[i]) {
        removedArray.push(source[i]);
      }
    }
  }
  return removedArray;
};

module.exports = without;
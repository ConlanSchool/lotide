const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    //checks to see if an object is already assigned a value
    if (results[sentence[i]] !== undefined) {
      //pushes a new value
      results[sentence[i]].push(i);

      //skips spaces
    } else if (sentence[i] !== " ") {
      //creates new object and value array
      results[sentence[i]] = [i];
    }
  }
  return results;
};

//TEST CASE
assertArraysEqual(letterPositions("hello hello").e, [1, 7]);

module.exports = letterPositions;

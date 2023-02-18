const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] !== undefined) {
      results[sentence[i]].push(i);
    } else if (sentence[i] !== " ") {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

//TEST CASE
assertArraysEqual(letterPositions("hello hello").e, [1, 7]);

module.exports = letterPositions;

const assertArraysEqual = require("./assertArraysEqual");

const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const numbers = [1, 2, 3, 4];
const expected = [2, 4, 6, 8];
assertArraysEqual(
  map(numbers, (x) => x * 2),
  expected
);

const words = ["one", "two", "three", "four"];
const expectedWords = ["ONE", "TWO", "THREE", "FOUR"];
assertArraysEqual(
  map(words, (x) => x.toUpperCase()),
  expectedWords
);

const objects = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];
const expectedObjects = [1, 2, 3, 4];
assertArraysEqual(
  map(objects, (x) => Object.values(x)).flat(),
  expectedObjects
);

module.exports = map;

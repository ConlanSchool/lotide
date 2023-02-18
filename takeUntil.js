const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function (array, callback) {
  let result = [];

  //loops through array until condition is met
  for (let element of array) {
    //if condition met, ends loop
    if (callback(element)) {
      return result;

      //if false push to array
    } else {
      result.push(element);
    }
  }
  return result;
};

//TEST CASES
const test1 = [1, 2, 5, 7, 2, -3, 2, 4];
const results1 = takeUntil(test1, (x) => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const test2 = [-5, 2, 5, 7, 2, -3, 2, 4];
const results2 = takeUntil(test2, (x) => x < 0);
assertArraysEqual(results2, []);

const test3 = [];
const results3 = takeUntil(test3, (x) => x < 0);
assertArraysEqual(results3, []);

module.exports = takeUntil;
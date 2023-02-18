const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");

//slices out the middle of an array
const middle = function (array) {
  let middleVal = 0;

  //checks if array is even
  if (array.length % 2 === 0) {
    middleVal = array.length / 2;
    return array.slice(middleVal - 1, middleVal + 1);

    //Checks if array is odd
  } else if (array.length % 2 === 1) {
    middleVal = (array.length - 1) / 2;
    return array.slice(middleVal, middleVal + 1);
  }
};

module.exports = middle;

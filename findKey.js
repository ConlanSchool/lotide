const assertEqual = require("./assertEqual");

const findKey = function (object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//TEST CASES
const object1 = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};
const callback1 = (x) => x.stars === 2;
assertEqual(findKey(object1, callback1), "noma");

const object2 = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
};
const callback2 = (x) => x % 2 === 0;
assertEqual(findKey(object2, callback2), "two");

const object3 = {
  first: "hello",
  second: "worlds",
  third: "!",
};
const callback3 = (x) => x.length > 5;
assertEqual(findKey(object3, callback3), "second");

const object4 = {};
const callback4 = (x) => x === undefined;
assertEqual(findKey(object4, callback4), undefined);

module.exports = findKey;

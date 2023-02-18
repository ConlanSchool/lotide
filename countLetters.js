const assertEqual = require("./assertEqual");

const countLetters = function (sentence) {
  let countObj = {};

  for (let character of sentence) {
    if (countObj[character]) {
      countObj[character] += 1;
    } else {
      countObj[character] = 1;
    }
  }
  return countObj;
};

//TEST CASE
let test1 = countLetters("aaabbbcccd");

assertEqual(test1["a"], 3);
assertEqual(test1["d"], 1);

module.exports = countLetters;

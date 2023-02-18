const assertEqual = require("./assertEqual");

//Counts letters of a sentence in an object
const countLetters = function (sentence) {
  let countObj = {};

  //Loops through the input sentence
  for (let character of sentence) {
    //checks if it is already in the object
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

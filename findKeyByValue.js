const assertEqual = require("./assertEqual");

const findKeyByValue = function (object, value) {
  //Cycle through the keys
  for (let key in object) {
    //checks if the value of the key matches the value given
    if (object[key] === value) {
      //return the name the the key(not its value)
      return key;
    }
  }
};

//TEST CASE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
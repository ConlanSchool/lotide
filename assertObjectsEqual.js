const eqObjects = function (object1, object2) {
  let length1 = Object.keys(object1).length;
  let length2 = Object.keys(object2).length;

  //checks equal length
  if (length1 !== length2) {
    return false;
  }

  //loops through the keys
  for (let key of Object.keys(object1)) {
    //if both objects have arrays at the current key, call the eqArrays function
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      eqArrays(object1[key], object2[key]);

      //checks if values are the same
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//Prints the result in a readable format
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(
      `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

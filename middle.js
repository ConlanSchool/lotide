const eqArrays = function (arr1, arr2) {
  //First compare length
  if (arr1.length !== arr2.length) {
    return false;
  }
  //Loop and compare each element
  for (let i = 0 ; i < arr1.length ; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}



//Prints the result message
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Equal`);
  } else {
    console.log(`🛑🛑🛑 Not equal`);
  }
};



//slices out the middle of an array
const middle = function (array) {
  let middleVal = 0;

  //checks if array is even
  if (array.length % 2 === 0) {
    middleVal = array.length / 2
    return array.slice(middleVal - 1, middleVal + 1)

  //Checks if array is odd
  } else if (array.length % 2 === 1) {
    middleVal = (array.length - 1) / 2
    return array.slice(middleVal, middleVal + 1)
  }
}



//TEST CODE
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
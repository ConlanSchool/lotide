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
};

//Prints the result message
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Equal`);
  } else {
    console.log(`🛑🛑🛑 Not equal`);
  }
};


const without = function (source, itemsToRemove) {
  let removedArray = [];
  if (!eqArrays(source, itemsToRemove)){
    for (let i = 0 ; i < source.length ; i++) {
      if (source[i] !== itemsToRemove[i]){
        removedArray.push(source[i]);
      }
    }
  }
  return removedArray;
};
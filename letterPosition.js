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



const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length ; i++) {
    
    //checks to see if an object is already assigned a value
    if (results[sentence[i]] !== undefined ) {

      //pushes a new value
      results[sentence[i]].push(i);

      //skips spaces
    } else if (sentence[i] !== ' ') {

      //creates new object and value array
      results[sentence[i]] = [i];
    } 
  }
  return results;
};



//TEST CASE
assertArraysEqual(letterPositions("hello hello").e, [1,7]);
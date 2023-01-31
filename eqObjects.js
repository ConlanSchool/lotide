const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



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




const eqObjects = function(object1, object2) {
  let length1 = Object.keys(object1).length
  let length2 = Object.keys(object2).length
  
  //checks equal length
  if (length1 !== length2){return false};

  //loops through the keys
  for (let key of Object.keys(object1)){
    
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



//TEST CASES
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);



const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
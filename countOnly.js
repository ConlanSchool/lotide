
const assertEqual = require('./assertEqual')




//takes in a collection of items and return counts for a specific subset of those items
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  //Loop through the input
  for (const item of allItems) {

    //checks if the item is in itemToCount
    if (itemsToCount[item]) {

      //if true add the results
      if (results[item]) {
        results[item] += 1;

      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};



//TEST CASE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
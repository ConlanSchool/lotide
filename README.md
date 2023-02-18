# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @conlanschool/lotide`

**Require it:**

`const _ = require('@conlanschool/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(assertArraysEqual)`: Assertion test for arrays
- `function2(assertEqual)`: Assertion test for values
- `function3(assertObjectsEqual)`: Assertion test for objects
- `function4(countLetters)`: Counts the character in a string
- `function5(countOnly)`: Counts only the specified value in an array
- `function6(eqArrays)`: Compares arrays to determine if equal
- `function7(eqObjects)`: Compares objects to determine if equal
- `function8(findKey)`: Finds a key from a callback function
- `function9(findKeyByValue)`: Finds a key from a given value
- `function10(flatten)`: Reduces nested arrays by a level
- `function11(head)`: Returns the first element of an array
- `function12(letterPositions)`: Creates an objects to record indes values of characters in a string
- `function13(map)`: Transforms an array based on the callback function
- `function14(middle)`: Returns the middle value of an array
- `function15(tail)`: Returns an array of every element in an array except the first 
- `function16(takeUntil)`: Returns an array of values until a condition is met
- `function17(without)`: Returns an array with selected items excluded

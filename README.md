# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jnasato/lotide`

**Require it:**

`const _ = require('@jnasato/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(...)`: returns a count of each letter in a given strings
* `countOnly`: returns a specific subset of items from a collection 
* `findKey(...)`: returns first key for which a callback returns a truthy value
* `findKeyByValue(...)`: returns the first key in an object with a given value
* `flatten(...)`: flattens nested arrays into one combined array
* `head(...)`: retrieves first element in array
* `letterPositions(...)`: returns all the index positions of letters in a string
* `map(...)`: returns a new array based on the results of a callback function
* `middle(...)`: returns the middle-most element(s) of an array
* `tail(...)`: retrieves every element of an array excluding the head
* `takeUntil(...)`: keeps collecting items from a given array until a callback returns a truthy value
* `without(...)`: returns subset of given array, removing unwanted elements

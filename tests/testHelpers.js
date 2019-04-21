import { compose, curry, map } from 'ramda';

/**
 * Returs a function that returns a random integer between min (inclusive) and max (inclusive)
 * @param { Number } min Minimum value
 * @param { Number } max Maximum value
 */
export const getRandomIntGenerator = (min, max) => () => {
  min = Math.ceil(min),
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * A function that returns a random integer between -(2^51 - 1) and (2^53 - 1)
 **/
export const getRandomInt = getRandomIntGenerator(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

/**
 * Returns a object containing a number
 * @param { Number } number
 */
export const generateObject = (value) => ({ value });

/**
 * A function that returns an object containing a random safe integer in the value field
 */
export const generateRandomIntObject = compose(generateObject, getRandomInt);

/**
 * Generates an array of a given length filled with undefined
 * @param { Number } length Length of the array
 */
export const generateArray = length => Array(length).fill(undefined);

/**
 * Generates an array of a given length filled with random safe integers
 */
export const generateArrayOfIntegers = compose(
  map(getRandomInt),
  generateArray
);

/**
 * Generates an array of objects of a given length where each object contains a random safe integer in the 'value'
 * field
 */
export const generateArrayOfRandomIntObjects = compose(
  map(generateRandomIntObject),
  generateArray
);

/**
 * Returns true if an array is sorted in ascending order
 * @param { any[] } array
 */
export const isSortedAsc = array => array.reduce((acc, curr, index, self) => typeof curr === 'object'
  ? false
  : index === self.length - 1
    ? acc
    : acc && (curr <= self[index + 1]), true);

/**
 * Returns true if an array is sorted in descending order
 * @param { any[] } array
 */
export const isSortedDesc = array => array.reduce((acc, curr, index, self) => typeof curr === 'object'
  ? false
  : index === self.length - 1
    ? acc
    : acc && (curr >= self[index + 1]), true);

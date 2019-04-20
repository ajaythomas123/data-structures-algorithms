import {
  getRandomIntGenerator, getRandomInt, generateObject, generateArray, generateArrayOfIntegers,
  generateArrayOfRandomIntObjects, generateRandomIntObject, isSortedAsc, isSortedDesc
} from './testHelpers';

const isBetweenBounds = (min, max, x) => x >= min && x <= max;
const min = -20, max = 20;

describe('Test Helpers', () => {
  it('generateRandomIntGenerator generates a function that returns a random integer between min and max', () => {
    const fn = getRandomIntGenerator(min, max),
      number = fn(),
      check = typeof fn === 'function'
        && isBetweenBounds(min, max, number)
        && Number.isSafeInteger(number);
    expect(check).toBe(true);
  });

  it('getRandomInt returns a random safe integer', () => {
    const number = getRandomInt();
    expect(Number.isSafeInteger(number)).toBe(true);
  });

  it('generateObject returns an object with a value', () => {
    const value = 4,
      object = generateObject(value),
      check = object.hasOwnProperty('value') && object.value === value;
    expect(check).toBe(true);
  });

  it('generateRandomIntObject returns an object containing a random safe integer in the value field', () => {
    const obj = generateRandomIntObject(),
      value = obj && obj.hasOwnProperty('value') && obj.value,
      check = typeof obj === 'object'
        && Number.isSafeInteger(value);
    expect(check).toBe(true);
  });

  it('generateArray generates an array of a given length filled with undefined', () => {
    const length = 10,
      array = generateArray(length),
      isArray = Array.isArray(array),
      allUndefined = isArray
        && array.reduce((acc, curr) => acc && (curr === undefined), true),
      check = isArray
        && array.length === length
        && allUndefined;
    expect(check).toBe(true);
  });

  it('generateArrayOfIntegers generates an array of safe integers', () => {
    const length = 10,
      array = generateArrayOfIntegers(length),
      isArray = Array.isArray(array),
      allSafeIntegers = isArray
        && array.reduce((acc, curr) => acc && Number.isSafeInteger(curr), true),
      check = isArray
        && array.length === length
        && allSafeIntegers;
    expect(check).toBe(true);
  });

  it('generateArrayOfRandomIntObjects generates an array of objects where each object contains a random safe integer',
    () => {
      const length = 10,
        array = generateArrayOfRandomIntObjects(length),
        isArray = Array.isArray(array),
        isValidObject = obj => obj
          && typeof obj === 'object'
          && obj.hasOwnProperty('value')
          && Number.isSafeInteger(obj.value),
        allValidObjects = array.reduce((acc, curr) => acc && isValidObject(curr), true),
        check = isArray
          && array.length === length
          && allValidObjects;
      expect(check).toBe(true);
    });

  it('isSortedAsc returns true for an array sorted in ascending order', () => {
    const array = [1, 2, 3, 4, 5];
    expect(isSortedAsc(array)).toBe(true);
  });

  it('isSortedAsc returns false for an unsorted array', () => {
    const array = [8, 6, 2, 8, 3, 4];
    expect(isSortedAsc(array)).toBe(false);
  });

  it('isSortedDesc returns true for an array sorted in descending order', () => {
    const array = [5, 4, 3, 2, 1];
    expect(isSortedDesc(array)).toBe(true);
  });

  it('isSortedDesc returns false for an unsorted array', () => {
    const array = [8, 6, 2, 8, 3];
    expect(isSortedDesc(array)).toBe(false);
  });
});


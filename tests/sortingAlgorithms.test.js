import { compose } from 'ramda';
import { insertionSort } from '../src/insertionSort';
import { selectionSort } from '../src/selectionSort';
import { mergeSort } from '../src/mergeSort';
import {
  isSortedAsc, isSortedDesc, generateArrayOfIntegers, generateArrayOfRandomIntObjects
} from './testHelpers';

/**
 * Comparator to sort in ascending order
 * @param { Number } a
 * @param { Number } b
 */
const comparatorAsc = (a, b) => a < b
  ? -1
  : a > b
    ? 1
    : 0;

/**
 * Comparator to sort in descending order
 * @param { Number } a
 * @param { Number } b
 */
const comparatorDesc = (a, b) => a < b
  ? 1
  : a > b
    ? -1
    : 0;

/**
 * Comparator to sort array of objects in ascending order
 * @param { Number } a
 * @param { Number } b
 */
const comparatorObjAsc = (a, b) => a.value < b.value
  ? -1
  : a.value > b.value
    ? 1
    : 0;

/**
 * Comparator to sort array of objects in descending order
 * @param { Number } a
 * @param { Number } b
 */
const comparatorObjDesc = (a, b) => a.value < b.value
  ? 1
  : a.value > b.value
    ? -1
    : 0;

const arrayOfIntegers = generateArrayOfIntegers(50),
  arrayOfObjects = generateArrayOfRandomIntObjects(50);


describe('Insertion Sort', () => {
  it('Sort array in ascending order', () => {
    const insertionSortAsc = insertionSort(null, null, comparatorAsc),
      isSorted = compose(isSortedAsc, insertionSortAsc);
    expect(isSorted(arrayOfIntegers)).toBe(true);
  });
  it('Sort array in descending order', () => {
    const insertionSortDesc = insertionSort(null, null, comparatorDesc),
      isSorted = compose(isSortedDesc, insertionSortDesc);
    expect(isSorted(arrayOfIntegers)).toBe(true);
  });
  it('Sort array of objects in ascending order', () => {
    const insertionSortAsc = insertionSort(null, null, comparatorObjAsc),
      isSorted = compose(isSortedAsc, insertionSortAsc);
    expect(isSorted(arrayOfObjects)).toBe(true);
  });
  it('Sort array of objects in descending order', () => {
    const insertionSortDesc = insertionSort(null, null, comparatorObjDesc),
      isSorted = compose(isSortedDesc, insertionSortDesc);
    expect(isSorted(arrayOfObjects)).toBe(true);
  });
});


describe('Selection Sort', () => {
  it('Sort array in ascending order', () => {
    const selectionSortAsc = selectionSort(null, null, comparatorAsc),
      isSorted = compose(isSortedAsc, selectionSortAsc);
    expect(isSorted(arrayOfIntegers)).toBe(true);
  });
  it('Sort array in descending order', () => {
    const selectionSortDesc = selectionSort(null, null, comparatorDesc),
      isSorted = compose(isSortedDesc, selectionSortDesc);
    expect(isSorted(arrayOfIntegers)).toBe(true);
  });
  it('Sort array of objects in ascending order', () => {
    const selectionSortAsc = selectionSort(null, null, comparatorObjAsc),
      isSorted = compose(isSortedAsc, selectionSortAsc);
    expect(isSorted(arrayOfObjects)).toBe(true);
  });
  it('Sort array of objects in descending order', () => {
    const selectionSortDesc = selectionSort(null, null, comparatorObjDesc),
      isSorted = compose(isSortedDesc, selectionSortDesc);
    expect(isSorted(arrayOfObjects)).toBe(true);
  });
});

/* describe('Merge Sort', () => {
  it('Sort array in ascending order', () => {

  });
  it('Sort array in descending order', () => {

  });
  it('Sort array of objects in ascending order', () => {

  });
  it('Sort array of objects in descending order', () => {

  });
}); */

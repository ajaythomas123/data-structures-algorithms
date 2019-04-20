import { curry } from "ramda";

/**
 * Sorts an array of numbers using insertion sort
 * @param { Number[] } arr
 * @param { Function } outerLoopCb
 * @param { Function } innerLoopCb
 * @param { Function } comparator
 */
export const insertionSort = curry(
  (
    outerLoopCb,
    innerLoopCb,
    arr,
    comparator = (a, b) => (a > b ? 1 : a < b ? -1 : 0)
  ) => {
    for (let j = 1; j < arr.length; j++) {
      const key = arr[j];
      for (let i = j - 1; i >= 0 && comparator(arr[i], key) > 0; i--) {
        arr[i + 1] = arr[i];
        arr[i] = key;
        innerLoopCb([...arr]);
      }
      outerLoopCb([...arr]);
    }
    return arr;
  }
);


import { curry } from "ramda";

/**
 * Sorts an array of numbers using selection sort
 * @param { Number[] } arr
 * @param { Function } outerLoopCb
 * @param { Function } innerLoopCb
 * @param { Function } comparator
 */
export const selectionSort = curry(
  (
    outerLoopCb,
    innerLoopCb,
    arr,
    comparator = (a, b) => (a > b ? 1 : a < b ? -1 : 0)
  ) => {
    for (let i = 0; i < arr.length - 1; i++) {
      let keyPos = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (comparator(arr[keyPos], arr[j]) > 0) {
            keyPos = j;
        }
        innerLoopCb && innerLoopCb(arr, j, keyPos);
      }
      let temp = arr[i];
      arr[i] = arr[keyPos];
      arr[keyPos] = temp;
      outerLoopCb && outerLoopCb(arr, i, keyPos);
    }
    return arr;
  }
);


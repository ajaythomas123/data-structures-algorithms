import { curry } from "ramda";

/**
 * Merges two small arrays in to a larger sorted array
 * @param { Function } splitArrayCb 
 * @param { Function } compareArrayCb 
 * @param { Function } leftArrayCb 
 * @param { Function } rightArrayCb 
 * @param { Number[] } arr 
 * @param { Number } p 
 * @param { Number } q 
 * @param { Number } r 
 */
const merge = curry(
  (splitArrayCb,
    compareArrayCb,
    leftArrayCb,
    rightArrayCb,
    comparator,
    arr,
    p,
    q,
    r
  ) => {
    const lenL = q - p + 1,
      lenR = r - q,
      L = [...arr.slice(p, q + 1)],
      R = [...arr.slice(q + 1, r + 1)];
    splitArrayCb && splitArrayCb(arr, p, q, r);
    for (let i = 0, j = 0, k = p; k <= r; k++) {
      compareArrayCb && compareArrayCb(L, R, arr, i, j, k)
      if (j >= lenR
        || (i < lenL && comparator(R[j], L[i]) > 0)) {
        leftArrayCb && leftArrayCb(L, R, arr, i, j, k);
        arr[k] = L[i];
        ++i;
      } else {
        rightArrayCb && rightArrayCb(L, R, arr, i, j, k);
        arr[k] = R[j];
        ++j;
      }
    }
    return arr;
  }
);

/**
 * Sorts an array of numbers using merge sort
 * @param { Function } splitArrayCb 
 * @param { Function } compareArrayCb 
 * @param { Function } leftArrayCb 
 * @param { Function } rightArrayCb 
 * @param { Number[] } arr 
 * @param { Number } p 
 * @param { Number } r 
 */
const mergeSort = curry(
  (splitArrayCb,
    compareArrayCb,
    leftArrayCb,
    rightArrayCb,
    comparator,
    arr,
    p,
    r
  ) => {
    const q = Math.floor((p + r) / 2);
    let A = [...arr];
    comparator = comparator || ((a, b) => (a > b ? 1 : a < b ? -1 : 0));
    if (p < r) {
      A = mergeSort(splitArrayCb, compareArrayCb, leftArrayCb, rightArrayCb, comparator, A, p, q);
      A = mergeSort(splitArrayCb, compareArrayCb, leftArrayCb, rightArrayCb, comparator, A, q + 1, r);
      A = merge(splitArrayCb, compareArrayCb, leftArrayCb, rightArrayCb, comparator, A, p, q, r);
    }
    return A;
  }
);

module.exports = { mergeSort };
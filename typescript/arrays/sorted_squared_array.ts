/**
 * Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.
 */

function sortedSquaredArray(array: number[]) {
    // Write your code here.
    let newArray: number[] = [];

    for (const ar of array) {
        newArray.push(ar * ar);
    }
    newArray = newArray.sort(function (a, b) {
        return a - b;
    });
    return newArray;
}

sortedSquaredArray([10, 5, 0, 10, 5]);

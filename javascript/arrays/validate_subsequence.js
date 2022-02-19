"use strict";
/**
 * Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
 *
 * A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4]. Note that a single number in an array and the array itself are both valid subsequences of the array.
 *
 */
function isValidSubsequence(array, sequence) {
    // Write your code here.
    let resultArray = [];
    let result = true;
    if (sequence.length > array.length) {
        return false;
    }
    else {
        for (const ar of array) {
            if (sequence.includes(ar)) {
                resultArray.push(ar);
            }
        }
        if (resultArray.length < sequence.length) {
            return (result = false);
        }
        else {
            let seqString = sequence.join("");
            let rArrString = resultArray.join("");
            var res = isSubstring(seqString, rArrString);
            if (res === -1)
                return result = false;
        }
        return (result = true);
    }
}
function isSubstring(s1, s2) {
    var M = s1.length;
    var N = s2.length;
    /* A loop to slide pat[] one by one */
    for (var i = 0; i <= N - M; i++) {
        var j;
        /* For current index i, check for
pattern match */
        for (j = 0; j < M; j++)
            if (s2[i + j] != s1[j])
                break;
        if (j == M)
            return i;
    }
    return -1;
}
isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 25, 22, 6, -1, 8, 10]);

"use strict";
/**
 * Write a function that takes in a string and returns its longest substring without duplicate characters.
 *
 * You can assume that there will only be one longest substring without duplication.
 */
function longestSubstringWithoutDuplication(string) {
    // Write your code here.
    const lastSeen = {};
    let longest = [0, 1];
    let start = 0;
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char in lastSeen) {
            start = Math.max(start, lastSeen[char] + 1);
        }
        if (longest[1] - longest[0] < i + 1 - start) {
            longest = [start, i + 1];
        }
        lastSeen[char] = i;
    }
    console.log(string.slice(longest[0], longest[1]));
    return string.slice(longest[0], longest[1]);
}
longestSubstringWithoutDuplication("clementisacap");
longestSubstringWithoutDuplication("englishlanguage");

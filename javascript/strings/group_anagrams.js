"use strict";
/**
 * Write a function that takes in array of strings and groups anagrams together.
 *
 * Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, 'cineman' and 'iceman' are anagrams; similarly, 'foo' and 'of0' are anagrams.
 *
 * Your function should return a list of anagram groups in no particular order.
 */
function groupAnagrams(words) {
    // Write your code here.
    const anagrams = {};
    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        if (sortedWord in anagrams) {
            anagrams[sortedWord].push(word);
        }
        else {
            anagrams[sortedWord] = [word];
        }
    }
    return Object.values(anagrams);
}
groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]);
